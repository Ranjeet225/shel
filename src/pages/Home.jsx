import Button from "react-bootstrap/Button";
import Navbars from "../component/Navbars";
import Hero from "../component/Hero";
import FilterBar from "../component/FitterBar";
import SaloonList from "./SaloonList";
import NearBy from "./NearBy";
import PromoSection from "./PromoSection";
import Recommnded from "./Recommnded";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Hero />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              src="./public/prashant.png"
              alt="..."
              className="img-fluid w-100"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <FilterBar/>
      <SaloonList/>
      <NearBy />
      <PromoSection />
      <Recommnded />
    </div>
  );
};

export default Home;
