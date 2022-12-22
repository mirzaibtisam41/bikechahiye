import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../css/component.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
// import "./Navbar.css";
const Navbars = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="white" expand="lg" className="col-11 p-2 d-flex m-auto">
      <Container fluid>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <img
            src="/images/pkBikes.png"
            alt="PK Bikes"
            className="logo"
            style={{ width: "150px", height: "120px" }}
            onClick={() => navigate("/")}
          />
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav navbar col-8 me-auto my-2 my-lg-0 d-flex m-auto"
            style={{ maxHeight: "100%", color: "red" }}
            // navbarScroll
          >
            <div
              className="col-12"
              style={{
                borderRight: "3px solid black",
                borderLeft: "3px solid black",
              }}
            >
              <div className="row p-3 d-flex justify-content-between">
                {/* <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 d-flex"
                  aria-label="Search"
                /> */}
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-dark" type="button">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="row ">
                  <div class="navbar-nav ">
                    <a
                      class="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </a>

                    {/* <section className="bg-dark navbar-container li-relative">
            <div className="container py-3">
                <ul className="d-flex justify-content-between">

                    <li>
                        <Link href="javascript:void(0)" to="/" style={{color:'red'}}><a>eShop</a></Link>
                        <i className="fa fa-caret-down mx-3 li-hover" aria-hidden="true"></i>
                        <ul className="div-absolute py-3 shadow">
                            <section className="d-flex justify-content-around">
                                <ul>
                                    <h6 className="mb-4">Network Equipment</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=623&category=Router&slug=Router`}>
                                            <p id="623" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Router</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=622&category=Network%20Switch&slug=Switches`}>
                                            <p id="622" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Switches</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=473&category=Firewalls&slug=Firewalls`}>
                                            <p  id="473" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Firewalls</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=497&category=KVM Switches&slug=KVM Switches`}>
                                            <p  id="497" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>KVM Switches</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=1084&category=Rackmount & and Data Server Cabinets&slug=Racks and Data Server Cabinets`}>
                                            <p id="1084" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Racks & Data Server Cabinets</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=475&category=Network Module&slug=Network Accessory`}>
                                            <p  id="475" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Network Accessory</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=491&category=Rack Accessories&slug=Rack Accessories`}>
                                            <p  id="491" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Rack Accessories</p>
                                        </Link>
                                    </li>
                                </ul>

                                <ul>
                                    <h6 className="mb-4">Server & Storage</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Servers&slug=Servers`}>
                                            <p  id="696" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Servers</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Server Accessory&slug=server accessory`}>
                                            <p  id="696" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>server accessory</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=703&category=Storage Server&slug=storage server`}>
                                            <p id="703" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>storage server</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=916&category=barebone&slug=barebones`}>
                                            <p id="916" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>barebones</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=704&category=Storage Accessory&slug=storage accessories`}>
                                            <p  id="704" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>storage accessories</p>
                                        </Link>
                                    </li>
                                </ul>
                                <ul>
                                    <h6 className="mb-4">Server & Storage</h6>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Servers&slug=Servers`}>
                                            <p  id="696" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>Servers</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=696&category=Server Accessory&slug=server accessory`}>
                                            <p  id="696" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>server accessory</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=703&category=Storage Server&slug=storage server`}>
                                            <p id="703" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>storage server</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=916&category=barebone&slug=barebones`}>
                                            <p id="916" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>barebones</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="javascript:void(0)" className="text-dark" to={`/equipment?catID=704&category=Storage Accessory&slug=storage accessories`}>
                                            <p  id="704" className="border-bottom li-hover" style={{ textTransform: "capitalize" }}>storage accessories</p>
                                        </Link>
                                    </li>
                                </ul>
                                


                            </section>
                        </ul>
                    </li>
                    
                    </ul>
                    </div>
                    </section>
                     */}
                    <Dropdown className="mt-2 bold">
                      <Dropdown.Toggle
                        className=" bold mt-1"
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "black",
                        }}
                        id="dropdown-basic"
                        // onClick={() => navigate("/brand")}
                      >
                        Brand
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ color: "black", width: "100%" }}>
                        <Dropdown.Item
                          className="bold"
                          onClick={() => navigate("/brand")}
                        >
                          United
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="bold"
                          onClick={() => navigate("/brand1")}
                        >
                          Honda
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="bold"
                          // onClick={() => navigate("/brand")}
                        >
                          Osaka
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="bold"
                          onClick={() => navigate("/brand2")}
                        >
                          United
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="bold"
                          // onClick={() => navigate("/brand")}
                        >
                          Honda
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="bold"
                          // onClick={() => navigate("/brand")}
                        >
                          Osaka
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* <a class="nav-item nav-link m-2 bold" href="#">
                      Sale
                    </a> */}
                    <a
                      class="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/usebikes")}
                    >
                      Spare Parts
                    </a>
                    <a
                      className="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/advancebooking")}
                    >
                      Advance Booking
                    </a>
                    <a
                      class="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/news")}
                    >
                      News
                    </a>
                    {/* <a class="nav-item nav-link m-2 bold" onClick={()=>navigate("/help&support")}>
                      Help & Support 
                    </a> */}

                    <a
                      class="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/aboutus")}
                    >
                      Aboutus
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Nav>

          <div className="leftDiv w-100 d-flex m-auto align-items-center ">
            <div
              className=" d-flex  header-icon w-50 "
              style={{ marginLeft: "12%", color: "black" }}
            >
              <i className="bi bi-suit-heart"></i>
              <i className="bi bi-basket3"></i>
              {/* <i className="bi bi-menu-button-wide"></i> */}
            </div>
            <div className="nav-item d-flex m-auto login dropdown bold  w-25">
              <a className="nav-item nav-link m-1 bold  d-flex ">
                <i className="fa-solid fa-user fa-2x"></i>
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
