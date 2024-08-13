import { Router } from "express";
import chordController from "./controllers/chordController";

const router = Router();

// Chord Routes
// Get all Chords
router.get("/chord", chordController.select);
// Get single Chord
router.get("/chord/:id", chordController.selectById);
// Save Chord progression

// User Routes
// Get User by ID
// Create User
// Update Username

export default router;
