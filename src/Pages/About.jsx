import Fashion from "./img/fashion.jpeg"
import Electronics from "./img/electronics.jpeg"
import HomeDecor from "./img/Home Decor.jpg"

function About() {
    return (
        <>
            <br /><br />
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <h1 className="text-4xl font-semibold text-gray-800 underline">About Us</h1>
                </div>

                <div className="text-center mt-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Welcome to <strong>Exclusive Store</strong> – the ultimate destination for all your shopping needs. We bring you high-quality products from the best brands, all in one place. Whether you're looking for fashion, electronics, home decor, or beauty essentials, we've got you covered.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Our goal is to provide a seamless shopping experience that is easy, fast, and enjoyable. Join our community and discover a world of amazing products at unbeatable prices.
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Our mission is simple – to empower you with the best shopping experience online. We curate only the best products, offer fast shipping, and provide exceptional customer service every step of the way.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={Fashion} alt="Fashion" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Fashion</h3>
                            <p className="text-gray-600 mt-2">
                                Discover the latest trends in fashion. From casual wear to formal outfits, we have something for every occasion.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-[#db4444] text-white rounded-full">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={Electronics} alt="Electronics" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Electronics</h3>
                            <p className="text-gray-600 mt-2">
                                Find the best electronics, from the latest smartphones to powerful laptops. Upgrade your tech today.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-[#db4444] text-white rounded-full">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={HomeDecor} alt="Home Decor" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Home Decor</h3>
                            <p className="text-gray-600 mt-2">
                                Redesign your space with our collection of home decor. From elegant furniture to stylish accessories, we’ve got it all.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-[#db4444] text-white rounded-full">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Founded in 2020, YourStore started with the vision of making online shopping easier, faster, and more accessible for everyone. We handpick the best products from trusted brands to ensure that you have the best experience every time you shop with us.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        Since then, we’ve expanded our product categories, enhanced our user experience, and built a community of loyal customers. YourStore is not just an online store; it’s a place where you can find products you love, at prices you can afford.
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Join the Family</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mt-4">
                        We are thrilled to have you as part of the YourStore family! Stay connected for the latest product releases, exclusive offers, and exciting updates.
                    </p>
                    <button className="mt-6 px-8 py-3 bg-[#db4444] text-white rounded-full">
                        Start Shopping Now
                    </button>
                </div>
            </div>
            <br /><br />
        </>
    );
}

export default About;