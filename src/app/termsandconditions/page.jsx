import React from 'react'

const TermsAndConditions = () => {
    return (
        <section className="px-6 py-20 max-w-4xl mx-auto text-gray-800">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">📄 Terms and Conditions</h1>
                <p className="text-gray-500 text-sm">Effective Date: 04/01/2025</p>
            </div>

            <div className="space-y-8">
                <p>
                    Welcome to <strong>Next Step NIW</strong> ("we", "us", or "our"). By accessing or using
                    our website (<a href="https://www.nextstepniw.com" className="text-blue-600 underline">www.nextstepniw.com</a>) or any of our services, you agree to be bound by these Terms and Conditions ("Terms"). Please read them carefully before using our services.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">1. Services Offered</h2>
                    <p className="text-gray-700">
                        Next Step NIW provides consultancy services related to U.S. immigration petitions, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>EB-2 National Interest Waiver (NIW) self-petition support</li>
                        <li>EB-1A extraordinary ability green card support</li>
                        <li>Full-service and customized petition packages</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                        Our services are advisory in nature. We do not provide legal representation or act as attorneys.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>You are at least 18 years old.</li>
                        <li>You are legally capable of entering into a binding agreement.</li>
                        <li>You will provide accurate and complete information during service intake.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">3. No Attorney-Client Relationship</h2>
                    <p className="text-gray-700">
                        Use of our website or services does not establish an attorney-client relationship. Next Step NIW is not a law firm and does not provide legal advice. For legal opinions, we recommend consulting a licensed immigration attorney.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
                    <p className="text-gray-700">
                        All content on this website, including text, graphics, logos, and design, is the intellectual property of Next Step NIW and is protected under applicable copyright and trademark laws. You may not reuse, reproduce, or redistribute our content without prior written permission.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">5. Payments and Refunds</h2>
                    <p className="text-gray-700">
                        All payments for services are final unless otherwise stated. We do not offer refunds once service work has commenced. If you are dissatisfied with your service, please contact us to resolve the issue.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">6. User Responsibilities</h2>
                    <p className="text-gray-700">
                        You agree not to use the website or services for:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Any unlawful purpose</li>
                        <li>Uploading false, misleading, or fraudulent documents</li>
                        <li>Infringing on intellectual property or proprietary rights</li>
                        <li>Attempting to interfere with the website’s security or operations</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
                    <p className="text-gray-700">
                        Next Step NIW shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of the site or services. We do not guarantee approval of any immigration petition.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">8. Disclaimer</h2>
                    <p className="text-gray-700">
                        All information provided on this website is for general informational purposes only. While we strive for accuracy, we make no warranties or guarantees regarding completeness, accuracy, or reliability. Outcomes depend on individual circumstances and USCIS discretion.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">9. Third-Party Links</h2>
                    <p className="text-gray-700">
                        Our website may include links to third-party websites. We do not control or endorse the content or practices of these sites and are not responsible for any issues arising from their use.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">10. Modification of Terms</h2>
                    <p className="text-gray-700">
                        We reserve the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on this page. Continued use of the website constitutes your acceptance of the revised Terms.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">11. Governing Law</h2>
                    <p className="text-gray-700">
                        These Terms are governed by and construed in accordance with the laws of the State of [Insert State/Country], without regard to its conflict of law principles.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions about these Terms, please contact us at{" "}
                        <a href="mailto:info@nextstepniw.com" className="text-blue-600 underline">
                            info@nextstepniw.com
                        </a>{" "}
                        or{" "}
                        <a href="mailto:nextstepniw@gmail.com" className="text-blue-600 underline">
                            nextstepniw@gmail.com
                        </a>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TermsAndConditions
