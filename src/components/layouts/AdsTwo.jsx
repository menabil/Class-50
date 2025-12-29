import { Link } from "react-router-dom";
import Badge from "../Badge";
import Container from "../Container";

const AdsTwo = () => {
  return (
    <div>
      <Container>
        <div
          className={
            "relative bg-[url(/src/assets/adsTwo.png)] py-40 bg-no-repeat  bg-cover w-full"
          }
        >
          <div className="absolute top-10 left-[600px]">
            <h3 className="text-[#262626] font-dmSan font-bold text-[39px] ">
              Phone of the year
            </h3>
            <p className="text-[#262626] font-dmSan text-[16px] w-[500px] pt-[30px] pb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum..
            </p>
            <Link to={"/about"}>
              <Badge
                badgeText={"Shop Now"}
                className={"w-[190px] text-center py-4"}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdsTwo;
