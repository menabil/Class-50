import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import aboutOne from "/src/assets/aboutOne.png";
import aboutTwo from "/src/assets/aboutTwo.png";

const About = () => {
  return (
    <div className="py-[125px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          About
        </h3>
        <p className="text-[#767676] text-sm font-dmSan">Home > About</p>

        <Flex className="pt-34 pb-32 gap-x-8">
          <div className="">
            <Images imgSrc={aboutOne} />
          </div>
          <div className="">
            <Images imgSrc={aboutTwo} />
          </div>
        </Flex>
        <div className="">
          <h4 className="text-[#262626] text-[33px] font-dmSan leading-[52px]">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </h4>
        </div>
        <div className="pt-[118px]">
          <Flex className={"gap-x-8 items-start"}>
            <div className="w-[40%]">
              <h5 className="text-[#262626] text-2xl font-dmSan font-bold ">
                Our Vision
              </h5>
              <p className="text-[#767676] text-[16px] font-dmSan leading-[30px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="w-[40%]">
              <h5 className="text-[#262626] text-2xl font-dmSan font-bold ">
                Our Story
              </h5>
              <p className="text-[#767676] text-[16px] font-dmSan leading-[30px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>
            <div className="w-[40%]">
              <h5 className="text-[#262626] text-2xl font-dmSan font-bold ">
                Our Brands
              </h5>
              <p className="text-[#767676] text-[16px] font-dmSan leading-[30px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default About;
