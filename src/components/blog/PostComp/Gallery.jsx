import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Navigate } from "react-router-dom";
import { GlobalContext } from '../../Context/Context';
import PostDetail from './PostDetail';
import './Gallery.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    height:'600px',
   
    ['@media (max-width:768px)']: { // eslint-disable-line no-useless-computed-key
        height: '450px',
        width:'auto',
        backgroundPosition:'center',
        backgroundSize:'cover'
      }
    
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
  
}));

const Gallery = ({ blogDetail}) => {
    const classes = useStyles();
    const { blogsToShow, getBlogData } = useContext(GlobalContext);
    const blog = getBlogData && getBlogData[blogsToShow];

    return (
        <div className={classes.root}>
             {!blogDetail.mainImage ? <Navigate to="/news" />:""}
            <GridList className={classes.gridList}>
                <GridListTile className="cont flex-fill w-100 h-100" >
                    <img className="images" src={blogDetail.mainImage} alt="" />
                  
                </GridListTile>
            </GridList>
            
            <div className=" w-100" style={{backgroundColor:'white'}}>
                <PostDetail productBlog={blogDetail} blog={blog}/>
            </div>
        </div>
    )
}

export default Gallery;
