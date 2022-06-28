import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

import { FiUser } from "react-icons/fi";

import Home from './Views/Home/index'

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div>
      
      <Container>
        <Row className="justify-content-center">
          <Col lg="7">
          <>
            <Navbar bg="light">
              <Container>
                <Navbar.Brand href="#home">Polar Ride</Navbar.Brand>
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
              <Route path="about" element={<About />} />
            </Routes>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
