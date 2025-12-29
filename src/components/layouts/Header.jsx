import { HugeiconsIcon } from "@hugeicons/react";
import { MenuTwoLineIcon } from "@hugeicons/core-free-icons";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="border-b-[#979797] border-b">
        <Container>
          <Flex>
            <div className="w-[40%] py-8">
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-x-10">
                <Link to={"/"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    Home
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    Shop
                  </li>
                </Link>
                <Link to={"about"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    About
                  </li>
                </Link>
                <Link to={"contacts"}>
                  <li className="text-[#767676] hover:text-[#262626] text-3.5 font-dmSan hover:font-bold duration-300">
                    Contacts
                  </li>
                </Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="bg-[#F5F5F3] py-[25px] border-b-2 border-[#979797]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="flex items-center">
              <HugeiconsIcon icon={MenuTwoLineIcon} size={24} strokeWidth={3} />
              <p className="text-[#262626] font-dmSan text-3.5 pl-2">
                Shop by Category
              </p>
            </div>

            <div className="bg-white items-center flex px-5.5">
              <input
                type="text"
                className="outline-none border-none py-4 pr-4 w-150"
                placeholder="Search Products"
              />
              <FaSearch />
            </div>

            <div className="flex items-center">
              <Link to={"/login"}>
                <div className="mr-10 flex">
                  <FaUser />
                  <IoMdArrowDropdown />
                </div>
              </Link>
              <FaShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
