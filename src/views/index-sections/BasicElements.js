import React from "react";
import GoogleMapReact from "google-map-react";
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
      <Row>
      <div style={{ height: '100vh', width: '100%', marginTop:"10%" }}>
      <button class="btn btn-1" style={{backgroundColor:"#010165"}} type="button">Find Me</button>
        <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
          <BasicElements lat={43.8247} lng={18.3314}/>
       </GoogleMapReact>
      </div>
      </Row>
      <h3 style={{marginTop:"10%"}}>Lufthansa Statistics</h3>
         <Row>
            
         </Row>
          
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
