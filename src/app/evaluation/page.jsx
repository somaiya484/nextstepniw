// pages/free-evaluation.tsx

export default function FreeEvaluationPage() {
    return (
        <div className="bg-white text-gray-800">
            {/* Header Section */}

            <section className="relative flex items-center justify-center h-[450px] overflow-hidden bg-cover bg-center bg-[url('/why0choose-us.jpg')] text-center text-white">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

                {/* Text content above the overlay */}
                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Free CV Evaluation & Eligibility Assessment</h1>
                    <p className="text-xl md:text-2xl font-light">
                        Know where you stand before you begin your self-petition journey. Our expert team provides a no-obligation, personalized review—within 24 business hours.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-6 max-w-5xl mx-auto space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#0c1e3b]">What is the Free Evaluation?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Our free evaluation is a personalized, expert-led assessment of your academic and professional background to determine your eligibility for the EB-2 NIW or EB-1A self-petition.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    <Card title="✅ Determine Eligibility" description="We analyze your academic background, research, or achievements to identify whether you qualify for the EB-2 NIW or EB-1A." />
                    <Card title="💡 Discover Strengths" description="Uncover the strongest parts of your profile and learn what sets you apart as a candidate for a U.S. green card." />
                    <Card title="🛠 Expert Feedback" description="Receive strategic guidance and honest feedback to help you understand your petition potential and path forward." />
                </div>
            </section>

            {/* Who Should Apply */}
            <section className="py-16 px-6 bg-gray-50 max-w-5xl mx-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-[#0c1e3b]">Who Should Request an Evaluation?</h2>
                    <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
                        <li>Researchers, academics, and PhD/Master’s holders</li>
                        <li>Bachelor’s degree holders with 5+ years of progressive experience</li>
                        <li>Entrepreneurs and innovators with impactful work</li>
                        <li>Professionals with significant achievements in their field</li>
                        <li>Anyone unsure if they qualify for EB-2 NIW or EB-1A</li>
                    </ul>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#0c1e3b]">What You’ll Receive</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <Card title="📄 CV/Resume Review" description="We assess your CV in detail to highlight strengths and identify any gaps." />
                    <Card title="📊 Honest Feedback" description="Straightforward, expert feedback on your case potential and areas to improve." />
                    <Card title="📦 Service Suggestions" description="We recommend the most suitable package—whether full support or targeted help." />
                </div>
                <p className="text-gray-600">Our team responds within <strong>24 business hours</strong>.</p>
            </section>

            {/* Call to Action Section */}
            <div className="bg-gray-50 py-16 rounded-lg shadow-inner text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p className="max-w-2xl mx-auto mb-8 text-base sm:text-lg">
                    Submit your CV for a free, no-obligation eligibility review today. Let us help you determine the best pathway forward—before you invest time and money into the petition process.
                </p>

                {/* Responsive contact buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <a
                        href="mailto:info@nextstepniw.com"
                        className="flex-1 min-w-[250px] px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                    >
                        info@nextstepniw.com
                    </a>
                    <a
                        href="mailto:nextstepniw@gmail.com"
                        className="flex-1 min-w-[250px] px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                    >
                        nextstepniw@gmail.com
                    </a>
                    <a
                        href="https://wa.me/821088142971"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[250px] px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow hover:bg-green-600 transition duration-300 text-sm sm:text-base"
                    >
                        WhatsApp: +82 10-8814-2971
                    </a>
                </div>

                <a
                    href="https://www.nextstepniw.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gray-800 text-white font-medium rounded-full shadow hover:bg-gray-900 transition duration-300 text-sm sm:text-base"
                >
                    Visit Website
                </a>
            </div>

        </div>
    );
}

function Card({ title, description }) {
    return (
        <div className="bg-white border border-gray-200 shadow-md p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-[#0c1e3b]">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

