import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import { FaPlus } from "react-icons/fa";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { RiLayoutGridFill } from "react-icons/ri";
import { TiThList } from "react-icons/ti";
import Product from "../Product";
import newPro1 from "/src/assets/newPro1.png";
import newPro7 from "/src/assets/newPro7.png";
import newPro11 from "/src/assets/newPro11.png";
import newPro12 from "/src/assets/newPro12.png";
import newPro10 from "/src/assets/newPro10.png";
import newPro8 from "/src/assets/newPro8.png";
import newPro9 from "/src/assets/newPro9.png";
import newPro13 from "/src/assets/newPro13.png";
import newPro14 from "/src/assets/newPro14.png";

const Shop = () => {
  return (
    <div className="pt-[225px]">
      <Container>
        <div className="pb-[130px]">
          <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
            Products
          </h3>
          <p className="text-[#767676] text-sm font-dmSan">Home > Products</p>
        </div>
        <Flex className={"items-start"}>
          <div className="w-[30%]">
            <div className="pb-[53px]">
              <h3 className="text-[#262626] text-[20px] font-dmSan font-bold pb-[35px]">
                Shop by Category
              </h3>
              <Flex
                className={
                  "justify-between border-[#F0F0F0] border-b pb-4 mb-5"
                }
              >
                <p className="text-[#767676] text-[16px] font-dmSan">
                  Category 1
                </p>
                <p className="text-[#767676]">
                  <FaPlus />
                </p>
              </Flex>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan">
                  Category 2
                </p>
              </div>
              <Flex
                className={
                  "justify-between border-[#F0F0F0] border-b pb-4 mb-5"
                }
              >
                <p className="text-[#767676] text-[16px] font-dmSan">
                  Category 3
                </p>
                <p className="text-[#767676]">
                  <FaPlus />
                </p>
              </Flex>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan">
                  Category 4
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 "}>
                <p className="text-[#767676] text-[16px] font-dmSan">
                  Category 5
                </p>
              </div>
            </div>

            <div className="pb-[53px]">
              <Flex className={"justify-between pb-[35px]"}>
                <h3 className="text-[#262626] text-[20px] font-dmSan font-bold">
                  Shop by Category
                </h3>
                <p className="text-[#262626] text-3xl">
                  <MdOutlineArrowDropUp />
                </p>
              </Flex>
              <Flex className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#000000] text-2xl">
                  <GoDotFill />
                </p>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Color 1
                </p>
              </Flex>
              <Flex className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#FF8686] text-2xl">
                  <GoDotFill />
                </p>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Color 2
                </p>
              </Flex>
              <Flex className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#7ED321] text-2xl">
                  <GoDotFill />
                </p>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Color 3
                </p>
              </Flex>
              <Flex className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#B6B6B6] text-2xl">
                  <GoDotFill />
                </p>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Color 4
                </p>
              </Flex>
              <Flex className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#15CBA5] text-2xl">
                  <GoDotFill />
                </p>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Color 5
                </p>
              </Flex>
            </div>
            <div className="pb-[53px]">
              <Flex className={"justify-between pb-[35px]"}>
                <h3 className="text-[#262626] text-[20px] font-dmSan font-bold">
                  Shop by Brand
                </h3>
                <p className="text-[#262626] text-3xl">
                  <MdOutlineArrowDropUp />
                </p>
              </Flex>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Brand 1
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Brand 2
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Brand 3
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Brand 4
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  Brand 5
                </p>
              </div>
            </div>

            <div className="pb-[53px]">
              <div className="pb-[35px]">
                <h3 className="text-[#262626] text-[20px] font-dmSan font-bold">
                  Shop by Category
                </h3>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  $0.00 - $9.99
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  $10.00 - $19.99
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  $20.00 - $29.99
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  $30.00 - $39.99
                </p>
              </div>
              <div className={" border-[#F0F0F0] border-b pb-4 mb-5"}>
                <p className="text-[#767676] text-[16px] font-dmSan pl-2">
                  $40.00 - $69.99
                </p>
              </div>
            </div>
          </div>

          <div className="w-[70%] pl-10">
            <Flex className={"justify-between pb-[60px]"}>
              <div className="flex">
                <div className="p-2.5 mr-5 text-2xl bg-[#262626] text-white">
                  <RiLayoutGridFill />
                </div>
                <div className="p-2.5 mr-5 text-2xl border-[#F0F0F0] border text-[#737373]">
                  <TiThList />
                </div>
              </div>

              <div className="flex items-center">
                <p className="text-[#767676] text-[16px] font-dmSan pr-3.5">
                  Sort by:
                </p>
                <select className="border border-[#F0F0F0] outline-0 text-[#767676] pr-[120px] mr-7 pl-4 py-2">
                  <option>Featured</option>
                </select>

                <p className="text-[#767676] text-[16px] font-dmSan pr-3.5">
                  Show:
                </p>
                <select className="border border-[#F0F0F0] outline-0 text-[#767676] pr-[60px] pl-4 py-2">
                  <option>36</option>
                </select>
              </div>
            </Flex>

            <div className="pb-[50px]">
              <Flex className={"gap-x-8 pb-[50px]"}>
                <div className="w-1/3">
                  <Product
                    proImg={newPro7}
                    badgeText={"New"}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro11}
                    badgeText={"-10%"}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro10}
                    badgeText={""}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
              </Flex>
              <Flex className={"gap-x-8 pb-[50px]"}>
                <div className="w-1/3">
                  <Product
                    proImg={newPro9}
                    badgeText={""}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro13}
                    badgeText={"New"}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro8}
                    badgeText={""}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
              </Flex>
              <Flex className={"gap-x-8 pb-[50px]"}>
                <div className="w-1/3">
                  <Product
                    proImg={newPro12}
                    badgeText={"-10%"}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro10}
                    badgeText={"-15%"}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro9}
                    badgeText={"-10%"}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
              </Flex>
              <Flex className={"gap-x-8"}>
                <div className="w-1/3">
                  <Product
                    proImg={newPro14}
                    badgeText={""}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro1}
                    badgeText={""}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
                <div className="w-1/3">
                  <Product
                    proImg={newPro12}
                    badgeText={""}
                    proTitle={"Basic Crew Neck Tee"}
                    proPrice={"$44.00"}
                    proColor={"Black"}
                  />
                </div>
              </Flex>
            </div>
            <Flex className={"justify-between pb-[42px]"}>
              <div className="flex">
                <div className=" px-[15px] py-[9px] mr-4 text-xl bg-[#262626] text-white">
                  1
                </div>
                <div className="px-3.5 py-2 mr-4 text-xl border-[#F0F0F0] border text-[#737373]">
                  2
                </div>
                <div className="px-3.5 py-2 mr-4 text-xl border-[#F0F0F0] border text-[#737373]">
                  3
                </div>
                <div className="px-3.5 py-2 mr-4 text-xl border-[#F0F0F0] border text-[#737373]">
                  4
                </div>
                <div className="px-3.5 py-2 mr-4 text-xl border-none text-[#737373]">
                  ...
                </div>
                <div className="px-3.5 py-2 mr-4 text-xl border-[#F0F0F0] border text-[#737373]">
                  10
                </div>
              </div>
              <div className="">
                <p className="text-[#767676] text-[16px] font-dmSan pr-3.5">
                  Products from 1 to 12 of 80
                </p>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
