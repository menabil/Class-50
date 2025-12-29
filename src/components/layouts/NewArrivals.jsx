import Container from "../Container";
import Product from "../Product";
import newPro1 from "/src/assets/newPro1.png";
import newPro2 from "/src/assets/newPro2.png";
import newPro3 from "/src/assets/newPro3.png";
import newPro4 from "/src/assets/newPro4.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const NewArrivals = () => {

// fetch('https://dummyjson.com/test')
// .then(res => res.json())
// .then(console.log);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="pt-[125px] pb-[118px]">
      <Container>
        <h3 className="text-[39px] text-[#262626] font-dmSan font-bold pb-12">
          New Arrivals
        </h3>
        <div className="-mx-3">
          <Slider {...settings}>
            <div className="w-1/4">
              <Product
                className={"mx-3"}
                proImg={newPro1}
                badgeText={"New"}
                proTitle={"Basic Crew Neck Tee"}
                proPrice={"$44.00"}
                proColor={"Black"}
              />
            </div>
            <div className="w-1/4">
              <Product
                className={"mx-3"}
                proImg={newPro2}
                badgeText={"New"}
                proTitle={"Basic Crew Neck Tee"}
                proPrice={"$44.00"}
                proColor={"Black"}
              />
            </div>
            <div className="w-1/4">
              <Product
                className={"mx-3"}
                proImg={newPro3}
                badgeText={"New"}
                proTitle={"Basic Crew Neck Tee"}
                proPrice={"$44.00"}
                proColor={"Black"}
              />
            </div>
            <div className="w-1/4">
              <Product
                className={"mx-3"}
                proImg={newPro4}
                badgeText={"New"}
                proTitle={"Basic Crew Neck Tee"}
                proPrice={"$44.00"}
                proColor={"Black"}
              />
            </div>
            <div className="w-1/4">
              <Product
                className={"mx-3"}
                proImg={newPro4}
                badgeText={"New"}
                proTitle={"Basic Crew Neck Tee"}
                proPrice={"$44.00"}
                proColor={"Black"}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
