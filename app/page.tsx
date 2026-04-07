import React from 'react';
import { 
  Flame, Bell, ShieldAlert, Cctv, Key, Zap, 
  Lightbulb, Network, Users, CheckCircle, Award 
} from "lucide-react";
import Photos from './Photo';
import About from './About';

export default function SapeximLanding() {
  const services = [
    { id: 'a', title: "Fire Detection System", icon: <Flame />, desc: "Conventional, Semi-addressable, and Addressable systems." },
    { id: 'b', title: "Nurse Call System", icon: <Bell />, desc: "High-reliability conventional systems for healthcare." },
    { id: 'c', title: "Security Alarm System", icon: <ShieldAlert />, desc: "Burglar alarms, IP Video Door Phones, and Baggage Scanners." },
    { id: 'd', title: "Surveillance System", icon: <Cctv />, desc: "CCTV, Under Vehicle Surveillance (UVSS), and Thermal Cameras." },
    { id: 'e', title: "Access Control System", icon: <Key />, desc: "Stand-alone, Multi-door, Turnstiles, and Boom Barriers." },
    { id: 'f', title: "Electrical & Lighting", icon: <Zap />, desc: "Cables, switches, fans, and Smart Home Lighting Automation." },
    { id: 'h', title: "Networking", icon: <Network />, desc: "Complete Active and Passive networking infrastructure." },
    { id: 'i', title: "Building Management & Automation", icon: <Users />, desc: "ESimplifying building management with automation. Our integrated systems optimize efficiency, enhance comfort, and streamline operations for smarter buildings." },
  ];

  const partners = [
    { cat: "FAS", brands: "Honeywell, Edward, Apollo, Ravel, Daksh, Agni" },
    { cat: "CCTV", brands: "Wisenet (Samsung), Honeywell, Hikvision, Dahua, UNV, Hi-focus" },
    { cat: "ACS", brands: "HID, Honeywell, Morpho VIRDI, RBH, Syris" },
    { cat: "Electrical", brands: "Panasonic Anchor, Havells, Polycab, KEI, Honeywell, RR" }
  ];

  const clients = [
    "Apollo Hospital", "Hindustan Zinc Ltd", "Indian Oil Corporation", "Bharti Walmart", 
    "Omaxe Group", "Eros Group", "Planetcast Media", "Shipra Group", "Ansal Green Escape",
    "Amolik Buildcon", "Arttech Housing", "Basera Ventures", "Eldeco Mall"
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-[#538135] shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">
          SAP <span className="text-[#538135]">EXIM</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-[#538135]">About</a>
          <a href="#services" className="hover:text-[#538135]">Services</a>
          <a href="#partners" className="hover:text-[#538135]">Partners</a>
          <a href="#clients" className="hover:text-[#538135]">Clients</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Pioneers in <span className="text-[#538135]">Fire & Security</span> Services.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              15+ years of expertise in delivering high-reliability LV services, 
              from fire detection to smart automation.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#538135] text-white px-8 py-3 font-bold rounded hover:bg-opacity-90 transition">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
          <div className="bg-[#538135] p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Why SAP Exim?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start"><CheckCircle className="text-green-200 shrink-0" /> 15+ Years Industry Experience</li>
              <li className="flex gap-3 items-start"><CheckCircle className="text-green-200 shrink-0" /> In-house Conventional & Addressable Expertise</li>
              <li className="flex gap-3 items-start"><CheckCircle className="text-green-200 shrink-0" /> Authorized System Integrators</li>
              <li className="flex gap-3 items-start"><CheckCircle className="text-green-200 shrink-0" /> Post-Warranty AMC Support</li>
            </ul>
          </div>
        </div>
      </section>
<About />
      {/* Services Grid */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">Our Services</h2>
          <div className="h-1 w-20 bg-[#538135] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-all group border-b-4 hover:border-b-[#538135]">
              <div className="text-[#538135] mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <Award className="text-[#538135]" /> Authorized System Integrators
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((p, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-lg border-l-4 border-[#538135]">
                <h4 className="text-[#538135] font-bold text-sm uppercase mb-2">{p.cat}</h4>
                <p className="text-slate-300">{p.brands}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center uppercase">Trusted By Leading Organizations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, i) => (
              <span key={i} className="px-4 py-2 bg-slate-50 text-slate-600 text-xs font-semibold rounded border border-slate-100 italic">
                {client}
              </span>
            ))}
            <span className="px-4 py-2 text-[#538135] text-xs font-bold italic">...and 100+ more</span>
          </div>
        </div>
      </section>
      <Photos />

      {/* Contact/Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black mb-6">SAP <span className="text-[#538135]">EXIM</span></div>
            <p className="text-sm text-slate-500 italic">
              "Only businesses which offer better, cheaper products and faster than their competitors survive."
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Our Expertise</h4>
            <p className="text-sm text-slate-600">
              Specialized in Honeywell, Edward, GST, Cooper, Apollo, and more. 
              Full infrastructure for scheduled project execution.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-[#538135]">Inquiries</h4>
            <p className="text-sm text-slate-800 font-bold underline">Contact our sales team for AMC or New Projects.</p>
          </div>
        </div>
        <div className="mt-20 text-center text-[10px] text-slate-400 uppercase tracking-widest">
          © 2026 SAP EXIM  | All rights reserved | Designed by SAP EXIM Team
        </div>
      </footer>
    </div>
  );
}