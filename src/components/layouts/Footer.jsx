import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import fLogo from "/src/assets/fLogo.png";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] py-[55px] ">
      <Container>
        <Flex className={"items-start"}>
          <div className="w-[15%]">
            <h3 className="text-[#262626] text-[16px] font-dmSan font-bold pb-[17px]">
              MENU
            </h3>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Home
              </p>
            </Link>
            <Link to={"shop"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Shop
              </p>
            </Link>
            <Link to={"about"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                About
              </p>
            </Link>
            <Link to={"contacts"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Contact
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Journal
              </p>
            </Link>
          </div>

          <div className="w-[15%]">
            <h3 className="text-[#262626] text-[16px] font-dmSan font-bold pb-[17px]">
              SHOP
            </h3>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Category 1
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Category 2
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Category 3
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Category 4
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Category 5
              </p>
            </Link>
          </div>

          <div className="w-[20%]">
            <h3 className="text-[#262626] text-[16px] font-dmSan font-bold pb-[17px]">
              HELP
            </h3>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Privacy Policy
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Terms & Conditions
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Special E-shop
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Shipping
              </p>
            </Link>
            <Link to={"/"}>
              <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
                Secure Payments
              </p>
            </Link>
          </div>
          <div className="w-[30%]">
            <h3 className="text-[#262626] text-[16px] font-dmSan font-bold pb-[15px] w-[190px]">
              (052) 611-5711 company@domain.com
            </h3>
            <p className="text-[#6D6D6D] text-[14px] font-dmSan pb-[7px]">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div className="w-[20%]">
            <Link to={"/"}>
              <Images imgSrc={fLogo} />
            </Link>
          </div>
        </Flex>
        <div className="pt-[65px]">
          <Flex className={"justify-between"}>
            <div className="flex items-center">
              <Link to={"/"}>
                <p className="pr-6 text-xl text-[#262626]">
                  <TfiFacebook />
                </p>
              </Link>
              <Link to={"/"}>
                <p className="pr-6 text-xl text-[#262626]">
                  <FaLinkedinIn />
                </p>
              </Link>
              <Link to={"/"}>
                <p className="pr-6 text-xl text-[#262626]">
                  <SlSocialInstagram />
                </p>
              </Link>
            </div>
            <div className="">
              <p className="text-[#6D6D6D] text-[14px] font-dmSan">
                2020 Orebi Minimal eCommerce Figma Template by Adveits
              </p>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
