import NavBar from "../layouts/Navbar";
import banner from "../assets/banner.png";
import Footer from "../layouts/Footer";
import Reviews from "./Reviews";
import Carousel from "../components/Carousel";
const Homepage = () => {
 
  return (
    <div className="">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-20 h-screen">
          <NavBar styles="" />
          <div className="flex justify-center items-center h-[80%]">
            <h3 className="font-bold text-6xl text-white">Find Your Best Property</h3>
          </div>
        </div>
      </div>
      {/* <Reviews /> */}
      <Carousel />
      <Footer />
    </div>
  );
};

export default Homepage;
