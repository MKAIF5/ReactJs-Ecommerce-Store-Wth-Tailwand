import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the hamburger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="h-24 border-b border-b-gray-300 flex justify-between items-center px-4 md:px-16">
            {/* Logo */}
            <div>
                <h1 className="text-2xl font-bold">Exclusive</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-12 text-base cursor-pointer">
                <ul className="flex gap-12 text-base">
                    <li className="underline">Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>

            {/* Search & Icons (Cart, Heart, User) */}
            <div className="flex gap-6 items-center">
                <div className="flex justify-center items-center relative">
                    <input
                        className="w-60 h-9 rounded py-2 px-3 text-xs pr-10 bg-neutral-100"
                        placeholder="What are you looking for?"
                        type="search"
                    />
                    <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-2xl" />
                </div>
                <div className="flex gap-4 items-center text-3xl">
                    <CiHeart />
                    <IoCartOutline />
                    <HiMiniUserCircle className="text-red-500 font-bold" />
                </div>
            </div>

            {/* Hamburger Menu Icon (Mobile view) */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-3xl">
                    &#9776;
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
                    <div className="bg-white w-3/4 p-6 rounded-md">
                        <ul className="flex flex-col gap-6 text-xl">
                            <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Home</li>
                            <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Contact</li>
                            <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>About</li>
                            <li className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>Sign Up</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;