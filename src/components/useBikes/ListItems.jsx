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
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsedBikeApi,
  getAllUsedBikeBySearchApi,
  getSparePartsApi,
} from "../../common/api";
import { setSparePartsProducts } from "../../redux/reducers/productSlice";
import Card from "./Card";
import Pagination from "./Pagination";
import "./style.css";

const ListItems = ({}) => {
  const dispatch = useDispatch();
  const dataType = useSelector((state) => state.products.route);
  const { brands } = useSelector((state) => state.products);
  const [products, setProdcuts] = useState([]);
  const [helpProducts, setHelpProdcuts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [allBrands, setAllBrands] = useState([]);

  useEffect(() => {
    if (dataType === "spareParts") {
      getSparePartsList();
    } else {
      getUsedBikeList();
      const _map = brands?.map((item) => {
        return { label: item?.brand };
      });
      setAllBrands(_map);
    }
  }, [dataType]);

  const getUsedBikeList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        search ? `${getAllUsedBikeBySearchApi}/${search}` : getAllUsedBikeApi
      );
      if (data) {
        setLoading(false);
        setProdcuts(data);
        setHelpProdcuts(data);
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

  const getSparePartsList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(getSparePartsApi);
      if (data) {
        setLoading(false);
        setProdcuts(data.Products);
        setHelpProdcuts(data.Products);
        dispatch(setSparePartsProducts(data.Products));
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error in fetching spare parts ...!", {
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

  const filterByTypes = () => {
    if (search === "All") {
      setProdcuts(helpProducts);
    } else {
      const filterTypes = helpProducts?.filter((item) => item.types === search);
      setProdcuts(filterTypes);
    }
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
            {dataType === "spareParts" ? "BIKES SPARE PARTS" : "USED BIKES"}
          </span>
        </section>
      </section>
      {dataType === "spareParts" ? (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search SparePart"
            variant="outlined"
            sx={{ width: "250px" }}
            // onChange={(e) => {
            //   const _filterProducts = products?.filter((item) => {
            //     return item?.name
            //       ?.toString()
            //       .toLowerCase()
            //       .includes(e.target.value.toString().toLowerCase());
            //   });
            //   setProdcuts(_filterProducts);
            // }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              { label: "All" },
              { label: "Bike Equipments" },
              { label: "Bike OutFits" },
            ]}
            sx={{ width: "250px", marginLeft: "15px" }}
            renderInput={(params) => <TextField {...params} label="Types" />}
            onChange={(e, v) => setSearch(v.label)}
          />
          <button
            disabled={search === "" ? true : false}
            style={{ width: "85px", marginLeft: "1rem" }}
            className="btn btn-danger"
            onClick={filterByTypes}
          >
            Search
          </button>
        </Container>
      ) : (
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
      )}

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
            {_filter?.length > 0 &&
              _filter?.map((item) => {
                return <Card key={item._id} bike={item} dataType={dataType} />;
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
