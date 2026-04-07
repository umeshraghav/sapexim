import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function SapeximLanding() {
 

  return (
    <div className="min-h-screen bg-white">
      <section id="contact" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Get In Touch</h2>
            <p className="text-slate-500 mt-2 italic">Ready to secure your next project? Let’s talk.</p>
            <div className="h-1.5 w-20 bg-[#538135] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-8 border-[#538135]">
                <h3 className="text-xl font-bold mb-6 text-slate-800">Corporate Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#538135] text-white rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#538135] uppercase">Address</h4>
                      <p className="text-slate-600 leading-relaxed mt-1">
                        Office No 9-10, First Floor, Shyam Baba Market,<br />
                        Near Metro Pillar No. 688, Faridabad,<br />
                        Haryana 121002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#538135] text-white rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#538135] uppercase">Call Us</h4>
                      <p className="text-slate-600 mt-1 font-mono">0129 432 2864</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#538135] text-white rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#538135] uppercase">Email</h4>
                      <p className="text-slate-600 mt-1">sales@sapexim.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <Clock size={20} className="text-slate-400" />
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                      Mon - Sat: 10:00 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-inner bg-slate-200 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3242!2d77.315!3d28.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIyJzQ4LjAiTiA3N8KwMTgnNTQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#538135] focus:ring-1 focus:ring-[#538135] outline-none transition" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#538135] focus:ring-1 focus:ring-[#538135] outline-none transition" />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#538135] focus:ring-1 focus:ring-[#538135] outline-none transition bg-white">
                    <option>Fire Detection System</option>
                    <option>Security/Surveillance</option>
                    <option>Electrical & Lighting</option>
                    <option>AMC Contract</option>
                    <option>Consultancy (LV Services)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Your Message</label>
                  <textarea rows={4} placeholder="Describe your project requirements..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#538135] focus:ring-1 focus:ring-[#538135] outline-none transition"></textarea>
                </div>

                <button className="w-full bg-[#538135] text-white py-4 rounded-lg font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#3e6128] transition shadow-lg shadow-[#538135]/20">
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}