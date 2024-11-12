import playStation from "../assets/img/playstation.svg";
import collection from "../assets/img/collection.svg";
import speakers from "../assets/img/speakers.svg";
import perfume from "../assets/img/perfume.svg";

function Feautured() {
    return (
        <>
            <div className="flex gap-5 items-center mx-24">
                <div className="w-5 h-10 bg-[#db4444] rounded-md"></div>
                <div>
                    <p className="font-semibold text-[#db4444]">Featured</p>
                </div>
            </div>
            <br />

            <div className="flex justify-between items-center mx-24">
                <div>
                    <h1 className="text-4xl font-semibold">New Arrival</h1>
                </div>
            </div>
            <br /><br />

<div className="flex justify-center">

            <div className="flex gap-8">

                <div>
                    <img src={playStation} alt="" />
                </div>
                <div>
                    <img src={collection} alt="" />
                    <br />
                    <div className="flex gap-8">
                        <img src={speakers} alt="" />
                        <img src={perfume} alt="" />
                    </div>
                </div>
            </div>
</div>
        </>
    )
}

export default Feautured
