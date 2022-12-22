import React from 'react'
import "./vendor.css"
import {useNavigate} from "react-router-dom"
import image from "../images/honda.png"
import Carousals from '../body/Carousel/carousal'

const VendorList = ({ heading, success }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navigate = useNavigate();
  return (
    <div className=" mb-5">
      <Carousals />

      <section className="vendor mt-5 mb-3">
        {heading !== false && (
          <section className="container text-center mt-4">
            <span
              className=" h2 bold"
              style={{ borderBottom: "3px solid #dc3545", color: "black" }}
            >
              {success ? success : "REGISTERED FRANCHISE"}
            </span>
            <div className={success ? "my-4" : "mx-auto my-2 service-text"}>
              {!success && (
                <span className="text-center mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate exercitationem sequi
                </span>
              )}
            </div>
          </section>
        )}

        <div
          className="d-flex flex-wrap m-auto justify-content-start shadow-sm"
          style={{ width: "82%" }}
        >
          {list.map((item, index) => (
            <div className="row col-md-4 col-sm-4 d-flex m-auto p-3 d-flex justify-content-start">
              <div
                className=" p-3 border"
                onClick={() => navigate("/vendordetailpage")}
              >
                <div class="card bg-dark text-white">
                  <img src={image} class="card-img" alt="..." />
                  <div class="card-img-overlay">
                    <h5 className="card-title text-uppercase">Roshan Bikes</h5>
                  </div>
                </div>
                <p class="card-text p-2" style={{ color: "sienna" }}>
                  <i class="fa-sharp fa-solid fa-location-dot fa-2x"></i>
                  Pearl One, MM Alam Road, Lahore, Pakistan.
                </p>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className=" card d-flex shadow-sm p-5  m-auto mt-5 bg-body rounded " style={{maxWidth:'82%'  }}>
                    <div className=" row g-0" onClick={()=>navigate("/vendordetailpage")}>
                        <div className="cardimg col-4" >
                            <img src={image} className="img-fluid rounded" alt="..."/>
                        </div>
                        <div className="col-4 card-body">
                            <div className="cardinfo">
                                <h3 className="fw-bold">Vendor Name:<span> Ahmad </span></h3>
                                <h3 className="fw-bold">Contact No. <span> 0318 89733378</span> </h3>
                                <h3 className="fw-bold">Location: <span>t.b.z colony,sahiwal,punjab,pakistan</span></h3>
                            </div>
                        </div>
                    </div>
                </div> */}
      </section>
    </div>
  );
};

export default VendorList;
