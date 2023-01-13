import commaNumber from "comma-number"
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { serverURL } from '../../common/api'
import { calculateRatings } from '../../common/func'
import { removeCartProducts, setCartProducts } from '../../redux/reducers/productSlice'
import TopSeller from '../home/TopSeller/TopSeller'
import SuccessStory from "../sucessStory/index"
import img1 from "./images/card5.jpg"
import "./productDetail.css"
import MostRelatedProduct from './RelatedProduct'

const ProductDetail = () => {
    const dispatch = useDispatch();
    const storeProducts = useSelector((state) => state.products.products);
    const storeCart = useSelector((state) => state.products.cart);
    const [id, setID] = useState(window.location.pathname.split('/')[2]);

    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log(id);
        storeProducts.forEach(item => {
            if (item._id === id) {
                const ratings = calculateRatings(item);
                setRating(ratings);
                setProduct(item);
            }
        });
    }, [id]);

    return (<>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <section className="product_detail mt-5 mb-5 col-10 ">
            <div className="container">
                <div>
                    <h3 className="section-heading text-uppercase bold">{product?.name}</h3>
                </div>
                <div className="res_img">
                    <div className="Product_rating">
                        <span
                            className={rating > 1 ? "fa fa-star checked" : "fa fa-star"}
                        ></span>
                        <span
                            className={rating >= 2 ? "fa fa-star checked" : "fa fa-star"}
                        ></span>
                        <span
                            className={rating >= 3 ? "fa fa-star checked" : "fa fa-star"}
                        ></span>
                        <span
                            className={rating >= 4 ? "fa fa-star checked" : "fa fa-star"}
                        ></span>
                        <span
                            className={rating === 5 ? "fa fa-star checked" : "fa fa-star"}
                        ></span>
                    </div>
                    <div className="product_img2">
                        <img className="img-fluid rounded" src={`${serverURL}${product?.productPic}`} alt="imagesss" />
                    </div>
                    <div className="product_description" style={{ textAlign: 'justify' }}>
                        <p>{product?.detail}</p>
                    </div>
                    <div className="product_table">
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    <td className="main__text-4-td bold">SKU:</td>
                                    <td className="main__text-5-td ">00776645</td>
                                </tr>
                                <tr>
                                    <td className="main__text-4-td bold">Categories:</td>
                                    <td className="main__text-5-td ">{product && product.category[0]}</td>
                                </tr>
                                <tr>
                                    <td className="main__text-4-td bold">Location: </td>
                                    <td className="main__text-5-td ">Lahore,punjab,</td>
                                </tr>
                            </table>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    <td className="main__text-4-td bold">Vendor:</td>
                                    <td className="main__text-5-td ">Auto Store</td>
                                </tr>
                                <tr>
                                    <td className="main__text-4-td bold">Delivery:</td>
                                    <td className="main__text-5-td ">In 7 days</td>
                                </tr>
                                <tr>
                                    <td className="main__text-5-td bold">Status:</td>
                                    <label style={{ color: "seaGreen", }} for="rating1" className="main__text-5-td fa fa-cube fa-2x"></label>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="product_description2 border">
                        <div className="product_price">
                            <p>{commaNumber(product?.price)} PKR</p>
                        </div>
                        <div className="product_cart">
                            <a
                                onClick={() => {
                                    if (storeCart?.some(item => item?.product?._id === id)) {
                                        dispatch(removeCartProducts(product));
                                        toast.success('Remove from cart');
                                    }
                                    else {
                                        dispatch(setCartProducts({ product, count }));
                                        toast.success('Add to cart');
                                    }
                                }}
                                className="button_cart" role="button">
                                {
                                    storeCart?.some(item => item?.product?._id === id) ? "Remove from cart" : "Add to cart"
                                }
                            </a>
                        </div>
                        <div className="product_qty ">
                            <button type="button" className="button_count m-1">Pcs
                                <input onChange={(e) => setCount(e.target.value)} className="qty m-1" type="number" defaultValue={1} min={1} />
                            </button>
                        </div>
                    </div>
                    <div className="product_wish">
                        <div className="wishlist">
                            <i className="fa-regular fa-heart"></i>
                            <h6 className="wishtext"> Add to my wish list </h6>
                        </div>
                        <div className="compare">
                            <i className="fa-solid fa-timeline"></i>
                            <h6 className="wishtext"> Compare </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_img container w-100" >
                <img className="img-fluid rounded " src={img1} alt="images" />
            </div>
        </section>
        <MostRelatedProduct
            product={product}
            serverURL={serverURL}
            setID={setID}
        />
        <SuccessStory />
        <TopSeller />
        {/* <FeaturedVendor/> */}
    </>)
}
export default ProductDetail