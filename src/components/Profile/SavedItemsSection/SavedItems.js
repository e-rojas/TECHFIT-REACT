import React, {useEffect, useState} from 'react'
import { Row, Col, Button, Accordion, Card } from "react-bootstrap";
import RecipeCardInfo from './RecipeCardInfo'
import WorkoutCardInfo from './WorkoutCardInfo'
import { SET_USERWORKOUT_LIST, SET_USERMEALS_LIST } from "../../../reducers/appReducer";
import AccordianWorkout from './AccordianWorkout';
import AccordianRecipe from './AccordianRecipe'
import axios from "axios"

const SavedItems = (user, dispatch, userWorkoutList, userId) => {
  if (user) {
    console.log('userid from saveditems',user.userId)
  }
  
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios
    .get(`/api/user-workouts/${user.userId}`)
    .then(response => {
      setWorkouts(response.data)
      console.log("user-workout", response.data)
      dispatch({ type: SET_USERWORKOUT_LIST, userWorkoutList: response.data })

      
      
    })
    .catch(error => {
      console.log(error)
    })

   }, [])
   
   console.log("aaaa",userWorkoutList)








  return (
    <Row>
    <Col lg={5} className="p-5">
      <h2 className="text-center p-3">Saved Recipes</h2>


      <Accordion >
        <Card style={{ backgroundColor: "white! important" }}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0" style={{ color: "black" }} >
              Delicious Pear Roasted Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4" style={{ color: "black" }}>
              Chicken
          </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>

              <RecipeCardInfo />

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        </Accordion>
        <Button variant="secondary" size="lg" block style={{marginTop: "10px"}}>
          Click Here To See More
        </Button>


    </Col>

    <Col lg={2}>
    </Col>
    <Col lg={5} className="p-5">
    <h2 className="text-center p-3">Saved Workouts</h2>      
  
      
      <div>
      {workouts.map((r, i) => (
            <AccordianWorkout
              key={i}
              id={r.id}
              image_url={r.image_url}
              name={r.name}
              workout_description={r.workout_description}
              difficulty={r.difficulty}
              video_url={r.video_url}
              
      />
      ))}
      </div>
      <Button variant="secondary" size="lg" block style={{marginTop: "10px"}}>
          Click Here To See More
        </Button>
    </Col>
  </Row>
  )
}

export default SavedItems;