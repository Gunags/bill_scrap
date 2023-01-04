import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NS TOOLS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Admin Login</Nav.Link>
            <Nav.Link href="#pricing">User Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
