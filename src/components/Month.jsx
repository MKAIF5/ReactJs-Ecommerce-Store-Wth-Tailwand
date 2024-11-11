import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

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
        </>
    )
}

export default Month
