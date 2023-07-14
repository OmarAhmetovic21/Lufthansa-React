import React from "react";

// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BasicElements() {
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
    <div className="section section-basic" id="basic-elements">
    <Container>
      <h3 style={{marginTop:"10%", color:"#010165"}}><b>Lufthansa Statistics</b></h3>
         <Row>
            
         </Row>
          
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
