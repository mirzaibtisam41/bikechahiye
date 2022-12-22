import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
// import { GlobalContext } from "../Context/Context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    display: "flex",
    justifyContent: "center",
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
//   const { gettingChangeProducts } = useContext(GlobalContext);
//   const handleChange = (event, value) => {
//     gettingChangeProducts(value);
//   };

  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(150 / 15)}
        color="secondary"
        // onChange={handleChange}
      />
    </div>
  );
}
