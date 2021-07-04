import "./ProjectsPage.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Fade } from "@stahl.luke/react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectHeader } from "../Header/Header";
import img from "../../images/ImperialLogo.png";
import synth1 from "../../images/synth1.png";
import synth2 from "../../images/synth2.png";
import iot1 from "../../images/IoTproduct1.png";
import iot2 from "../../images/IoTproduct2.png";

export class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.p1Active = this.p1Active.bind(this);
    this.p2Active = this.p2Active.bind(this);
    this.p3Active = this.p3Active.bind(this);
    this.p4Active = this.p4Active.bind(this);
    this.p5Active = this.p5Active.bind(this);
    this.p6Active = this.p6Active.bind(this);
    this.state = {
      p1Visible: true,
      p2Visible: false,
      p3Visible: false,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    };
  }

  p1Active() {
    this.setState({
      p1Visible: true,
      p2Visible: false,
      p3Visible: false,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    });
  }

  p2Active() {
    this.setState({
      p1Visible: false,
      p2Visible: true,
      p3Visible: false,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    });
  }

  p3Active() {
    this.setState({
      p1Visible: false,
      p2Visible: false,
      p3Visible: true,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    });
  }

  p4Active() {
    this.setState({
      p1Visible: false,
      p2Visible: false,
      p3Visible: false,
      p4Visible: true,
      p5Visible: false,
      p6Visible: false,
    });
  }

  p5Active() {
    this.setState({
      p1Visible: false,
      p2Visible: false,
      p3Visible: false,
      p4Visible: false,
      p5Visible: true,
      p6Visible: false,
    });
  }

  p6Active() {
    this.setState({
      p1Visible: false,
      p2Visible: false,
      p3Visible: false,
      p4Visible: false,
      p5Visible: false,
      p6Visible: true,
    });
  }

  render() {
    return (
      <>
        <ProjectHeader />
        <div className="projects-page" id="projects-page">
          <h1>My Projects</h1>
          <Button onClick={this.p1Active}>Music Synthesiser</Button>
          <Button onClick={this.p2Active}>Music Synthesiser</Button>
          <Button onClick={this.p3Active}>Music Synthesiser</Button>
          <Button onClick={this.p4Active}>Music Synthesiser</Button>
          <Button onClick={this.p5Active}>Music Synthesiser</Button>
          <Button onClick={this.p6Active}>Music Synthesiser</Button>
          <Fade in={this.state.p1Visible}>
            <div
              className="p1"
              style={{
                display: this.state.p1Visible ? "" : "none",
              }}
            >
              <Container id="p1">
                <Row className="project-left">
                  <Col className="content-area" sm="12" md="9">
                    <Fade left>
                      <h2>Music Synthesiser</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur ex sit amet massa scelerisque scelerisque.
                        Aliquam erat volutpat. Aenean interdum finibus
                        efficitur. Praesent dapibus dolor felis, eu ultrices
                        elit molestie.
                      </p>
                    </Fade>
                  </Col>
                  <Col className="img-area" sm="12" md="3">
                    <Fade right>
                      <img src={synth1} className="synth1"></img>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p2Visible}>
            <div
              className="p2"
              style={{
                display: this.state.p2Visible ? "" : "none",
              }}
            >
              <Container id="p2">
                <Row className="project-right flex-column-reverse flex-md-row">
                  <Col className="img-area" sm="12" md="3">
                    <Fade left>
                      <img src={iot1} className="synth1"></img>
                    </Fade>
                  </Col>
                  <Col className="content-area" sm="12" md="9">
                    <Fade right>
                      <h2>WorkMate: an Internet of Things product</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur ex sit amet massa scelerisque scelerisque.
                        Aliquam erat volutpat. Aenean interdum finibus
                        efficitur. Praesent dapibus dolor felis, eu ultrices
                        elit molestie.
                      </p>
                      <a href="https://embedvid-project.web.app/">
                        Find the website here.
                      </a>
                      <p className="description">
                        Disclaimer: as the device is now inactive, the website
                        generates random data to populate the graphs and
                        indicators with so that the website's functionality can
                        still be shown.
                      </p>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p3Visible}>
            <div
              className="p3"
              style={{
                display: this.state.p3Visible ? "" : "none",
              }}
            >
              <Container id="p3">
                <Row className="project-left">
                  <Col className="content-area" sm="12" md="9">
                    <Fade left>
                      <h2>C to MIPS 1 Comipler</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur ex sit amet massa scelerisque scelerisque.
                        Aliquam erat volutpat. Aenean interdum finibus
                        efficitur. Praesent dapibus dolor felis, eu ultrices
                        elit molestie.
                      </p>
                    </Fade>
                  </Col>
                  <Col className="img-area" sm="12" md="3">
                    <Fade right>
                      <img src={img} className="img-1"></img>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p4Visible}>
            <div
              className="p4"
              style={{
                display: this.state.p4Visible ? "" : "none",
              }}
            >
              <Container id="p4">
                <Row className="project-right flex-column-reverse flex-md-row">
                  <Col className="img-area" sm="12" md="3">
                    <Fade left>
                      <img src={img} className="img-1"></img>
                    </Fade>
                  </Col>
                  <Col className="content-area" sm="12" md="9">
                    <Fade right>
                      <h2>COVID-19 Track and Trace Architecture</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur ex sit amet massa scelerisque scelerisque.
                        Aliquam erat volutpat. Aenean interdum finibus
                        efficitur. Praesent dapibus dolor felis, eu ultrices
                        elit molestie.
                      </p>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p5Visible}>
            <div
              className="p5"
              style={{
                display: this.state.p5Visible ? "" : "none",
              }}
            >
              <Container id="p5">
                <Row className="project-left">
                  <Col className="content-area" sm="12" md="9">
                    <Fade left>
                      <h2>Interactive Application on an FPGA </h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur ex sit amet massa scelerisque scelerisque.
                        Aliquam erat volutpat. Aenean interdum finibus
                        efficitur. Praesent dapibus dolor felis, eu ultrices
                        elit molestie.
                      </p>
                    </Fade>
                  </Col>
                  <Col className="img-area" sm="12" md="3">
                    <Fade right>
                      <img src={synth1} className="img-1"></img>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p6Visible}>
            <div
              className="p6"
              style={{
                display: this.state.p6Visible ? "" : "none",
              }}
            >
              <Container id="p6">
                <Row className="project-right flex-column-reverse flex-md-row">
                  <Col className="img-area" sm="12" md="3">
                    <Fade left>
                      <img src={iot1} className="img-1"></img>
                    </Fade>
                  </Col>
                  <Col className="content-area" sm="12" md="9">
                    <Fade right>
                      <h2>P6</h2>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed efficitur ex sit amet massa scelerisque scelerisque.
                        Aliquam erat volutpat. Aenean interdum finibus
                        efficitur. Praesent dapibus dolor felis, eu ultrices
                        elit molestie.
                      </p>
                      <a href="https://embedvid-project.web.app/">
                        Find the website here.
                      </a>
                      <p className="description">
                        Disclaimer: as the device is now inactive, the website
                        generates random data to populate the graphs and
                        indicators with so that the website's functionality can
                        still be shown.
                      </p>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                  <Col className="img-below-bg">
                    {" "}
                    <img src={synth1} className="img-below"></img>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
        </div>
      </>
    );
  }
}

export default ProjectsPage;
