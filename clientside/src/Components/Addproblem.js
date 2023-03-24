import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

function Addproblem() {

  const [name, setName] = useState("");
  const [ans, setAns] = useState("");
  const [statement, setStatement] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [hint, setHint] = useState("");
  let solvers=[];

  const navigate = useNavigate();



  const addproblem = async () => {
    console.log(type ,ans,hint,statement,option1,level );
    
      if(!name||!type||!ans||!hint||!level||!statement||!option1||!option2||!option3||!option4)
      {
        alert("fill all fields");
        return;
      }
    let result = await fetch("http://localhost:5800/", {
      method: 'post',
      body: JSON.stringify({solvers, name, type, level, ans, statement ,hint,option1,option2,option3,option4}),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);

    navigate('/');


  }

  return (
   
   
    <div>
    <div className="addp-container">
      <div className="inner-container">
        
          <label id="9000">Problem name: <input  className="type-and-name" type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label id="8000" >Type Of Problem:<select id="cars" onChange={(e) => setType(e.target.value)}>
            <option value={"puzzels"}  >puzzels</option>
            <option value={"jee"}>jee</option>
            <option value={"computer"}>computer</option>
          </select></label>
        

        <label className="statement-area">Statement: <textarea className="problem-text"  placeholder="Problem Statement !" 
      type="text" value={statement} onChange={(e) => setStatement(e.target.value)}></textarea></label>
      
        <div className="options">
      <label>Option 1: <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)}></input></label>
      <label >Option 2: <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)}></input></label>
      <label >Option 3: <input type="text" value={option3} onChange={(e) => setOption3(e.target.value)}></input></label>
      <label >Option 4: <input type="text" value={option4} onChange={(e) => setOption4(e.target.value)}></input></label>
      <label >Answer : <input type="text" value={ans} onChange={(e) => setAns(e.target.value)}></input></label>
      
      
      </div>
      <label id="8000" >Level Of Problem:<select id="cars" onChange={(e) => setLevel(e.target.value)}>
            <option value={"Easy"} >Easy</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Hard"} >Hard</option>
          </select></label>
      <label className="statement-area">Hint :  <textarea className="problem-text"  placeholder="Problem Statement !" 
      type="text" value={hint} onChange={(e) => setHint(e.target.value)}></textarea></label>
     
      </div>
      
    </div>
    <p>Before Submission make sure to fill all the fields<br></br>
    And Rewieve once...</p>
    <p>Thanks for Submission &#128525;... <Button onClick={addproblem} id="saveButton" variant="primary">Submit</Button>{' '}</p>
    <h3>Happy Learning&#128525;...</h3>
    </div>

  );
}

export default Addproblem;