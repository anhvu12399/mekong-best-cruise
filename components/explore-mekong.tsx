"use client"

import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { useState, useEffect } from "react"

const REDIRECT_URL = "https://www.toursmekong.com/"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const mekongStops = [
  { name: "Chiang Rai", coordinates: [100.05, 19.91] as [number, number] },
  { name: "Luang Prabang", coordinates: [102.13, 19.89] as [number, number] },
  { name: "Vientiane", coordinates: [102.63, 17.97] as [number, number] },
  { name: "Pakse", coordinates: [105.8, 15.12] as [number, number] },
  { name: "Phnom Penh", coordinates: [104.93, 11.57] as [number, number] },
  { name: "Ho Chi Minh City", coordinates: [106.66, 10.82] as [number, number] },
]

const destinations = [
  { label: "Vietnam", stops: ["Ho Chi Minh City", "Can Tho", "My Tho", "Sa Dec"] },
  { label: "Cambodia", stops: ["Phnom Penh", "Siem Reap", "Kampong Cham"] },
  { label: "Laos", stops: ["Luang Prabang", "Vientiane", "Pakse"] },
  { label: "Thailand", stops: ["Chiang Rai", "Golden Triangle"] },
]

export function ExploreMekong() {
  const [activeStop, setActiveStop] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24 lg:mb-32">
          <span className="text-navy/50 text-xs tracking-[0.3em] uppercase font-medium block mb-8">
            Mekong River Cruise
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-navy tracking-[0.2em] uppercase mb-10">
            Explore the Mekong
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mb-12" />
          <p className="max-w-2xl mx-auto text-navy/65 text-base md:text-lg leading-relaxed">
            Discover the ancient waterways of Southeast Asia, revealed by people who know every bend of the river.
          </p>
        </div>

        {/* Map + Destinations Grid */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* Map — spans 3 cols */}
          <div className="lg:col-span-3">
            <div className="w-full bg-navy/5 border border-navy/10 overflow-hidden" style={{ aspectRatio: "4/3" }}>
              {mounted && (
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{ center: [103, 15], scale: 900 }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const name = geo.properties.name
                          const highlighted = ["Vietnam", "Cambodia", "Laos", "Thailand", "Myanmar"].includes(name)
                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={highlighted ? "#0f172a" : "#CBD5E1"}
                              stroke="#ffffff"
                              strokeWidth={0.5}
                              style={{
                                default: { outline: "none" },
                                hover: { outline: "none", fill: highlighted ? "#1e3a5f" : "#CBD5E1" },
                                pressed: { outline: "none" },
                              }}
                            />
                          )
                        })
                      }
                    </Geographies>

                    {/* Mekong river path — approximate polyline as markers */}
                    {mekongStops.map((stop) => (
                      <Marker
                        key={stop.name}
                        coordinates={stop.coordinates}
                        onMouseEnter={() => setActiveStop(stop.name)}
                        onMouseLeave={() => setActiveStop(null)}
                        onClick={() => window.open(REDIRECT_URL, "_blank")}
                        style={{ cursor: "pointer" }}
                      >
                        <circle
                          r={activeStop === stop.name ? 7 : 5}
                          fill="#c9a962"
                          stroke="#ffffff"
                          strokeWidth={1.5}
                          style={{ transition: "r 0.2s ease" }}
                        />
                        <text
                          textAnchor="middle"
                          y={-12}
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "9px",
                            fill: "#0f172a",
                            fontWeight: activeStop === stop.name ? "bold" : "normal",
                            pointerEvents: "none",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {stop.name.toUpperCase()}
                        </text>
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              )}
            </div>

            {/* Map legend */}
            <div className="flex items-center gap-8 mt-6 px-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-navy rounded-sm" />
                <span className="text-xs text-navy/60 tracking-wider uppercase">Cruise Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gold border-2 border-white shadow" />
                <span className="text-xs text-navy/60 tracking-wider uppercase">Key Stops</span>
              </div>
            </div>
          </div>

          {/* Destinations list — spans 2 cols */}
          <div className="lg:col-span-2 space-y-12">
            {destinations.map((dest) => (
              <div key={dest.label}>
                <h3
                  className="font-serif text-2xl text-navy mb-5 pb-4 border-b border-gold/40"
                >
                  {dest.label}
                </h3>
                <ul className="space-y-3">
                  {dest.stops.map((stop) => (
                    <li key={stop}>
                      <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.open(REDIRECT_URL, "_blank") }}
                        className="flex items-center gap-3 text-navy/65 hover:text-gold transition-colors duration-200 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/60 group-hover:bg-gold transition-colors shrink-0" />
                        <span className="text-sm tracking-[0.05em] uppercase">{stop}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.open(REDIRECT_URL, "_blank") }}
              className="inline-flex items-center gap-3 px-8 py-3 border border-navy text-navy text-xs font-medium tracking-[0.2em] uppercase hover:bg-navy hover:text-cream transition-all duration-300 mt-6"
            >
              View All Itineraries
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
