import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const addVisitor = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/visitors", {
          method: "POST",
        });

        const data = await response.json();

        if (data.success) {
          setCount(data.count);
        }
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    };

    addVisitor();
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-neutral-500">
      <Eye size={15} strokeWidth={1.8} />

      <span className="text-[12px] tabular-nums">
        {count.toLocaleString()}
      </span>
    </div>
  );
};

export default VisitorCounter;