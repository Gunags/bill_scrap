import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export const AdminHome = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://gunags.github.io/bill_scrap/">
            NS TOOLS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/addbill">Add Bill</Nav.Link>
            <Nav.Link href="#/allbills">All Bills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
