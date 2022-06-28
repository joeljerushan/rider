import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Slider from './Slider/index'

import Vehicles from './Vehicles/Index'

import Create from './Vehicles/Create'

function Home() {
    return (
      <>
        <Slider />

        <Vehicles />


        <Row className="justify-content-center">
            <Col lg="12">
                <Create />
            </Col>
        </Row>
        

      </>
    );
}

export default Home