import psv from '../assets/psv.jpeg'
import AllSaints from '../assets/AllSaints.jpeg'
import Stedmark from '../assets/Stedmark.jpg'

const VENUES = [
  {
    id: 'madaraka',
    name: 'All Saints Primary School',
    location: 'Madaraka, Nairobi',
    tag: 'Madaraka Venue',
    description: 'Dedicated training facility equipped for stroke development, squad practice, and youth swimming sessions.',
    directions: 'Located off Langata Road near Strathmore University. Turn onto Ole Sangale Road and follow signs towards All Saints Primary.',
    // Direct Google Maps Search / Directions Query Link
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=All+Saints+Primary+School+Madaraka+Nairobi',
    imageUrl: AllSaints,
  },
  {
    id: 'upperhill',
    name: 'Public Service Club',
    location: 'Upper Hill, Nairobi',
    tag: 'Upper Hill Venue',
    description: 'Full-length pool facility ideal for adult lap swimming, technique refining, and structured club training.',
    directions: 'Situated along Mara Road in Upper Hill, opposite the Japanese Embassy / Near KNH. Accessible via Kilimanjaro Avenue or Mara Road.',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Public+Service+Club+Upper+Hill+Nairobi',
    imageUrl: psv,
  },
  {
    id: 'karen',
    name: 'Stedmark Gardens',
    location: 'Karen, Nairobi',
    tag: 'Karen Venue',
    description: 'Serene outdoor aquatic environment suited for beginner lessons, private coaching, and weekend training sessions.',
    directions: 'Located along Mokoyeti Road East in Karen. Accessible via Langata Road or Karen Road, heading towards the Stedmark Gardens complex.',
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Stedmark+Gardens+Karen+Nairobi',
    imageUrl: Stedmark,
  },
];

// --- Lightweight SVG Icons ---
const MapPinIcon = () => (
  <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CompassIcon = () => (
  <svg className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default function TrainingVenues() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 bg-cyan-900/90 lg:px-12 mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Training <span className="text-cyan-200">Venues</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
          Explore our primary training facilities across Nairobi. Click on any card or direction link to open navigation in Google Maps.
        </p>
        <div className="flex items-center justify-center gap-1.5 pt-2">
          <span className="h-1 w-12 bg-cyan-500 rounded-full"></span>
          <span className="h-1 w-6 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {VENUES.map((venue) => (
          <div
            key={venue.id}
            className="group bg-slate-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/80 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Image Container / Map Trigger */}
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-52 overflow-hidden cursor-pointer"
                title={`Open ${venue.name} in Google Maps`}
              >
                <img
                  src={venue.imageUrl}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                
                {/* Badge Overlay */}
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/30">
                  {venue.tag}
                </span>

                {/* Click Hint Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-cyan-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    Open in Google Maps <ExternalLinkIcon />
                  </span>
                </div>
              </a>

              {/* Content Body */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon />
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {venue.name}
                    </h3>
                  </div>
                  <p className="text-xs text-cyan-400 font-medium pl-7 mt-0.5">
                    {venue.location}
                  </p>
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {venue.description}
                </p>

                {/* Written Directions */}
                <div className="bg-slate-900/70 p-3.5 rounded-xl border border-slate-700/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-orange-400 font-semibold text-xs">
                    <CompassIcon />
                    <span>Directions & Landmarks</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-normal pl-5">
                    {venue.directions}
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Button Footer */}
            <div className="p-6 pt-0">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-lg transition-all duration-200 hover:shadow-cyan-500/20"
              >
                <span>Get Directions on Google Maps</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}