import React from "react";
import "./external.css";


function ClassCom()
{
    return (
            <>
                <div className="fcompo cCompo">
                  <h1>This is created using class Component</h1>
                  <p className="sec">This is done using external CSS</p>
                  <p className="sec">This is done using inline CSS</p>
                </div>
           </>
         );
  }


export default ClassCom;