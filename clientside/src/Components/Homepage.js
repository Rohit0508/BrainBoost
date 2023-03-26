import React from "react";
import photo from "./images/bg.jpg.webp"
import { ListGroup } from "react-bootstrap";
const Home=()=>{
    return (
       
        <>
        <div className="Home-container">

        </div>
        
        <div>
        
        <section class="course">
        <h1>Courses we offer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, laboriosam!</p>   
        <div class="row">
            <div class="course-col">
                <h3>6th TO 8th</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sequi expedita facilis placeat dolor fuga similique. Ea cum repellendus culpa aperiam non perferendis commodi, sint labore quos minima odio tenetur.</p>
            </div>
            <div class="course-col">
                <h3>HIGH SCHOOL</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sequi expedita facilis placeat dolor fuga similique. Ea cum repellendus culpa aperiam non perferendis commodi, sint labore quos minima odio tenetur.</p>
            </div>
            <div class="course-col">
                <h3>INTERMEDIATE</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sequi expedita facilis placeat dolor fuga similique. Ea cum repellendus culpa aperiam non perferendis commodi, sint labore quos minima odio tenetur.</p>
            </div>
        </div>     
    </section>

    {/* Topics list ..... */}
           
           <section className="topic-list">
            <h1>Prepare By Topic</h1>
            <div className="row">
          <div className="topic-col">
          <ListGroup>
          <ListGroup.Item action >
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action >
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
    </ListGroup>
          </div>

          <div className="topic-col">
          <ListGroup>
      
          <ListGroup.Item action >
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action >
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>

    </ListGroup>
          </div>

          <div className="topic-col">
          <ListGroup>
     
      <ListGroup.Item action >
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action >
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
    
    </ListGroup>
          </div>

          </div>
           </section>
                 

            </div>

            </>
    )
}

export default Home