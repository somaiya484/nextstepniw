"use client";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaAward, FaLightbulb } from 'react-icons/fa';
import Pagecontact from '@/components/Pagecontact';

export default function Services() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="bg-white text-gray-900">
            <Head>
                <title>Our Services | Next Step NIW</title>
                <meta name="description" content="Explore modern, strategic immigration support from Next Step NIW." />
            </Head>

            {/* Hero Section with Video Background */}
            <section className="relative flex items-center justify-center  h-[450px] overflow-hidden  bg-cover bg-center bg-[url('/our0services.jpg')]">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 "></div>
                {/* Animated Hero Text */}
                <motion.div
                    className="relative z-10 text-center px-4"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-white">
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
                        Helping ambitious professionals, researchers, academics, entrepreneurs, and skilled workers navigate the EB-2 NIW and EB-1A immigration process with clarity and confidence.
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <main className=" max-w-6xl mx-auto px-6 py-20 space-y-20">
                {/* Introduction */}
                <motion.section
                    className="max-w-3xl mx-auto text-center"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                >
                    <p className="text-xl leading-relaxed">
                        At Next Step NIW, we empower you to take control of your U.S. immigration journey by self-petitioning through the EB-2 NIW (National Interest Waiver) or EB-1A (Extraordinary Ability) categories. Our expert team is here to ensure your petition is documented, strategic, and persuasive.
                    </p>
                </motion.section>

                {/* EB-2 NIW Section */}
                <motion.section
                    className="max-w-4xl mx-auto"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <FaLightbulb className="text-indigo-600 text-3xl" />
                                <h2 className="text-3xl font-bold">EB-2 NIW (National Interest Waiver)</h2>
                            </div>
                            <p className="mb-6">
                                Designed for individuals with advanced degrees or exceptional abilities, the EB-2 NIW allows self-petitioning without the need for a job offer or labor certification.
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Advanced degree (Master’s or Ph.D.) or evidence of exceptional ability.</li>
                                <li>A proposed endeavor with substantial merit and national importance.</li>
                                <li>Proof of being well-positioned to advance your work in the U.S.</li>
                                <li>Demonstration that a waiver of the labor certification benefits the nation.</li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200">
                            <p className="font-semibold">
                                The strength of your EB-2 NIW petition rests on clearly communicating your contributions, impact, and future potential. Our team is here to ensure every section meets USCIS expectations.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* EB-1A Section */}
                <motion.section
                    className="max-w-4xl mx-auto"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="order-2 md:order-1 flex-1 bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200">
                            <p className="font-semibold">
                                The EB-1A is reserved for individuals with sustained national or international acclaim. While offering fast processing and top priority, this category demands strong evidence of extraordinary ability.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <FaAward className="text-indigo-600 text-3xl" />
                                <h2 className="text-3xl font-bold">EB-1A (Extraordinary Ability)</h2>
                            </div>
                            <p className="mb-6">
                                For professionals who have demonstrated exceptional achievements in fields including science, education, business, arts, or athletics, the EB-1A allows you to self-petition without a job offer.
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Major awards and prizes</li>
                                <li>Published research and citations</li>
                                <li>Memberships in leading professional organizations</li>
                                <li>Significant original contributions</li>
                                <li>Leading roles or judging responsibilities</li>
                                <li>Media recognition</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Service Packages */}
                <motion.section
                    className="max-w-6xl mx-auto space-y-12"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center">Our Services: Tailored Support Packages</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Package 1 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4">Full Petition Preparation</h3>
                            <p className="mb-6">
                                Comprehensive, start-to-finish assistance for both EB-2 NIW and EB-1A self-petitioning.
                            </p>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <strong>Complete Petition Drafting:</strong> We prepare a professionally written petition letter—covering your background, achievements, proposed endeavor, and evidence analysis.
                                </li>
                                <li>
                                    <strong>Recommendation Letter Drafting:</strong> We craft strong, tailored recommendation letters to support your eligibility.
                                </li>
                                <li>
                                    <strong>RFE Response Assistance:</strong> Should USCIS request additional evidence, we deliver a clear, focused response at no extra charge.
                                </li>
                                <li>
                                    <strong>IVP or I-485 Consultation:</strong> Guidance on next steps, whether via consular processing or adjustment of status.
                                </li>
                            </ul>
                            <p className="mt-4 italic">Ideal for a seamless and expertly managed process.</p>
                        </motion.div>

                        {/* Package 2 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-4">Targeted & Custom Services</h3>
                            <p className="mb-6">
                                For clients who have begun the petition process and need expert input to refine specific areas.
                            </p>
                            <ul className="list-disc list-inside space-y-3">
                                <li>
                                    <strong>Petition Review & Feedback:</strong> Detailed analysis of your draft petition with actionable improvement recommendations.
                                </li>
                                <li>
                                    <strong>Expert Recommendation Letter Support:</strong> Assistance in drafting persuasive, field-appropriate recommendation letters.
                                </li>
                                <li>
                                    <strong>Strategic Guidance on Proposed Endeavor & NIW Prongs:</strong> Expert help in clearly articulating:
                                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                        <li>Substantial Merit & National Importance</li>
                                        <li>Positioned to Advance Your Endeavor</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Professional RFE Response:</strong> Tailored response preparation to address USCIS concerns.
                                </li>
                            </ul>
                            <p className="mt-4 italic">Perfect for fine-tuning your submission for maximum impact.</p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Client Journey Timeline */}
                <motion.section
                    className="max-w-4xl mx-auto"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Your Journey with Us</h2>
                    <ol className="relative border-l-4 border-blue-500 pl-8 space-y-8">
                        {[
                            "Free CV Evaluation",
                            "Choose Your Service Package",
                            "Submit Documents (CV, publications, etc.)",
                            "Expert Petition Drafting",
                            "Final Review & USCIS Submission",
                            "USCIS Review (with RFE support if needed)",
                            "Approval & Green Card Filing (IVP or I-485 consultation)"
                        ].map((step, index) => (
                            <motion.li
                                key={index}
                                className="relative"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="absolute -left-5 top-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                    {index + 1}
                                </div>
                                <p className="ml-8 text-lg">{step}</p>
                            </motion.li>
                        ))}
                    </ol>
                </motion.section>

                {/* Call to Action */}
                <motion.section
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 1 }}
                >

                    <Pagecontact></Pagecontact>
                </motion.section>
            </main>
        </div>
    );
}
