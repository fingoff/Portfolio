import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "./components/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import EducationSection from "./components/EducationSection/EducationSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import AchievementsSection from "./components/AchievementsSection/AchievementsSection";
import Footer from "./components/Footer/Footer";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

const Home = ({}) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <Container fluid className="main-list">
        <Row>
          <Col className="sidebar-section" md="2">
            <Sidebar />
          </Col>
          <Col className="middle-section" md="10">
            <EducationSection />
            <ExperienceSection />
            {/* <SkillsSection /> */}
            <AchievementsSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

function App() {
  return (
    <Container fluid className="main">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/projects" exact component={() => <ProjectsPage />} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
