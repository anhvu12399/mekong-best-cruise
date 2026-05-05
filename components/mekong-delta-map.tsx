"use client"

import { useEffect, useRef, useState } from "react"

// Mekong Delta route stops with [lat, lng] and label
export const ROUTE_STOPS = [
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297, day: 0 },
  { label: "Bến Tre / Vĩnh Long", lat: 10.2434, lng: 106.3752, day: 1 },
  { label: "Cần Thơ", lat: 10.0341, lng: 105.7922, day: 2 },
  { label: "Return — HCMC", lat: 10.8231, lng: 106.6297, day: 3 },
]

// Map bounds for our region
const MAP = {
  minLat: 9.3,
  maxLat: 11.5,
  minLng: 105.0,
  maxLng: 107.5,
}

function latLngToPercent(lat: number, lng: number) {
  const x = ((lng - MAP.minLng) / (MAP.maxLng - MAP.minLng)) * 100
  const y = ((MAP.maxLat - lat) / (MAP.maxLat - MAP.minLat)) * 100
  return { x, y }
}

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export function MekongDeltaMap({ activeDay, onDayChange }: Props) {
  const activeStop = ROUTE_STOPS[Math.min(activeDay, ROUTE_STOPS.length - 1)]

  return (
    <div className="relative w-full h-full bg-[#d4e4bc] overflow-hidden">
      {/* OpenStreetMap tile background via iframe */}
      <iframe
        src={`https://www.openstreetmap.org/export/embed.html?bbox=105.0%2C9.2%2C107.6%2C11.6&layer=mapnik`}
        className="absolute inset-0 w-full h-full border-0 opacity-90"
        style={{ pointerEvents: "none" }}
        title="Mekong Delta Map"
        loading="lazy"
      />

      {/* SVG overlay for route + dots */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        {/* Dashed route line */}
        <polyline
          points={ROUTE_STOPS.map(s => {
            const { x, y } = latLngToPercent(s.lat, s.lng)
            return `${x},${y}`
          }).join(" ")}
          fill="none"
          stroke="#2B3A57"
          strokeWidth="0.6"
          strokeDasharray="1.5,1"
          strokeLinecap="round"
        />

        {/* Dots */}
        {ROUTE_STOPS.map((stop, i) => {
          const { x, y } = latLngToPercent(stop.lat, stop.lng)
          const isActive = activeDay >= i
          const isCurrent = activeDay === i
          return (
            <g key={i} style={{ pointerEvents: "all", cursor: "pointer" }} onClick={() => onDayChange(i)}>
              {isCurrent && (
                <circle cx={x} cy={y} r={4} fill="#8B4A2A" fillOpacity={0.2} />
              )}
              <circle
                cx={x}
                cy={y}
                r={isCurrent ? 2.2 : 1.4}
                fill={isActive ? "#8B4A2A" : "#9ca3af"}
                stroke="white"
                strokeWidth="0.5"
                style={{ transition: "all 0.4s" }}
              />
              {/* Arrow indicator for current */}
              {isCurrent && (
                <polygon
                  points={`${x},${y - 5} ${x - 1.4},${y - 3} ${x + 1.4},${y - 3}`}
                  fill="#8B4A2A"
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Floating labels for each stop */}
      {ROUTE_STOPS.map((stop, i) => {
        const { x, y } = latLngToPercent(stop.lat, stop.lng)
        const isActive = activeDay >= i
        const isCurrent = activeDay === i
        return (
          <button
            key={i}
            onClick={() => onDayChange(i)}
            style={{
              position: "absolute",
              left: `calc(${x}% + 14px)`,
              top: `calc(${y}% - 8px)`,
              transition: "all 0.3s",
            }}
            className={`text-left z-10 ${isCurrent ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
          >
            <span
              className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-1 whitespace-nowrap
                ${isCurrent
                  ? "bg-[#8B4A2A] text-white shadow-lg"
                  : isActive
                  ? "bg-white/90 text-navy shadow"
                  : "bg-white/70 text-navy/50"
                }`}
            >
              {stop.label}
            </span>
          </button>
        )
      })}

      {/* Day indicator pill */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm shadow-lg px-4 py-3 z-20">
        <p className="text-[9px] tracking-[0.25em] uppercase font-bold text-[#8B4A2A] mb-0.5">Currently at</p>
        <p className="text-sm font-bold text-navy">{activeStop.label}</p>
      </div>

      {/* Zoom-style controls (decorative, matching A&K style) */}
      <div className="absolute top-4 left-4 flex flex-col gap-0 z-20 shadow">
        <div className="w-8 h-8 bg-white flex items-center justify-center text-navy font-bold text-lg border-b border-gray-200 cursor-default select-none">+</div>
        <div className="w-8 h-8 bg-white flex items-center justify-center text-navy font-bold text-lg cursor-default select-none">−</div>
      </div>
    </div>
  )
}
