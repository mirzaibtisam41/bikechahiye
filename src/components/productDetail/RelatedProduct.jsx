import React from "react";
import pic from "../images/card5.jpg";
import Carousel from "react-elastic-carousel";

const MostRelatedProduct = ({ heading, success }) => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="mt-5 mb-5 " >
      {heading !== false && (
        <section className="container text-center mt-4">
          <span
            className=" h2 bold"
            style={{ borderBottom: "3px solid #dc3545", color: "black" }}
          >
            {success ? success : "MOST RELATED PRODUCT"}
          </span>
          <div
            className={success ? "my-4" : "mx-auto my-2 service-text"}
            style={{ width: "27rem" }}
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
      <section className=" border container services-page card-page shadow-md py-2 ">
      <div className="carousel-wrapper w-100">
        <Carousel breakPoints={breakPoints}>
          {array.map((item, index) => {
            return (
              <div key={index} className="card mx-2">
                <img className="card-img-top" src={pic} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Product Title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <div className="row bd-highlight">
                    <i class="col-2 bi bi-geo-alt"></i>
                    <p className="col">Gulberg, Lahore</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        </div>
      </section>
    </div>
  );
};

export default MostRelatedProduct;