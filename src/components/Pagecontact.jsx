import React from 'react'

const Pagecontact = () => {
    return (
        <div className="bg-gray-50 py-16 rounded-lg shadow-inner text-center"
        >
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="max-w-2xl mx-auto mb-8">
                Contact us for a free CV evaluation and consultation. Let’s tailor a strategy that maximizes your petition’s success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                    href="mailto:info@nextstepniw.com"
                    className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition duration-300"
                >
                    Email Us
                </a>
                <a
                    href="https://wa.me/821088142971"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-green-500 text-white font-medium rounded-full shadow hover:bg-green-600 transition duration-300"
                >
                    WhatsApp
                </a>
                <a
                    href="https://www.nextstepniw.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gray-800 text-white font-medium rounded-full shadow hover:bg-gray-900 transition duration-300"
                >
                    Visit Website
                </a>
            </div>

        </div>
    )
}

export default Pagecontact
