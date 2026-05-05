"use client"

import { useEffect, useRef } from "react"

export const ROUTE_STOPS = [
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 },
  { label: "Bến Tre / Vĩnh Long", lat: 10.2434, lng: 106.3752 },
  { label: "Cần Thơ", lat: 10.0341, lng: 105.7922 },
  { label: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297 },
]

interface Props {
  activeDay: number
  onDayChange: (day: number) => void
}

export function MekongDeltaMap({ activeDay, onDayChange }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // We communicate activeDay to the iframe
  useEffect(() => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage({ type: 'UPDATE_DAY', activeDay }, '*')
    }
  }, [activeDay])

  // Receive clicks from iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === 'DAY_CLICKED') {
        onDayChange(e.data.day)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [onDayChange])

  // Using CartoDB Voyager NoLabels which provides an incredibly clean, 
  // luxury pastel map style exactly like Mapbox/Abercrombie & Kent
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
      <style>
        body { margin: 0; padding: 0; background: #f4f1ea; font-family: ui-serif, Georgia, serif; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; background: #e8e4db; }
        
        .custom-marker {
          transition: all 0.3s;
        }
        
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
        
        .marker-label.active {
          font-weight: bold;
          color: #8B4A2A;
        }
        
        .marker-label:hover {
          color: #8B4A2A;
        }

        .leaflet-control-attribution {
          display: none !important;
        }
        
        .leaflet-container {
          background: #e8e4db !important;
        }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        const STOPS = ${JSON.stringify(ROUTE_STOPS)};
        let activeDay = ${activeDay};
        let markers = [];

        const map = L.map('map', {
          zoomControl: false,
          scrollWheelZoom: false,
          dragging: false,
          doubleClickZoom: false,
          boxZoom: false
        });
        
        // CartoDB Voyager tiles (beige land, pale blue water, no labels)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
          maxZoom: 19
        }).addTo(map);

        // Fit map bounds to stops
        const bounds = L.latLngBounds(STOPS.map(s => [s.lat, s.lng]));
        map.fitBounds(bounds, { padding: [80, 80], animate: false });

        // Draw dotted lines
        const lineCoords = STOPS.map(s => [s.lat, s.lng]);
        
        // Outward journey
        L.polyline(lineCoords.slice(0, 3), {
          color: '#4a4a4a',
          weight: 1.5,
          dashArray: '3, 6',
          opacity: 0.8
        }).addTo(map);

        // Return journey (slight offset to differentiate if desired, or straight back)
        L.polyline([lineCoords[2], lineCoords[3]], {
          color: '#4a4a4a',
          weight: 1.5,
          dashArray: '3, 6',
          opacity: 0.8
        }).addTo(map);

        // Render Markers
        STOPS.forEach((stop, i) => {
          // Skip drawing a duplicate dot for HCMC at the end (Day 3 uses Day 0's dot)
          if (i === 3) return; 

          const icon = L.divIcon({
            className: 'custom-marker',
            html: \`
              <div class="marker-dot" id="dot-\${i}"></div>
              <div class="marker-label" id="label-\${i}" onclick="window.parent.postMessage({type:'DAY_CLICKED', day:\${i}}, '*')">\${stop.label}</div>
            \`,
            iconSize: [10, 10],
            iconAnchor: [5, 5]
          });

          const marker = L.marker([stop.lat, stop.lng], { icon }).addTo(map);
          markers.push(marker);
        });

        function updateActive() {
          const activeIndex = activeDay === 3 ? 0 : activeDay;
          
          markers.forEach((m, i) => {
            const dot = document.getElementById('dot-' + i);
            const label = document.getElementById('label-' + i);
            if (dot && label) {
              if (i === activeIndex) {
                dot.classList.add('active');
                label.classList.add('active');
              } else {
                dot.classList.remove('active');
                label.classList.remove('active');
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
    if (activeDay === 3) return "Return — Ho Chi Minh City"
    return ROUTE_STOPS[activeDay]?.label || "Ho Chi Minh City"
  }

  return (
    <div className="relative w-full h-full bg-[#e8e4db]">
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        className="absolute inset-0 w-full h-full border-0"
        title="Mekong Delta Route Map"
        // Allow scripts so Leaflet works in the iframe
        sandbox="allow-scripts allow-same-origin"
      />
      
      {/* Day indicator pill overlay */}
      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm shadow-xl px-6 py-4 z-20 border-l-4 border-[#8B4A2A] pointer-events-none">
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-navy/40 mb-1">Currently at</p>
        <p className="text-lg font-serif text-navy">
          {getActiveLabel()}
        </p>
      </div>

      {/* Decorative controls */}
      <div className="absolute top-6 left-6 flex flex-col shadow border border-gray-200 z-20">
        <div className="w-8 h-8 bg-white flex items-center justify-center text-navy font-bold text-lg border-b border-gray-200 cursor-not-allowed">+</div>
        <div className="w-8 h-8 bg-white flex items-center justify-center text-navy font-bold text-lg cursor-not-allowed">−</div>
      </div>
    </div>
  )
}
