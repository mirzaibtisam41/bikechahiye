import axios from "axios";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllBrandsApi } from "../../../common/api";
import { setAllBrands } from "../../../redux/reducers/productSlice";
import "../../css/component.css";

const Navbars = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.products);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBrands();
  }, []);

  const getAllBrands = async () => {
    try {
      const { data } = await axios.get(getAllBrandsApi);
      if (data) {
        dispatch(setAllBrands(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-dark" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="row ">
                  <div className="navbar-nav ">
                    <a
                      className="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </a>

                    <Dropdown className="mt-2 bold">
                      <Dropdown.Toggle
                        className=" bold mt-1"
                        style={{
                          backgroundColor: "white",
                          border: "none",
                          color: "black",
                        }}
                        id="dropdown-basic"
                      >
                        Brand
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ color: "black", width: "100%" }}>
                        {brands?.map((item, index) => {
                          return (
                            <Dropdown.Item
                              key={index}
                              className="bold"
                              onClick={() => navigate(`/brand/${item?.brand}`)}
                            >
                              {item?.brand}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                    <a
                      className="nav-item nav-link m-2 bold"
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
                      className="nav-item nav-link m-2 bold"
                      onClick={() => navigate("/news")}
                    >
                      News
                    </a>
                    <a
                      className="nav-item nav-link m-2 bold"
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
              <i
                onClick={() => navigate("/cart")}
                className="bi bi-basket3"
              ></i>
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
