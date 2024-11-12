import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import choclate from "../assets/img/choclate.svg"
import pic from "../assets/img/pic.svg"
import apple from "../assets/img/apple.svg"
import cream from "../assets/img/cream.svg"
import car from "../assets/img/car.svg"
import shoe from "../assets/img/shoe.svg"
import controller from "../assets/img/controller.svg"
import jacket from "../assets/img/jacket.svg"

function Products() {
    return (
        <>
            <div className="flex gap-5 items-center mx-24">
                <div className="w-5 h-10 bg-[#db4444] rounded-md"></div>
                <div>
                    <p className="font-semibold text-[#db4444]">Our Products</p>
                </div>
            </div>
            <br />

            <div className="flex justify-between items-center mx-24">
                <div>
                    <h1 className="text-4xl font-semibold">Explore Our Products</h1>
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
            <br /><br />

            <div className="flex justify-center gap-11">



                {/* card 1 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded'>

                        <div className="flex justify-end">
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
 items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
 items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src={choclate} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">Breed Dry Dog Food</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$100</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(35)</p>
                        </div>
                    </div>
                </div>

                {/* card 1 end */}

                {/* card 2 */}
                <div>

                    <div className='w-64 bg-gray-200 h-60 p-3 rounded'>

                        <div className="flex justify-end">
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
    items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
       items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center relative bottom-9">
                            <img src={pic} alt="" />
                        </div>
                    </div>
                    <div className="w-64
rounded h-10 bg-black flex justify-center items-center">
                        <p className=" text-white text-base">Add To Cart</p>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">CANON EOS DSLR Camera</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$360</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(95)</p>
                        </div>
                    </div>
                </div>

                {/* card 2 end */}

                {/* card 3 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded'>

                        <div className="flex justify-end">
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
    items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
   items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src={apple} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">ASUS FHD Gaming Laptop</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$700</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(325)</p>
                        </div>
                    </div>
                </div>

                {/* card 3 end */}

                {/* card 4 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded h-72'>

                        <div className="flex justify-end">
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
        items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
        items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src={cream} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">Curology Product Set </p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$500</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(145)</p>
                        </div>
                    </div>
                </div>

                {/* card 4 end */}
            </div>

            <br /><br />

            {/* section 2 */}



            <div className="flex justify-center gap-11">



                {/* card 1 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded h-60'>

                        <div className="flex justify-between">
                            <div className='text-white w-14 bg-[#00ff66] flex justify-center
                          items-center text-xs h-6'>
                                <p>NEW</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src={car} alt="" />
                        </div>
                    </div>
                    <div className="mt-6 leading-9">
                        <div>
                            <p className="text-base font-medium">Breed Dry Dog Food</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$100</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(35)</p>
                        </div>
                    </div>
                </div>

                {/* card 1 end */}

                {/* card 2 */}
                <div>

                    <div className='w-64 bg-gray-200 h-60 p-3 rounded'>

                        <div className="flex justify-end">
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center relative bottom-9">
                            <img src={shoe} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">CANON EOS DSLR Camera</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$360</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(95)</p>
                        </div>
                    </div>
                </div>

                {/* card 2 end */}

                {/* card 3 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded h-60'>

                        <div className="flex justify-between">
                            <div className='text-white w-14 bg-[#00ff66] flex justify-center
                          items-center text-xs h-6'>
                                <p>NEW</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src={controller} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">ASUS FHD Gaming Laptop</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$700</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(325)</p>
                        </div>
                    </div>
                </div>

                {/* card 3 end */}

                {/* card 4 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded h-60'>

                        <div className="flex justify-end">
                            <div className="space-y-3">
                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <CiHeart />
                                </div>

                                <div className="w-8 h-8 bg-white flex justify-center
items-center text-2xl rounded-full">
                                    <FiEye />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img className="relative bottom-7" src={jacket} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">Curology Product Set </p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$500</p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(145)</p>
                        </div>
                    </div>
                </div>

                {/* card 4 end */}
            </div>
            <br /><br />
            <div className="flex justify-center">
                <button className="w-56 h-14 bg-[#db4444] rounded
                font-medium text-white">View All Products</button>
            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Products
