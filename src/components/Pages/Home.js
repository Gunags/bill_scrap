import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://gunags.github.io/bill_scrap/">
            NS TOOLS
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/adminlogin">Admin Login</Nav.Link>
            <Nav.Link href="/userlogin">User Login</Nav.Link>
            <Nav.Link href="/userhome">User Dashboard</Nav.Link>
            <Nav.Link href="/adminhome">Admin Dashboard</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
