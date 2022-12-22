import React from 'react'
import "./productDetail.css"
import img1 from "./images/card5.jpg"
import SuccessStory from "../sucessStory/index"
// import FeaturedProduct  from '../body/FeaturedProduct/FeaturedProduct'
// import FeaturedVendor from '../body/FeaturedVendor/FeaturedVendor'
import TopSeller from '../home/TopSeller/TopSeller'
import MostRelatedProduct from './RelatedProduct'
 const ProductDetail = () => {
    return (<>
        <section className="product_detail mt-5 mb-5 col-10 ">
        
        <div className="container">
        
            <div>
                <h3 class="section-heading text-uppercase bold">line style bike Indicator</h3>
            </div>
            <div className="res_img">

                <div className="Product_rating">
                    
                    <label for="rating2" class="fa fa-star"></label>
                    <label for="rating3" class="fa fa-star"></label>
                    <label for="rating4" class="fa fa-star"></label>
                    <label for="rating5" class="fa fa-star"></label>
                    <label for="rating5" class="fa fa-star"></label>
                </div>
                <div className="product_img2">

                    <img className="img-fluid rounded" src={img1} alt="imagesss" />
                </div>
                <div className="product_description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quibusdam voluptatibus expedita, consequatur nisi nihil neq
                        ue molestiae maxime dolorum veniam repellat autem ullam deb
                        itis quis impedit in, animi, quam vero eligendi!
                        <br/>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quibusdam voluptatibus expedita, consequatur nisi nihil neq
                        ue molestiae maxime dolorum veniam repellat autem ullam deb
                        itis quis impedit in, animi, quam vero eligendi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quibusdam voluptatibus expedita, consequatur nisi nihil neq
                        ue molestiae maxime dolorum veniam repellat autem ullam deb
                        itis quis impedit in, animi, quam vero eligendi!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quibusdam voluptatibus expedita, consequatur nisi nihil neq
                        ue molestiae maxime dolorum veniam repellat autem ullam deb
                        itis quis impedit in, animi, quam vero eligendi!
                    </p>
                </div>
                <div class="product_table">
                    <div class="table-responsive">
                        <table class="table">
                            <tr>
                                <td class="main__text-4-td bold">SKU:</td>
                                <td class="main__text-5-td ">00776645</td>
                            </tr>
                            <tr>
                                <td class="main__text-4-td bold">Categories:</td>
                                <td class="main__text-5-td ">Headlights</td>
                            </tr>
                            <tr>
                                <td class="main__text-4-td bold">Location: </td>
                                <td class="main__text-5-td ">Lahore,punjab,</td>
                            </tr>
                        </table>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <tr>
                                <td className="main__text-4-td bold">Vendor:</td>
                                <td class="main__text-5-td ">Auto Store</td>
                            </tr>
                            <tr>
                                <td className="main__text-4-td bold">Delivery:</td>
                                <td className="main__text-5-td ">In 7 days</td>
                            </tr>
                            <tr>
                                <td className="main__text-5-td bold">Status:</td>
                                {/* <td className="main__text-5-td" style={{ color: "seaGreen",}}> */}
                                <label style={{ color: "seaGreen",}} for="rating1" class="main__text-5-td fa fa-cube fa-2x"></label>
                                {/* </td> */}
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="product_description2 border">
                    <div className="product_price">
                        <p>116000.00 PKR</p>
                    </div>
                    <div className="product_cart">
                        <a className="button_cart" href="#" role="button">Add to cart</a>
                    </div>
                    <div className="product_qty ">
                        <button type="button" className="button_count m-1">Pcs
                            <input className="qty m-1" type="number" min="1" />
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
   <MostRelatedProduct/>
   <SuccessStory/>
   <TopSeller/>
   {/* <FeaturedVendor/> */}
   </> )
}
export default ProductDetail