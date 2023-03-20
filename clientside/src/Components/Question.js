import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";



const Question=()=>{
    const [question,setQuestion]=useState([]);
    const params =useParams();
    useEffect(()=>{
        
        getQuestions();
    },[]);
    
    const getQuestions= async () => {
        let result = await fetch(`http://localhost:5800/${params.type}`);
        result = await result.json();
        setQuestion(result);
        console.log(params);
        console.log(result);

    };
    return (
        
      <div>
       
      <Table striped bordered hover>
        <thead>
            <tr>
                <th width="5%">#</th>
                <th>Name</th>
                <th width="5%">Level</th>
                <th width="5%">status</th>
                <th width="5%">Mark</th>
                <th width="5%">Mark</th>
            </tr>
        </thead>
      </Table>
     

      {
          question.length>0?question.map((item, index) =>
           
            <Table striped bordered hover>
      
      <tbody>
      <tr key={index}>
            <td width="5%">{index+1}</td>
            <td ><Link to={"/problem/"+item._id}>{item.name}</Link></td>
            <td  width="5%">{item.level}</td>
           <td  width="5%">Name</td>
           <td  width="5%">Name</td>
           <td  width="5%">Name</td>
            
           
        </tr>
      </tbody>
        
        
     </Table>
          )
          :
      <h1>no product found</h1>
      }
      
  </div>

      
    )
}

export default Question;
