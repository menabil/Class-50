import Badge from "../Badge";
import Container from "../Container";

const Contacts = () => {
  return (
    <div className="pt-[125px]">
      <Container>
        <h3 className="text-[#262626] text-[49px] font-dmSan font-bold pb-4">
          Contacts
        </h3>
        <p className="text-[#767676] text-sm font-dmSan">Home > Contacts</p>
        <div className="pt-[125px]">
          <h3 className="text-[#262626] text-[39px] font-dmSan font-bold pb-10.5">
            Fill up a Form
          </h3>

          <form action="Submit">
            <h6 className="text-[#262626] text-[16px] font-dmSan font-bold">
              Name
            </h6>
            <input
              type="text"
              placeholder="Your name here"
              className="outline-0 border-[#F0F0F0] border-b-2 pb-4 pt-2.5 w-[700px] mb-6"
            />

            <h6 className="text-[#262626] text-[16px] font-dmSan font-bold">
              Email
            </h6>
            <input
              type="email"
              placeholder="Your email here"
              className="outline-0 border-[#F0F0F0] border-b-2 pb-4 pt-2.5 w-[700px] mb-6"
            />

            <h6 className="text-[#262626] text-[16px] font-dmSan font-bold">
              Message
            </h6>
            <textarea
              placeholder="Your message here"
              className="outline-0 pt-2.5 w-[700px] pb-[87px] mb-7.5 border-[#F0F0F0] border-b-2"
              id=""
            ></textarea>
            <Badge
              className={"w-[200px] text-center py-4 cursor-pointer"}
              badgeText={"Post"}
            />
          </form>
        </div>
        <div className="py-[140px]">Map</div>
      </Container>
    </div>
  );
};

export default Contacts;
