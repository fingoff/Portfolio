import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap";
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Sidebar from './components/Sidebar/Sidebar'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import EducationSection from './components/EducationSection/EducationSection'
import ExperienceSection from './components/ExperienceSection/ExperienceSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import AchievementsSection from './components/AchievementsSection/AchievementsSection'
import Footer from './components/Footer/Footer'


const Home = ({}) => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <Container fluid>
        <Row>
          <Col className="sidebar-section" md="2">
            <Sidebar />
          </Col>
          <Col className="main-section" md="10">
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <AchievementsSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const ProjectsPage = ({}) => {
  return (
    <>
    <Header />
    <h1>yes</h1>
    </>
  );
};

function App() {
  return (
    <Container fluid className="main">
        <Router>
              <Switch>
                <Route path="/" exact component={() => <Home/>}/>
                <Route path="/projects" exact component={() => <ProjectsPage/>}/>
              </Switch>
        </Router>
      <Footer />
    </Container>
  );
}

export default App;
