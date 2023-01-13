import { CircularProgress } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { getTopSellersApi, serverURL } from "../../../common/api";

const TopSeller = ({ heading, success }) => {
  const [seller, setSeller] = useState([]);
  const [loading, setLoading] = useState(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  useEffect(() => {
    getTopSellers();
  }, []);

  const getTopSellers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(getTopSellersApi);
      if (data) {
        setLoading(false);
        setSeller(data);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="mt-5 mb-5 ">
      {heading !== false && (
        <section className="container text-center mt-4">
          <span
            className=" h2 bold"
            style={{ borderBottom: "3px solid #dc3545", color: "black" }}
          >
            {success ? success : "TOP SELLER"}
          </span>
        </section>
      )}
      {loading ? (
        <div className="mt-3">
          <CircularProgress style={{ color: "#dc3545" }} />
        </div>
      ) : (
        <section className="mt-5 border container services-page card-page shadow-md py-2 ">
          <div className="carousel-wrapper w-100">
            <Carousel breakPoints={breakPoints}>
              {seller
                ?.filter((item) => item?.featuredVendor === true)
                ?.map((item, index) => {
                  return (
                    <div key={index} className="card mx-2">
                      <img
                        style={{ height: "235px" }}
                        className="card-img-top"
                        src={`${serverURL}${item?.image}`}
                        alt="Card cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item?.shopName}</h5>
                        <section className="card-p">
                          <h5 className="text-danger bold">Contact:</h5>
                          <span className="card-text">
                            <span className="text-success bold">Phone: </span>
                            {item?.phone}
                          </span>
                          <p className="card-text">
                            <span className="text-success bold">Email: </span>
                            {item?.email}
                          </p>
                          <div className="text-secondary">
                            <span>Registered- </span>
                            {moment(item?.createdAt).format("LL")}
                          </div>
                        </section>
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </section>
      )}
    </div>
  );
};

export default TopSeller;
