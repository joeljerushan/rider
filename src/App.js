import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

import { FiUser } from "react-icons/fi";

import Home from './Views/Home/index'
import RideInfo from './Views/Ride/index'

function App() {
  return (
    <div>
      
      <Container>
        <Row className="justify-content-center">
          <Col lg="7">
          <>
            <Navbar bg="light">
              <Container>
                <Navbar.Brand href="/">Polar Ride</Navbar.Brand>
                <div>
                  <FiUser size={20}/>
                </div>
              </Container>
            </Navbar>
          </>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="7">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pay/:id" element={<RideInfo />} />
            </Routes>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
