import React from 'react';
import "./Category.css";
import ListItems from "./ListItems";
import ListItems1 from "./ListItems1"
import CategoryList from "./CategoryList";
import img1 from '../img/martin.jpg'
const Category = ({ blogData, array, page }) => {
    return (
        <div>
            <section className="d-flex justify-content-end align-items-center">
                {/* <div className="search search-container d-flex align-items-center">
                    <input className="search-input input-blog" type="text" placeholder="Search" aria-label="Search" />
                    <i className="fa fa-search text-muted mx-2" aria-hidden="true"></i>
                </div> */}
            </section>
            {/* <section style={{ backgroundColor:'white'}} className=" shadow-sm border">
                <p style={{fontSize:'24px', fontWeight:'700', fontFamily:'Roboto'}}  className="text-uppercase m-0 text-dark text-center py-2 ">About</p>
                <div className="about ">
                    <img  style={{ borderRadius:'50%',width:'180px', height:'150px', display:'flex', margin:'auto', paddingTop:'10px', paddingBottom:'10px'}} src={img1} />
                <div className="text-center">
                                    <span className="text span-join px-2 py-2" style={{fontSize:'16px', fontWeight:'400', fontFamily:'Roboto'}}>
                                    I’ve worked with the biggest brands on the planet: Nike, 
                                    Disney, Tiffany, Fendi,  Mercedes, Beats by Dre... 
                                    </span>
                                    <br/>
                                    <span className="span-join px-2 " style={{fontSize:'16px', fontWeight:'400', fontFamily:'Roboto', marginTop:'10px'}}> My goal with this blog is to share my knowledge of marketing with you.</span>
                                </div>
                </div>
            </section> */}
            <section className="mt-3 shadow-sm border" style={{backgroundColor:'white'}}>
                <p style={{fontSize:'20px', fontWeight:'700', fontFamily:'Roboto',}}className="text-uppercase m-0 text-dark text-center py-2">Recommended Posts</p>
                <div className="list-container ">
                    <ListItems array={array} blogData={blogData} />
                </div>
            </section>
            
            <section className="mt-3 shadow-sm border sec" style={{backgroundColor:'white'}}>
                <p style={{fontSize:'22px', fontWeight:'700', fontFamily:'Roboto',}} className="text-uppercase m-0 text-dark text-center py-2">related posts</p>
                <div className="list-container ">
                    <ListItems1 array={array} blogData={blogData} />
                </div>
            </section>
            {/* <section className="mt-3 pb-1 shadow-sm" style={{backgroundColor:'white', color:'black'}}>
                <div className="d-flex justify-content-between pb-3 px-4 py-3">
                    
                    <section >
                        
                       <h1> Disclosure</h1> <br/> 
                       <span style={{fontSize:'20px', fontFamily:'Roboto', fontWeight:'400'}}>
                         I may receive affiliate compensation when you click on links and make a purchase, 
                        at no extra cost to you. For more details please refer to our Privacy Policy as well as our Terms and Conditions.
                        </span>
                      
                    </section>
                </div>
                
                
            </section> */}
            {/* <section className="mt-4 shadow-sm">
                <p className="text-uppercase m-0 bg-danger text-white text-center py-2">Categories</p>
                <div className="list-container2 border">
                    <CategoryList />
                </div>
            </section> */}
            {
                !page === "post" &&
                <section>
                    <div className="middle-card border mt-4">
                        <div className="overlay d-flex align-items-center">
                            <div className="mx-3 w-100 my-3 text-center">
                                <h6 className="text-uppercase join-network heading-middle fw-bold">join our network today</h6>
                                <div className="text-center">
                                    <span className="span-join">
                                        Subscribe our news letter and stay<br />
                                        up-to-date with latest promotions,<br />
                                        new product and amazing sales
                                    </span>
                                </div>
                                <div className="text-center mt-2">
                                    <input className="input-email" type="email" placeholder="email" /><br />
                                    <button style={{ width: "13rem" }} className="btn mt-2 btn-method btn-danger text-capitalize">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Category;
