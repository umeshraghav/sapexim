import Image from 'next/image';


const projectPhotos = [
  { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837", title: "Industrial Fire System", location: "Omaxe Heights" },
  { url: "https://images.unsplash.com/photo-1558444479-c8a51e9aada2", title: "Electrical Switchgear", location: "Apollo Hospital" },
  { url: "https://images.unsplash.com/photo-1521791136064-7986c2920216", title: "Surveillance Hub", location: "IOCL Noida" },
  { url: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5", title: "Access Control Setup", location: "Amolik Residency" },
  { url: "https://images.unsplash.com/photo-1563770660941-20978e87081b", title: "Data Networking", location: "The Smart Cube" },
  { url: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15", title: "Lighting Automation", location: "Omaxe Mall" },
];

export default function Photos() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
       
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter">Recent Projects</h2>
              <p className="text-slate-500 mt-2">Visualizing our 15+ years of on-field expertise.</p>
            </div>
            <div className="hidden md:block h-px flex-grow mx-8 mb-4 bg-gray-200"></div>
            <div className="text-sm font-bold text-[#538135] uppercase tracking-widest">
              Execution Excellence
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectPhotos.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md bg-white">
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={`${project.url}?auto=format&fit=crop&w=600&q=80`} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-[#538135] font-bold text-xs uppercase tracking-widest mb-1">{project.location}</p>
                  <h4 className="text-white font-bold text-lg">{project.title}</h4>
                </div>

                {/* Mobile Info (Visible without hover) */}
                <div className="p-4 md:hidden">
                    <h4 className="font-bold text-slate-800">{project.title}</h4>
                    <p className="text-xs text-slate-500">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-sm text-slate-500 italic">
               * Photographs represent actual works executed by SAP Exim and associates.
             </p>
          </div>
        </div>
      </section>

      {/* ... Partners, Clients & Footer ... */}
    </div>
  );
}