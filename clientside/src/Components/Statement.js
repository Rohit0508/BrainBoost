import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const Statement=()=>{
    const [submitteddata, setData] = React.useState("");
    const [content,setContent]=useState([]);

    const params=useParams();
    useEffect(()=>{
        getProblemcontent();

    },[]);

    const getProblemcontent=async()=>{
        let result=await fetch(`http://localhost:5800/problem/${params.id}`);
        result=await result.json();
        setContent(result);
        
    };
    // const Colorchange=()=>{

    //     const selector=`input[value="${content.ans}"]`;
    //      document.querySelectorAll(selector).forEach(item=>{
    //         item.style='background-color:red'
    //      });
        
    // };

 
   const   Handlesubmit=()=>{
    console.log(submitteddata);
    if(submitteddata===content.ans)
    {
        alert("correct ans");
        console.log("handle");
    }
    else
    {
        alert("wrong ans");
    }
   };

    
    return (
    <div>
        <div className="questions">
       <h3 style={{display:"flex"}}>Problem:</h3> <p>{content.statement}-:</p>
        </div>
        <div className="div2">
    <form >
     
  
  <label className="animate"><input type="radio" id="h1" name="fav_language" value={content.option1}
  onClick={(e) => setData(e.target.value)}/>{content.option1}</label><br></br>
  
  <label className="animate"><input type="radio" id="h2" name="fav_language"  value={content.option2}
  onClick={(e) => setData(e.target.value)}/>{content.option2}</label><br></br>
  
  <label className="animate"><input type="radio" id="h3" name="fav_language" value={content.option3}
  onClick={(e) => setData(e.target.value)}/>{content.option3}</label><br></br>
  
  <label className="animate" ><input type="radio" id="h4" name="fav_language" value={content.option1}
  onClick={(e) => setData(e.target.value)}/>{content.option4}</label><br></br>
  
    </form>
    
        </div>
        <Button onClick={Handlesubmit} variant="primary" size="sm" style={{display:"block",margin:"1.5% 0px 0px 0.8%"}}> Submit Answer </Button>{' '}
        <div className="hint">
        <h3>
            Hint:
        </h3>
        </div>
    </div>

    );
}

export default Statement;