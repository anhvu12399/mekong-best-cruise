"use client"

import { useEffect, useRef } from "react"

export const CHARTER_ROUTE_STOPS = [
  { label: "Houay Xai (Start)", lat: 20.2742, lng: 100.4132 }, // Day 1
  { label: "Pak Tha", lat: 20.0763, lng: 100.5971 }, // Day 1 Night
  { label: "Ban Thanoun", lat: 19.9876, lng: 101.0345 }, // Day 2 Night
  { label: "Pakbeng", lat: 19.8974, lng: 101.1278 }, // Day 3 Night
  { label: "Pak Ou Caves", lat: 20.0734, lng: 102.2612 }, // Day 4 Stop
  { label: "Luang Prabang", lat: 19.8893, lng: 102.1347 }, // Day 4/5 End
]

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export function PrivateCharterMap({ activeDay, onDayChange }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'UPDATE_DAY', activeDay }, '*')
    }
  }, [activeDay])

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'DAY_CLICKED') {
        let targetDay = 0
        if (e.data.day === 0) targetDay = 0 // Houay Xai / Pak Tha
        if (e.data.day === 1 || e.data.day === 2) targetDay = e.data.day
        if (e.data.day === 3 || e.data.day === 4 || e.data.day === 5) targetDay = e.data.day - 1
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
        const STOPS = ${JSON.stringify(CHARTER_ROUTE_STOPS)};
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
        map.fitBounds(bounds, { padding: [65, 65], animate: false });

        const lineCoords = STOPS.map(s => [s.lat, s.lng]);
        
        L.polyline(lineCoords, {
          color: '#4a4a4a', weight: 1.5, dashArray: '3, 6', opacity: 0.8
        }).addTo(map);

        STOPS.forEach((stop, i) => {
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
          if (day === 0) return 1; // Pak Tha / Start
          if (day === 1) return 2; // Ban Thanoun
          if (day === 2) return 3; // Pakbeng
          if (day === 3) return 4; // Pak Ou
          if (day === 4) return 5; // Luang Prabang
          return 1;
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
    if (activeDay === 0) return "Houay Xai to Pak Tha, Laos"
    if (activeDay === 1) return "Ban Thanoun, Laos"
    if (activeDay === 2) return "Pakbeng, Laos"
    if (activeDay === 3) return "Pak Ou Caves, Laos"
    if (activeDay === 4) return "Luang Prabang, Laos"
    return "Mekong River, Laos"
  }

  return (
    <div className="relative w-full h-full bg-[#e8e4db]">
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        className="absolute inset-0 w-full h-full border-0"
        title="Private Charter Route Map"
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
