import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import img1 from "../assets/img/game1.png"

function Card() {
    return (
        <>
            <br />
            <div className="flex justify-center">





                {/* card 1 */}
                <div>

                    <div className='w-72 bg-gray-200 p-3 rounded'>

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


            </div>
        </>
    )
}

export default Card
