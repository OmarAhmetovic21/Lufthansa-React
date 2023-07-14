import React from "react";
import GoogleMapReact from "google-map-react";
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
      <Row>
            
      </Row>
    </Container>
    </>
  );
}

export default Fleet;