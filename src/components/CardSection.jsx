
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

            <div>
                <div>
                    <h1 className="text-4xl font-semibold">Flash Sales</h1>
                </div>


                <div>
                    <div>
                        <p className="text-xs font-medium">Days</p>
                        <h1 className="text-3xl font-bold">03</h1>
                    </div>
                    <div>
                        <div className="w-1 h-4 rounded-full bg-[#db4444]"></div>
                        <div></div>
                    </div>
                    <div>
                        <p className="text-xs font-medium">Hours</p>
                        <h1 className="text-3xl font-bold">23</h1>
                    </div>
                    <div></div>
                    <div>
                        <p className="text-xs font-medium">Minutes</p>
                        <h1 className="text-3xl font-bold">19</h1>
                    </div>
                    <div></div>
                    <div>
                        <p className="text-xs font-medium">Seconds</p>
                        <h1 className="text-3xl font-bold">56</h1>
                    </div>
                </div>


            </div>

        </>
    )
}

export default CardSection
