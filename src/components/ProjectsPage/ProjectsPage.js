import "./ProjectsPage.css";
import React from "react";
import Button from "react-bootstrap/Button";
import { Fade } from "@stahl.luke/react-reveal";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectHeader } from "../Header/Header";
import synthvid from "../../images/synthvid.mp4";
import synth1 from "../../images/synth1.png";
import synth2 from "../../images/synth2.png";
import workmate1 from "../../images/workmate1.png";
import workmate2 from "../../images/workmate2.jpg";
import workmate3 from "../../images/workmate3.png";
import workmate4 from "../../images/workmate4.png";
import issiegif1 from "../../images/issie1.gif";
import issiegif2 from "../../images/issie2.gif";
import issiegif3 from "../../images/issie3.gif";
import issiegif4 from "../../images/issie4.gif";
import covid1 from "../../images/covid1.jpeg";

export class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.makeP1Active = this.makeP1Active.bind(this);
    this.makeP2Active = this.makeP2Active.bind(this);
    this.makeP3Active = this.makeP3Active.bind(this);
    this.makeP4Active = this.makeP4Active.bind(this);
    this.makeP5Active = this.makeP5Active.bind(this);
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

  makeP1Active() {
    this.setState({
      p1Visible: true,
      p2Visible: false,
      p3Visible: false,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    });
  }

  makeP2Active() {
    this.setState({
      p1Visible: false,
      p2Visible: true,
      p3Visible: false,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    });
  }

  makeP3Active() {
    this.setState({
      p1Visible: false,
      p2Visible: false,
      p3Visible: true,
      p4Visible: false,
      p5Visible: false,
      p6Visible: false,
    });
  }

  makeP4Active() {
    this.setState({
      p1Visible: false,
      p2Visible: false,
      p3Visible: false,
      p4Visible: true,
      p5Visible: false,
      p6Visible: false,
    });
  }

  makeP5Active() {
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
        <div
          className="projects-page"
          id="projects-page"
          style={{
            backgroundColor: this.state.p1Visible
              ? "#187e65"
              : this.state.p2Visible
              ? "#0a4b78"
              : this.state.p3Visible
              ? "#facfd2"
              : this.state.p4Visible
              ? "#1d242f"
              : this.state.p5Visible
              ? "#187e65"
              : this.state.p6Visible
              ? "#facfd2"
              : "",
          }}
        >
          <div
            className="title-and-buttons"
            style={{
              backgroundColor: this.state.p1Visible
                ? "#187e65"
                : this.state.p2Visible
                ? "#0a4b78"
                : this.state.p3Visible
                ? "#facfd2"
                : this.state.p4Visible
                ? "#1d242f"
                : this.state.p5Visible
                ? "#187e65"
                : this.state.p6Visible
                ? "#facfd2"
                : "",
            }}
          >
            <h1>My Projects</h1>
            <div className="project-buttons">
              <Button onClick={this.makeP1Active}>Music Synthesiser</Button>
              <Button onClick={this.makeP2Active}>WorkMate</Button>
              <Button onClick={this.makeP3Active}>
                Interactive Schematic Drawing Canvas
              </Button>
              <Button onClick={this.makeP4Active}>
                COVID-19 Track and Trace Architecture
              </Button>
              {/* <Button onClick={this.makeP5Active}>FPGA Application</Button> */}
              {/* <Button onClick={this.makeP6Active}>FPGA Application</Button> */}
            </div>
          </div>
          <Fade in={this.state.p1Visible} duration={500}>
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
                        I worked on this project in a group of 4 and our aim was
                        to write the embedded software to make the music
                        synthesiser hardware provided work.
                        <br />
                        <br />
                        The hardware inputs were: 12 keys, 4 control knobs and a
                        joystick and the outputs were a speaker and an OLED
                        display. We used a digital wave to represent We used the
                        4 knobs to control the volume, octave, type of waveform
                        (Sine, Saw, Square) and the range of the Vibrato effect.
                        The knobs could also be pressed and so we used this
                        different knobs to toggle Vibrato, Tremelo and Sustain
                        mode.
                        <br />
                        <br />
                        The joystick had 2 uses: X-axis movement would create a
                        'whammy bar' effect and Y-axis movement would effect the
                        speed of the Vibrato.
                        <br />
                        <br />
                        We were able to do this by programming in C and
                        utilising the Arduino IDE to upload our code onto the
                        synthesiser hardware.
                      </p>
                    </Fade>
                  </Col>
                  <Col className="img-area" sm="12" md="3">
                    <Fade right>
                      <video
                        className="synth1"
                        width="820"
                        height="820"
                        autoPlay
                        loop
                        muted
                      >
                        <source src={synthvid} type="video/mp4" />
                      </video>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <div className="img-below-bg">
                      {" "}
                      <img src={synth1} className="img-below"></img>
                    </div>
                  </Col>
                  <Col>
                    <div className="img-below-bg">
                      {" "}
                      <img src={synth2} className="img-below"></img>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p2Visible} duration={500}>
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
                      <img src={workmate1} className="synth1"></img>
                    </Fade>
                  </Col>
                  <Col className="content-area" sm="12" md="9">
                    <Fade right>
                      <h2>WorkMate: an Internet of Things product</h2>
                      <p className="description">
                        WorkMate was created as part of my 3rd year Embedded
                        Systems course. 4 of us were tasked with developing a
                        Smart Device based on 3 randomly assigned sensors. We
                        were given a laser ranging sensor, a magnetometer and a
                        temperature sensor. Based on this, we decided to create
                        a product that would assist people who work at desks by
                        providing them with data on the quality of their posture
                        and work environment.
                        <br />
                        The device is worn like a necklace and the the laser
                        ranging sensor points towards the screen, which can then
                        be used to determine if the user is too close or far
                        away from the screen they are working on. Additionally,
                        the temperature sensor tells the user if their room is
                        too hot or cold compared to the optimal working
                        temperature range. Finally, the magnetometer is used to
                        determine where the user is, and this is then used to
                        trigger a buzzer if the user is not sat at their desk
                        while the device is operational. This was done to
                        encourage the user to stay at thier desk during working
                        time and also to keep their posture in the correct
                        orientation, facing towards the screen.
                        <br />
                        My main role was the to design and develop the front-end
                        web app, while my team mates created the back-end, which
                        sent data packets to a Google firebase, which was then
                        processed and displayed on the site.
                        <br />
                        <a href="https://embedvid-project.web.app/">
                          Check out the website here.
                        </a>
                        <br />
                        <br />
                      </p>
                      <p className="disclaimer">
                        Disclaimer: the device is now inactive and so the
                        website generates random data to populate the graphs and
                        indicators to show the website's functionality.
                      </p>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate2} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate4} className="img-below"></img>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p3Visible} duration={500}>
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
                      <h2>Interactive Schematic Drawing Canvas</h2>
                      <p className="description">
                        As part of the High-Level Programming 3rd year module,
                        myself and 4 others created a drawing canvas to be added
                        to a larger electronics mapping application for a 1st
                        year module. We used F# and SVG Elmish in order to do
                        this.
                        <br />
                        <br />
                        The project was initially individual, where I developed
                        the 'Symbol' part of the software. This was responsible
                        for the creation, updating and deletion of the
                        electronic symbols that would be present onto the
                        canvas. We then combined our individual efforts from the
                        'Wire' and 'Sheet' parts of the software, which
                        controlled the symbol connections and the display it
                        would all be placed on respectively.
                        <br />
                        <br />
                        This required us to create a consistent interface
                        between each module such that they could send important
                        data between them, such as port positions so that the
                        canvas knows where to draw and connect wires.
                        <br />
                        <br />
                        During the group phase, I had 2 main focuses. The 1st of
                        these was to interface our canvas with Issie, the
                        electronics application, and the other was on the
                        sidebar of the canvas. The sidebar had 2 tabs; the
                        Catalogue tab, which allowed users to select all of the
                        possible symbols and add them to the canvas ßand the
                        Properties tab, which gave details about a selected
                        symbol and allowed for customisation of its properties
                        such as the symbol name.
                      </p>
                    </Fade>
                  </Col>
                  <Col className="img-area" sm="12" md="3">
                    <Fade right>
                      <img src={issiegif1} className="img-1"></img>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={issiegif2} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={issiegif3} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={issiegif4} className="img-below"></img>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p4Visible} duration={500}>
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
                      <img src={covid1} className="img-1"></img>
                    </Fade>
                  </Col>
                  <Col className="content-area" sm="12" md="9">
                    <Fade right>
                      <h2>COVID-19 Track and Trace Architecture</h2>
                      <p className="description">
                        For this project I collaborated with 4 others to design
                        an architecture for a COVID-19 track and trace system.
                        We were tasked with delivering 11 assessable pieces of
                        work, including: Architecture Overview and System
                        Context Diagrams, Component and Data Models, 2 Use Case
                        descriptions, 2 organisational documents and a Pitch to
                        a non-technical audience.
                        <br />
                        My main contributions were: the development of the use
                        cases, formulation of the component model of the system
                        and the planning and creation of the pitch presentation.
                      </p>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              {/* <Container>
                <Row>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate2} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                </Row>
              </Container> */}
            </div>
          </Fade>
          <Fade in={this.state.p5Visible} duration={500}>
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
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate2} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fade>
          <Fade in={this.state.p6Visible} duration={500}>
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
                      <img src={covid1} className="img-1"></img>
                    </Fade>
                  </Col>
                  <Col className="content-area" sm="12" md="9">
                    <Fade right>
                      <h2>COVID-19 Track and Trace Architecture</h2>
                      <p className="description">
                        For this project I collaborated with 4 others to design
                        an architecture for a COVID-19 track and trace system.
                        We were tasked with delivering 11 assessable pieces of
                        work, including: Architecture Overview and System
                        Context Diagrams, Component and Data Models, 2 Use Case
                        descriptions, 2 organisational documents and a Pitch to
                        a non-technical audience.
                        <br />
                        My main contributions were: the development of the use
                        cases, formulation of the component model of the system
                        and the planning and creation of the pitch presentation.
                      </p>
                    </Fade>
                  </Col>
                </Row>
              </Container>
              {/* <Container>
                <Row>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate2} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="img-below-bg">
                      {" "}
                      <img src={workmate3} className="img-below"></img>
                    </div>
                  </Col>
                </Row>
              </Container> */}
            </div>
          </Fade>
        </div>
      </>
    );
  }
}

export default ProjectsPage;
