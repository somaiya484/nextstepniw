import React from 'react'

const PrivacyPolicy = () => {
    return (
        <section className="px-6 py-20 max-w-4xl mx-auto text-gray-800">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">🔐 Privacy Policy</h1>
                <p className="text-gray-500 text-sm">Effective Date: 01/01/2025</p>
            </div>

            <div className="space-y-8">
                <p>
                    At <strong>Next Step NIW</strong>, your privacy is important to us. This Privacy Policy
                    explains how we collect, use, and protect the information you provide when visiting
                    our website or using our services.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                    <p className="text-gray-700">
                        We may collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>
                            <strong>Personal Information:</strong> Name, email address, phone number, resume,
                            or academic/professional credentials (only when submitted through contact or
                            consultation forms).
                        </li>
                        <li>
                            <strong>Technical Data:</strong> IP address, browser type, device information, and
                            browsing behavior via cookies or analytics tools.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Respond to inquiries and provide consultations.</li>
                        <li>Assess your eligibility for immigration services (e.g., EB2-NIW, EB1A).</li>
                        <li>Improve our website, services, and user experience.</li>
                        <li>Send relevant updates, newsletters, or legal alerts (only if you opt-in).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">3. Information Sharing</h2>
                    <p className="text-gray-700">
                        We do not sell or rent your personal data. We may share your information only:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>With trusted service providers assisting in our operations (e.g., CRM or cloud platforms).</li>
                        <li>When legally required (e.g., in compliance with court orders or immigration authorities).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">4. Cookies and Analytics</h2>
                    <p className="text-gray-700">
                        Our site may use cookies or third-party analytics tools (e.g., Google Analytics) to
                        understand website traffic and improve performance. You can disable cookies via your
                        browser settings.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
                    <p className="text-gray-700">
                        We take appropriate steps to protect your data from unauthorized access, alteration,
                        or disclosure. However, no method of transmission over the internet is 100% secure.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Request access to your personal information.</li>
                        <li>Ask for corrections or deletion.</li>
                        <li>Withdraw consent (where applicable).</li>
                    </ul>
                    <p className="mt-2 text-gray-700">
                        Please contact us at{" "}
                        <a href="mailto:info@nextstepniw.com" className="text-blue-600 underline">
                            info@nextstepniw.com
                        </a>{" "}
                        or{" "}
                        <a href="mailto:nextstepniw@gmail.com" className="text-blue-600 underline">
                            nextstepniw@gmail.com
                        </a>{" "}
                        for such requests.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
                    <p className="text-gray-700">
                        We may update this Privacy Policy periodically. Changes will be reflected on this
                        page with a new effective date.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-2">📩 Have Questions?</h2>
                    <p className="text-gray-700">
                        Contact us at{" "}
                        <a href="mailto:info@nextstepniw.com" className="text-blue-600 underline">
                            info@nextstepniw.com
                        </a>{" "}
                        or{" "}
                        <a href="mailto:nextstepniw@gmail.com" className="text-blue-600 underline">
                            nextstepniw@gmail.com
                        </a>{" "}
                        with any privacy concerns.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
