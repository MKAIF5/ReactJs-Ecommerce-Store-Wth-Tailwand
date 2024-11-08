import iphoneImg from "../assets/img/iphone.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
    return (
        <>
            <br />  <br />
            <div className="flex justify-center gap-7">
                <div className="leading-9">
                    <p className="flex
                     items-center gap-12">Woman’s Fashion <MdOutlineKeyboardArrowRight
                            className="text-2xl" /></p>
                    <p
                        className="flex items-center gap-20">Men’s Fashion
                        <MdOutlineKeyboardArrowRight className="text-2xl" /> </p>
                    <p>Electronics</p>
                    <p>Home & Lifestyle</p>
                    <p>Medicine</p>
                    <p>Sports & Outdoor</p>
                    <p>Baby’s & Toys</p>
                    <p>Groceries & Pets</p>
                    <p>Health & Beauty</p>
                </div>


                <div>
                    <img
                        className="iphone-img"
                        src={iphoneImg} alt="" />
                </div>
            </div>

        </>
    )
}

export default Home
