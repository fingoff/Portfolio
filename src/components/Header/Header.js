import "./Header.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../images/FGlogo.png";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 760) {
        if (this.state.status !== "scrolled") {
          this.setState({ status: "scrolled" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
      const { prevScrollpos } = this.state;
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;

      this.setState({
        prevScrollpos: currentScrollPos,
        visible,
      });
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }
  render() {
    return (
      <Navbar
        style={{
          backgroundColor:
            this.state.status === "top" ? "transparent" : "black",
          position:
            this.state.status === "top" //&& this.state.visible === "true"
              ? "static"
              : "fixed",
          color:
            this.state.status === "top" ? "white" : "black"
          // top: this.state.visible === "true" ? "0px" : "-100px",
        }}
        className="header"
        fixed="top"
        expand="md"
      >
        <Navbar.Brand href="/">
          {" "}
          <div className="logo">
            <Image src={logo} className="fg" roundedCircle alt="FG" />
            {/* <svg
              className="moving-square"
              version="1.1"
              id="L6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xmlSpace="preserve"
            > */}
            {/* <rect
                className="rect-outline"
                fill="none"
                stroke="none"
                stroke-width="4"
                x="25"
                y="25"
                width="50"
                height="50"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.5s"
                  from="0 50 50"
                  to="180 50 50"
                  type="rotate"
                  id="strokeBox"
                  attributeType="XML"
                  begin="rectBox.end"
                />
              </rect>
              <rect
                className="rect-fill"
                x="27"
                y="27"
                fill="none"
                width="46"
                height="50"
              >
                <animate
                  attributeName="height"
                  dur="1.3s"
                  attributeType="XML"
                  from="50"
                  to="0"
                  id="rectBox"
                  fill="freeze"
                  begin="0s;strokeBox.end"
                />
              </rect>
            </svg> */}
            <svg
              className="moving-circle"
              version="1.1"
              id="L7"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <defs>
                <linearGradient id="grad" gradientTransform="rotate(120)">
                  <stop offset="0%" stop-color="#6913cb" />
                  <stop offset="100%" stop-color="#2774fa" />
                </linearGradient>
              </defs>
              <path
                className="path-fill"
                fill="none"
                d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
              <path
                className="path-fill"
                fill="none"
                d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </path>
              <path
                className="path-fill"
                fill="none"
                d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items ml-auto">
            <Container>
              <Row>
                <Col>
                  <a className="nav-item" href="/projects" activeClass="active">
                    Projects
                  </a>
                </Col>
                <Col>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Education
                  </Link>
                </Col>
                <Col>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Experience
                  </Link>
                </Col>
                <Col>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Skills
                  </Link>
                </Col>
                <Col>
                  <Link
                    className="nav-item"
                    activeClass="active"
                    to="achievements"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    Achievements
                  </Link>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export class ProjectHeader extends React.Component {
  render() {
    return (
      <Navbar className="header proj" fixed="top" expand="sm" variant="light">
        <Navbar.Brand href="/">
          {" "}
          <div className="logo">
            {/* <svg
              className="moving-square"
              version="1.1"
              id="L6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <defs>
                <linearGradient id="grad" gradientTransform="rotate(120)">
                  <stop offset="0%" stop-color="#6913cb" />
                  <stop offset="100%" stop-color="#2774fa" />
                </linearGradient>
              </defs>
              <rect
                className="rect-outline"
                fill="none"
                stroke="none"
                stroke-width="4"
                x="25"
                y="25"
                width="50"
                height="50"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.5s"
                  from="0 50 50"
                  to="180 50 50"
                  type="rotate"
                  id="strokeBox"
                  attributeType="XML"
                  begin="rectBox.end"
                />
              </rect>
              <rect
                className="rect-fill"
                x="27"
                y="27"
                fill="none"
                width="46"
                height="50"
              >
                <animate
                  attributeName="height"
                  dur="1.3s"
                  attributeType="XML"
                  from="50"
                  to="0"
                  id="rectBox"
                  fill="freeze"
                  begin="0s;strokeBox.end"
                />
              </rect>
            </svg>
            <Image src={logo} className="fg" roundedCircle alt="FG" /> */}
            <Image src={logo} className="fg" roundedCircle alt="FG" /> 
            <svg
              className="moving-circle"
              version="1.1"
              id="L7"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <defs>
                <linearGradient id="grad" gradientTransform="rotate(120)">
                  <stop offset="0%" stop-color="#6913cb" />
                  <stop offset="100%" stop-color="#2774fa" />
                </linearGradient>
              </defs>
              <path
                className="path-fill"
                fill="none"
                d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
              <path
                className="path-fill"
                fill="none"
                d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </path>
              <path
                className="path-fill"
                fill="none"
                d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="2s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items ml-auto">
            <Container>
              <Row>
                <Col>
                  <a className="nav-item active" href="/projects">
                    Projects
                  </a>
                </Col>
                <Col>
                  <a className="nav-item-home" href="/">
                    <FontAwesomeIcon icon={faHome} className="home" />
                  </a>
                </Col>
              </Row>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
