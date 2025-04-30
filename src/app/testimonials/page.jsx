'use client'
import React from 'react'

const testimonials = [
  {
    name: 'Dr. M. Islam',
    title: 'Ph.D., South Korea | EB2-NIW Approved',
    quote:
      `Working with Next Step NIW was one of the best decisions I made during my immigration journey. Their team was incredibly knowledgeable, detail-oriented, and genuinely invested in my success.

Thanks to their expertise, my EB2-NIW petition was approved without an RFE. What impressed me most was how they personalized my case, highlighting my research and academic contributions in a way that truly aligned with USCIS expectations. On top of that, their affordable pricing made it possible for me to access premium-level service without financial strain.

I wholeheartedly recommend Next Step NIW to any professional or researcher seeking a smooth and successful green card process.`
  },
  {
    name: 'M. A. Rahman',
    title: 'Ph.D. Candidate in Agriculture, Arkansas, USA | EB2-NIW Approved',
    quote:
      `I am thrilled to share that my NIW EB2 petition has been officially approved, thanks to the outstanding assistance I received.

The team worked incredibly fast, completing my petition efficiently without compromising quality. Every document, every recommendation, every argument was crafted strategically. What impressed me even more was the affordable pricing—transparent, fair, and much lower than many other options.

Thanks to their exceptional guidance, I achieved my NIW EB2 approval smoothly and faster than I expected.`
  },
  {
    name: 'S. N. Chowdhury',
    title: 'Doctor of Business Administration (DBA) Student, USA | EB2-NIW Case Under Review',
    quote:
      `As a DBA student in the U.S., I was unsure whether I qualified for the EB2-NIW category—but Next Step NIW changed everything.

From the very beginning, their team provided clear, honest guidance and a personalized strategy based on my academic background and research interests. They were responsive, professional, and made the entire process feel less overwhelming. Highly recommended!`
  },
  {
    name: 'M. A. H.',
    title: 'Ph.D. Candidate, USA | EB2-NIW Case Under Review',
    quote:
      `As a Ph.D. candidate in the U.S., finding a team that truly understands research and academic work was critical for my NIW petition—and Next Step NIW impressed me from the start. Their deep knowledge of the EB2-NIW process gave me complete confidence. They carefully analyzed my achievements and structured a compelling petition. What also stood out was their flexible, affordable payment plan. I’m truly grateful and highly recommend their support.`
  }
]

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
            <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">“{t.quote}”</p>
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
