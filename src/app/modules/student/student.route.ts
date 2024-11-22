import express from 'express';
import { StudentController } from './student.controller';
const route = express.Router();

//calling controller function
route.post('/create-student', StudentController.createStudent);
route.get('/', StudentController.getAllStudents);
route.get('/:studentId', StudentController.getStudent)

export const StudentRoute = route;