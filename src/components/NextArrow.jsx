import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="py-5 px-5 cursor-pointer text-2xl rounded-[220px] absolute right-3 top-[50%] -translate-y-[50%] bg-[#c2c2c2] text-white "
      onClick={onClick}
    >
      <FaLongArrowAltRight /> 
    </div>
  );
};

export default NextArrow;
