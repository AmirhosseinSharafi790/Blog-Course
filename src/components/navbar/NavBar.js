import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";
function NavBar(){
    const expand = "lg";
    return(
            <Navbar key={expand} expand={expand} style={{backgroundColor : "#282A35"}}>
              <Container fluid>
                <Navbar.Brand href="#" className="lalezar fs-3" style={{color : "#FFC107"}}>بلاگ دیمیروان</Navbar.Brand>
                <Navbar.Toggle style={{color :"#fff"}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  className="bg-dark bg-opacity-100"
                  id={`offcanvasNavbar-expand-${expand}` }
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton className="text-light">
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      بلاگ دیمیروان
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink className="nav-link" style={{color : "#FFC107"}} to="/">صفحه نخست</NavLink>
                      <NavLink className="nav-link" style={{color : "#FFC107"}} to="/add-article">ساخت مقاله</NavLink>
                      <NavLink className="nav-link" style={{color : "#FFC107"}} to="/articles">مقالات</NavLink>
                      <NavLink className="nav-link" style={{color : "#FFC107"}} to="/course">دوره ها</NavLink>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          )
}
export default NavBar