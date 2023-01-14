import React from "react";
import './AdmQuery.css';

const AdmQuery=(props)=>{
    
    return(
        <form>
        <div className="school">
            <div className="admission_query">
              <h3>{props.class}</h3>
              <div className="admission_amount">{props.amount}</div>
              <div className="admission_student">{props.student}</div>
              <div>{props.age}</div>
              <div className="admission_parent">{props.parent}</div>
            </div>
        </div>
        </form>
    );
}
export default AdmQuery;