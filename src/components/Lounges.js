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
import ProfilePageHeader from "./Headers/ProfilePageHeader";

// core components

function Lounges() {
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
    <ProfilePageHeader />
    <Container>
      <Row style={{marginTop:"10%"}}>
        <Col className="text-center">
        <div style={{alignItems:"center"}}>
            <table class="table table-bordered align-center table-responsive-sm">
                 <tr style={{color:"#010165", background:"#fdb104"}}>
                    <th>Airport Code</th>
                    <th>Name of Lounge</th>
                    <th>Location</th>
                    <th>Working Hours</th>
                </tr>
                <tr>
                        <td>FRA</td>
                        <td>Lufthansa Senator Lounge</td>
                        <td>Terminal 1, Departure area C (NonSchengen), near gates C14/C15</td>
                        <td>5:00 am - 10:00 pm</td>
                    </tr>
                    <tr>
                        <td>FRA</td>
                        <td>Lufthansa Business Class Lounge</td>
                        <td>Terminal 1, Concourse C (NonSchengen), Departure level, above gates C14/C15</td>
                        <td>5:00 am - 10:00 pm</td>
                    </tr>

                    <tr>
                        <td>FRA</td>
                        <td>Lufthansa Business Class Lounge</td>
                        <td>Terminal 1, Departure area B (NonSchengen), near gates B24 and B28</td>
                        <td>5:00 am - 10:00 pm</td>
                    </tr>
                    <tr>
                        <td>FRA</td>
                        <td>Lufthansa Senator Lounge</td>
                        <td>Terminal 1, Departure area A (Schengen) opposite to Duty Free Shop, in direction of gate A50</td>
                        <td>5:00 am - 10:00 pm</td>
                    </tr>
            </table>
            </div>
        </Col>
      </Row>
      
    </Container>
    <br/> <br/> <br/> <br/> 
    <DarkFooter />
    </>
  );
}

export default Lounges;