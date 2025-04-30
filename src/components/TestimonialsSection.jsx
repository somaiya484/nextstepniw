import { Quote } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    name: "Dr. M. Islam",
    title: "Ph.D., South Korea | EB2-NIW Approved",
    text: "Working with Next Step NIW was one of the best decisions I made during my immigration journey. Their team was incredibly knowledgeable, detail-oriented, and genuinely invested in my success. Thanks to their expertise, my EB2-NIW petition was approved without an RFE. I wholeheartedly recommend them to any professional or researcher seeking a smooth and successful green card process."
  },
  {
    name: "M. A. Rahman",
    title: "Ph.D. Candidate, USA | EB2-NIW Case Under Review",
    text: "Next Step NIW has been an incredible partner in my EB2-NIW journey. They guided me through evidence gathering and prepared a compelling petition. Their professionalism and attention to detail made the process feel manageable. I highly recommend them to researchers and graduate students alike.",
  },
  {
    name: "M. A. H.",
    title: "Ph.D. Candidate, USA | EB2-NIW Case Under Review",
    text: "Affordability and flexibility were critical for me—and Next Step NIW delivered. They offered transparent service, strong petition preparation, and a flexible payment plan that reduced financial stress. I’m grateful for their professionalism and empathy throughout the journey.",
  },
  {
    name: "S. N. Chowdhury",
    title: "Doctor of Business Administration(DBA), USA | EB2-NIW Under Review",
    text: "As a DBA student in the U.S., I was unsure whether I qualified for the EB2-NIW category—but Next Step NIW changed everything. They provided clear, honest guidance and crafted a personalized strategy based on my academic background. Highly recommended for any graduate student pursuing the NIW path!",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1e3b] mb-6 tracking-tight">
          Client Testimonials – Voices of Trust
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
          Hear directly from those who trusted us with their immigration journey—and succeeded through expert guidance and care.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-gray-200 p-10 rounded-xl shadow-lg hover:shadow-xl flex flex-col"
            >
              {/* Top Icon */}
              <div className="absolute -top-6 left-6 bg-blue-100 p-2 rounded-full">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>

              {/* Quote and Text */}
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Name and Title */}
              <div className="border-t pt-4 mt-8">
                <h3 className="text-lg font-bold text-[#0c1e3b]">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Link
            href="/testimonials"
            className="inline-block bg-[#0c1e3b] text-white text-base md:text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#132c57] transition-all duration-300"
          >
            View All Testimonials
          </Link>
        </div>

      </div>
    </section>
  );
}
