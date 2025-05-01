import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const logoSrc = '/Primary Logo-01.png';
  const message = 'Thank you for visiting Next Step NIW. We’re here to help you navigate your path to U.S. permanent residency and achieve your goals!';
  const services = [
    { name: 'Why Choose Us', link: '/#why-choose-us' },
    { name: 'Testimonials', link: '/testimonials' },
    { name: 'Free CV Evaluation', link: '/evaluation' },
  ];
  const companyLinks = [
    { name: 'About Us', link: '/aboutus' },
    { name: 'Services', link: '/services' },
    { name: 'Privacy Policy', link: '/privacypolicy' },
    { name: 'Terms and Conditions', link: '/termsandconditions' }
  ];
  const contact = [
    { email: 'info@nextstepniw.com' },
    { email: 'nextstepniw@gmail.com' }
  ];

  return (
    <footer className="border-t-2 border-gray-200 pt-16 pb-8 px-6 bg-gray-100 text-center sm:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link href="/">
            <img
              src={logoSrc}
              alt="Logo"
              width={150}
              height={150}
              className="mx-auto sm:mx-0"
            />
          </Link>
          <p className="mt-5 text-gray-700 max-w-sm mx-auto sm:mx-0">
            {message}
          </p>
        </div>

        <nav>
          <h6 className="text-lg font-semibold mb-4">Next Step NIW</h6>
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service.name}>
                <Link href={service.link} className="hover:underline text-gray-700">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
          <ul className="space-y-2">
            {companyLinks.map(link => (
              <li key={link.name}>
                <Link href={link.link} className="hover:underline text-gray-700">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-4">Say Hello to Us</h6>
          <ul className="space-y-2">
            {contact.map(link => (
              <li key={link.email}>
                <a
                  href={`mailto:${link.email}`}
                  className="hover:underline text-gray-700"
                >
                  Email: {link.email}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center sm:justify-start gap-4 mt-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/next-step-niw/"
              className="bg-white p-3 rounded-full text-[#0077b5] hover:scale-110 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/nextstepniw?igsh=dGlidHR3MmE4MDB4"
              className="bg-white p-3 rounded-full text-[#E1306C] hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@NextStepNIW"
              className="bg-white p-3 rounded-full text-[#FF0000] hover:scale-110 transition"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </nav>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Next Step NIW | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
