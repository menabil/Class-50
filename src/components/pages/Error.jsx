import Badge from "../Badge";
import Container from "../Container";
import { FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <div className="pt-[81px] pb-[140px]">
      <Container>
        <h1 className="text-[#262626] text-[200px] font-dmSan font-bold">
          404
        </h1>
        <p className="w-[620px] text-[#767676] text-[16px] font-dmSan leading-[30px] pb-[50px]">
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>

        <div className="bg-white items-center flex px-5.5 border-[#F0F0F0] border-2 w-[600px] mb-[60px]">
          <input
            type="text"
            className="outline-none  py-5 pr-5 w-150"
            placeholder="Type to search"
          />
          <FaSearch />
        </div>

        <Badge
          className={"w-[200px] text-center py-4 cursor-pointer"}
          badgeText={"Back to Home"}
        />
      </Container>
    </div>
  );
};

export default Error;
