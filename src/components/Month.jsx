import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import shirt from "../assets/img/shirt.svg"
import bag from "../assets/img/bag.svg"
import music from "../assets/img/music.svg"
import book from "../assets/img/book.svg"


function Month() {
    return (
        <>
            <div className="flex gap-5 items-center mx-24">
                <div className="w-5 h-10 bg-[#db4444] rounded-md"></div>
                <div>
                    <p className="font-semibold text-[#db4444]">This Month</p>
                </div>
            </div>
            <br />

            <div className="flex justify-between items-center mx-24">
                <div>
                    <h1 className="text-4xl font-semibold">Best Selling Product</h1>
                </div>

                <div>
                    <button className="w-40 h-14 bg-[#db4444]
                    text-white rounded">View All</button>
                </div>
            </div>
            <br /><br /><br />


            <div className="flex justify-center gap-11">



                {/* card 1 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded'>

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
                            <img src={shirt} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">The north coat</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$260 <span className="line-through text-gray-400">
                                    $360</span></p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(65)</p>
                        </div>
                    </div>
                </div>

                {/* card 1 end */}

                {/* card 2 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded'>

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
                            <img src={bag} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">Gucci duffle bag</p>
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
                            <FaStarHalfAlt className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(65)</p>
                        </div>
                    </div>
                </div>

                {/* card 2 end */}

                {/* card 3 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded'>

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
                            <img src={music} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">RGB liquid CPU Cooler</p>
                        </div>
                        <div>
                            <p
                                className="text-[#db4444] flex gap-3"
                            >$160 <span className="line-through text-gray-400">
                                    $170</span></p>
                        </div>
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <FaStarHalfAlt className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(65)</p>
                        </div>
                    </div>
                </div>

                {/* card 3 end */}

                {/* card 4 */}
                <div>

                    <div className='w-64 bg-gray-200 p-3 rounded'>

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
                            <img src={book} alt="" />
                        </div>
                    </div>
                    <div className="mt-5 leading-9">
                        <div>
                            <p className="text-base font-medium">Small BookSelf</p>
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
                            <FaStar className="text-yellow-400 w-5 h-5" />
                            <p className="text-sm text-gray-400 ml-2">(65)</p>
                        </div>
                    </div>
                </div>

                {/* card 4 end */}
            </div>
            <br /><br /><br />
        </>
    )
}

export default Month
