import Pagecontact from "@/components/Pagecontact";

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}

      <section className="relative flex items-center justify-center h-[450px] overflow-hidden bg-cover bg-center bg-[url('/about-next-step-NIW.jpg')] text-center text-white">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

        {/* Text content above the overlay */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light">
            Your Trusted Partner in U.S. Immigration Through EB-2 NIW and EB-1A Self-Petitions
          </p>
        </div>
      </section>



      {/* Intro */}
      <section className="py-16 px-6 max-w-5xl mx-auto space-y-10">
        <div className="text-lg leading-relaxed">
          <p>
            At <strong>Next Step NIW</strong>, we are more than just an immigration consulting service—we are a team of professionals who have walked the path you’re on and are deeply committed to helping others succeed in their journey toward U.S. permanent residency.
          </p>
          <p className="mt-4">
            We specialize exclusively in <strong>EB-2 NIW (National Interest Waiver)</strong> and <strong>EB-1A (Extraordinary Ability)</strong> self-petitions—two of the most powerful and prestigious immigration pathways available to qualified individuals. Whether you're a researcher, academic, entrepreneur, or skilled professional, our mission is to provide you with the guidance, strategy, and support needed to secure your green card through a well-crafted and persuasive petition.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="bg-gray-50 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">A Team of Experts—With Real Experience</h2>
          <p>
            Each of our consultants is a distinguished researcher holding a PhD, with strong academic credentials. What sets us apart is that every member has personally succeeded with an EB-2 NIW or EB-1A self-petition. We understand the challenges and use our insight to help you craft a compelling and credible case.
          </p>
        </div>

        {/* Craftsmanship Section */}
        <div className="bg-white border-l-4 border-indigo-500 p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Craftsmanship in Petition Writing</h2>
          <p>
            A successful self-petition relies on a well-written, clearly structured, evidence-backed narrative. We don’t use templates. Instead, we:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Understand your background and goals</li>
            <li>Identify and frame your strongest qualifications</li>
            <li>Write tailored narratives aligned with USCIS standards</li>
            <li>Professionally prepare all letters and documentation</li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="bg-indigo-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality and Success</h2>
          <p>
            Our work is guided by three values:
          </p>
          <ul className="list-inside list-disc mt-4 space-y-2 font-medium">
            <li><strong>Excellence</strong> — Every document we craft is high-quality and precise</li>
            <li><strong>Integrity</strong> — Honest assessments, transparent pricing, no false promises</li>
            <li><strong>Dedication</strong> — Your success is our success</li>
          </ul>
          <p className="mt-4">
            Since 2024, we’ve helped countless professionals succeed with a tailored, strategic, and high-impact petition process.
          </p>
        </div>

        {/* Mission Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Immigration Journey, Our Shared Mission</h2>
          <p>
            Whether you’re just exploring your options or ready to submit a petition, we guide you every step—from eligibility to approval. With us, you’re never alone in your U.S. immigration journey.
          </p>
        </div>

        <Pagecontact></Pagecontact>
      </section>
    </div>
  );
}
