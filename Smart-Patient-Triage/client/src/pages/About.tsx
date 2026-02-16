export default function About() {
  return (
    <div className="min-h-screen bg-background flex justify-center py-16 px-4">
      <div className="max-w-5xl w-full space-y-12">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-primary text-center">
          About MediTriage AI
        </h1>

        {/* MAIN DESCRIPTION BOX */}
        <div className="
  bg-primary/5 
  border border-primary/10 
  rounded-xl 
  shadow-md 
  p-6
  transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-xl
  hover:shadow-primary/20
">

          <p className="text-black">
            MediTriage AI is an intelligent healthcare triage system designed to help
            hospitals prioritize patients using AI-powered symptom analysis.
            Our platform focuses on improving emergency response time and ensuring
            that critical patients receive attention faster.
          </p>

          <p className="text-black">
            Built for modern hospitals, MediTriage AI combines real-time monitoring,
            smart routing, and automated decision support to assist doctors in
            managing patient flow efficiently while maintaining high standards
            of care and safety.
          </p>
        </div>

        {/* CARDS SECTION */}
       <div className="
  bg-primary/5 
  border border-primary/10 
  rounded-xl 
  shadow-md 
  p-6
  transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-xl
  hover:shadow-primary/20
">

          {/* Mission */}
         <div className="
  bg-primary/5 
  border border-primary/10 
  rounded-xl 
  shadow-md 
  p-6
  transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-xl
  hover:shadow-primary/20
">

            <h2 className="text-xl font-semibold text-primary mb-2">
              Our Mission
            </h2>
            <p className="text-black">
              To enhance hospital efficiency through AI-assisted triage,
              reducing waiting time and enabling faster medical decisions
              during critical situations.
            </p>
          </div>

          {/* Vision */}
          <div className="
  bg-primary/5 
  border border-primary/10 
  rounded-xl 
  shadow-md 
  p-6
  transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-xl
  hover:shadow-primary/20
">

            <h2 className="text-xl font-semibold text-primary mb-2">
              Our Vision
            </h2>
            <p className="text-black">
              To create a future where intelligent healthcare systems work
              alongside doctors, improving patient outcomes and transforming
              emergency medical workflows.
            </p>
          </div>

          {/* Excellence */}
          <div className="
  bg-primary/5 
  border border-primary/10 
  rounded-xl 
  shadow-md 
  p-6
  transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-xl
  hover:shadow-primary/20
">

            <h2 className="text-xl font-semibold text-primary mb-2">
  Excellence
</h2>



            <p className="text-black">
              We maintain the highest standards in medical care and
              continuously improve our services.
            </p>
          </div>

          {/* Community */}
          <div className="
  bg-primary/5 
  border border-primary/10 
  rounded-xl 
  shadow-md 
  p-6
  transition-all duration-300
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-xl
  hover:shadow-primary/20
">

            <h2 className="text-xl font-semibold text-primary mb-2">
  Community
</h2>
            <p className="text-black">
              Building a trusted network of healthcare providers and
              satisfied patients across the region.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
