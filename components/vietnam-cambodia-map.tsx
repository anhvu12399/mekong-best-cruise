"use client"

import { useEffect, useRef } from "react"

export const VC_ROUTE_STOPS = [
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 }, // Day 1 Start
  { label: "Cần Thơ", lat: 10.0341, lng: 105.7922 }, // Day 1 & 2
  { label: "Phnom Penh", lat: 11.5564, lng: 104.9282 }, // Day 3 & 4 & 5
  { label: "Siem Reap", lat: 13.3611, lng: 103.8595 }, // Day 5 & 6 & 7
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 }, // Day 7 & 8 (Return)
]

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export function VietnamCambodiaMap({ activeDay, onDayChange }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'UPDATE_DAY', activeDay }, '*')
    }
  }, [activeDay])

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'DAY_CLICKED') {
        // Map markers click to corresponding day indices:
        // HCMC (0) -> Day 0
        // Can Tho (1) -> Day 1
        // Phnom Penh (2) -> Day 2
        // Siem Reap (3) -> Day 5
        let targetDay = 0
        if (e.data.day === 1) targetDay = 1
        if (e.data.day === 2) targetDay = 2
        if (e.data.day === 3) targetDay = 5
        onDayChange(targetDay)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [onDayChange])

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        body { margin: 0; padding: 0; background: #f4f1ea; font-family: ui-serif, Georgia, serif; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; background: #e8e4db; }
        
        .custom-marker { transition: all 0.3s; }
        .marker-dot {
          width: 10px;
          height: 10px;
          background: #555;
          border: 1.5px solid white;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
          transition: all 0.3s;
        }
        .marker-dot.active {
          background: #8B4A2A;
          transform: scale(1.4);
          border: 2px solid white;
          z-index: 1000;
        }
        
        .marker-label {
          position: absolute;
          left: 15px;
          top: -5px;
          white-space: nowrap;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: 13px;
          color: #2B3A57;
          text-shadow: 
            2px 0 2px #fff, -2px 0 2px #fff, 0 2px 2px #fff, 0 -2px 2px #fff,
            1px 1px 2px #fff, -1px -1px 2px #fff, 1px -1px 2px #fff, -1px 1px 2px #fff;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .marker-label.active { font-weight: bold; color: #8B4A2A; }
        .marker-label:hover { color: #8B4A2A; }
        .leaflet-control-attribution { display: none !important; }
        .leaflet-container { background: #e8e4db !important; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        const STOPS = ${JSON.stringify(VC_ROUTE_STOPS)};
        let activeDay = ${activeDay};
        let markers = [];

        const map = L.map('map', {
          zoomControl: false, scrollWheelZoom: false, dragging: false,
          doubleClickZoom: false, boxZoom: false
        });
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
          maxZoom: 19
        }).addTo(map);

        const bounds = L.latLngBounds(STOPS.map(s => [s.lat, s.lng]));
        map.fitBounds(bounds, { padding: [80, 80], animate: false });

        const lineCoords = STOPS.map(s => [s.lat, s.lng]);
        
        // Outward journey HCMC -> Can Tho -> Phnom Penh -> Siem Reap
        L.polyline(lineCoords.slice(0, 4), {
          color: '#4a4a4a', weight: 1.5, dashArray: '3, 6', opacity: 0.8
        }).addTo(map);

        // Flight / Return journey: Siem Reap -> HCMC
        L.polyline([lineCoords[3], lineCoords[4]], {
          color: '#4a4a4a', weight: 1.5, dashArray: '3, 6', opacity: 0.8
        }).addTo(map);

        STOPS.forEach((stop, i) => {
          if (i === 4) return; // Skip dup HCMC
          const icon = L.divIcon({
            className: 'custom-marker',
            html: \`
              <div class="marker-dot" id="dot-\${i}"></div>
              <div class="marker-label" id="label-\${i}" onclick="window.parent.postMessage({type:'DAY_CLICKED', day:\${i}}, '*')">\${stop.label}</div>
            \`,
            iconSize: [10, 10], iconAnchor: [5, 5]
          });
          const marker = L.marker([stop.lat, stop.lng], { icon }).addTo(map);
          markers.push(marker);
        });

        function getActiveMarkerIndex(day) {
          if (day === 0) return 0; // HCMC
          if (day === 1) return 1; // Can Tho
          if (day === 2) return 1; // Can Tho -> Phnom Penh (can be Can Tho or PP, let's say Can Tho)
          if (day === 3 || day === 4) return 2; // Phnom Penh
          if (day === 5 || day === 6) return 3; // Siem Reap
          if (day === 7) return 0; // HCMC
          return 0;
        }

        function updateActive() {
          const activeIndex = getActiveMarkerIndex(activeDay);
          markers.forEach((m, i) => {
            const dot = document.getElementById('dot-' + i);
            const label = document.getElementById('label-' + i);
            if (dot && label) {
              if (i === activeIndex) {
                dot.classList.add('active'); label.classList.add('active');
              } else {
                dot.classList.remove('active'); label.classList.remove('active');
              }
            }
          });
        }
        updateActive();

        window.addEventListener('message', (e) => {
          if (e.data && e.data.type === 'UPDATE_DAY') {
            activeDay = e.data.activeDay;
            updateActive();
          }
        });
      </script>
    </body>
    </html>
  `

  const getActiveLabel = () => {
    if (activeDay === 0) return "Ho Chi Minh City"
    if (activeDay === 1 || activeDay === 2) return "Cần Thơ"
    if (activeDay === 3 || activeDay === 4) return "Phnom Penh"
    if (activeDay === 5 || activeDay === 6) return "Siem Reap"
    if (activeDay === 7) return "Ho Chi Minh City"
    return "Ho Chi Minh City"
  }

  return (
    <div className="relative w-full h-full bg-[#e8e4db]">
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        className="absolute inset-0 w-full h-full border-0"
        title="Vietnam Cambodia Route Map"
        sandbox="allow-scripts allow-same-origin"
      />
      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm shadow-xl px-6 py-4 z-20 border-l-4 border-[#8B4A2A] pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-navy/40 mb-1">Currently at</p>
        <p className="text-lg font-serif text-navy">
          {getActiveLabel()}
        </p>
      </div>
      <div className="absolute top-6 left-6 flex flex-col shadow border border-gray-200 z-20">
        <div className="w-8 h-8 bg-white flex items-center justify-center text-navy font-bold text-lg border-b border-gray-200 cursor-not-allowed">+</div>
        <div className="w-8 h-8 bg-white flex items-center justify-center text-navy font-bold text-lg cursor-not-allowed">−</div>
      </div>
    </div>
  )
}
