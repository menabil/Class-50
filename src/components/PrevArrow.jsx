import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="py-5 z-10 px-5 cursor-pointer text-2xl rounded-[220px] absolute left-3 top-[50%] -translate-y-[50%] bg-[#c2c2c2] text-white "
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
};

export default PrevArrow;
