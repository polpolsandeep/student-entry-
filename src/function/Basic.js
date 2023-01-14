import React from "react";
import './Basic.css';
import GenBasic from "./GenBasic";

const Basic=(props)=>{
    const saveAdmissionDataHandler=(enteredAdmissionData)=>{
        const AdmissionData ={
           ...enteredAdmissionData,
           id:Math.random().toString()
        }
        props.onAddAdmissionData(AdmissionData)
        //console.log(AdmissionData);      //Responsible for data Transfer
};
    return(
        <div>
         <GenBasic 
         onsaveAdmissionData={saveAdmissionDataHandler}/>
        </div>
    );
}
export default Basic;