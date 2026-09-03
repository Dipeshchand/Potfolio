import { useEffect, useMemo, useState } from "react";

const GITHUB_USERNAME = "Dipeshchand";

const Activity = () => {
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub activity");
        }

        const data = await response.json();

        setContributions(data.contributions || []);

        const contributionTotal = Object.values(data.total || {}).reduce(
          (sum, value) => sum + value,
          0
        );

        setTotal(contributionTotal);
      } catch (error) {
        console.error("GitHub activity error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  /*
   * Create 7 rows:
   *
   * 0 = Monday
   * 1 = Tuesday
   * 2 = Wednesday
   * 3 = Thursday
   * 4 = Friday
   * 5 = Saturday
   * 6 = Sunday
   *
   * Then group the contributions into weeks.
   */
  const weeks = useMemo(() => {
    if (!contributions.length) return [];

    const sorted = [...contributions].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    const firstDate = new Date(sorted[0].date);

    // Move back to Monday
    const firstMonday = new Date(firstDate);
    const day = firstMonday.getDay();

    const mondayOffset = day === 0 ? -6 : 1 - day;

    firstMonday.setDate(firstMonday.getDate() + mondayOffset);

    const contributionMap = new Map(
      sorted.map((item) => [item.date, item])
    );

    const result = [];

    let currentMonday = new Date(firstMonday);

    while (currentMonday <= new Date(sorted[sorted.length - 1].date)) {
      const week = [];

      for (let row = 0; row < 7; row++) {
        const currentDate = new Date(currentMonday);

        currentDate.setDate(currentMonday.getDate() + row);

        const dateKey = currentDate.toISOString().split("T")[0];

        const contribution = contributionMap.get(dateKey);

        week.push(
          contribution || {
            date: dateKey,
            count: 0,
            level: 0,
          }
        );
      }

      result.push(week);

      currentMonday.setDate(currentMonday.getDate() + 7);
    }

    return result;
  }, [contributions]);

  /*
   * Month labels
   */
  const monthLabels = useMemo(() => {
    if (!contributions.length) return [];

    const labels = [];

    weeks.forEach((week, index) => {
      const firstDay = new Date(week[0].date);

      if (firstDay.getDate() <= 7 || index === 0) {
        labels.push({
          index,
          label: firstDay.toLocaleString("en-US", {
            month: "short",
          }),
        });
      }
    });

    return labels;
  }, [weeks]);

  /*
   * Colors matching GitHub-style contribution levels.
   */
  const getLevelClass = (level) => {
    const levels = {
      0: "bg-neutral-50 border-neutral-200",
      1: "bg-neutral-200 border-neutral-200",
      2: "bg-neutral-300 border-neutral-300",
      3: "bg-neutral-400 border-neutral-400",
      4: "bg-neutral-600 border-neutral-600",
    };

    return levels[level] || levels[0];
  };

  return (
    <section className="border-t border-neutral-200">

      {/* Section title */}
      <div className="px-4 py-2">
        <h2 className="text-[20px] font-normal text-neutral-900">
          Activity
        </h2>
      </div>

      {/* Graph */}
      <div className="border-t border-neutral-200 px-4 py-5">

        {loading ? (
          <div className="flex h-[120px] items-center justify-center text-[12px] text-neutral-400">
            Loading GitHub activity...
          </div>
        ) : (
          <div className="overflow-x-auto">

            <div className="min-w-[650px]">

              {/* Month labels */}
              <div className="relative ml-8 mb-2 h-4 text-[11px] text-neutral-500">

                {monthLabels.map((month) => (
                  <span
                    key={`${month.label}-${month.index}`}
                    className="absolute"
                    style={{
                      left: `${month.index * 14}px`,
                    }}
                  >
                    {month.label}
                  </span>
                ))}

              </div>

              {/* Graph */}
              <div className="flex gap-2">

                {/* Days */}
                <div className="flex w-6 flex-col justify-between py-[1px] text-[10px] text-neutral-400">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Contribution columns */}
                <div className="flex gap-[3px]">

                  {weeks.map((week, weekIndex) => (
                    <div
                      key={weekIndex}
                      className="flex flex-col gap-[3px]"
                    >

                      {week.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.count} contribution${
                            day.count === 1 ? "" : "s"
                          } on ${day.date}`}
                          className={`
                            h-[11px]
                            w-[11px]
                            rounded-[2px]
                            border
                            ${getLevelClass(day.level)}
                            transition-transform
                            duration-150
                            hover:scale-125
                          `}
                        />
                      ))}

                    </div>
                  ))}

                </div>

              </div>

              {/* Footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500">

                <span>
                  {total} contributions in the last year
                </span>

                <div className="flex items-center gap-1">

                  <span>Less</span>

                  <span className="h-[10px] w-[10px] rounded-[2px] border border-neutral-200 bg-neutral-50" />

                  <span className="h-[10px] w-[10px] rounded-[2px] bg-neutral-200" />

                  <span className="h-[10px] w-[10px] rounded-[2px] bg-neutral-300" />

                  <span className="h-[10px] w-[10px] rounded-[2px] bg-neutral-400" />

                  <span className="h-[10px] w-[10px] rounded-[2px] bg-neutral-600" />

                  <span>More</span>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default Activity;