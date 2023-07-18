import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("#faba00");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("#faba00");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{background:"#010165"}}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="index" id="navbar-brand" >
            <img alt="..." style={{height:"30%", width:"30%"}} src={require("assets/img/Color-Lufthansa-Logo.jpg")}></img>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span style={{backgroundColor:"#fdb104"}} className="navbar-toggler-bar top-bar"></span>
              <span style={{backgroundColor:"#fdb104"}} className="navbar-toggler-bar middle-bar"></span>
              <span style={{backgroundColor:"#fdb104"}} className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/fleet">
                  <h5 style={{color:"#fdb104"}}>Fleet</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo">
                  <h5 style={{color:"#fdb104"}}>Lounges</h5>
                </NavLink>
              </NavItem>
            
              <NavItem>
                <NavLink href="https://www.facebook.com/Lufthansa" target="_blank" id="facebook-tooltip">
                  <i style={{color:"#fdb104"}} className="fab fa-facebook-square"></i>
                  <p style={{color:"#fdb104"}} className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
    
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/lufthansa/" target="_blank" id="instagram-tooltip">
                  <i style={{color:"#fdb104"}} className="fab fa-instagram"></i>
                  <p style={{color:"#fdb104"}} className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
