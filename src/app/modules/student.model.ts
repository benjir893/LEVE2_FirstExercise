// here schema and model both together
import { Schema, model } from 'mongoose';
import { Guardian, Name, Student } from './student/student.interface';

// 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     avatar: String
//   });
// NOTE: In Schema data type startw with uppercase like: String, Data etc..
const nameSchema = new Schema<Name>({
    fname:{type: String, required:true},
    mname:{type: String},
    lname:{type: String, required:true}
})

const guardianSchema = new Schema<Guardian>({
    name:{type:String, required:true},
    relation: ["father", "mother", "elder brother", "elder sister"],
    profession:{type:String, required:true},
    contact:{type:String, required:true},
    caddress:{type:String, required:true},
    paddress:{type:String},
})


const studentSchema = new Schema<Student>({
    id:{type: String},
    name:nameSchema,
    gender:['male', 'female'],
    email: {type: String, required:true},
    contact:{type: String, required:true},
    DOB:{type: String, required:true},
    econtact:{type: String, required:true},
    bgroup:["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    caddress:{type:String, required:true},
    paddress:{type:String},
    legalGuardian:guardianSchema,
    profileImage:{type:String},
    isActive:['Active','Blocked']

})

// 3. Create a Model.
// const User = model<IUser>('User', userSchema);
export const Studentmodel = model<Student>('Student', studentSchema);