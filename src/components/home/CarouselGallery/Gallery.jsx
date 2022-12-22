import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import pic1 from "../../images/honda.png";
import pic2 from "../../images/qingqi.png";
import pic3 from "../../images/carousel-2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  const tileData = [
    {
      img: pic1,
      title: "Image",
      author: "author",
    },
    {
      img: pic2,
      title: "Image",
      author: "author",
    },
    {
      img: pic3,
      title: "Image",
      author: "author",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <GridList className={classes.gridList} style={{}}>
          {tileData.map((tile) => (
            <GridListTile className="flex-fill mb-1" key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        {/* <div className="mt-2">
          <GridList>
            <GridListTile className="flex-fill">
              <img src={pic3} alt="" />
              <GridListTileBar
                title="rerereer"
                subtitle={<span>by:fdfdffd</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about `}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          </GridList>
        </div> */}
      </div>
    </>
  );
}
