import { DeleteForeverOutlined } from "@material-ui/icons";
import commaNumber from "comma-number";
import React from "react";
import Avatar from "react-avatar";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { serverURL } from "../../common/api";
import {
  removeCartProducts,
  updateCartProduct
} from "../../redux/reducers/productSlice";
import Payment from "./Payment";
import "./style.css";

const Cart = () => {
  const dispatch = useDispatch();
  const storeCart = useSelector((state) => state.products.cart);
  return (
    <React.Fragment>
      <Toaster position="top-right" reverseOrder={false} />
      <div
        className={"py-2 px-5 m-2 bg-white cart-padding"}
        style={{ minHeight: "75vh" }}
      >
        {storeCart.length === 0 ? (
          <div className="d-flex justify-content-center mt-24">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AZ826hsut4_Te3sWXtIm7EfzDi-3xKLpyA&usqp=CAU"
              alt=""
            />
          </div>
        ) : (
          <>
            <h4 className="text-center py-3 bg-white">My Cart</h4>
            <section
              className="flex justify-between mt-3 cart-container"
              style={{ justifyContent: "space-around", alignItems: "start" }}
            >
              <div>
                {storeCart?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className="flex-1 col-lg-8 bg-white px-4 py-3"
                        style={{ height: "fit-content" }}
                      >
                        <section className="d-flex cart-main mb-4 justify-content-between">
                          <div className="d-flex cart-items-parent justify-content-around align-items-center">
                            <div className="d-flex align-items-center name-section">
                              <Avatar
                                src={`${serverURL}${item?.product?.productPic}`}
                              />
                              <div>
                                <span className="name-margin">
                                  {item?.product?.name}
                                </span>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                onClick={() => {
                                  dispatch(
                                    updateCartProduct({
                                      id: item?.product?._id,
                                      op: "-",
                                    })
                                  );
                                }}
                                className="minus-btn py-1 px-3 cursor-pointer"
                              >
                                -
                              </button>

                              <section className="px-4">{item?.count}</section>

                              <button
                                onClick={() => {
                                  dispatch(
                                    updateCartProduct({
                                      id: item?.product?._id,
                                      op: "+",
                                    })
                                  );
                                }}
                                className="minus-btn py-1 px-3 cursor-pointer"
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div>
                          </div>

                          <div className="price-section">
                            <span className="text-yellow-600">
                              Rs {commaNumber(item?.product?.price)}
                            </span>
                            <span
                              onClick={() => {
                                dispatch(removeCartProducts(item?.product));
                                toast.success("Remove from cart");
                              }}
                            >
                              <DeleteForeverOutlined />
                            </span>
                          </div>
                        </section>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <Payment storeCart={storeCart} />
              </div>
            </section>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
