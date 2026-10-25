import React from "react"

const About = () => {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="grid items-center gap-10 bg-purple-50 px-8 py-16 md:grid-cols-2">

                <div>
                    <p className="mb-3 font-semibold text-purple-600">
                        ABOUT US
                    </p>

                    <h1 className="text-4xl font-bold md:text-5xl">
                        Small Links.
                        <br />
                        <span className="text-purple-600">
                            Big Possibilities.
                        </span>
                    </h1>

                    <p className="mt-5 leading-7 text-gray-600">
                        Linkify helps you make long URLs short and easy to share.
                        It is simple to use and saves space when sharing links.
                    </p>

                    <a href="/shorten" className="mt-6 inline-block rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-500"
                    >Get Started</a>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                    <p className="break-all rounded-lg border p-4 text-gray-500">
                        https://example.com/long-url
                    </p>

                    <p className="my-4 text-center text-3xl text-purple-600">
                        ↓
                    </p>

                    <p className="rounded-lg bg-purple-500 p-4 text-center text-white">
                        linkify.com/abc123
                    </p>
                </div>

            </section>

            {/* Features Section */}
            <section className="px-8 py-16">

                <h2 className="mb-10 text-center text-3xl font-bold">
                    Why Choose Linkify?
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="rounded-xl border p-6">
                        <h3 className="mt-4 font-bold">Fast</h3>
                        <p className="mt-2 text-gray-600">
                            Create short links quickly.
                        </p>
                    </div>

                    <div className="rounded-xl border p-6">
                        <h3 className="mt-4 font-bold">Easy to Use</h3>
                        <p className="mt-2 text-gray-600">
                            Enjoy a simple design.
                        </p>
                    </div>

                    <div className="rounded-xl border p-6">
                        <h3 className="mt-4 font-bold">Easy to Share</h3>
                        <p className="mt-2 text-gray-600">
                            Share your links anywhere.
                        </p>
                    </div>

                    <div className="rounded-xl border p-6">
                        <h3 className="mt-4 font-bold">Simple Design</h3>
                        <p className="mt-2 text-gray-600">
                            Use Linkify without confusion.
                        </p>
                    </div>

                </div>
            </section>

            {/* Mission and Vision */}
            <section className="grid gap-6 px-8 pb-16 md:grid-cols-2">

                <div className="rounded-xl bg-blue-50 p-8">
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                    <p className="mt-4 leading-7 text-gray-600">
                        Our goal is to make sharing links quick and easy for everyone.
                    </p>
                </div>

                <div className="rounded-xl bg-indigo-50 p-8">
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                    <p className="mt-4 leading-7 text-gray-600">
                        We want to make sharing links easier in everyday life.
                    </p>
                </div>

            </section>

            {/* Footer */}
            <footer className="bg-gray-900 px-8 py-8 text-center text-white">
                <h2 className="text-2xl font-bold">🔗 Linkify</h2>

                <p className="mt-2 text-gray-400">
                    Shorter links. Easy sharing.
                </p>

                <p className="mt-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} Linkify
                </p>
            </footer>

        </main>
    )
}

export default About