import Badge from "../Badge";
import Container from "../Container";

const Login = () => {
  return (
    <div className="pt-[125px] pb-[140px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          Login
        </h3>
        <p className="text-[#767676] text-sm font-dmSan">Home > Login</p>
        <div className="pt-[127px] pb-[62px] border-b-2 border-[#F0F0F0] mb-[57px]">
          <p className="w-[610px] text-[#767676] text-[16px] font-dmSan leading-[30px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="pb-[70px] border-b-2 border-[#F0F0F0] mb-[58px]">
          <h3 className="text-[#262626] text-[39px] font-dmSan font-bold pb-[42px]">
            Returning Customer
          </h3>
        </div>
        <div className="">
          <h3 className="text-[#262626] text-[39px] font-dmSan font-bold">
            New Customer
          </h3>
          <p className="w-[610px] text-[#767676] text-[16px] font-dmSan leading-[30px] pt-9.5 pb-[51px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <Badge
            className={"w-[200px] text-center py-4 cursor-pointer"}
            badgeText={"Continue"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Login;
