function Navbar() {
    return (
        <>
            <div className="h-24 border border-b-gray-300 flex justify-center
            items-center gap-32">
                <div>
                    <h1 className="text-2xl font-bold">Exclusive</h1>
                </div>  
                <div>
                    <ul className="flex gap-12 text-base">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
                <div></div>
            </div>

        </>
    )
}

export default Navbar