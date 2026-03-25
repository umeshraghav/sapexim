import { Quote } from "lucide-react";

 

export default function About() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* ... Navigation & Hero ... */}

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="md:col-span-5 relative">
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#538135] -z-10 rounded-lg hidden md:block"></div>
              <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden shadow-2xl">
                {/* Replace with actual photo: /public/founder-abhishek.jpg */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                  alt="Abhishek Chauhan - Founder of SAP Exim" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-6 md:hidden">
                <h2 className="text-3xl font-bold text-slate-900">Abhishek Chauhan</h2>
                <p className="text-[#538135] font-bold tracking-widest uppercase text-sm">Founder & Managing Director</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7">
              <div className="hidden md:block mb-6">
                <h2 className="text-4xl font-bold text-slate-900">Abhishek Chauhan</h2>
                <p className="text-[#538135] font-bold tracking-widest uppercase text-sm mt-2">Founder & Managing Director</p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-8 text-slate-100 h-16 w-16 -z-10" />
                <p className="text-xl italic text-slate-700 leading-relaxed mb-6">
                  "In the race for progress, only innovative ideas can win. At SAP Exim, our survival is rooted in our credibility and our commitment to offering products that are better, faster, and more reliable than the competition."
                </p>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  With over <strong>15 years of on-field expertise</strong> in Fire Detection, Surveillance, and Security systems, 
                  Abhishek Chauhan founded SAP Exim with a vision to provide a single-window solution for complex industrial LV services.
                </p>
                <p>
                  Under his leadership, SAP Exim has evolved from a startup into a trusted partner for giants like 
                  <strong> Omaxe, Apollo Hospitals, and Indian Oil</strong>. His hands-on approach to system design for conventional 
                  and addressable fire alarms ensures that every project meets international safety standards while staying 
                  within scheduled time frames.
                </p>
                <p>
                  Abhishek remains deeply involved in the company’s <strong>AMC (Annual Maintenance Contract)</strong> division, 
                  believing that the true worth of a security partner is proven in the support provided after the warranty period.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="h-px w-12 bg-[#538135]"></div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Expertise in Fire & Security</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ... Services, Projects, Partners, etc ... */}
    </div>
  );
}