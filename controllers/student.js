import _ from "lodash";
import Student from "../models/student.js";

export const createStudent = async (req, res) => {
  const students = await Student.find();
  const isUnique = false;

  students.forEach((student) => {
    if (student.student.name === req.body.student.name) {
      isUnique = true;
    }
  });

  if (isUnique === false) {
    let student = await new Student(req.body);

    student.save();
    return res.json(student);
  }
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
