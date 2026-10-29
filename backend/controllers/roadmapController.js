import Roadmap from "../models/Roadmap.js";

const createSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export async function createRoadmap(req, res) {
  const roadmap = await Roadmap.create({
    ...req.body,
    slug: req.body.slug?.trim() || createSlug(req.body.title || ""),
  });
  res.status(201).json(roadmap);
}

export async function getRoadmaps(req, res) {
  const filter = req.query.status ? { status: req.query.status } : {};
  const roadmaps = await Roadmap.find(filter);
  res.json(roadmaps);
}

export async function getRoadmapBySlug(req, res) {
  const roadmap = await Roadmap.findOne({ slug: req.params.slug });
  if (!roadmap) return res.status(404).json({ error: "Roadmap not found" });
  res.json(roadmap);
}

export async function getRoadmapById(req, res) {
  const roadmap = await Roadmap.findById(req.params.id);
  if (!roadmap) return res.status(404).json({ error: "Roadmap not found" });
  res.json(roadmap);
}

export async function updateRoadmap(req, res) {
  const roadmap = await Roadmap.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!roadmap) return res.status(404).json({ error: "Roadmap not found" });
  res.json(roadmap);
}

export async function deleteRoadmap(req, res) {
  const roadmap = await Roadmap.findByIdAndDelete(req.params.id);
  if (!roadmap) return res.status(404).json({ error: "Roadmap not found" });
  res.json({ message: "Roadmap deleted" });
}
