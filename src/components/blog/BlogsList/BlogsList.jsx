

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../Context/Context.js'
import { useNavigate } from 'react-router-dom';
import './bloglist.css'
import images from "../../images/card5.jpg"
// import ReactHtmP

const BlogsList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate=useNavigate()
  // const history = useHistory();
const {setBlogDetail}=useContext(GlobalContext)
  // const setBlogDetailFunc= useContext(GlobalContext);
//   const setBlogDetailFunc = (item) => {
//     setBlogDetail(item)
  
// }

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        // const response = await axios.get(`https://woo-api-apicenter.herokuapp.com/api/Blogs?per_page=9&page=${page}`);
        // console.log("testing====>", response.data)
        // setUsers([...users, ...response.data]);
        const users=[
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
            Content:"lorem!Error while loading data. Try again later.",
            conclusion:"",
            Content:"lorem!Error while loading data. Try again later.lorem!Error while loading data. Try again later."
          }
        
        ]
        setUsers(users)
        // setUsers((users) => [...users, ...response.data]);
        setErrorMsg('')
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();

  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
    //alert(page)

  };

  const AddDetailFunc = (item) => {
    console.log("detail==?",item)
    setBlogDetail(item)
    navigate(`/news/newsdetailpage`)
    // history.push(`/blogdetail?name=${item.title}&feature=1`)
  }

  const validateTitle = (title) => {
    // return title
    return title.includes('&#') ? title.substring(0, title.indexOf('&#')) : title
  }


  return (
    <div class="container">
      <div class="flex">
        {
          users.map((item, index) => <div className="p-2" key={index} onClick={(e) => AddDetailFunc(item)}>
            <div class="content ">
              <img src={item.mainImage} class="card-img-top" alt="..." />
            </div>
            <h3 className="contentTitle">{validateTitle(item.title)}</h3>
          </div>
          )}



      </div>
      <div className="load-more  d-flex justify-content-center pb-5 pt-3">
        <button onClick={() => loadMore()} className="loadMore btn-grad">
          {isLoading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default BlogsList;