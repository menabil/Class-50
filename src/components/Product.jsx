import Badge from "./Badge";
import Images from "../components/Images";
import { FaHeart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { IoCart } from "react-icons/io5";
import Flex from "./Flex";

const Product = ({
  proImg,
  badgeText,
  proTitle,
  proPrice,
  proColor,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <div className={"relative group"}>
        <Badge badgeText={badgeText} className={"absolute top-5 left-5"} />
        <Images imgSrc={proImg} />
        <div className="bg-white py-[25px] px-[30px] absolute bottom-0 left-0 w-full opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 duration-500">
          <Flex className={"justify-end"}>
            <h4 className="text-[#767676] text-[16px] font-dmSan pr-4 hover:text-[#262626] hover:font-bold duration-300 cursor-pointer">
              Add to Wish List
            </h4>
            <FaHeart />
          </Flex>
          <Flex className={"justify-end"}>
            <h4 className="text-[#767676] text-[16px] font-dmSan pr-4 py-5 hover:text-[#262626] hover:font-bold duration-300 cursor-pointer">
              Compare
            </h4>
            <TbRefresh />
          </Flex>
          <Flex className={"justify-end"}>
            <h4 className="text-[#767676] text-[16px] font-dmSan pr-4 hover:text-[#262626] hover:font-bold duration-300 cursor-pointer">
              Add to Cart
            </h4>
            <IoCart />
          </Flex>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between">
          <h3 className="text-[#262626] text-xl font-bold font-dmSan">
            {proTitle}
          </h3>
          <p className="text-[#767676] text-[16px] font-dmSan">{proPrice}</p>
        </div>
        <p className="text-[#767676] text-[16px] font-dmSan pt-[15px]">
          {proColor}
        </p>
      </div>
    </div>
  );
};

export default Product;
