import React, { useState } from "react";
import './GenBasic.css';

const GenBasic=(props)=>{
    const[enteredClass,setEnteredClass]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredStudent,setEnteredStudent]=useState('');
    const[enteredAge,setEnteredAge]=useState('');
    const[enteredParent,setEnteredParent]=useState('');

    

    const classChangeHandler=(event)=>{
        setEnteredClass(event.target.value);
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const studentChangeHandler=(event)=>{
        setEnteredStudent(event.target.value);
    };
    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    };
    const parentChangeHandler=(event)=>{
        setEnteredParent(event.target.value);
    };


    const submitHandler=(event)=>{
        event.preventDefault();
    
      
    const AdmissionData={
        class:enteredClass,
        amount:enteredAmount,
        student:enteredStudent,
        age:enteredAge,
        parent:enteredParent
    }
    //console.log(AdmissionData);


    props.onsaveAdmissionData(AdmissionData); //Responsible for data tranfser

    

    setEnteredClass('');
    setEnteredAmount('');
    setEnteredStudent('');
    setEnteredAge('');
    setEnteredParent('');
};

    return(
<form onSubmit={submitHandler}>
    <div className="form">
        <div className="class">
            <label>Class</label>
            <input type="number" value={enteredClass} onChange={classChangeHandler}/>
        </div>
        <div className="amount">
            <label>Amount</label>
            <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="student">
            <label>Student</label>
            <input type="text" value={enteredStudent} onChange={studentChangeHandler}/>
        </div>
        <div>
            <label>Age</label>
            <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
        </div>
        <div>
            <label>Parent</label>
            <input type="text" value={enteredParent} onChange={parentChangeHandler}/>
        </div>
        <div className="button">
            <button type="submit">ADD DATA</button>
        </div>
    </div>
</form>
    );
}
export default GenBasic; 