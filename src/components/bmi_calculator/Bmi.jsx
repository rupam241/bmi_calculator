import React from "react";
import "./bmi.css";
import { useRef,useState } from "react";
function Bmi() {

  const inputRef=useRef(null);
  const secondInputRef=useRef(null)
  const[res,setRes]=useState(null)
  const[bmi,setBmi]=useState(false)
  
  const handleSubmit=()=>{
    const weight=parseFloat(inputRef.current.value);
    const height=parseFloat(secondInputRef.current.value);
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setRes(bmi.toFixed(2));
      setBmi(true)
     
    } else {
      setRes("Invalid input");
      setBmi(false)
    }

    
  }
  const handleReload=()=>{
    setRes(null);
    inputRef.current.value="";
    secondInputRef.current.value=""




  }
  return (
    <>
      <div className="container">
        <div className="main">
          <h3>BMI Calculator</h3>

          <div className="input_field">
            <div className="inputWeight">
              <label>Weight(kg)</label>
              <input type="text" ref={inputRef} placeholder="Enter your weight value" />
            </div>

            <div className="inputHeight">
              <label>Height(cm)</label>
              <input type="text" ref={secondInputRef} placeholder="Enter your height value" />
            </div>
          </div>
          <div className="footer">
            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button className="reload" onClick={handleReload}>
              Reload

            </button>
            {bmi && ( <h2>Your Bmi is:{res && !isNaN(res) ? `${res} kg/m²` : res} </h2>)}
           

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Bmi;
