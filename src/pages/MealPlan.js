import React from "react";
import MealPlanSection from "../components/MealPlan/MealPlanSection";
import Navbar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container, Col, Row } from "react-bootstrap";
import Mealinfo from '../components/MealPlan/MealInfo'
import useProfileTokenUser from "../handlers/profile_token_user";

const MealPlan = ({ dispatch, user, mealList ,login}) => {
  useProfileTokenUser(dispatch,login);
  return (
  <Container className="" fluid={true}>
      <Navbar user={user} />
     < Mealinfo user={user} />

      <Row style={{ borderBottom: "1px solid black" }}>
        <Col lg={12}>
          <MealPlanSection user={user} mealList={mealList} dispatch={dispatch} />
    
        </Col>
     
      </Row>
     
      <Footer />
    </Container>
    
  );
};

export default MealPlan;
