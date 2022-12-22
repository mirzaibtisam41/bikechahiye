import React, { useContext } from 'react';
import { Row, Col } from "react-bootstrap";
import Gallery from './Gallery';
import Category from '../Category/Category';
import { GlobalContext } from "../../Context/Context.js";
import PostComment from './PostComment';
import RelatedBlogs from '../RelatedBlogs'

const Post = () => {
    const { getBlogData, blogDetail } = useContext(GlobalContext);
  console.log("hshshshhshsyuuu", blogDetail)
    return (<>
        <div className=" pt-5 postbody">
            
            <section className="container">
                <Row>
                    <Col lg={9} className="p-2">
                        <Gallery blogData={getBlogData} blogDetail={blogDetail} />
                        {/* <PostComment/> */}
                    </Col>
                    <Col lg={3} className="p-2">
                        <Category page="post" blogData={getBlogData} />
                    </Col>
                </Row>
                
            </section>
            {/* <section className="container">
                        <RelatedBlogs/>
                        
            </section> */}
        </div>
        {/* <div className="container">
                      
                        <About/>
                  
            </div>
            <div className="postbody">
                      
                      <Contact/>
                  
            </div> */}
    </>)
}

export default Post;
