import qrCode from "../assets/img/qrcode.svg";
import playStore from "../assets/img/playstore.svg";
import appleStore from "../assets/img/applestore.svg";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import instagram from "../assets/img/insta.svg";
import linkedin from "../assets/img/linkedin.svg";
import copyright from "../assets/img/copyright.svg";

function Footer() {
    return (
        <>

            <div className="w-full h-[440px] bg-black flex justify-center
        items-center gap-20">


                <div className="text-white space-y-4">
                    <p className="text-2xl font-bold tracking-widest">Exclusive</p>
                    <p className="text-xl font-medium">Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <input
                        className="p-2 w-52 h-12 border border-white bg-transparent rounded text-gray-400"
                        placeholder="Enter your email"
                        type="text"
                        name=""
                        id=""
                    />
                </div>
                <div className="text-white space-y-4">
                    <p className="text-xl font-medium">Support</p>
                    <p>DHA Phase 6  4th Floor Sky Tower <br /> Karachi Pakistan</p>
                    <p>exclusive@gmail.com</p>
                    <p>03142774295</p>
                </div>
                <div className="text-white space-y-4">
                    <p className="text-xl font-medium">Account</p>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className="text-white space-y-4">
                    <p className="text-xl font-medium">Quick Link</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className="text-white space-y-4">
                    <p className="text-xl font-medium">Download App</p>
                    <p className="text-xs">Save $3 with App New User Only</p>
                    <div className="flex gap-2 relative bottom-2">
                        <div>
                            <img src={qrCode} alt="" />
                        </div>
                        <div>
                            <img src={playStore} alt="" />
                            <img src={appleStore} alt="" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-14 bg-black border-t-2 border-gray-900
             text-gray-700 flex justify-center items-center gap-2">
                <img src={copyright} alt="" />
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </>
    )
}

export default Footer
