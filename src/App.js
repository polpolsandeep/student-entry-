import React,{useState} from 'react';
import './App.css';
import Admdet from './Component/Admdet';
import Basic from './function/Basic';
let DUMMY_SCHOOL=
[
  {
    id:'s1',
    class:"UKG",
    amount:2000,
    student:"Koushal Kumar",
    age:"4 Year",
    parent:"Vineet Kumar"
  },
  {
    id:'s2',
    class:"LKG",
    amount:3000,
    student:"Komal Kumari",
    age:"5 Year",
    parent:"Vijay Kumar"
  },
  {
    id:'s3',
    class:"NURS",
    amount:5000,
    student:"Shabnam Khatun",
    age:"6 Year",
    parent:"Israr Ansari"
  },
  {
    id:'s4',
    class:"STD I",
    amount:7000,
    student:"Khushi Singh",
    age:"7 Year",
    parent:"Mahendera Kumar"
  },
]
function App(){
   const [school,setSchool]=useState(DUMMY_SCHOOL)
   const AddAdmissionDataHandler=(Admission)=>{
     const updatedAdmission=[Admission,...school]
     setSchool(updatedAdmission);
   };
  return (
    <div className='container'>
      <h1>Hello World</h1>
      <Admdet item={school}/>
      <Basic onAddAdmissionData={AddAdmissionDataHandler}/>
    </div>
  );
}

export default App;
