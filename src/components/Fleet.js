import React from "react";
import DarkFooter from "./Footers/DarkFooter";
// react plugin used to create switch buttons
import IndexNavbar from "./Navbars/IndexNavbar";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import LandingPageHeader from "./Headers/LandingPageHeader";

// core components

function Fleet() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const BasicElements = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 43.8247,
      lng: 18.3314
    },
    zoom: 11
  };
 
  return (
    <>
    <IndexNavbar />
    <LandingPageHeader />
    <Container>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA319Lufthansa.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A319</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 26</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA320Lufthansa.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A320</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 53</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA320NEO.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A320neo</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 30</h6>
         <h6>Ordered: 53</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA321.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A321</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 63</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA321NEO.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A321neo</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 15</h6>
         <h6>Ordered: 26</h6>
        </Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA330-300.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A330-300</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 13</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA340-300.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A340-300</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 17</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>

      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA340-600.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A340-600</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 5</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA350-900.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A350-900</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 20</h6>
         <h6>Ordered: 27</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA380.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Airbus A380-800</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 3</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/Boeing747-8.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Boeing 747-8 Intercontinental</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 19</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/Boeing747-400.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Boeing 747-400</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 8</h6>
         <h6>Ordered: —</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/Boeing777-9x.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Boeing 777-9x</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: —</h6>
         <h6>Ordered: 20</h6>
        </Col>
      </Row>
      <Row style={{marginTop:"10%"}}>
        <Col md="5">
         <img alt="..." src={require("assets/img/Boeing787-9.jpg")}></img>
        </Col>

        <Col md="4">
         <h4>Boeing 787-9</h4>
        </Col>
        <Col md="3">
        <h6><b>Details:</b></h6>
         <h6>In Service: 1</h6>
         <h6>Ordered: 31</h6>
        </Col>
      </Row>
    </Container>
    <br/> <br/>
    <DarkFooter />
    </>
  );
}

export default Fleet;