const fs = require('fs');
const files = [
  'app/itineraries/vietnam-cambodia/page-client.tsx',
  'app/itineraries/mekong-delta/page-client.tsx',
  'app/itineraries/1-day/page-client.tsx',
  'app/itineraries/2-days/page-client.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // 1. Add scrollToDay function and scroll spy useEffect inside the component
  const componentMatch = content.match(/export function \w+\(\) \{[\s\S]*?(const \[activeDay, setActiveDay\] = useState\(0\))/);
  if (componentMatch && !content.includes('scrollToDay')) {
    const replacement = `${componentMatch[1]}
  
  const scrollToDay = (index: number) => {
    setActiveDay(index)
    const container = document.getElementById('itinerary-scroll')
    const element = document.getElementById(\`day-\${index}\`)
    if (container && element) {
      container.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveDay(index)
          }
        })
      },
      { root: document.getElementById('itinerary-scroll'), rootMargin: "-40% 0px -40% 0px", threshold: 0 } 
    )

    DAYS.forEach((_, i) => {
      const el = document.getElementById(\`day-\${i}\`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])`;
    content = content.replace(componentMatch[1], replacement);
  }

  // 2. Add id="itinerary-scroll"
  content = content.replace(
    /className="w-full lg:w-\[38%\] h-full overflow-y-auto bg-\[#faf8f5\] border-l border-\[#e0d9ce\]"/g,
    `id="itinerary-scroll" className="w-full lg:w-[38%] h-full overflow-y-auto bg-[#faf8f5] border-l border-[#e0d9ce] scroll-smooth"`
  );

  // 3. Update the tab buttons onClick
  content = content.replace(
    /onClick=\{\(\) => setActiveDay\(i\)\}/g,
    `onClick={() => scrollToDay(i)}`
  );

  // 4. Make all days visible with id and data-index
  content = content.replace(
    /<div key=\{day\.key\} className=\{activeDay === i \? 'block' : 'hidden'\}>/g,
    `<div key={day.key} id={\`day-\${i}\`} data-index={i} className="block pb-10">`
  );

  // 5. Update Prev/Next buttons
  // Find the exact block for buttons. It's usually:
  // <button onClick={() => setActiveDay(Math.max(0,i-1))} disabled={i===0}
  content = content.replace(
    /onClick=\{\(\) => setActiveDay\(Math\.max\(0,\s*i\s*-\s*1\)\)\}/g,
    `onClick={() => scrollToDay(Math.max(0, i - 1))}`
  );
  content = content.replace(
    /onClick=\{\(\) => setActiveDay\(Math\.min\(DAYS\.length\s*-\s*1,\s*i\s*\+\s*1\)\)\}/g,
    `onClick={() => scrollToDay(Math.min(DAYS.length - 1, i + 1))}`
  );
  content = content.replace(
    /onClick=\{\(\)=>setActiveDay\(di\)\}/g,
    `onClick={() => scrollToDay(di)}`
  );

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
