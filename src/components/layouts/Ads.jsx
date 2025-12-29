import { Link } from "react-router-dom";
import Container from "../Container";
import Images from "../Images";
import ads1 from "/src/assets/Ads1.jpg";
import ads2 from "/src/assets/Ads2.png";
import ads3 from "/src/assets/Ads3.jpg";

const Ads = () => {
  return (
    <div className="pt-[140px]">
      <Container>
        <div className="flex gap-x-8 ">
          <div className="w-[50%]">
            <Link to={"about"}>
              <Images imgSrc={ads1} className={"w-full"} />
            </Link>
          </div>
          <div className="w-[50%] ">
            <div className="pb-8">
              <Link to={"about"}>
                <Images imgSrc={ads2} className={"w-full"} />
              </Link>
            </div>
            <div className="">
              <Link to={"about"}>
                <Images imgSrc={ads3} className={"w-full"} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ads;
