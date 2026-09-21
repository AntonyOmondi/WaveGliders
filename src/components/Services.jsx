import { useState } from 'react';
import { Clock, Info, Calendar, Check } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 1,
    title: "Competitive swimming classes",
    badge: "Advanced",
    badgeType: "orange",
    currency: "Ksh.",
    price: "15,000",
    duration: "16 training days or one month",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    description: "Designed for swimmers looking to master advanced strokes, flip turns, and endurance building for competitive swimming levels."
  },
  {
    id: 2,
    title: "Under 17 years fast swimming course",
    badge: "All Levels",
    badgeType: "slate",
    currency: "Ksh. KES",
    price: "20,000",
    duration: "18 days",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80",
    description: "An intensive youth program focusing on sprint techniques, stream-line positioning, and stroke efficiency."
  },
  {
    id: 3,
    title: "Adult Basic swimming",
    badge: "Advanced",
    badgeType: "orange",
    currency: "Ksh.",
    price: "25,000",
    duration: "One month",
    image: "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?auto=format&fit=crop&w=800&q=80",
    description: "Tailored adult water confidence and stroke technique sessions aimed at building stamina and water safety."
  }
];

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenDetails = (service) => {
    setActiveModal({
      type: 'details',
      title: service.title,
      price: `${service.currency} ${service.price}`,
      duration: service.duration,
      badge: service.badge,
      description: service.description
    });
  };

  const handleOpenBooking = (service) => {
    setActiveModal({
      type: 'booking',
      title: service.title,
      price: `${service.currency} ${service.price}`,
      duration: service.duration,
      description: `Confirm your spot for ${service.title}. Instant registration confirmation with certified coaches.`
    });
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-slate-700/90 mt-10 text-slate-100 font-sans selection:bg-slate-700 selection:text-white p-4 sm:p-8 lg:p-12">
      {/* SECTION HEADER */}
      {}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2.5">
          All Services 
          <span className="text-orange-500 text-2xl font-bold bg-orange-500/10 px-3.5 py-0.5 rounded-full border border-orange-500/20">
            ({SERVICES_DATA.length})
          </span>
        </h1>
        
        {/* Accent Underline Bar */}
        <div className="flex items-center justify-center gap-1.5 my-3">
          <span className="h-1 w-10 bg-slate-500 rounded-full"></span>
          <span className="h-1 w-6 bg-orange-500 rounded-full"></span>
        </div>

        <p className="text-slate-400 text-base sm:text-lg font-light">
          Browse our comprehensive swimming programs tailored for all age groups and skill levels.
        </p>
      </div>

      {/* GRID CONTAINER */}
      {}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id} 
            className="group flex flex-col bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(30,41,59,0.6)] hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Card Image */}
            <div className="relative h-52 overflow-hidden bg-slate-800">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Header Row: Title & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-slate-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Dynamic Badge Style */}
                  {service.badgeType === 'orange' ? (
                    <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm">
                      {service.badge}
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700 shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Price & Duration Row */}
                <div className="pt-3 border-t border-slate-800/80 mb-6">
                  <div className="flex items-center justify-between text-slate-300">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-medium text-slate-400">{service.currency}</span>
                      <span className="text-xl font-extrabold text-white">{service.price}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-2.5 py-1.5 rounded-xl border border-slate-700/60 shadow-inner">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleOpenDetails(service)}
                  className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors duration-200 active:scale-95 flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Info className="w-3.5 h-3.5" />
                  View Details
                </button>

                <button 
                  onClick={() => handleOpenBooking(service)}
                  className="w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-950/50 transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DIALOG */}
      {}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl ${activeModal.type === 'booking' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
                {activeModal.type === 'booking' ? <Calendar className="w-6 h-6" /> : <Info className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {activeModal.type === 'booking' ? 'Booking Confirmation' : 'Program Details'}
                </h3>
                <p className="text-xs text-slate-400">{activeModal.title}</p>
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-5 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Fee Structure:</span>
                <span className="font-bold text-white">{activeModal.price}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>Duration:</span>
                <span className="font-bold text-white">{activeModal.duration}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activeModal.description}
            </p>

            <div className="flex justify-end gap-3">
              <button 
                onClick={closeModal} 
                className="py-2.5 px-5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition-colors"
              >
                Close
              </button>
              {activeModal.type === 'booking' && (
                <button 
                  onClick={() => {
                    alert('Booking submitted successfully!');
                    closeModal();
                  }} 
                  className="py-2.5 px-5 text-xs font-semibold rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  Confirm Spot
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}