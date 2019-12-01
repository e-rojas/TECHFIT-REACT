import React, { useState} from 'react'
import { Row, Col, Button, Accordion, Card, Modal, ButtonToolbar } from "react-bootstrap";


const AccordianWorkout = props => {

  const [modalShow, setModalShow] = React.useState(false);
  
    const workout = {
      id: props.id,
      name: props.name,
      difficulty: props.difficulty,
      workout_description: props.workout_description,
      image_url: props.image_url,
      video_url: props.video_url
    };

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-center">
            Your Workouts presented by TechFit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
          <iframe fluid={true} style={{height: "75vh", width: "75vh"}} src={props.video_url} allowFullScreen></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }




  return (

    <Accordion >
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }}>
              {props.name}
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

            <Row className="border pt-4 pb-4 rounded">
        <Col lg={6}>
          <img
            style={{ height: "200px" }}
            className="img-fluid img-thumbnail"
            src={props.image_url}
            alt="fitness"
          />
        </Col>
        <Col lg={6}>
          <h5>{props.name}</h5>
          <p>
          {props.workout_description}
          </p>
          <div className="d-flex flex-row justify-content-between">
            <span>
              <i className="far fa-clock"></i> : Level Of Difficulty:{props.difficulty}
            </span>
            <ButtonToolbar>
            <Button variant="info" size="sm" onClick={() => setModalShow(true)}>
      Demo Video <i className="far fa-plus-square"></i>
      </Button>
      <MyVerticallyCenteredModal
              {...props}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonToolbar>
            
          </div>
        </Col>
      </Row>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </Accordion>
  )
}

export default AccordianWorkout;
