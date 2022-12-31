import React from "react";
import './Admdet.css';
import AdmQuery from "./AdmQuery";

function Admdet(props){
    return(
<div>
  {
    props.item.map(
    Admission=>(
      <AdmQuery
        class={Admission.class}
        amount={Admission.amount}
        student={Admission.student}
        age={Admission.age}
        parent={Admission.parent}/>
      )
    )
  }
    
</div>
    );
}
export default Admdet;