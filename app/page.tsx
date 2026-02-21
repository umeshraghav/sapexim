import { 
  Flame, 
  Bell, 
  ShieldAlert, 
  Cctv, 
  Key, 
  Zap, 
  Lightbulb, 
  Network, 
  Users 
} from "lucide-react";
import Link from 'next/link';

export default function Home() {
  const services = [
    { title: "Fire Detection System", icon: <Flame />, desc: "Advanced smoke, heat, and flame sensors with integrated suppression triggers." },
    { title: "Nurse Call System", icon: <Bell />, desc: "Reliable communication infrastructure for healthcare facilities and emergency response." },
    { title: "Security Alarm System", icon: <ShieldAlert />, desc: "Intrusion detection and perimeter security for industrial and commercial assets." },
    { title: "Surveillance System", icon: <Cctv />, desc: "High-definition IP monitoring with AI-driven motion tracking and remote access." },
    { title: "Access Control System", icon: <Key />, desc: "Biometric and RFID solutions to manage personnel flow and secure restricted zones." },
    { title: "Electrical Equipment", icon: <Zap />, desc: "Full inventory of industrial-grade cables, switches, breakers, and distribution units." },
    { title: "Lighting Automation", icon: <Lightbulb />, desc: "Smart energy-saving solutions with automated dimming and occupancy sensing." },
    { title: "Networking", icon: <Network />, desc: "Structured cabling and robust networking hardware for seamless data integration." },
    { title: "Consultancy", icon: <Users />, desc: "Expert technical audits, system design, and project management for complex installs." },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-5 bg-[#0a2342] border-b-4 border-[#f39c12] sticky top-0 z-50 shadow-lg">
        <div className="text-2xl font-black text-white tracking-tighter">
          SAPEX<span className="text-[#f39c12]">IM</span>
        </div>
        <div className="hidden md:flex space-x-6 text-xs font-bold uppercase tracking-widest text-slate-200">
          <Link href="#services" className="hover:text-[#f39c12] transition">Services</Link>
          <Link href="#contact" className="hover:text-[#f39c12] transition">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-8 md:px-20 bg-[#0a2342] text-white">
        <div className="max-w-4xl">
          <span className="text-[#f39c12] font-bold tracking-widest uppercase text-sm">Industrial Integration Experts</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 leading-tight">
            Integrated Systems for <br /> Modern Infrastructure.
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            From fire safety to high-voltage electrical, Sapexim provides the core technologies that keep global industries moving.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#f39c12] text-[#0a2342] px-8 py-3 font-bold uppercase hover:bg-white transition">Get a Quote</button>
            <button className="border-2 border-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-[#0a2342] transition">Browse Catalog</button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-[#0a2342]">Our Core Services & Equipment</h2>
            <div className="h-1 w-20 bg-[#f39c12] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border-b-4 border-transparent hover:border-[#f39c12] hover:shadow-2xl transition-all duration-300 flex flex-col items-start group">
                <div className="text-[#f39c12] mb-6 p-3 bg-slate-50 group-hover:bg-[#0a2342] transition-colors rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a2342] mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-[#0a2342] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Ready to secure your facility?</h2>
            <p className="text-slate-400 mt-2">Speak to a Sapexim systems engineer today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm font-mono">
            <div className="flex flex-col">
              <span className="text-[#f39c12] font-bold uppercase">Sales</span>
              <span>info@sapexim.com</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#f39c12] font-bold uppercase">Support</span>
              <span>+91 0129 432 2864</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#f39c12] font-bold uppercase">Address</span>
              <span>Metro Pillar No. 688, Office No 9-10, First Floor Shyam Baba Market near, Faridabad, Haryana 121002</span>
            </div>

            
          </div>
        </div>
      </footer>
    </main>
  );
}