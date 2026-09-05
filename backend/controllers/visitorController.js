import Visitor from "../models/Visitor.js";

export const getVisitors = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = await Visitor.create({
        count: 0,
      });
    }

    res.json({
      success: true,
      count: visitor.count,
    });
  } catch (error) {
    console.error("Visitor error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to get visitor count",
    });
  }
};


export const addVisitor = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = await Visitor.create({
        count: 1,
      });
    } else {
      visitor.count += 1;
      await visitor.save();
    }

    res.json({
      success: true,
      count: visitor.count,
    });
  } catch (error) {
    console.error("Visitor increment error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update visitor count",
    });
  }
};