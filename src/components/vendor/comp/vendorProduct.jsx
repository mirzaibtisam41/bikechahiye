import React from "react";
import image from "../../images/honda.png";
import "./VendorProduct.css";
import VendorHero from "./VendorHero";
import {useNavigate} from "react-router-dom"
import MostRelatedProduct from "../../body/FeaturedProduct/FeaturedProduct";
const VendorDetail = ({ heading, success }) => {
  var list = [1, 2, 3, 4, 5, 6,7];
   const navigate=useNavigate()
  return (
    <div className="main mt-5 mb-5">
      <section>
        <VendorHero/>
      </section>
      
      {heading !== false && (
        <section className="container text-center mt-5 mb-5">
          <span
            className=" h2 bold"
            style={{ borderBottom: "3px solid #dc3545", color: "black" }}
          >
            {success ? success : "LISTED VENDOR PRODUCT"}
          </span>
          <div
            className={success ? "my-4" : "mx-auto my-2 service-text"}
        
          >
            {!success && (
              <span className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate exercitationem sequi
              </span>
            )}
          </div>
        </section>
      )}
      <section>
        <div className="col-10 m-auto">
   
      
        <div className="containers d-flex flex-wrap align-content-start">
           {list.map((item, index) => (
        <div className=" p-2"  onClick={() => navigate("/productdetailpage")}>
                <div className="card" style={{width: "20rem"}}>
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Product Name</h5>
                    <p className="card-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Error tempora
                    </p>
                    <p className="card-text fw-bold">116000 pkr</p>
                    <a className="btn btn-secondary" style={{backgroundColor:"#dc3545"}}>Buy Now</a>
                  </div>
                </div>
              </div>
              ))} 
</div>
    
          
        </div>
        <MostRelatedProduct/>
      </section>
    </div>
  );
};

export default VendorDetail;
