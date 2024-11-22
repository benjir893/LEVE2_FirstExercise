
import { Studentmodel } from "../student.model";
import { Student } from "./student.interface";

const createStudentIndb=async(student:Student)=>{
   const result = await Studentmodel.create(student);
   return result;
}
const getStudentFromdb=async()=>{
    const result = await Studentmodel.find();
    return result;
}
const getSingleStudent=async(id:string)=>{
    const result =await Studentmodel.findOne({id});
    return result
}

//this object will be called in student controller
export const StudentServices ={
    createStudentIndb,
    getStudentFromdb,
    getSingleStudent
}