const fs = require('fs');

const configs = [
  {
    file: 'app/itineraries/vietnam-cambodia/page-client.tsx',
    stateVar: 'activeTab',
    setter: 'setActiveTab',
    itineraryRef: 'itineraryRef',
    itineraryName: '"Itinerary"',
    hasIsScrolled: true
  },
  {
    file: 'app/itineraries/mekong-delta/page-client.tsx',
    stateVar: 'activeNav',
    setter: 'setActiveNav',
    itineraryRef: 'itineraryRef',
    itineraryName: '"Itinerary"',
    hasIsScrolled: false
  },
  {
    file: 'app/itineraries/1-day/page-client.tsx',
    stateVar: 'activeTab',
    setter: 'setActiveTab',
    itineraryRef: 'timelineRef',
    itineraryName: '"The Day"',
    hasIsScrolled: true
  },
  {
    file: 'app/itineraries/2-days/page-client.tsx',
    stateVar: 'activeTab',
    setter: 'setActiveTab',
    itineraryRef: 'timelineRef',
    itineraryName: '"The Journey"',
    hasIsScrolled: true
  }
];

configs.forEach(config => {
  if (!fs.existsSync(config.file)) return;
  let content = fs.readFileSync(config.file, 'utf8');

  // First, remove any existing global scroll spy
  content = content.replace(/\/\/ Scroll spy for navigation[\s\S]*?\}, \[\]\)/, '');

  // Generate the new scroll spy code
  const isScrolledCode = config.hasIsScrolled ? 'setIsScrolled(window.scrollY > 100)\n' : '';
  const newScrollSpy = `
  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      ${isScrolledCode}
      const scrollPos = window.scrollY + window.innerHeight / 2
      if (essentialsRef.current && scrollPos >= essentialsRef.current.offsetTop) {
        ${config.setter}("Essentials")
      } else if (experiencesRef.current && scrollPos >= experiencesRef.current.offsetTop) {
        ${config.setter}("Experiences")
      } else if (${config.itineraryRef}.current && scrollPos >= ${config.itineraryRef}.current.offsetTop) {
        ${config.setter}(${config.itineraryName})
      } else if (overviewRef.current && scrollPos >= overviewRef.current.offsetTop) {
        ${config.setter}("Overview")
      }
    }
    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
`;

  // Inject it right before the "const scrollToSection" or "const scrollTo" function
  if (content.includes('const scrollToSection = ')) {
    content = content.replace('  const scrollToSection = ', newScrollSpy + '\n  const scrollToSection = ');
  } else if (content.includes('const scrollTo = ')) {
    content = content.replace('  const scrollTo = ', newScrollSpy + '\n  const scrollTo = ');
  }

  fs.writeFileSync(config.file, content);
  console.log('Updated ' + config.file);
});
