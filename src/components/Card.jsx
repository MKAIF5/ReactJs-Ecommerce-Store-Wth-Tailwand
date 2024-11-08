import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import img1 from "../assets/img/game1.png"

function Card() {
    return (
        <>
            <br />
            <div className="flex justify-center">

            <div className='w-64 bg-gray-300 p-3 rounded'>

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






                             </div>
        </>
    )
}

export default Card
