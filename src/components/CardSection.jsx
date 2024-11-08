import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function CardSection() {
    return (
        <>
            <br /><br /><br />  <br />

            <div className="flex gap-5 items-center mx-24">
                <div className="w-5 h-10 bg-[#db4444] rounded-md"></div>
                <div>
                    <p className="font-semibold text-[#db4444]">Today's</p>
                </div>
            </div>
            <br />
            {/* Today's Section Completed */}

            <div className="flex justify-around gap-72">
                <div className="flex gap-20">
                    <div>
                        <h1 className="text-4xl font-semibold">Flash Sales</h1>
                    </div>

                    <div className="flex gap-5 items-center">
                        <div>
                            <p className="text-xs font-medium">Days</p>
                            <h1 className="text-3xl font-bold">03</h1>
                        </div>

                        <div className="space-y-2">
                            <div className="w-1 h-1 rounded-full bg-[#db4444]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#db4444]"></div>
                        </div>

                        <div>
                            <p className="text-xs font-medium">Hours</p>
                            <h1 className="text-3xl font-bold">23</h1>
                        </div>
                        <div className="space-y-2">
                            <div className="w-1 h-1 rounded-full bg-[#db4444]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#db4444]"></div>
                        </div>
                        <div>
                            <p className="text-xs font-medium">Minutes</p>
                            <h1 className="text-3xl font-bold">19</h1>
                        </div>
                        <div className="space-y-2">
                            <div className="w-1 h-1 rounded-full bg-[#db4444]"></div>
                            <div className="w-1 h-1 rounded-full bg-[#db4444]"></div>
                        </div>
                        <div>
                            <p className="text-xs font-medium">Seconds</p>
                            <h1 className="text-3xl font-bold">56</h1>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-gray-200 w-11 h-11 flex justify-center
                    items-center rounded-full">
                        <FaArrowLeft />
                    </div>
                    <div className="bg-gray-200 w-11 h-11 flex justify-center
                    items-center rounded-full">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            {/* Flash Sales Section Cmpleted */}

        </>
    )
}

export default CardSection