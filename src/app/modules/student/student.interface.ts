// import { Schema, model, connect } from 'mongoose';

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type Name ={
    fname:string;
    mname:string;
    lname:string;
}
export type Guardian = {
    name:Name,
    relation:'father'|'mother'|'elder brother'|'elder sister';
    profession:string;
    contact:string;
    caddress:string;
    paddress:string;
}
export type Student = {
    id:string;
    name: Name;
    gender:'male'|'female'
    email: string;
    contact:string;
    DOB:string,
    econtact?:string;
    bgroup?:BloodGroup;
    caddress:string;
    paddress:string;
    legalGuardian:Guardian;
    profileImage?:string;
    isActive:'Active'|'Blocked'


}