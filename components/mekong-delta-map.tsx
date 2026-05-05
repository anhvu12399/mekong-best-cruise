"use client"

// Mekong Delta route stops
const ROUTE_STOPS = [
  { label: "Ho Chi Minh City", x: 75, y: 35, id: "hcmc" },
  { label: "Bến Tre / Vĩnh Long", x: 60, y: 55, id: "bentre" },
  { label: "Cần Thơ", x: 45, y: 70, id: "cantho" },
]

// Mapping from day index to the stop it corresponds to
// Day 0: HCMC
// Day 1: Ben Tre
// Day 2: Can Tho
// Day 3: HCMC (Return)
const DAY_TO_STOP = [0, 1, 2, 0]

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export function MekongDeltaMap({ activeDay, onDayChange }: Props) {
  // activeStopIndex is the index in ROUTE_STOPS (0 to 2)
  const activeStopIndex = DAY_TO_STOP[Math.min(activeDay, DAY_TO_STOP.length - 1)]

  return (
    <div className="relative w-full h-full bg-[#f4ebd9] overflow-hidden flex items-center justify-center">
      {/* Subtle topographic / grid / river background styling */}
      <div className="absolute inset-0 opacity-30">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d5c8b5" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Abstract river lines */}
            <path d="M -10,80 Q 30,70 40,90 T 80,110 T 120,90" fill="none" stroke="#a3b8c7" strokeWidth="2" strokeOpacity="0.8" transform="scale(5) translate(0, -30) rotate(-15)" />
            <path d="M -10,80 Q 30,70 40,90 T 80,110 T 120,90" fill="none" stroke="#a3b8c7" strokeWidth="1.5" strokeOpacity="0.5" transform="scale(5) translate(5, -25) rotate(-15)" />
            <path d="M -10,80 Q 30,70 40,90 T 80,110 T 120,90" fill="none" stroke="#a3b8c7" strokeWidth="1" strokeOpacity="0.3" transform="scale(5) translate(-5, -35) rotate(-15)" />
         </svg>
      </div>

      {/* Map Content */}
      <div className="relative w-full max-w-lg aspect-square">
        {/* Route Line */}
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
           {/* Outward journey line */}
           <path 
             d={`M ${ROUTE_STOPS[0].x}% ${ROUTE_STOPS[0].y}% L ${ROUTE_STOPS[1].x}% ${ROUTE_STOPS[1].y}% L ${ROUTE_STOPS[2].x}% ${ROUTE_STOPS[2].y}%`}
             fill="none"
             stroke="#8B4A2A"
             strokeWidth="1.5"
             strokeDasharray="5,4"
             className={`transition-opacity duration-500 ${activeDay >= 1 ? 'opacity-60' : 'opacity-20'}`}
           />
           {/* Return journey line (curved to differentiate) */}
           <path 
             d={`M ${ROUTE_STOPS[2].x}% ${ROUTE_STOPS[2].y}% Q 85% 85% ${ROUTE_STOPS[0].x}% ${ROUTE_STOPS[0].y}%`}
             fill="none"
             stroke="#8B4A2A"
             strokeWidth="1.5"
             strokeDasharray="5,4"
             className={`transition-opacity duration-500 ${activeDay === 3 ? 'opacity-60' : 'opacity-0'}`}
           />
        </svg>

        {/* Stops */}
        {ROUTE_STOPS.map((stop, i) => {
          const isCurrent = activeStopIndex === i
          const hasPassed = DAY_TO_STOP.slice(0, activeDay + 1).includes(i)
          
          return (
            <div 
              key={stop.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 cursor-pointer group"
              style={{ left: `${stop.x}%`, top: `${stop.y}%`, zIndex: isCurrent ? 20 : 10 }}
              onClick={() => {
                if (i === 0) {
                  onDayChange(activeDay === 3 ? 3 : 0)
                } else {
                  onDayChange(i)
                }
              }}
            >
              {/* Pin / Dot */}
              <div className="relative flex items-center justify-center mt-2">
                {isCurrent && (
                  <div className="absolute w-10 h-10 bg-[#8B4A2A] rounded-full opacity-20 animate-ping" />
                )}
                <div className={`w-3.5 h-3.5 rounded-full border-[2.5px] border-white shadow-md transition-colors duration-300 ${
                  isCurrent ? 'bg-[#8B4A2A]' : hasPassed ? 'bg-[#8B4A2A]/60' : 'bg-[#c9a962]'
                }`} />
              </div>
              
              {/* Label */}
              <div className={`px-3 py-1.5 whitespace-nowrap text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                isCurrent 
                  ? 'bg-[#8B4A2A] text-white shadow-lg scale-105' 
                  : 'bg-white/95 text-navy shadow group-hover:bg-[#8B4A2A]/10'
              }`}>
                {stop.label}
              </div>
            </div>
          )
        })}
      </div>

      {/* Day indicator pill */}
      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm shadow-xl px-6 py-4 z-20 border-l-4 border-[#8B4A2A]">
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-navy/40 mb-1">Currently at</p>
        <p className="text-lg font-serif text-navy">
          {activeDay === 3 ? "Return — HCMC" : ROUTE_STOPS[activeStopIndex].label}
        </p>
      </div>

      {/* Compass / Decorative element */}
      <div className="absolute top-8 right-8 text-navy/20 font-serif text-4xl italic select-none">
        N
      </div>
    </div>
  )
}
