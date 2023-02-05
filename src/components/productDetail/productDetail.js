import commaNumber from "comma-number"
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { serverURL } from '../../common/api'
import { calculateRatings } from '../../common/func'
import { removeCartProducts, removeWishListProducts, setCartProducts, setWishListProducts } from '../../redux/reducers/productSlice'
import TopSeller from '../home/TopSeller/TopSeller'
import SuccessStory from "../sucessStory/index"
import "./productDetail.css"
import MostRelatedProduct from './RelatedProduct'
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const storeProducts = useSelector((state) => state.products.products);
    const storeCart = useSelector((state) => state.products.cart);
    const storeWishList = useSelector((state) => state.products.wishList);
    const storeSpareParts = useSelector((state) => state.products.spareParts);

    const [id, setID] = useState(window.location.pathname.split('/')[2]);
    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(null);
    const [count, setCount] = useState(1);
    const [activePic, setActivePic] = useState(0);

    useEffect(() => {
        if (window.location.search) {
            storeSpareParts.forEach(item => {
                if (item._id === id) {
                    // const ratings = calculateRatings(item);
                    // setRating(ratings);
                    setProduct(item);
                }
            });
        }
        else {
            storeProducts.forEach(item => {
                if (item._id === id) {
                    const ratings = calculateRatings(item);
                    setRating(ratings);
                    setProduct(item);
                }
            });
        }
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
                    {
                        window.location.search ?
                            <div className="product_img2">
                                <div className="img-pic-mbl">
                                    <LazyLoadImage effect="blur" className="img-pic-mbl rounded" src={`${serverURL}${product?.partPic[activePic]}`} alt="image" />
                                </div>
                                <section className="mt-3 d-flex justify-content-center">
                                    {
                                        product?.partPic?.map((item, index) => {
                                            return <div className="p-1 mx-2 rounded"
                                                style={{
                                                    border: activePic === index ? '1px solid red' : null
                                                }}
                                            >
                                                <LazyLoadImage effect="blur"
                                                    key={index}
                                                    onClick={() => setActivePic(index)}
                                                    className="img-fluid rounded border"
                                                    src={`${serverURL}${item}`}
                                                    alt="image"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        objectFit: 'fill'
                                                    }}
                                                />
                                            </div>
                                        })
                                    }
                                </section>
                            </div>
                            :
                            <div className="product_img2">
                                <div className="img-pic-mbl">
                                    <LazyLoadImage effect="blur" className="img-pic-mbl rounded" src={`${serverURL}${product?.productPic[activePic]}`} alt="image" />
                                </div>
                                <section className="mt-3 d-flex justify-content-center">
                                    {
                                        product?.productPic?.map((item, index) => {
                                            return <div className="p-1 mx-2 rounded"
                                                style={{
                                                    border: activePic === index ? '1px solid red' : null
                                                }}
                                            >
                                                <LazyLoadImage effect="blur"
                                                    key={index}
                                                    onClick={() => setActivePic(index)}
                                                    className="img-fluid rounded border"
                                                    src={`${serverURL}${item}`}
                                                    alt="image"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        objectFit: 'fill'
                                                    }}
                                                />
                                            </div>
                                        })
                                    }
                                </section>
                            </div>
                    }
                    <div className="product_description" style={{ textAlign: 'justify' }}>
                        <p>{product?.detail}</p>
                    </div>
                    <div className="product_table">
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    {
                                        window.location.search ? <>
                                            <td className="main__text-4-td bold">Brand Name:{`${" "}`}</td>
                                            <td className="main__text-5-td ">{product?.brand}</td>
                                        </>
                                            : <>
                                                <td className="main__text-4-td bold">SKU:</td>
                                                <td className="main__text-5-td ">00776645</td>
                                            </>
                                    }
                                </tr>
                                <tr>
                                    <td className="main__text-4-td bold">Categories:</td>
                                    {
                                        window.location.search ?
                                            <td className="main__text-5-td ">{product && product.category}</td>
                                            :
                                            <td className="main__text-5-td ">{product && product.category[0]}</td>
                                    }
                                </tr>
                                <tr>
                                    {
                                        window.location.search ?
                                            <>
                                                <td className="main__text-4-td bold">Available: </td>
                                                <td className="main__text-5-td ">{product?.active ? 'Yes' : 'No'}</td>
                                            </>
                                            :
                                            <>
                                                <td className="main__text-4-td bold">Location: </td>
                                                <td className="main__text-5-td ">Lahore,punjab,</td>
                                            </>
                                    }
                                </tr>
                            </table>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <tr>
                                    {
                                        window.location.search ? <>
                                            <td className="main__text-4-td bold">Discount:</td>
                                            <td className="main__text-5-td ">{product?.discount} PKR</td>
                                        </>
                                            : <>
                                                <td className="main__text-4-td bold">Vendor:</td>
                                                <td className="main__text-5-td ">Auto Store</td>
                                            </>
                                    }
                                </tr>
                                <tr>
                                    <td className="main__text-4-td bold">Delivery:</td>
                                    <td className="main__text-5-td ">In 7 days</td>
                                </tr>
                                <tr>
                                    {
                                        window.location.search ?
                                            <>
                                                <td className="main__text-5-td bold">Type:</td>
                                                <td className="main__text-5-td ">{product?.types}</td>
                                            </>
                                            :
                                            <>
                                                <td className="main__text-5-td bold">Status:</td>
                                                <label style={{ color: "seaGreen", }} for="rating1" className="main__text-5-td fa fa-cube fa-2x"></label>
                                            </>
                                    }
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
                                className="btn text-uppercase btn-cart"
                                style={{
                                    backgroundColor: '#dc3545',
                                    color: 'white'
                                }}
                                role="button">
                                {
                                    storeCart?.some(item => item?.product?._id === id) ? "Remove from cart" : "Add to cart"
                                }
                            </a>
                        </div>
                        <div className="product_qty ">
                            <button type="button" className="button_count">Pcs
                                <input onChange={(e) => setCount(e.target.value)} className="qty m-1" type="number" defaultValue={1} min={1} />
                            </button>
                        </div>
                    </div>
                    <div className="product_wish">
                        <div className="wishlist">
                            <section className="d-flex" onClick={() => {
                                if (storeWishList?.some(item => item?._id === id)) {
                                    dispatch(removeWishListProducts(product));
                                    toast.success('Remove from wishlist');
                                }
                                else {
                                    dispatch(setWishListProducts(product));
                                    toast.success('Add to wishlist');
                                }
                            }}>
                                <i className="fa-regular fa-heart"
                                    style={{
                                        color: storeWishList?.some(item => item?._id === id) ? 'red' : null
                                    }}
                                ></i>
                                <h6 className="wishtext">
                                    {
                                        storeWishList?.some(item => item?._id === id) ? "Remove from my wishlist" : "Add to my wishlist"
                                    }
                                </h6>
                            </section>
                        </div>
                        <div className="compare">
                            <i className="fa-solid fa-timeline"></i>
                            <h6 className="wishtext"> Compare </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_img container" >
                <section className="img-parent">
                    {
                        window.location.search ?
                            <LazyLoadImage effect="blur" className="img-pic rounded" src={`${serverURL}${product?.partPic[activePic]}`} alt="images" />
                            :
                            <LazyLoadImage effect="blur" className="img-pic rounded" src={`${serverURL}${product?.productPic[activePic]}`} alt="images" />
                    }
                </section>
                <section className="mt-3 d-flex justify-content-evenly">
                    {
                        window.location.search ?
                            product?.partPic?.map((item, index) => {
                                return <div className="p-1 mx-2 rounded"
                                    style={{
                                        border: activePic === index ? '1px solid red' : null
                                    }}
                                >
                                    <LazyLoadImage effect="blur"
                                        key={index}
                                        onClick={() => setActivePic(index)}
                                        className="img-fluid rounded border"
                                        src={`${serverURL}${item}`}
                                        alt="image"
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            objectFit: 'fill'
                                        }}
                                    />
                                </div>
                            })
                            :
                            product?.productPic?.map((item, index) => {
                                return <div className="p-1 mx-2 rounded"
                                    style={{
                                        border: activePic === index ? '1px solid red' : null
                                    }}
                                >
                                    <LazyLoadImage effect="blur"
                                        key={index}
                                        onClick={() => setActivePic(index)}
                                        className="img-fluid rounded border"
                                        src={`${serverURL}${item}`}
                                        alt="image"
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            objectFit: 'fill'
                                        }}
                                    />
                                </div>
                            })
                    }
                </section>
            </div>
        </section>
        <MostRelatedProduct
            product={product}
            serverURL={serverURL}
            setID={setID}
        />
        <SuccessStory />
        <TopSeller />
    </>)
}
export default ProductDetail