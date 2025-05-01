'use client'
import React from 'react'

const testimonials = [

  {
    name: "M. A. Rahman",
    title: "Ph.D. Candidate, USA | EB2-NIW Approved",
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
  },
  {
    name: "Dr. M. S.",
    title: "Associate Professor",
    text: "Next Step NIW exceeded my expectations with their professionalism and speed. They prepared my EB-2 NIW petition thoroughly and much faster than I anticipated. My case is now under USCIS review, and I’m confident in the outcome thanks to their support. I strongly recommend them to academics considering a self-petition.",
  },
  {
    name: "Dr. M. Islam",
    title: "Ph.D., South Korea | EB2-NIW Approved",
    text: "Working with Next Step NIW was one of the best decisions I made during my immigration journey. Their team was incredibly knowledgeable, detail-oriented, and genuinely invested in my success. Thanks to their expertise, my EB2-NIW petition was approved without an RFE. I wholeheartedly recommend them to any professional or researcher seeking a smooth and successful green card process."
  },
  {
    name: "M. A. Rahman",
    title: "Ph.D. Candidate in Agriculture, Arkansas, USA| EB2-NIW Approved",
    text: "I am thrilled to share that my NIW EB2 petition has been officially approved, thanks to the outstanding assistance I received. As a Ph.D. candidate in Agriculture in the USA, I needed expert support to prepare a strong petition—and I found exactly that. The team worked incredibly fast, completing my petition efficiently without compromising quality. Their expertise in NIW cases was clear from the very beginning. Every document, every recommendation, every argument was crafted strategically to highlight my strengths. What impressed me even more was the affordable pricing—transparent, fair, and much lower than many other options I had considered. Thanks to their exceptional guidance and thorough work, I achieved my NIW EB2 approval smoothly and faster than I expected. I highly recommend their services to anyone serious about getting approved for NIW EB2.",
  }
];

export default function TestimonialsPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[450px] overflow-hidden bg-cover bg-center bg-[url('/Clienttestimonial.jpg')] text-center text-white">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Client Testimonials – Voices of Trust</h1>
          <p className="text-xl md:text-2xl font-light">Real Stories from Professionals Who Trusted Next Step NIW</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white border-l-4 border-indigo-500 shadow-md p-6 md:p-8 rounded-xl space-y-2"
          >
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">“{t.text}”</p>
            <div className="text-right">
              <p className="text-lg font-semibold text-indigo-700">{t.name}</p>
              <p className="text-sm text-gray-500">{t.title}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
