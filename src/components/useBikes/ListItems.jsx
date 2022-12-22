import React, { useContext } from "react";
import Pagination from "./Pagination";
import { GlobalContext } from "../Context/Context";
import { useHistory } from "react-router-dom";
import "./style.css"
const ListItems = ({heading, success}) => {
  // const { products, setProductDetail, setCartData } = useContext(GlobalContext);
  // const history = useHistory();

  // const AddDetailFunc = (item) => {
  //   setProductDetail(item);
  //   history.push(`/detailpage?name=${item.name}`);
  // };

  // const AddToCart = (item) => {
  //   let cartItems = JSON.parse(localStorage.getItem("cart"));
  //   const selectiveItems = {
  //     id: item.id,
  //     name: item.name,
  //     price: item.price,
  //     count: 1,
  //     image: item.images && item.images,
  //   };
  //   if (cartItems === null) {
  //     let cartArray = [];
  //     cartArray.push(selectiveItems);
  //     setCartData(cartArray);
  //     localStorage.setItem("cart", JSON.stringify(cartArray));
  //   } else if (cartItems) {
  //     cartItems.push(selectiveItems);
  //     setCartData(cartItems);
  //     localStorage.setItem("cart", JSON.stringify(cartItems));
  //   }
  // };
  const products = [
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: "",
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: true,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: true,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: true,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: true,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: true,
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
    {
      name: "dummy product",
      price: 129000,
      image: "../images/suzuki.png",
      Certified: true,
    },
    {
      name: "product",
      price: 119000,
      image: "../images/suzuki.png",
      Certified: false,
    },

    {
      name: "dummy bike product",
      price: 139000,
      image: "../images/suzuki.png",
      Certified: false,
    },
  ];

  return (
    <>
      <section className="text-center bygga-parent equip-parent py-3">
        {heading !== false && (
          <section className="container text-center mt-4">
            <span
              className=" h2 bold"
              style={{ borderBottom: "3px solid #dc3545", color: "black" }}
            >
              {success ? success : "USE BIKES"}
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
      </section>
      <div
        className="py-4 px-2 my-4 shadow-sm"
        style={{ backgroundColor: "white", width: "82%", margin: "auto" }}
      >
        <section className="grid-comm d-flex flex-wrap justify-content-center m-auto grid-brand-map">
          {products &&
            products.map((item, index) => {
              return (
                <section
                  key={index}
                  className="con bg-white mb-3 mx-5 shadow px-3"
                  style={{ borderRadius: "15px", width: "25%" }}
                >
                  <div
                    // onClick={(e) => AddDetailFunc(item)}
                    className="d-flex  brand-img-div-map justify-content-center align-items-center pt-3"
                  >
                    <img
                      className="brand-img-map"
                      src="https://www.atlashonda.com.pk/wp-content/uploads/2022/09/cg125-shop-red.png"
                      // src={item.images.length > 0 && item.images[0].src}
                      alt=""
                    />
                  </div>

                  <hr style={{ border: "2px solid red" }} />
                  <div className="pb-3">
                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                      <span className="text-capitalize fw-bold">
                        {item.name}
                      </span>
                      {/* <i className="fa fa-heart text-muted fa-lg"></i> */}
                    </section>
                    <section className="d-flex brand-map-name justify-content-between align-items-center">
                      <span className="fw-bold text-danger">
                        {item.price} PkR
                      </span>
                      {!item.certified ?
                        <span className="fw-bold text-success">Certified</span>
                        :""
                      }</section>
                    <p>
                      The page will reload if you make edits. You will also see
                      any lint errors in the console.{" "}
                    </p>
                    <button
                      className="btn btn-primary mt-3 btn-size"
                      // onClick={() => AddToCart(item)}
                    >
                      <i
                        className="fa fa-shopping-cart me-2"
                        aria-hidden="true"
                      ></i>
                      Add To cart
                    </button>
                  </div>
                </section>
              );
            })}
        </section>

        <Pagination />
      </div>
    </>
  );
};

export default ListItems;
