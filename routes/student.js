import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudent,
  getStudents,
} from "../controllers/student.js";
import { isAdmin } from "../middleware/admin.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.delete("/:id", auth, deleteStudent);

export default router;
