import Link from 'next/link';
import { FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const logoSrc = '/logoFooter.png';
  const message = 'Thank you for visiting Next Step NIW. We’re here to help you navigate your path to U.S. permanent residency and achieve your goals!';
  const services = [
    { name: 'Why Choose Us', link: '/services/full-petition' },
    { name: 'Testimonials', link: '/services/custom-targeted' },
    { name: 'FAQ', link: '/services/cv-evaluation' },
  ];
  const companyLinks = [
    { name: 'About Us', link: '/aboutus' },
    { name: 'Services', link: '/services' },
    { name: 'Free CV Evaluation', link: '/evaluation' },
    { name: 'Privacy Policy', link: '/privacypolicy' }
  ];
  const contact = [
    { email: 'info@nextstepniw.com' },
    { email: 'nextstepniw@gmail.com' }
  ]

  return (
    <footer className="footer border-t-2 border-gray-200 pt-16 pb-5 px-5 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center md:text-left">
          <Link href='/'>
            <img src="/Next-Step-NIW.png" alt="Logo" width={50} height={50} />

          </Link>
          <p className='mt-5 md:pr-10'>
            {message}
          </p>
        </div>
        <nav className="text-center md:text-right">
          <h6 className="footer-title text-lg font-semibold mb-4">NextSetpNIW</h6>
          <ul>
            {services.map(service => (
              <li key={service.name}>
                <Link className="link link-hover hover:underline" href={service.link}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="text-center md:text-right">
          <h6 className="footer-title text-lg font-semibold mb-4">Quick Links</h6>
          <ul>
            {companyLinks.map(link => (
              <li key={link.name}>
                <Link className="link link-hover hover:underline" href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="text-center md:text-right">
          <h6 className="footer-title text-lg font-semibold mb-4">Say Hello to Us</h6>
          <ul>
            {contact.map(link => (
              <li key={link.name}>
                <a className="link link-hover hover:underline" href={`mailto:${link.email}`}>Email: {link.email}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-8 items-center justify-center mt-5 md:justify-end text-2xl ">
            <div className="flex space-x-4 mt-3">
              <a target='blank' href="https://www.linkedin.com/company/next-step-niw/" className="bg-white p-3 rounded-full text-[#0077b5] hover:scale-110 transition">
                <FaLinkedin size={20} />
              </a>
              <a target='blank' href="https://www.instagram.com/nextstepniw?igsh=dGlidHR3MmE4MDB4" className="bg-white p-3 rounded-full text-[#E1306C] hover:scale-110 transition">
                <FaInstagram size={20} />
              </a>
              <a target='blank' href=" https://www.youtube.com/@NextStepNIW" className="bg-white p-3 rounded-full text-[#E1306C] hover:scale-110 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col mt-10">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} NextSetpNIW | All rights reserved by NextSetpNIW.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
