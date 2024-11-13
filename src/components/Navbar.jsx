import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";

function Navbar() {
    return (
        <>
            <div className="h-24 border border-b-gray-300 flex justify-center
            items-center gap-32">
                <div>
                    <h1 className="text-2xl font-bold">Exclusive</h1>
                </div>

                <div>
                    <ul className="flex gap-12 text-base cursor-pointer">
                        <li className="underline">Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                </div>

                <div className="flex gap-6">
                    <div className="flex justify-center items-center relative">
                        <input
                            className="w-60 h-9 rounded py-2
                        px-3 text-xs pr-10 bg-neutral-100"
                            placeholder="What are you looking for?"
                            type="search"
                        />
                        <CiSearch className="absolute right-2 top-1/2 transform
                        -translate-y-1/2 text-black text-2xl" />
                    </div>
                    <div className="flex gap-4 items-center text-3xl">
                        <CiHeart />
                        <IoCartOutline />
                        <HiMiniUserCircle className="text-red-500 font-bold" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Navbar