import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {           

  const [ value, setValue ] = useState("");
  const [ OPERATIONS, setOperations ] = useState(['%','-','+','=','.','/','*','C','<=','00']);

  const EDIT = () => {
    setValue(value.slice(0,-1))
  }

  const EQUAL = () => {
      let copyVal = value;
    if(OPERATIONS.includes(value[value.length-1])){
        copyVal = value.slice(0,-1)
    }
    copyVal = eval(copyVal)
    if(copyVal) {
        return setValue(copyVal)
    }else {
        return setValue('')
    }
  }

  const handleClick = (button) => {
      if(button==='C') {
          return setValue('')
      }else if(button==='=') {
          return EQUAL()
      }else if(button==='<=') {
        return EDIT()
      }else if(!value && (button==='0' || button==='00')){
        return value
      }else if(value && (button==='0' || button==='00') && OPERATIONS.includes(value[value.length-1])) {
          return value
      }else if((!value && !OPERATIONS.includes(button)) || (value && !OPERATIONS.includes(button))) {
          return setValue(value+button)
      }else if(value && OPERATIONS.includes(button) && !OPERATIONS.includes(value[value.length-1])) {
        return setValue(value+button)
      }else if(OPERATIONS.includes(button) && OPERATIONS.includes(value[value.length-1])) {
          let copyVal = value.slice(0,-1) + button 
          return setValue(copyVal)
      }else{
          return value
      }
  }

  return (
    <>
      <h2 style={{ marginBottom:'0px', fontSize:'2em', textDecoration:'underline' }}>CALCULATOR!</h2>
      <h3 className="dataContainer">
        {(value && !OPERATIONS.includes(value)) ? value : "00"}
      </h3>
      <hr style={{ height:'0.03in', width:'0.12in', backgroundColor:'black' }}></hr>
      <div className="container">
        <div className="box col" onClick={()=>handleClick('C')}>C</div>
        <div className="box col" onClick={()=>handleClick('%')}>%</div>
        <div className="box col" onClick={()=>handleClick('<=')}>{"<="}</div>
        <div className="box col" onClick={()=>handleClick('/')}>/</div>
        <div className="box" onClick={()=>handleClick('7')}>7</div>
        <div className="box" onClick={()=>handleClick('8')}>8</div>
        <div className="box" onClick={()=>handleClick('9')}>9</div>
        <div className="box col" onClick={()=>handleClick('*')}>X</div>
        <div className="box" onClick={()=>handleClick('4')}>4</div>
        <div className="box" onClick={()=>handleClick('5')}>5</div>
        <div className="box" onClick={()=>handleClick('6')}>6</div>
        <div className="box col" onClick={()=>handleClick('-')}>-</div>
        <div className="box" onClick={()=>handleClick('1')}>1</div>
        <div className="box" onClick={()=>handleClick('2')}>2</div>
        <div className="box" onClick={()=>handleClick('3')}>3</div>
        <div className="box col" onClick={()=>handleClick('+')}>+</div>
        <div className="box" onClick={()=>handleClick('0')}>0</div>
        <div className="box" onClick={()=>handleClick('00')}>00</div>
        <div className="box" onClick={()=>handleClick('.')}>.</div>
        <div className="box col" onClick={()=>handleClick('=')}>=</div>
      </div>
    </>
  );
};

export default Calculator;
