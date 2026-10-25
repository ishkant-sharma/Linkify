const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md">

                <h1 className="mb-3 text-center text-3xl font-bold">
                    Contact Us
                </h1>

                <p className="mb-8 text-center text-gray-600">
                    Have any questions or feedback? Feel free to contact us.
                </p>

                <form className="space-y-5">
                    <div>
                        <label className="mb-2 block font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Enter subject"
                            className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Message
                        </label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-black"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-black py-3 font-semibold text-white hover:bg-gray-800"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Contact;
