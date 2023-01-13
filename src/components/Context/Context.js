import React, { createContext, useEffect, useState } from 'react';

import axios from "axios";
import images from "../images/card5.jpg"
export const GlobalContext = createContext();



const MainContext = ({ children }) => {
const [getBlogData, setBlogData]=useState([])
const [backdropOpen, setOpen] = useState(false);
const [blogDetail, setBlogDetail] = useState()
const [blogsToShow, setBlogsToShow] = useState(0);
const [productBlog, setProductBlog] = useState(null)
  const [faqDisplay, setDisplay] = useState("one");
  

useEffect(()=>{
    getRelatedPost()
},[])
    // Get Blog Post Data from Backend
    const data =[
        {
          title:"Play tmcblog-podcast and discover followers on SoundCloud ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"Discover followers on SoundCloud ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"Play tmcblog-podcast and discover followers on SoundCloud ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"Discover followers on SoundCloud ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"lorem!Error while loading data. Try again later. ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:" Try again later. ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"Play tmcblog-podcast  ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"Play tmcblog-podcast and discover followers on SoundCloud ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"lorem!Error while loading data. Try again later. ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
        {
          title:"Play tmcblog-podcast and discover followers on SoundCloud ",
          mainImage:images,
          Heading:"SoundCloud ",
          Subheadings:"Discover on",
          conclusion:"",
          Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
     
        },
    ]
    const getRelatedPost = async () => {
        // startLoading();
        // const URL = `https://woo-api-apicenter.herokuapp.com/api/relatedPosts?postId=4121`;
        // const { data } = await axios.get(URL);
        // if (data) {
        //     EndLoading();
        //     setBlogData(data);
            
        // }

        //add new dummy data
        setBlogData(data)

    }
    // const setBlogDetailFunc = (item) => {
    //     setBlogDetail(item)
      
    // }
    const startLoading = () => {
        setOpen(true);
    }

    const EndLoading = () => {
        setOpen(false);
    }

    const faqDisplayChangeFunc = (view) => {
        setDisplay(view);
    }
    return (
      <GlobalContext.Provider
        value={{
          getBlogData,
          getRelatedPost,
          blogDetail,
          setBlogDetail,
          blogsToShow,
          setBlogsToShow,
          productBlog,
          setProductBlog,
          faqDisplay,
          faqDisplayChangeFunc,
          backdropOpen,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
}

export default MainContext