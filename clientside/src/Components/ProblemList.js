import React, { useState,useEffect ,useRef} from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Solvedproblem from "./Solved";
import Likedproblems from "./Liked";

const Chatroom= ()=>{
    return (
        // <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Solvedproblem/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                 <Likedproblems/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );

}
export default Chatroom;