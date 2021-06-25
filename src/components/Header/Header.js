import "./Header.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../images/FGlogo.png";
import Image from "react-bootstrap/Image";

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
        visible
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
          // top: this.state.visible === "true" ? "0px" : "-100px",
        }}
        className="header"
        fixed="top"
        expand="lg"
      >
        <Navbar.Brand href="/">
          {" "}
          <Image src={logo} className="logo" roundedCircle alt="FG" />
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

export default Header;
