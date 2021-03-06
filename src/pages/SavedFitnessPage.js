import React from "react";
import NavBar from "../components/partials/Navbar";
import Footer from "../components/partials/Footer";
import { Container } from "react-bootstrap";
import FitnessPlanSection from "../components/FitnessPlan/FitnessPlanSection";
import ProfileInfo from "../components/Profile/ProfileInfoSection/ProfileInfo";

const SavedFitnessPage = ({ user, dispatch, workoutList }) => {
  return (
    <Container className="saved--fitness--page" fluid={true}>
      <NavBar />
      <ProfileInfo />
      <FitnessPlanSection user={user} dispatch={dispatch} workoutList={workoutList}/>
      <Footer />
    </Container>
  );
};

export default SavedFitnessPage;
