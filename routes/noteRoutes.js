const express = require("express");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createNote); // Create a note
router.get("/", authMiddleware, getNotes); // Get all notes
router.get("/:id", authMiddleware, getNoteById); // Get a specific note
router.put("/:id", authMiddleware, updateNote); // Update a note
router.delete("/:id", authMiddleware, deleteNote); // Delete a note

module.exports = router;
