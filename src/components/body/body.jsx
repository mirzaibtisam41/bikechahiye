import commaNumber from "comma-number";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { serverURL } from "../../common/api";
import { calculateRatings } from "../../common/func";
import "../css/component.css";
import TopSeller from "../home/TopSeller/TopSeller";
import SuccessStory from "../sucessStory/index";
import BasicPagination from "../useBikes/Pagination";
import Autocomplete from "./autocomplete";
import BrandPoster from "./brandPoster/brandPoster";
import Carousels from "./Carousel/carousal";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";

const Body = () => {
  const navigate = useNavigate();
  const storeProducts = useSelector((state) => state.products.products);
  const { brands } = useSelector((state) => state.products);

  const [stateIndex, setIndex] = useState("");
  const [products, setProducts] = useState(storeProducts);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [cat, setCategory] = useState("");

  useEffect(() => {
    const _category = window.location.search.split("=")[1];
    setCategory(_category);
    const _brand = window.location.pathname
      .split("/")[2]
      .split("%20")
      .join(" ");
    filterByBrand(_brand, _category);
    setIndex(_brand);
  }, []);

  const filterByBrand = (brand, category) => {
    if (brand == "All") {
      setProducts(storeProducts);
      setIndex(-1);
    } else {
      const _filter = storeProducts?.filter(
        (item) => item.brand.toLowerCase() === brand.toLowerCase()
      );
      console.log(category);
      if (category) {
        const _filterByCatyegory = _filter?.filter(
          (item) => item?.category[0].toLowerCase() === category.toLowerCase()
        );
        setProducts(_filterByCatyegory);
      } else {
        setProducts(_filter);
      }
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const _filter = products?.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Carousels />
      <div
        className="py-5 px-4 bg-white main-brand"
        style={{ margin: "0px 90px" }}
      >
        <section className="d-flex sec-parent">
          {!loading ? (
            <>
              <div className="child_1" style={{ width: "25%" }}>
                <div style={{ textAlign: "left" }}>
                  <h2 className="bold mb-3 mt-4 main-category">All Brands</h2>
                  <div className="auto_complete">
                    <Autocomplete filterByBrand={filterByBrand} />
                  </div>
                  <div className="normal_category">
                    {brands?.map((item, index) => {
                      return (
                        <Dropdown
                          key={index}
                          className="mb-2 bold"
                          style={{
                            marginRight: "10px",
                            color: stateIndex === item?.brand ? "red" : "",
                            border:
                              stateIndex === item?.brand ? "2px solid" : "",
                          }}
                        >
                          <Dropdown.Toggle
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              border: "none",
                            }}
                            id="dropdown-basic1"
                          >
                            {item?.brand}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {item?.power?.map((power) => {
                              return (
                                <Dropdown.Item
                                  onClick={() => {
                                    setCategory("");
                                    setIndex(item?.brand);
                                    filterByBrand(item?.brand, power?.power);
                                  }}
                                >
                                  {power?.power}
                                </Dropdown.Item>
                              );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      );
                    })}
                    <button
                      className=" ml-3 btn btn-danger"
                      onClick={() => {
                        filterByBrand("All");
                      }}
                    >
                      View All Brand
                    </button>
                  </div>
                </div>
              </div>
              <div className="child_2" style={{ width: "75%" }}>
                <div
                  style={{
                    height: "100%",
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "1.5rem",
                  }}
                  className="containers border p-4"
                >
                  {_filter?.length > 0 ? (
                    _filter
                      .filter((item) => item.active === true)
                      .map((product, index) => (
                        <div
                          key={index}
                          className="product px-4 pt-4 bd-highlight bg-white b-radius border"
                        >
                          <div
                            className=" mb-auto bd-highlight"
                            style={{ height: "185px" }}
                          >
                            <img
                              className="img-fluid mb-4 b-radius"
                              src={`${serverURL}${product.productPic}`}
                              alt="Picture"
                              style={{ height: "185px" }}
                            />
                          </div>
                          <div className="bd-highlight">
                            <h5 className="bold">{product?.name}</h5>
                          </div>
                          <div
                            className="bd-highlight justify"
                            style={{ minHeight: "80px" }}
                          >
                            <span>{product?.detail?.substring(0, 100)}...</span>
                          </div>
                          <div
                            className="bd-highlight"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="m-1">
                              <span
                                className={
                                  calculateRatings(product) > 1
                                    ? "fa fa-star checked"
                                    : "fa fa-star"
                                }
                              ></span>
                              <span
                                className={
                                  calculateRatings(product) >= 2
                                    ? "fa fa-star checked"
                                    : "fa fa-star"
                                }
                              ></span>
                              <span
                                className={
                                  calculateRatings(product) >= 3
                                    ? "fa fa-star checked"
                                    : "fa fa-star"
                                }
                              ></span>
                              <span
                                className={
                                  calculateRatings(product) >= 4
                                    ? "fa fa-star checked"
                                    : "fa fa-star"
                                }
                              ></span>
                              <span
                                className={
                                  calculateRatings(product) === 5
                                    ? "fa fa-star checked"
                                    : "fa fa-star"
                                }
                              ></span>
                            </div>

                            <span
                              style={{
                                color: "seaGreen",
                                fontSize: "18px",
                                fontWeight: "bold",
                                justifyContent: "space-around",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fa fa-cube fa-1x mt-2"
                                aria-hidden="true"
                              ></i>
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
                              <h6
                                className="col m-0 bold"
                                style={{ textAlign: "left" }}
                              >
                                {commaNumber(product?.price)} PKR
                              </h6>
                              <button
                                style={{ width: "125px" }}
                                className="btn btn-danger"
                                onClick={() =>
                                  navigate(`/productdetailpage/${product._id}`)
                                }
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p
                      className="h3 text-danger w-100"
                      style={{ position: "absolute", top: "50%" }}
                    >
                      No Products Available
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  {products.length > 0 && (
                    <BasicPagination
                      total={products?.length}
                      postPerPage={postsPerPage}
                      handleChange={handleChange}
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center pb-5">
              <ClipLoader />
            </div>
          )}
        </section>
      </div>
      <FeaturedProduct
        storeProducts={storeProducts}
        serverURL={serverURL}
        loading={false}
      />
      <TopSeller />
      <SuccessStory />
      <hr />
      <BrandPoster />
    </div>
  );
};

export default Body;
