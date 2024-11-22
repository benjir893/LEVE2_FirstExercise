import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async(req:Request, res:Response)=>{

 try {
    const {student: studentData} = req.body;
    //will call service function to send data to database
    const result = await StudentServices.createStudentIndb(studentData)

    //send response
    res.status(200).json({
        success:true,
        message:'student record created successfully',
        data:result
    })
 } catch (error) {
    console.error(error);
 }
}
const getAllStudents=async(req:Request, res:Response)=>{
    try {
        const result = await StudentServices.getStudentFromdb();

        res.status(200).json({
            success:true,
            message:'student record fetch successfully',
            data:result
        })
    } catch (error) {
        console.error(error);
    }
}
const getStudent=async(req:Request, res:Response)=>{
    try {
        const {studentId}= req.body;
    const result = await StudentServices.getSingleStudent(studentId)
    res.status(200).json({
        success:true,
        message:'a single data fetched from database',
        data:result
    })
    } catch (error) {
        console.error(error);
    }

}

export const StudentController = {
    createStudent,
    getAllStudents,
    getStudent
}