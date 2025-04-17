'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: '📌 1. What is the EB-2 NIW (National Interest Waiver)?',
        answer: `The EB-2 NIW is a U.S. green card category that allows individuals with an advanced degree or exceptional ability to self-petition for permanent residency without employer sponsorship.
To qualify, you must:
- Hold a Master’s degree (or higher) or demonstrate exceptional ability.
- Propose a professional endeavor that has substantial merit and national importance.
- Prove you are well-positioned to advance that endeavor.
- Show that waiving the labor certification process would benefit the U.S.`
    },
    {
        question: '📌 2. What is the EB-1A (Extraordinary Ability) category?',
        answer: `The EB-1A is for individuals who have achieved sustained national or international acclaim in their field. It allows you to self-petition without a job offer. You must meet at least 3 out of 10 USCIS criteria such as:
- Receiving prestigious awards
- Publishing original research
- Making significant contributions in your field
- Holding a critical role in distinguished organizations
- Membership in selective professional associations`
    },
    {
        question: '📌 3. Can I apply for a green card without an employer?',
        answer: `Yes. Both EB-2 NIW and EB-1A are self-petition categories, meaning no employer sponsorship or job offer is required. Ideal for independent researchers, entrepreneurs, freelancers, and consultants.`
    },
    {
        question: '📌 4. What services do you offer?',
        answer: `✅ Full Petition Preparation Package – We handle everything: drafting, evidence organization, recommendation letters, RFE response, and post-approval support.
✅ Custom/Targeted Services – For clients needing help with specific parts like:
- Editing self-written petitions
- Drafting recommendation letters
- Writing prongs (Substantial Merit, Well-Positioned, etc.)
- Responding to RFEs
✅ Free CV evaluation and eligibility consultation`
    },
    {
        question: '📌 5. How much do your services cost?',
        answer: `We offer fixed pricing for custom services. Full Petition Packages are priced based on the complexity and strength of your case—but are far more affordable than traditional law firms. You’ll get a personalized offer after we review your CV.`
    },
    {
        question: '📌 6. How long does the petition process take?',
        answer: `Full petition prep takes 3–6 weeks depending on document availability and communication speed. After submission, USCIS times vary (6–12 months for NIW, faster for EB-1A with Premium Processing). RFE support is included in full packages.`
    },
    {
        question: '📌 7. What happens if I receive a Request for Evidence (RFE)?',
        answer: `No need to worry. Full Package clients receive free RFE drafting support. We’ll analyze USCIS feedback, strengthen your petition, and craft a strategic response.`
    },
    {
        question: '📌 8. How do I get started?',
        answer: `It’s simple:
- Email your CV to info@nextstepniw.com or nextstepniw@gmail.com
- Or message us on WhatsApp: +82 10-8814-2971
We'll assess your eligibility and recommend the best package.`
    },
    {
        question: '📌 9. How quickly will I hear back after contacting you?',
        answer: `We reply to all inquiries within 24 business hours with expert guidance and personalized communication.`
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0c1e3b] mb-10">Frequently Asked Questions (FAQ)</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
                At Next Step NIW, we know that immigration is a big step—and you likely have many questions along the way. Below are answers to some of the most common questions we receive from clients. If your question isn't listed here, feel free to reach out. We’re always happy to help.
            </p>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 shadow hover:shadow-lg bg-white">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-[#0c1e3b] hover:bg-gray-100 transition-colors duration-300"
                        >
                            <span>{faq.question}</span>
                            <ChevronDown
                                className={`h-5 w-5 text-[#0c1e3b] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div
                            className={`px-6 pt-0 pb-4 text-gray-700 text-base whitespace-pre-line transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-20 bg-[#0c1e3b] text-white px-4 py-10 sm:px-6 md:px-10 rounded-lg shadow-lg max-w-5xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                    We’re here for you. Contact us anytime for personalized answers, honest advice, and expert support.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 flex-wrap">
                    <a
                        href="mailto:info@nextstepniw.com"
                        className="bg-white text-[#0c1e3b] font-semibold px-5 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300 w-full sm:w-auto text-sm sm:text-base"
                    >
                        info@nextstepniw.com
                    </a>
                    <a
                        href="mailto:nextstepniw@gmail.com"
                        className="bg-white text-[#0c1e3b] font-semibold px-5 py-3 rounded-full shadow hover:bg-gray-100 transition duration-300 w-full sm:w-auto text-sm sm:text-base"
                    >
                        nextstepniw@gmail.com
                    </a>
                    <a
                        href="https://wa.me/821088142971"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white font-semibold px-5 py-3 rounded-full shadow hover:bg-green-600 transition duration-300 w-full sm:w-auto text-sm sm:text-base"
                    >
                        WhatsApp: +82 10-8814-2971
                    </a>
                </div>
            </div>


        </section>
    );
};

export default FAQ;
