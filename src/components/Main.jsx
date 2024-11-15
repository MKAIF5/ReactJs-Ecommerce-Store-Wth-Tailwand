import iphoneImg from "../assets/img/iphone.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Main() {
  return (
    <>
      <br /> <br />
      <div className="flex justify-center gap-7 p-4">
        {/* Text Section */}
        <div className="leading-9">
          <p className="flex items-center gap-12">
            Woman’s Fashion{" "}
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </p>
          <p className="flex items-center gap-20">
            Men’s Fashion{" "}
            <MdOutlineKeyboardArrowRight className="text-2xl" />
          </p>
          <p>Electronics</p>
          <p>Home & Lifestyle</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby’s & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & Beauty</p>
        </div>

        {/* Image Section */}
        <div>
          <img
            className="iphone-img w-full md:w-auto" // Make image full width on small screens
            src={iphoneImg}
            alt="iPhone"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
