import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

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
        </>
    )
}

export default Products
