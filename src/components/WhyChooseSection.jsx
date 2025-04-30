import { Lightbulb, BadgeCheck, Layers3, WalletCards, Globe2, PhoneCall } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: 'Led by Approved EB-1A & EB-2 NIW Experts',
    desc: 'Our team includes PhDs and researchers who’ve secured their own EB-1A or NIW approvals. We know what USCIS wants—and we deliver it.',
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-green-600" />,
    title: 'Proven Track Record of Success',
    desc: 'Since 2024, we’ve helped professionals from diverse fields secure their green cards through precise, strategic petition building.',
  },
  {
    icon: <Layers3 className="w-10 h-10 text-purple-600" />,
    title: 'Flexible Packages',
    desc: 'Full-service or custom help—you choose. Whether it’s drafting a petition or just reviewing your letter, we fit your needs and budget.',
  },
  {
    icon: <WalletCards className="w-10 h-10 text-yellow-500" />,
    title: 'Transparent, Accessible Pricing',
    desc: 'We offer clear, upfront pricing with no surprises. Custom services have fixed rates, and full packages are based on your profile’s needs.',
  },
  {
    icon: <Globe2 className="w-10 h-10 text-indigo-600" />,
    title: 'End-to-End Support Until Approval',
    desc: 'From CV evaluation to I-485 or consular processing—we’re with you every step of the way. We don’t stop until you’ve secured your green card.',
  },
  {
    icon: <PhoneCall className="w-10 h-10 text-red-500" />,
    title: '24/7 Direct Access to Experts',
    desc: 'Have a question? Need reassurance? You can reach us directly—no layers of admin. Email, WhatsApp, or LinkedIn—we’re always available.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id='#why-choose-us' className="bg-gray-50 py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0c1e3b] mb-6">Why Choose Next Step NIW?</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          At Next Step NIW, we offer flexible, expert-led immigration support tailored to your journey—whether you need full-service guidance or help with specific petition components.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#0c1e3b] mb-4">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
