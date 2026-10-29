import mongoose from "mongoose";

const roadmapSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, enum: ["role", "skill", "practice"] },
    status: { type: String, enum: ["published", "draft"], default: "published" },
  },
  { timestamps: true }
);

export default mongoose.model("Roadmap", roadmapSchema);
