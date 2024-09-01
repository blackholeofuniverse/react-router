export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Luxury Travel on a Budget: See the World for Less
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Experience the thrill of global travel without the high costs. Learn how to enjoy luxury destinations, insider tips on finding deals, and creative ways to save money while still indulging in unforgettable experiences. Make your travel dreams come true without overspending.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Uncover the secrets to traveling in style without breaking the bank. Adventure awaits, and it’s more affordable than ever.</p>

                        <p className="mt-4 text-gray-600">Why wait to explore when luxury is within reach? Start planning your next budget-friendly journey today!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}