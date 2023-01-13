import {
  Autocomplete,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAllUsedBikeApi, getAllUsedBikeBySearchApi } from "../../common/api";
import Card from "./Card";
import Pagination from "./Pagination";
import "./style.css";

const ListItems = () => {
  const [products, setProdcuts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [allBrands] = useState([
    { label: "Honda" },
    { label: "United" },
    { label: "Metro" },
    { label: "Pak Hero" },
    { label: "Ravi" },
    { label: "Road Prince" },
    { label: "Super Asia" },
    { label: "Power" },
    { label: "Osaka" },
    { label: "Jolta" },
    { label: "E-Bike" },
    { label: "Suzuki" },
  ]);

  useEffect(() => {
    getUsedBikeList();
  }, []);

  const getUsedBikeList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        search ? `${getAllUsedBikeBySearchApi}/${search}` : getAllUsedBikeApi
      );
      if (data) {
        setLoading(false);
        setProdcuts(data);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error in fetching bikes ...!", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const _filter = products?.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <section className="text-center bygga-parent equip-parent py-3">
        <section className="container text-center mt-4">
          <span
            className=" h2 bold"
            style={{ borderBottom: "3px solid #dc3545", color: "black" }}
          >
            {"USED BIKES"}
          </span>
        </section>
      </section>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={allBrands}
          sx={{ width: "350px" }}
          renderInput={(params) => <TextField {...params} label="Brands" />}
          onChange={(e, v) => setSearch(v.label)}
        />
        <button
          style={{ width: "85px", marginLeft: "1rem" }}
          className="btn btn-danger"
          onClick={getUsedBikeList}
        >
          Search
        </button>
      </Container>

      {!loading && products?.length === 0 && (
        <Container className="text-danger" style={{ padding: "1rem 0px" }}>
          <Typography>No Bike Available Yet</Typography>
        </Container>
      )}

      {loading ? (
        <div className="mt-2">
          <CircularProgress style={{ color: "#dc3545" }} />
        </div>
      ) : (
        <>
          {" "}
          <Container
            className="main-use-bikes"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "1.5rem",
              marginTop: "10px",
            }}
          >
            {products?.length > 0 &&
              _filter?.map((item) => {
                return <Card key={item._id} bike={item} />;
              })}
          </Container>
          {products?.length > 0 && (
            <Container style={{ marginBottom: "15px" }}>
              <Pagination
                total={products?.length}
                postPerPage={postsPerPage}
                handleChange={handleChange}
              />
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default ListItems;
