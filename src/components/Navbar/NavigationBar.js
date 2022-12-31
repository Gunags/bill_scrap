import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nishanth Tools</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#features">Add Bill</Nav.Link>
            <Nav.Link href="#pricing">All Bills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
