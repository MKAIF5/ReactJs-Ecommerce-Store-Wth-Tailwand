import { Swiper, SwiperSlide } from 'swiper/react';
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import img1 from "../assets/img/game1.png"
import img2 from "../assets/img/keyboard.svg"
import img3 from "../assets/img/laptop.svg"
import img4 from "../assets/img/chair.svg"
import 'swiper/css';


function Card() {


    return (
        <>
            <br />
            <div className="flex justify-center gap-12">


                {/* card 1 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded shadow-lg'>

                        <div className="flex justify-between">
                            <div className='text-white w-14 bg-[#db4444] flex justify-center
                    items-center text-xs h-6'>
                                <p>-40%</p>
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
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">HAVIT HV-G92 Gamepad</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$120 <span className="line-through text-gray-400">
                                    $160</span></p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(88)</p>
                        </div>
                    </div>
                </div>

                {/* card 1 end */}

                {/* card 2 */}
                <div>
                    <div className='w-64 bg-gray-200 h-60 p-3 rounded shadow-lg'>

                        <div className="flex justify-between">
                            <div className='text-white w-14 bg-[#db4444] flex justify-center
                          items-center text-xs h-6'>
                                <p>-35%</p>
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
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className="w-64
                    rounded h-10 bg-black flex justify-center items-center">
                        <p className=" text-white text-base">Add To Cart</p>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">AK-900 Wired Keyboard</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$960 <span className="line-through text-gray-400">
                                    $1160</span></p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-gray-300 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(75)</p>
                        </div>
                    </div>
                </div>

                {/* card 2 end */}

                {/* card 3 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded shadow-lg'>

                        <div className="flex justify-between">
                            <div className='text-white w-14 bg-[#db4444] flex justify-center
                          items-center text-xs h-6'>
                                <p>-30%</p>
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
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">IPS LCD Gaming Monitor</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$370 <span className="line-through text-gray-400">
                                    $400</span></p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(99)</p>
                        </div>
                    </div>
                </div>

                {/* card 3 end */}



                {/* card 4 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded shadow-lg'>

                        <div className="flex justify-between">
                            <div className='text-white w-14 bg-[#db4444] flex justify-center
                  items-center text-xs h-6'>
                                <p>-25%</p>
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
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">S-Series Comfort Chair </p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$375 <span className="line-through text-gray-400">
                                    $400</span></p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStarHalfAlt className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(99)</p>
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
            <br /><br />
            <div className="bg-gray-300 w-3/4 h-0.5 mx-auto">

            </div>
            <br /><br />
        </>
    )
}

export default Card
