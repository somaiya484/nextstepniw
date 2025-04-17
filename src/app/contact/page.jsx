import Head from 'next/head'

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Contact Us - Next Step NIW</title>
        <meta name="description" content="Reach out to us for your EB-2 NIW and EB-1A petition needs" />
      </Head>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">Contact Us</h1>
        <p className="text-center text-lg text-gray-500">Have questions about your eligibility or ready to begin your petition? We're here to guide you every step of the way.</p>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between space-x-6">
            <div className="text-xl font-medium text-gray-700">📞 Reach Out Anytime</div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-2xl">📧</span>
              <span className="text-lg">Email: <a href="mailto:info@nextstepniw.com" className="font-semibold text-blue-600 hover:underline">info@nextstepniw.com</a> or <a href="mailto:nextstepniw@gmail.com" className="font-semibold text-blue-600 hover:underline">nextstepniw@gmail.com</a></span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-2xl">📱</span>
              <span className="text-lg">WhatsApp (24/7 Support): <a href="https://wa.me/821088142971" className="font-semibold text-blue-600 hover:underline">+82 10-8814-2971</a></span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-2xl">🌐</span>
              <span className="text-lg">Website: <a href="https://www.nextstepniw.com" className="font-semibold text-blue-600 hover:underline">www.nextstepniw.com</a></span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-2xl">💼</span>
              <span className="text-lg">LinkedIn: <a href="https://www.linkedin.com/company/next-step-niw/" className="font-semibold text-blue-600 hover:underline">Connect with us on LinkedIn</a></span>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-500">
            <p>We respond to all inquiries within 24 business hours.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
