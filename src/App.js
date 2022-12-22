// import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import "./App.css";
import Headers from "./components/header/index";
import Blogs from "./components/blog/Blogs";
import Post from "./components/blog/PostComp/Post";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Policy from "./components/policy/policy";
import ProductDetail from "./components/productDetail/productDetail";
import FAQ from "./components/FAQ/index"
import MainContext from "./components/Context/Context";
import VendorList from "./components/vendor/vendorList";
import VendorProduct from "./components/vendor/comp/vendorProduct";
import NotFound from "./utiles/NotFound"
import BookingForm from "./components/booking/index";
import Home from "./components/home/index"
import UseBikes from "./components/useBikes/index"
import Backdrop from "./components/backdrop/BackDrop";
import AboutUs from "./components/aboutus/index";
function App() {
  return (
    <div className="App">
      <MainContext>
        <Router>
          <Headers />
          <Backdrop />
          <Routes>
            <Route path="/news" element={<Blogs />} />
            <Route exact path="/news/newsdetailpage" element={<Post />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/help&support" element={<FAQ />} />
            <Route path="/productdetailpage" element={<ProductDetail />} />
            <Route path="/vendorlist" element={<VendorList />} />
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Body />} />
            <Route path="/brand1" element={<Body />} />
            <Route path="/brand2" element={<Body />} />
            <Route path="/vendordetailpage" element={<VendorProduct />} />
            <Route path="/advancebooking" element={<BookingForm />} />
            <Route path="/usebikes" element={<UseBikes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <a
            href="https://wa.me/9203067003056"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp fa-2x"></i>
            {/* <i class="fa fa-whatsapp whatsapp-icon"></i> */}
          </a>
          <Footer />
        </Router>
      </MainContext>
    </div>
  );
}

export default App;
