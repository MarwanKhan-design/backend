import _ from "lodash";
import Student from "../models/student.js";

export const createStudent = async (req, res) => {
  let student = await new Student(req.body);

  student.save();
  res.json(student);
};

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const getStudent = async (req, res) => {
  const students = await Student.findById(req.params.id);
  res.json(students);
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByIdAndRemove(id);

  if (!student)
    return res.send("The genre with the given ID is Already Deleted");

  res.send(student);
};
