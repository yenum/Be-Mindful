const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");
const User = require("../models/userModel");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const noteObj = {
    notes: req.body.notes,
    user: req.user.id,
  };
  const note = new Note(noteObj);
  await note.save();
  res.json(note);
});

const updateNote = asyncHandler(async (req, res) => {
  const noteObj = {
    notes: req.body.notes,
  };
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the note user
  if (note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, noteObj, {
    new: true,
  });
  res.json(updatedNote);
});

const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Recipe not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the note user
  if (note.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await note.remove();

  res.json({ id: req.params.id });
});

module.exports = { getNotes, createNote, updateNote, deleteNote };
