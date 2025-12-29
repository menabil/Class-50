import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <Link to={"/about"}>
          <div className="bg-[url(/src/assets/banner.png)] py-75 bg-no-repeat bg-center bg-cover border-b-2 border-[#F0F0F0]"></div>
        </Link>
        <Link to={"/about"}>
          <div className="bg-[url(/src/assets/banner.png)] py-75 bg-no-repeat bg-center bg-cover border-b-2 border-[#F0F0F0]"></div>
        </Link>
        <Link to={"/about"}>
          <div className="bg-[url(/src/assets/banner.png)] py-75 bg-no-repeat bg-center bg-cover border-b-2 border-[#F0F0F0]"></div>
        </Link>
      </Slider>

      <div className="py-[25px] border-b-2 border-[#F0F0F0]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center">
              <PiNumberTwoBold className="text-3xl" />
              <p className="text-[#6D6D6D] font-dmSan text-4 pl-1">
                Two years warranty
              </p>
            </div>
            <div className="flex items-center">
              <FaTruck className="text-2xl" />
              <p className="text-[#6D6D6D] font-dmSan text-4 pl-3">
                Free shipping
              </p>
            </div>
            <div className="flex items-center">
              <FaUndoAlt className="text-xl" />
              <p className="text-[#6D6D6D] font-dmSan text-4 pl-3">
                Return policy in 30 days
              </p>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
