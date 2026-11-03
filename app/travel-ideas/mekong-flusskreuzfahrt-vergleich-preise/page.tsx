import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Bodoni_Moda } from "next/font/google"
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Ship, 
  DollarSign, 
  ShieldCheck, 
  Anchor, 
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  Scale,
  Clock,
  Compass,
  FileText,
  Accessibility
} from "lucide-react"
import { AuthorByline, AuthorCard } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/mekong-flusskreuzfahrt-vergleich-preise`

export const metadata: Metadata = {
  title: "Mekong Flusskreuzfahrt: Schiffsvergleich, Echte Kosten & Tonle Sap Fakten 2026",
  description:
    "Unabhängiger Schiffsvergleich für Mekong Flusskreuzfahrten in Vietnam & Kambodscha. Aqua Mekong vs The Jahan vs Phoenix Reisen, Tonle Sap Niedrigwasser, Nebenkosten & Senioren-Fakten.",
  keywords: [
    "mekong flusskreuzfahrt",
    "mekong kreuzfahrt",
    "flusskreuzfahrt mekong erfahrungen",
    "mekong kreuzfahrt luxus vergleich",
    "aqua mekong the jahan vergleich",
    "tonle sap niedrigwasser kreuzfahrt",
    "mekong kreuzfahrt kosten nebenkosten",
    "mekong flusskreuzfahrt senioren barrierefrei"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Mekong Flusskreuzfahrt: Großer Schiffs- & Kostenvergleich 2026",
    description:
      "Detaillierter Expertenbericht: Welches Mekong-Schiff lohnt sich? Technische Daten, Treppensteigung, Aufzüge, Tonle Sap Niedrigwasser-Fakten und Trinkgeld-Standards.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/the_jahan.avif`, width: 1200, height: 630, alt: "Mekong Flusskreuzfahrt Schiffsvergleich" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mekong Flusskreuzfahrt: Vergleich, Preise & Tonle Sap Realität (2026)",
    description: "Der objektive Ratgeber für Flusskreuzfahrten zwischen Saigon und Siem Reap. Fakten zu Schiffen, Nebenkosten und Barrierefreiheit.",
    images: [`${BASE_URL}/images/the_jahan.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mekong Flusskreuzfahrt: Schiffsvergleich, Echte Kosten und Tonle Sap Fakten 2026",
  "description": "Präziser technischer und wirtschaftlicher Vergleich für anspruchsvolle Reisende aus Deutschland, Österreich und der Schweiz. Schiffsanalyse, Nebenkosten und hydrologische Realitäten.",
  "image": `${BASE_URL}/images/the_jahan.avif`,
  "inLanguage": "de-DE",
  "about": [
    {
      "@type": "Thing",
      "name": "Flusskreuzfahrt",
      "sameAs": "https://de.wikipedia.org/wiki/Flusskreuzfahrt"
    },
    {
      "@type": "Place",
      "name": "Mekong",
      "sameAs": "https://de.wikipedia.org/wiki/Mekong"
    },
    {
      "@type": "Place",
      "name": "Tonle Sap",
      "sameAs": "https://de.wikipedia.org/wiki/Tonle_Sap"
    }
  ],
  "mentions": [
    {
      "@type": "Organization",
      "name": "Aqua Expeditions",
      "sameAs": "https://en.wikipedia.org/wiki/Aqua_Expeditions"
    },
    {
      "@type": "Organization",
      "name": "Mekong River Commission",
      "sameAs": "https://en.wikipedia.org/wiki/Mekong_River_Commission"
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Doan Nguyen",
    "jobTitle": "Leiter Schiffsbetrieb & Mekong-Spezialist",
    "worksFor": {
      "@type": "TravelAgency",
      "name": "Mekong River Cruise",
      "url": BASE_URL,
    },
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mekong River Cruise",
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo.png`,
    },
  },
  "datePublished": "2026-11-03",
  "dateModified": "2026-11-03",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Welches Schiff bietet die beste Mekong Flusskreuzfahrt zwischen Vietnam und Kambodscha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für kompromisslosen modernen Luxus ist die Aqua Mekong der Marktführer (nur 20 Suiten, 1:1 Crew-Passagier-Verhältnis, Spitzenkulinarik und inkludierter Inlandsflug in der Trockenzeit). Für Liebhaber kolonialer Eleganz und Holzverarbeitung im britisch-indischen Kolonialstil bieten The Jahan und Jayavarman von Heritage Line das stimmungsvollste Ambiente mit privaten Balkonen. Für Reisende mit Mobilitätseinschränkungen ist die Victoria Mekong die einzige Wahl mit einem vollwertigen 4-Deck-Personenaufzug."
      }
    },
    {
      "@type": "Question",
      "name": "Kann das Schiff bei Niedrigwasser direkt nach Siem Reap fahren oder muss man mit dem Bus fahren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Von Dezember bis August (Trockenzeit) sinkt der Wasserstand des Tonle Sap Sees auf 0,8 bis 1,5 Meter. Flusskreuzfahrtschiffe mit einem Tiefgang über 1,60 m können den See nicht befahren. Nahezu alle Reedereien (Heritage Line, Pandaw, Victoria Mekong, Phoenix-Charter) beenden die Kreuzfahrt in Kampong Cham oder Phnom Penh und transferieren die Gäste per Reisebus (ca. 5 bis 6 Stunden Fahrtzeit) nach Siem Reap. Die einzige Ausnahme bildet Aqua Mekong, die während der Niedrigwassersaison einen regulären Inlandsflug von Phnom Penh nach Siem Reap im Reisepreis inkludiert."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Nebenkosten und versteckten Gebühren fallen an Bord an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zu den obligatorischen Zusatzkosten, die meist nicht im Basispreis enthalten sind, gehören: 1. Hafen- und Schleusengebühren (65 bis 95 USD pro Person, bar beim Check-in zu entrichten). 2. Internationale Trinkgeldempfehlungen (10 bis 15 USD/Tag für die Schiffsbesatzung + 3 bis 5 USD/Tag für den lokalen Reiseleiter, ca. 105 bis 175 USD pro Woche). 3. Kambodscha-Visum an der Flussgrenze (35 bis 40 USD). 4. Einzelkabinenzuschläge (in der Regel 50 % bis 100 % Aufschlag)."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Visum- und Geldregeln gelten beim Flussgrenzübertritt in Kaam Samnor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Am Flussgrenzübergang Kaam Samnor zwischen Vietnam und Kambodscha werden digitale E-Visa auf Handys oder Tablets ausnahmslos abgelehnt. Jeder Reisende muss 2 gedruckte Papierexemplare des kambodschanischen E-Visums (Typ T) mitführen. Bei Bargeld verlangt die National Bank of Cambodia (NBC) absolute Makellosigkeit: US-Dollar-Scheine mit Druckdatum vor 2013, Knicken, winzigen Rissen oder Stempelabdrücken werden von Banken, Hotels und Händlern kategorisch zurückgewiesen."
      }
    }
  ]
}

export default function MekongFlusskreuzfahrtPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="min-h-screen bg-[#FDFBF7] text-[#2C3E50]">
        {/* Hero Section */}
        <header className="relative w-full h-[60vh] min-h-[460px] flex items-center justify-center bg-[#1A2B49] text-white overflow-hidden">
          <Image
            src="/images/the_jahan.avif"
            alt="Mekong Flusskreuzfahrt Vietnam Kambodscha Schiffsvergleich"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B49] via-transparent to-black/30" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Compass className="w-3.5 h-3.5" /> Unabhängiger Leitfaden 2026 · DACH-Fokus
            </div>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight ${playfair.className}`}>
              Mekong Flusskreuzfahrt: Schiffsvergleich, Echte Kosten &amp; Tonle Sap Realität
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Aqua Mekong, The Jahan, Victoria Mekong oder Phoenix Reisen? Ein unverblümter Blick auf Tiefgang, Treppensteilheit, Tonle Sap Niedrigwasser-Fakten und versteckte Nebenkosten.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Metadata & Author Box */}
          <AuthorByline
            authorName="Doan Nguyen"
            authorRole="Leiter Schiffsbetrieb (18 Jahre Mekong-Erfahrung)"
            publishedDate="3. November 2026"
            readTime="12 Min. Lesezeit"
          />

          {/* Quick Direct Answer Block - Princeton GEO Rule */}
          <section className="mb-12 bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EBF5FB] text-[#2980B9] rounded-lg shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B49] mb-2">
                  Schnellüberblick: Welches Schiff passt zu Ihren Anforderungen?
                </h2>
                <p className="text-base text-[#4A5568] leading-relaxed">
                  <strong>Für anspruchsvolle Reisende mit Fokus auf Privatsphäre &amp; Komfort:</strong> Die <em>Aqua Mekong</em> ist das modernste 5-Sterne-Boutiqueschiff (nur 20 Suiten, 1:1 Betreuungsverhältnis). Während der 9-monatigen Niedrigwassersaison vermeidet sie als einziges Schiff die mühsame 6-stündige Busfahrt durch einen inkludierten Inlandsflug (Phnom Penh ✈️ Siem Reap).
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>Für Liebhaber klassischer Kolonialatmosphäre:</strong> <em>The Jahan</em> von Heritage Line bietet erstklassigen Service im indochinesischen Kolonialstil mit 100 % Privatbalkonen. <u>Wichtiger Hinweis für Senioren:</u> Das Schiff hat keinen Aufzug; die Innentreppen haben eine Neigung von 42° auf glattem Hartholz.
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>Für Reisende mit Gelenkproblemen oder Rollator:</strong> Die <em>Victoria Mekong</em> ist das einzige moderne Schiff mit einem durchgehenden 4-Deck-Personenaufzug und barrierearmen Kabinen.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Schiffsvergleichstabelle */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              1. Technischer Schiffsvergleich auf der 8-Tage-Route (Saigon – Siem Reap)
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Vergleich der führenden Anbieter anhand technischer Baudaten, Betreuungsschlüssel und Komfortmerkmale:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1A2B49] text-white">
                    <th className="p-4 font-semibold">Technischer Parameter</th>
                    <th className="p-4 font-semibold">Aqua Mekong</th>
                    <th className="p-4 font-semibold">The Jahan (Heritage Line)</th>
                    <th className="p-4 font-semibold">Victoria Mekong</th>
                    <th className="p-4 font-semibold">Phoenix Charter (z. B. RV Mekong)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Passagiere / Suiten</td>
                    <td className="p-4 text-emerald-700 font-bold">40 Gäste (20 Suiten)</td>
                    <td className="p-4 text-[#4A5568]">52 Gäste (26 Kabinen)</td>
                    <td className="p-4 text-[#4A5568]">70 Gäste (35 Kabinen)</td>
                    <td className="p-4 text-[#4A5568]">60–68 Gäste</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Crew-Passagier-Verhältnis</td>
                    <td className="p-4 text-emerald-700 font-bold">1:1 (40 Crew : 40 Gäste)</td>
                    <td className="p-4 text-[#4A5568]">1:1,3 (40 Crew : 52 Gäste)</td>
                    <td className="p-4 text-[#4A5568]">1:1,6</td>
                    <td className="p-4 text-[#4A5568]">1:1,8</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Aufzug / Fahrstuhl</td>
                    <td className="p-4 text-amber-600">Treppenlift auf Hauptdeck</td>
                    <td className="p-4 text-rose-700 font-semibold">Kein Aufzug (42° Treppe)</td>
                    <td className="p-4 text-emerald-700 font-bold">Vollwertiger Personenlift (4 Decks)</td>
                    <td className="p-4 text-rose-700">Kein Aufzug</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Deutsche Reiseleitung</td>
                    <td className="p-4 text-[#4A5568]">Englisch (Privatguide DE buchbar)</td>
                    <td className="p-4 text-[#4A5568]">Englisch (DE auf Anfrage)</td>
                    <td className="p-4 text-[#4A5568]">Englisch / Deutsch</td>
                    <td className="p-4 text-emerald-700 font-bold">100 % Deutsche Reiseleitung</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Lösung bei Tonle Sap Niedrigwasser</td>
                    <td className="p-4 text-emerald-700 font-bold">Inlandsflug inklusive (PNH ✈️ REP)</td>
                    <td className="p-4 text-rose-700">Busfahrt (ca. 5–6 Std.)</td>
                    <td className="p-4 text-rose-700">Busfahrt (ca. 5–6 Std.)</td>
                    <td className="p-4 text-rose-700">Busfahrt (ca. 5–6 Std.)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Richtpreis p. P. (8 Tage)</td>
                    <td className="p-4 text-rose-700 font-semibold">ab 9.800 USD (All-Inclusive)</td>
                    <td className="p-4 text-[#4A5568]">ab 5.200 USD</td>
                    <td className="p-4 text-emerald-700 font-semibold">ab 2.400 USD</td>
                    <td className="p-4 text-emerald-700 font-semibold">ab 2.800 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Tonle Sap Hydrologie */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              2. Tonle Sap Niedrigwasser: Warum Schiffe 9 Monate im Jahr nicht den See befahren
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
              <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                <AlertTriangle className="w-5 h-5" />
                Hydrologische Realität laut Mekong River Commission (MRC)
              </div>
              <p className="text-amber-900 text-sm leading-relaxed">
                Viele Reisebüros versprechen eine romantische Schiffspassage bis zu den Toren von Angkor Wat. Die hydrologischen Daten belegen jedoch: Der Tonle Sap See führt von <strong>Dezember bis August</strong> oft nur <strong>0,8 bis 1,4 Meter Wasser</strong>.
              </p>
            </div>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Weil Luxusschiffe zur Vermeidung von Grundberührungen einen Mindestwasserstand von 1,80 m benötigen, schalten fast alle Veranstalter auf die sogenannte <em>Low-Water-Route</em> um:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>September bis November (Hochwasser):</strong> Schiff überquert den gesamten See bis zum Anleger Chong Khneas bei Siem Reap. Keine Busfahrt erforderlich.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Dezember bis August (Niedrigwasser):</strong> Die Ausschiffung erfolgt in Kampong Cham oder Phnom Penh. Die Weiterreise nach Siem Reap erfolgt im klimatisierten Reisebus (260 km, 5–6 Stunden Fahrt über die Nationalstraße).</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Clock className="w-5 h-5 text-[#2980B9] shrink-0 mt-0.5" />
                <span><strong>Vorteil Aqua Mekong:</strong> Anstelle des 6-stündigen Bustransfers fliegt Aqua Mekong seine Gäste bequem mit einem Linienflug von Phnom Penh nach Siem Reap.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Echte Gesamtkosten & Nebenkosten */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              3. Transparente Kostenaufstellung: Was kostet die Reise wirklich?
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Vermeiden Sie böse Überraschungen bei der Endabrechnung an Bord. Diese Nebenkosten müssen einkalkuliert werden:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2980B9] flex items-center justify-center mb-4">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A2B49] mb-2">Hafen- &amp; Ankergebühren</h3>
                <p className="text-2xl font-bold text-[#1A2B49] mb-2">65 $ – 95 $ USD</p>
                <p className="text-xs text-[#718096]">
                  Obligatorische behördliche Gebühren für Schleusen und Kai-Nutzung, fällig in bar (US-Dollar) beim Check-in.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2980B9] flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A2B49] mb-2">Bord-Trinkgelder</h3>
                <p className="text-2xl font-bold text-[#1A2B49] mb-2">105 $ – 175 $ USD</p>
                <p className="text-xs text-[#718096]">
                  Richtwert pro Gast/Woche: 10 bis 15 USD/Tag für die Schiffsbesatzung + 3 bis 5 USD/Tag für den örtlichen Ausflugsleiter.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2980B9] flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A2B49] mb-2">Einzelkabinenzuschlag</h3>
                <p className="text-2xl font-bold text-[#1A2B49] mb-2">+50 % bis +100 %</p>
                <p className="text-xs text-[#718096]">
                  Reisende zur Einzelbelegung zahlen bei fast allen Luxusreedereien erhebliche Zuschläge. Frühzeitige Beratung sichert aktionsweise reduzierte Einzelzimmer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Grenzübertritt Kaam Samnor & US-Dollar Noten */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              4. Grenzübertritt Kaam Samnor &amp; Strikte US-Dollar Regeln in Kambodscha
            </h2>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#1A2B49] mb-1">Pflicht: 2 Papierausdrucke des E-Visums</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Am Flussgrenzposten Kaam Samnor (zwischen Vietnam und Kambodscha) existieren keine elektronischen Scansysteme für Smartphone-Displays. <strong>Ein E-Visum auf dem Bildschirm wird nicht akzeptiert.</strong> Führen Sie unbedingt zwei physische DIN-A4-Ausdrucke Ihres kambodschanischen E-Visums mit sich. Der Zahlmeister (Purser) an Bord übernimmt die Passabwicklung gesammelt, während Sie das Mittagessen genießen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-[#E5E0D8] pt-6">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#1A2B49] mb-1">Strenge Notenbank-Vorschriften für US-Dollar</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    In Kambodscha ist der US-Dollar Standard-Zahlungsmittel, jedoch unterliegen die Geldscheine extremen Qualitätskriterien:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#4A5568] mt-2 space-y-1">
                    <li>Scheine mit Ausgabedatum <strong>vor 2013</strong> werden prinzipiell abgelehnt.</li>
                    <li>Noten mit Rissen (selbst 1 mm), Knicken, Flecken oder Stempelaufdrucken werden ausnahmslos zurückgewiesen.</li>
                    <li>Lassen Sie sich bei Ihrer Hausbank in Deutschland/Schweiz/Österreich ausschließlich bankfrische, unbeschädigte Noten aushändigen.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              Häufig gestellte Fragen (FAQ Mekong Kreuzfahrt)
            </h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-[#E5E0D8] shadow-sm">
                  <h3 className="font-bold text-lg text-[#1A2B49] mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed pl-7">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Card */}
          <section className="bg-[#1A2B49] text-white p-8 md:p-10 rounded-2xl text-center shadow-lg">
            <h2 className={`text-2xl md:text-3xl font-normal mb-4 ${playfair.className}`}>
              Planen Sie Ihre Mekong Flusskreuzfahrt mit Experten
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Seit über 15 Jahren beraten wir anspruchsvolle Reisende bei der Auswahl des idealen Schiffs. Wir prüfen tagesaktuelle Verfügbarkeiten, garantieren transparente Preise und organisieren individuelle Vor- und Nachprogramme.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Unverbindliches Angebot Anfordern
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cruises"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors"
              >
                Schiffe &amp; Termine Einsehen
              </Link>
            </div>
          </section>

          {/* Author Card at the bottom */}
          <div className="mt-16">
            <AuthorCard
              name="Doan Nguyen"
              role="Leiter Schiffsbetrieb & Mekong-Spezialist"
              bio="Mit über 18 Jahren Praxiserfahrung und mehr als 350 begleiteten Flussreisen zwischen Saigon und Angkor Wat berät Doan Reisende bei der nautischen und organisatorischen Auswahl der passenden Route."
            />
          </div>
        </div>
      </article>
    </>
  )
}
