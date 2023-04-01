import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faInstagram,
  faSkyatlas,
  faGgCircle
} from "@fortawesome/free-brands-svg-icons";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';




const Question = () => {
  const [question, setQuestion] = useState([]);
  const params = useParams();
  useEffect(() => {

    getQuestions();
  }, []);

  // passing Json web token wtih headers to verify authentication of user.........
  const getQuestions = async () => {
    let result = await fetch(`http://localhost:5800/${params.type}`, {
      headers: { authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}` }
    });
    result = await result.json();
    setQuestion(result);
    // console.log(params);
    console.log(result);

  };

  // function to show problem status .....
  const details = localStorage.getItem('user');
  const NAME = JSON.parse(details).name;

  const check = (arr, str) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str) {
        return "Solved";
      }
    }
    return "Not Solved";
  }

  return (

    <div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="5%">#</th>
            <th>Name</th>
            <th width="6%">Level</th>
            <th width="8%">status</th>
            <th width="5%">Mark</th>
            <th width="5%"><FontAwesomeIcon icon={faSkyatlas} size="2x" /></th>
          </tr>
        </thead>
      </Table>


      {
        question.length > 0 ? question.map((item, index) =>

          <Table striped bordered hover>

            <tbody>
              <tr key={index}>
                <td width="5%">{index + 1}</td>
                <td ><Link to={"/problem/" + item._id}>{item.name}</Link></td>
                <td width="6%">{item.level}</td>
                <td width="8%">{check(item.solvers, NAME)}</td>
                <td width="5%">Name</td>
                <td width="5%">Name</td>


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
