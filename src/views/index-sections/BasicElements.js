import React from "react";

// react plugin used to create switch buttons
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
}from 'chart.js';

import { Bar } from "react-chartjs-2";

// core components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function BasicElements() {
  const BasicElements = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 43.8247,
      lng: 18.3314
    },
    zoom: 11
  };
  const data = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Passengers per year',
        data: [129300000, 141900000, 145300000, 36400000, 46900000],
        backgroundColor: '#fdb104',
        borderColor: '#fdb104',
        borderWidth: 2
      }
    ]
  };
  const options = {

  };

  const data2 = {
    labels: ['2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Flights per year',
        data: [1128745, 1163565, 1187728, 390900, 460029],
        backgroundColor: '#010165',
        borderColor: '#010165',
        borderWidth: 2
      }
    ]
  };
 
  return (
    <>
    <div className="section section-basic" id="basic-elements">
    <Container>
      <h3 style={{marginTop:"10%", color:"#010165"}}><b>Lufthansa Statistics</b></h3>
      
         <Row>
         <Bar options={options} data={data} />
         </Row>

         <Row style={{marginTop:"10%"}}>
         <Bar options={options} data={data2} />
         </Row>
          
        </Container>
      
      </div>
    </>
  );
}

export default BasicElements;
