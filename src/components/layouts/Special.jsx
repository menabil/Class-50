import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import newPro9 from "/src/assets/newPro9.png";
import newPro10 from "/src/assets/newPro10.png";
import newPro11 from "/src/assets/newPro11.png";
import newPro12 from "/src/assets/newPro12.png";

const Special = () => {
  return (
    <div className="pt-[125px] pb-[140px]">
      <Container>
        <h3 className="text-[39px] text-[#262626] font-dmSan font-bold pb-12">
         Special Offers
        </h3>
        <Flex className={"gap-x-10"}>
          <div className="w-1/4">
            <Product
              proImg={newPro9}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            <Product
              proImg={newPro10}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            <Product
              proImg={newPro11}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            <Product
              proImg={newPro12}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Special;
