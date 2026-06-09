"use client"

import { useEffect, useRef } from "react"

export const INDOCHINA_STOPS = [
  { label: "Hanoi", lat: 21.0285, lng: 105.8542, dir: "left" }, // Day 1/2
  { label: "Halong Bay", lat: 20.9101, lng: 107.1815, dir: "right" }, // Day 3/4
  { label: "Hue", lat: 16.4637, lng: 107.5909, dir: "left" }, // Day 4/5
  { label: "Hoi An", lat: 15.8801, lng: 108.3380, dir: "right" }, // Day 6/7
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297, dir: "right" }, // Day 7/8
  { label: "Mekong Delta", lat: 10.0341, lng: 105.7922, dir: "bottom" }, // Day 8/9
  { label: "Phnom Penh", lat: 11.5564, lng: 104.9282, dir: "left" }, // Day 9/10
  { label: "Siem Reap", lat: 13.3633, lng: 103.8564, dir: "top" }, // Day 11/12
  { label: "Luang Prabang", lat: 19.8893, lng: 102.1347, dir: "right" }, // Day 13/14
  { label: "Golden Triangle", lat: 20.3541, lng: 100.0831, dir: "left" }, // Day 15
]

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export function RiversOfIndochinaMap({ activeDay, onDayChange }: Props) {
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
        if (e.data.day === 0) targetDay = 0 // Hanoi
        if (e.data.day === 1) targetDay = 2 // Halong Bay
        if (e.data.day === 2) targetDay = 4 // Hue
        if (e.data.day === 3) targetDay = 5 // Hoi An
        if (e.data.day === 4) targetDay = 7 // HCMC
        if (e.data.day === 5) targetDay = 7 // Mekong Delta (Day 8 starts index 7)
        if (e.data.day === 6) targetDay = 9 // Phnom Penh (Day 10 starts index 9)
        if (e.data.day === 7) targetDay = 10 // Siem Reap (Day 11 starts index 10)
        if (e.data.day === 8) targetDay = 13 // Luang Prabang (Day 14 starts index 13)
        if (e.data.day === 9) targetDay = 14 // Golden Triangle (Day 15 starts index 14)
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
          white-space: nowrap;
          font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
          font-size: 12px;
          color: #2B3A57;
          text-shadow: 
            2px 0 2px #fff, -2px 0 2px #fff, 0 2px 2px #fff, 0 -2px 2px #fff,
            1px 1px 2px #fff, -1px -1px 2px #fff, 1px -1px 2px #fff, -1px 1px 2px #fff;
          transition: all 0.3s;
          cursor: pointer;
        }
        .marker-label.dir-right {
          left: 15px;
          top: -5px;
        }
        .marker-label.dir-left {
          right: 15px;
          left: auto;
          top: -5px;
          text-align: right;
        }
        .marker-label.dir-top {
          left: 50%;
          transform: translateX(-50%);
          bottom: 15px;
          top: auto;
          text-align: center;
        }
        .marker-label.dir-bottom {
          left: 50%;
          transform: translateX(-50%);
          top: 15px;
          text-align: center;
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
        const STOPS = ${JSON.stringify(INDOCHINA_STOPS)};
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
        map.fitBounds(bounds, { padding: [40, 40], animate: false });

        const lineCoords = STOPS.map(s => [s.lat, s.lng]);
        
        // Hanoi -> Halong Bay (Road)
        L.polyline([lineCoords[0], lineCoords[1]], {
          color: '#8B4A2A', weight: 1.5, opacity: 0.8
        }).addTo(map);

        // Hanoi -> Hue (Flight)
        L.polyline([lineCoords[0], lineCoords[2]], {
          color: '#4a4a4a', weight: 1.2, dashArray: '4, 8', opacity: 0.6
        }).addTo(map);

        // Hue -> Hoi An (Hai Van Pass Road)
        L.polyline([lineCoords[2], lineCoords[3]], {
          color: '#8B4A2A', weight: 1.5, opacity: 0.8
        }).addTo(map);

        // Hoi An -> Ho Chi Minh City (Flight)
        L.polyline([lineCoords[3], lineCoords[4]], {
          color: '#4a4a4a', weight: 1.2, dashArray: '4, 8', opacity: 0.6
        }).addTo(map);

        // Ho Chi Minh City -> Mekong Delta (Road)
        L.polyline([lineCoords[4], lineCoords[5]], {
          color: '#8B4A2A', weight: 1.5, opacity: 0.8
        }).addTo(map);

        // Mekong Delta -> Phnom Penh (Water Transit / speed boat)
        L.polyline([lineCoords[5], lineCoords[6]], {
          color: '#8B4A2A', weight: 1.5, opacity: 0.8
        }).addTo(map);

        // Phnom Penh -> Siem Reap (Flight)
        L.polyline([lineCoords[6], lineCoords[7]], {
          color: '#4a4a4a', weight: 1.2, dashArray: '4, 8', opacity: 0.6
        }).addTo(map);

        // Siem Reap -> Luang Prabang (Flight)
        L.polyline([lineCoords[7], lineCoords[8]], {
          color: '#4a4a4a', weight: 1.2, dashArray: '4, 8', opacity: 0.6
        }).addTo(map);

        // Luang Prabang -> Golden Triangle (River boat)
        L.polyline([lineCoords[8], lineCoords[9]], {
          color: '#8B4A2A', weight: 1.5, opacity: 0.8
        }).addTo(map);

        STOPS.forEach((stop, i) => {
          const icon = L.divIcon({
            className: 'custom-marker',
            html: \`
              <div class="marker-dot" id="dot-\${i}"></div>
              <div class="marker-label dir-\${stop.dir || 'right'}" id="label-\${i}" onclick="window.parent.postMessage({type:'DAY_CLICKED', day:\${i}}, '*')">\${stop.label}</div>
            \`,
            iconSize: [10, 10], iconAnchor: [5, 5]
          });
          const marker = L.marker([stop.lat, stop.lng], { icon }).addTo(map);
          markers.push(marker);
        });

        function getActiveMarkerIndex(day) {
          if (day === 0 || day === 1) return 0; // Hanoi
          if (day === 2 || day === 3) return 1; // Halong Bay
          if (day === 4) return 2; // Hue
          if (day === 5 || day === 6) return 3; // Hoi An
          if (day === 7) return 4; // Ho Chi Minh City
          if (day === 8) return 5; // Mekong Delta
          if (day === 9) return 6; // Phnom Penh
          if (day === 10 || day === 11) return 7; // Siem Reap
          if (day === 12 || day === 13) return 8; // Luang Prabang
          if (day === 14) return 9; // Golden Triangle
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
    if (activeDay === 0 || activeDay === 1) return "Hanoi, Vietnam"
    if (activeDay === 2 || activeDay === 3) return "Halong Bay, Vietnam"
    if (activeDay === 4) return "Hue, Vietnam"
    if (activeDay === 5 || activeDay === 6) return "Hoi An, Vietnam"
    if (activeDay === 7) return "Ho Chi Minh City, Vietnam"
    if (activeDay === 8) return "Mekong Delta, Vietnam"
    if (activeDay === 9) return "Phnom Penh, Cambodia"
    if (activeDay === 10 || activeDay === 11) return "Angkor / Siem Reap, Cambodia"
    if (activeDay === 12 || activeDay === 13) return "Luang Prabang, Laos"
    if (activeDay === 14) return "Golden Triangle"
    return "Rivers of Indochina"
  }

  return (
    <div className="relative w-full h-full bg-[#e8e4db]">
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        className="absolute inset-0 w-full h-full border-0"
        title="Rivers of Indochina Route Map"
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
