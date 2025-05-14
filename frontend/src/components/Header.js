import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../api";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    await api.get("/auth/logout");
    setUser(null);
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">My Library</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user && <Nav.Link as={Link} to="/mybooks">My Books</Nav.Link>}
            {!user && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            {!user && <Nav.Link as={Link} to="/register">Register</Nav.Link>}
            {user && <Nav.Link onClick={logout}>Logout ({user.email})</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;