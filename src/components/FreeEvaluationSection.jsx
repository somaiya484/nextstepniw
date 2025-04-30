import Link from 'next/link';

export default function FreeEvaluationSection() {
  return (
    <section className="bg-gradient-to-br from-white to-indigo-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className='ml-5'>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f163c] mb-4">
            Free CV Evaluation & Eligibility Assessment
          </h2>
          <p className="text-lg text-black mb-6">
            Know where you stand—before you begin. We offer a personalized, expert-led assessment to help you understand whether you qualify for the EB-2 NIW or EB-1A self-petition.
          </p>

          <ul className="text-black space-y-3 mb-6">
            <li><span className="font-semibold text-[#213dc8]">What You'll Learn:</span> Eligibility insights, strengths of your profile, improvement areas, and strategic recommendations.</li>
            <li><span className="font-semibold text-[#213dc8]">Ideal For:</span> Researchers, professionals, entrepreneurs, academics, and early-stage applicants exploring U.S. immigration options.</li>
            <li><span className="font-semibold text-[#213dc8]">You’ll Receive:</span> Expert review, honest feedback, and a custom roadmap—all within 24 business hours.</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@nextstepniw.com"
              className="bg-[#foo] hover:bg-[#222535] text-white px-6 py-3 rounded-lg font-semibold text-center"
            >
              Send CV Now
            </a>
            <Link
              href="/evaluation"
              className="text-[#16225c] hover:underline font-medium text-center sm:mt-2"
            >
              Learn more about the evaluation →
            </Link>
          </div>
        </div>

        {/* Right Illustration or Accent Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md mr-5">
          <h3 className="text-xl font-semibold text-[#213dc8] mb-3">How to Get Started</h3>
          <p className="text-black mb-3">Send your CV or resume to:</p>
          <ul className="text-black space-y-2 mb-4">
            <li><strong>info@nextstepniw.com</strong></li>
            <li><strong>nextstepniw@gmail.com</strong></li>
            <li><strong>WhatsApp: +82 10-8814-2971</strong></li>
          </ul>
          <p className="text-gray-600">
            Take the first step—your U.S. green card journey starts here.
          </p>
        </div>
      </div>
    </section>
  );
}
