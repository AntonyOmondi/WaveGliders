import psv from '../assets/psv.jpeg'
import AllSaints from '../assets/AllSaints.jpeg'
import Stedmark from '../assets/Stedmark.jpg'
import { MapPin, Compass, ExternalLink } from 'lucide-react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

const VENUES = [
  {
    id: 'madaraka',
    name: 'All Saints Primary School',
    location: 'Madaraka, Nairobi',
    tag: 'Madaraka Venue',
    description: 'Dedicated training facility equipped for stroke development, squad practice, and youth swimming sessions.',
    directions: 'Located off Langata Road near Strathmore University. Turn onto Ole Sangale Road and follow signs towards All Saints Primary.',
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

export default function TrainingVenues() {
  return (
    <section id="venues" className="scroll-mt-12 py-24 px-4 sm:px-8 lg:px-12 bg-ocean-700">
      <SectionHeader
        eyebrow="Find Us"
        title={<>Training <span className="text-cyan-400">Venues</span></>}
        subtitle="Our primary training facilities across Nairobi. Tap a card to open directions in Google Maps."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {VENUES.map((venue, i) => (
          <Reveal key={venue.id} delay={i * 0.1} className="h-full">
            <article className="group h-full bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition duration-300 flex flex-col">
              <a
                href={venue.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-52 overflow-hidden"
                title={`Open ${venue.name} in Google Maps`}
              >
                <img
                  src={venue.imageUrl}
                  alt={venue.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-ocean-950/70 backdrop-blur-md text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-400/30">
                  {venue.tag}
                </span>
              </a>

              <div className="p-6 flex-1 flex flex-col gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                    <h3 className="text-xl font-bold text-white">{venue.name}</h3>
                  </div>
                  <p className="text-xs text-cyan-300 font-medium pl-7 mt-0.5">{venue.location}</p>
                </div>

                <p className="text-sm text-slate-400 font-light leading-relaxed">{venue.description}</p>

                <div className="bg-ocean-900/70 p-3.5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-orange-300 font-semibold text-xs mb-1">
                    <Compass className="w-4 h-4" />
                    Directions & Landmarks
                  </div>
                  <p className="text-xs text-slate-300 leading-normal">{venue.directions}</p>
                </div>

                <a
                  href={venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-cyan-950/50 transition"
                >
                  Get Directions <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
