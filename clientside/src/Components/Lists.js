import React, { useState,useEffect } from "react";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
const Lists= ()=>{

    const [List,setList]=useState([]);
    useEffect(()=>{
        
        getProblems();
    },[]);

    const getProblems= async () => {
        let result = await fetch(`http://localhost:5800/user/lists`);
        result = await result.json();
        setList(result);
        // console.log(params);
        console.log(result);

    };

    return (

        <div className="List-container">
            <div className="all-lists">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
             My Favorite
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
             Solved
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
             Following
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
             <h1>heklackpsdacmsadc</h1>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
             <h2>dafasfdfasdffsdadsfadf</h2>
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
             <h2>dafasfdfasdffsdadsfadf</h2>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
            </div>

            <div>

            </div>
        </div>
    )
}
export default Lists;