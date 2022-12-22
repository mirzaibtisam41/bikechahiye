// import React from 'react';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Carousel_3 from '../images/carousel-3.jpg'
import Carousel_3 from "../images/card5.jpg";
import BrandPoster from "./brandPoster/brandPoster";
import SuccessStory from "../sucessStory/index";
import { Row, Col } from "react-bootstrap";
import "../css/component.css";
import Carousels from "./Carousel/carousal";

import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
// import FeaturedVendor from "./FeaturedVendor/FeaturedVendor";
import TopSeller from "../home/TopSeller/TopSeller";
import BasicPagination from "../useBikes/Pagination";
const Body = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);
  var products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div >
      {/* ///////////// */}
      <Carousels />
      {/* /////////////////// */}
      <div className="section-2 p-4 bg-white">
        <div className="row  d-flex justify-content-center">
          {/* Reduce the col size 11 to 10 */}
          <div className="col-10 d-flex justify-content-center">
            <div className="row justify">
              <Row>
                <Col lg={2} md={4} sm={12}>
                  <div className="col m-3 bold justify pb-2">
                    <h2 className="bold mb-3 mt-4">All Brand</h2>
                    <h5
                      className="m-3  bold"
                      style={{
                        color: index === 1 ? "red" : "",
                        border: index === 1 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(1)}
                    >
                      Honda
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 2 ? "red" : "",
                        border: index === 2 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(2)}
                    >
                      United
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 3 ? "red" : "",
                        border: index === 3 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(3)}
                    >
                      Metro
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 4 ? "red" : "",
                        border: index === 4 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(4)}
                    >
                      Pak Hero
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 5 ? "red" : "",
                        border: index === 5 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(5)}
                    >
                      Ravi
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 6 ? "red" : "",
                        border: index === 6 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(6)}
                    >
                      Road Prince
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 7 ? "red" : "",
                        border: index === 7 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(7)}
                    >
                      Super Asia
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 8 ? "red" : "",
                        border: index === 8 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(8)}
                    >
                      Power
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 9 ? "red" : "",
                        border: index === 9 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(9)}
                    >
                      Osaka
                    </h5>
                    <h5
                      className="m-3 bold"
                      style={{
                        color: index === 10 ? "red" : "",
                        border: index === 10 ? "2px solid" : "",
                      }}
                      onClick={() => setIndex(10)}
                    >
                      Jolta
                    </h5>

                    <button
                      className="p-3 m-3 mt-4 d-flex align-items-center bold"
                      style={{
                        height: "40px",
                        backgroundColor: "white",
                        border: "2px solid red",
                        borderRadius: "10px",
                      }}
                    >
                      View All Brand
                    </button>
                  </div>
                </Col>
                <Col
                  lg={10}
                  md={8}
                  className="containers d-flex flex-wrap border justify-content-start"
                >
                  {products.map((product) => (
                    <div
                    style={{width: "20rem"}}
                      onClick={() => navigate("/productdetailpage")}
                      className="product col-md-3  m-4 p-3 bd-highlight bg-white b-radius border"
                    >
                      <div className=" mb-auto bd-highlight">
                        <img className="img-fluid mb-4 b-radius"
                          src={Carousel_3}
                          alt="Picture"
                        />
                      </div>
                      <div className="bd-highlight">
                        <h5 className="bold">Product Title</h5>
                      </div>
                      <div className="bd-highlight">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <div
                        className="bd-highlight"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="m-1">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </div>

                        <span
                          style={{
                            color: "seaGreen",
                            fontSize: "18px",
                            fontWeight: "bold",
                            justifyContent:"space-around",
                            display:"flex",
                            
                          
                          }}
                        >
                          <i className="fa fa-cube fa-1x mt-2" aria-hidden="true"></i>
                          <span className="m-1">inStock</span>
                         
                        </span>
                      </div>

                      <div className=" d-flex justify-content-between">
                        <span className="bold">
                          Location :
                          <span style={{ color: "red" }}> Lahore </span>{" "}
                        </span>

                        <span
                          className="bold"
                          style={{ color: "green", fontSize: "12px" }}
                        >
                          <span icon="fa-solid fa-cubes"> </span>
                        </span>
                      </div>
                      <div className="bd-highlight">
                        <div className="row mt-4 d-flex align-items-center">
                          <h6 className="col m-0 bold">116000.00 PKR</h6>
                          <button className="p-1 bold buy-now">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                
                </Col>
                
              </Row>
              {/* <div className="load-more  d-flex justify-content-center mb-5 mt-3">
        <button  className="loadMore btn-grad">
         Load More
        </button>
      </div> */}
              {/*//////////////*/}
              <BasicPagination/>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////// */}
      <FeaturedProduct />
      {/* /////////////////////// */}
      <TopSeller />
      {/* ///////////////////// */}
      <SuccessStory />
      {/* //////////// */}
      <hr />
      {/* ///////////////// */}
      <BrandPoster />
    </div>
  );
};

export default Body;
