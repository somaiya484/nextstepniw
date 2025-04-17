import Link from 'next/link';
import { Briefcase, Star, PenTool, Search, ShieldCheck, ClipboardList } from 'lucide-react';

const services = [
  {
    title: 'EB-2 NIW Strategy',
    icon: <Briefcase className="w-7 h-7 text-blue-600" />,
    description:
      'For professionals whose work serves the national interest. We frame your qualifications to meet all NIW prongs strategically.',
  },
  {
    title: 'EB-1A Petition Support',
    icon: <Star className="w-7 h-7 text-yellow-500" />,
    description:
      'Tailored for high achievers with national/international acclaim. We help align your evidence with the extraordinary ability standards.',
  },
  {
    title: 'Full Petition Preparation',
    icon: <PenTool className="w-7 h-7 text-emerald-600" />,
    description:
      'We handle everything—from strategy and narrative to letters and documentation. A done-for-you petition experience.',
  },
  {
    title: 'Custom Expert Support',
    icon: <Search className="w-7 h-7 text-purple-600" />,
    description:
      'Need guidance on specific areas? We offer detailed reviews, edits, and writing support for a stronger petition.',
  },
  {
    title: 'RFE Response Assistance',
    icon: <ShieldCheck className="w-7 h-7 text-red-500" />,
    description:
      'We help you respond to USCIS Requests for Evidence with targeted, evidence-backed clarity and precision.',
  },
  {
    title: 'Free CV Evaluation',
    icon: <ClipboardList className="w-7 h-7 text-indigo-500" />,
    description:
      'Unsure if you qualify? Get a free, no-obligation CV evaluation with personalized feedback and next steps.',
  },
];

export default function HomeServicesSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 px-6 md:px-20">

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-[#16225c]">Next Step NIW</span>, we provide expert-driven support to help professionals, researchers, and entrepreneurs secure U.S. green cards via the EB-2 NIW and EB-1A pathways.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="/services" className="inline-block bg-[#16225c] hover:bg-blue-800 text-white text-base font-medium px-8 py-3 rounded-full shadow-md transition">
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
