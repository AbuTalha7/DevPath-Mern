import { Router } from "express";
import {
  createRoadmap,
  deleteRoadmap,
  getRoadmapById,
  getRoadmapBySlug,
  getRoadmaps,
  updateRoadmap,
} from "../controllers/roadmapController.js";

const router = Router();

router.post("/", createRoadmap);
router.get("/", getRoadmaps);
router.get("/slug/:slug", getRoadmapBySlug);
router.get("/:id", getRoadmapById);
router.put("/:id", updateRoadmap);
router.delete("/:id", deleteRoadmap);

export default router;
