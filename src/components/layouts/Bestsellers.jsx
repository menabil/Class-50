import { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import newPro5 from "/src/assets/newPro5.png";
import newPro6 from "/src/assets/newPro6.png";
import newPro7 from "/src/assets/newPro7.png";
import newPro8 from "/src/assets/newPro8.png";
import axios from "axios";

const Bestsellers = () => {
  let [allData, setData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get("https://dummyjson.com/products");
      setData(data.data.products);
    }
    alldatas();
  });
  return (
    <div className="pb-[130px]">
      <Container>
        <h3 className="text-[39px] text-[#262626] font-dmSan font-bold pb-12">
          Our Bestsellers
        </h3>
        <Flex className={"gap-x-10"}>
          <div className="w-1/4">
            <Product
              proImg={newPro5}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            <Product
              proImg={newPro6}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            <Product
              proImg={newPro7}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            <Product
              proImg={newPro8}
              badgeText={"New"}
              proTitle={"Basic Crew Neck Tee"}
              proPrice={"$44.00"}
              proColor={"Black"}
            />
          </div>
          <div className="w-1/4">
            {allData.map((item) => (
               <Product
              proImg={item.thumbnail}
              badgeText={item.tags}
              proTitle={item.title}
              proPrice={item.price}
              proColor={"Black"}
            />
            ))}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Bestsellers;
