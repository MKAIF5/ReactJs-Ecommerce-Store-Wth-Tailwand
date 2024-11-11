import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import mobile from "../assets/img/mobile.svg"
import computer from "../assets/img/computer.svg"
import smart from "../assets/img/smart.svg"
import camera from "../assets/img/camera.svg"
import headphone from "../assets/img/headphone.svg"
import gaming from "../assets/img/gaming.svg"

function Category() {
    return (
        <>
            <div className="flex gap-5 items-center mx-24">
                <div className="w-5 h-10 bg-[#db4444] rounded-md"></div>
                <div>
                    <p className="font-semibold text-[#db4444]">Categories</p>
                </div>
            </div>
            <br />

            <div className="flex justify-between items-center mx-24">
                <div>
                    <h1 className="text-4xl font-semibold">Browse By Category</h1>
                </div>

                <div className="flex gap-2">
                    <div className="bg-gray-200 w-11 h-11 flex justify-center items-center rounded-full">
                        <FaArrowLeft />
                    </div>
                    <div className="bg-gray-200 w-11 h-11 flex justify-center items-center rounded-full">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <br /><br /><br />

            <div className="flex justify-center gap-6">

                <div className="w-44 h-36 border border-gray-400 rounded flex
                justify-center items-center">
                    <div>
                        <img className="mx-auto" src={mobile} alt="" />
                        <p className="mt-4">Phones</p>
                    </div>
                </div>

                <div className="w-44 h-36 border border-gray-400 rounded flex
                justify-center items-center">
                    <div>
                        <img className="mx-auto" src={computer} alt="" />
                        <p className="mt-4">Computers</p>
                    </div>
                </div>

                <div className="w-44 h-36 border border-gray-400 rounded flex
                justify-center items-center">
                    <div>
                        <img className="mx-auto" src={smart} alt="" />
                        <p className="mt-4">SmartWatch</p>
                    </div>
                </div>

                <div className="w-44 h-36 border border-gray-400 rounded flex
                justify-center items-center">
                    <div>
                        <img className="mx-auto" src={camera} alt="" />
                        <p className="mt-4">Camera</p>
                    </div>
                </div>

                <div className="w-44 h-36 border border-gray-400 rounded flex
                justify-center items-center">
                    <div>
                        <img className="mx-auto" src={headphone} alt="" />
                        <p className="mt-4">HeadPhones</p>
                    </div>
                </div>

                <div className="w-44 h-36 border border-gray-400 rounded flex
                justify-center items-center">
                    <div>
                        <img className="mx-auto" src={gaming} alt="" />
                        <p className="mt-4">Gaming</p>
                    </div>
                </div>


            </div>
            <br /><br /><br />
            <div className="bg-gray-300 w-3/4 h-0.5 mx-auto">

            </div>
            <br /><br /><br />
        </>
    );
}

export default Category;
