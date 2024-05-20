import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import cart from "../../../assets/svg/cart.svg";
import whishlist from "../../../assets/svg/whishlist.svg";
import user from "../../../assets/svg/login.svg";
import searchicon from "../../../assets/svg/search.svg";


import style from "./styles.module.css";

const { nav, search, input,dropdown ,form } = style;
const Header = () => {
  return (
    <>
      <Container className="pt-4">
        <div className="d-flex align-align-items-center justify-content-between flex-column flex-lg-row gap-4">
          <div className="d-flex justify-content-between gap-5">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              
                
              </Link>
            </div>
            <div className="search ms-0 ms-lg-5 ps-lg-5">
              <form
                className={`${search} ${form} align-items-center justify-content-between d-flex`}
              >
                <input
                  type="text"
                  placeholder="Search for everything"
                  className={input}
                />
                <img src={searchicon} alt="" />
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-between gap-5 align-items-center">
            <div className="lang">
              <span>En / </span>
              <span>العربية</span>
            </div>
            <div className="icons d-flex gap-3">
              <Link to="/">
                <img src={cart} alt="cart" />
              </Link>
              <Link to="/">
                <img src={whishlist} alt="whishlist" />
              </Link>
              <Link to="/">
                <img src={user} alt="user" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className={`${nav} mt-4 py-1`}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <NavDropdown title="All Categories" className={`${dropdown} fw-lighter`}  id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>

              </NavDropdown>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="gap-4">
                <Nav.Link  as={NavLink} to="/"   className="text-decoration-none text-black fw-semibold">
                    Trending
                </Nav.Link>

                <Nav.Link as={NavLink} to="rings"   className="text-decoration-none text-black fw-semibold">
                    Rings
                </Nav.Link>

                <Nav.Link as={NavLink} to="necklaces" className="text-decoration-none text-black fw-semibold">
                  Necklaces
                </Nav.Link>

                <Nav.Link as={NavLink} to="watches" className="text-decoration-none text-black fw-semibold">
                    Watches
                </Nav.Link>

                <Nav.Link as={NavLink} to="earrings" className="text-decoration-none text-black fw-semibold">
                    Earrings
                </Nav.Link>

                <Nav.Link as={NavLink} to="braceletes" className="text-decoration-none text-black fw-semibold">
                    Braceletes
                </Nav.Link>

                <Nav.Link as={NavLink} to="anklet" className="text-decoration-none text-black fw-semibold">
                      Anklet
                </Nav.Link>

                <Nav.Link as={NavLink} to="noseRaings" className="text-decoration-none text-black fw-semibold">
                      NoseRaings
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
