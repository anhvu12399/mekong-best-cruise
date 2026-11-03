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
  Languages
} from "lucide-react"
import { AuthorByline, AuthorCard } from "@/components/author-box"

const playfair = Bodoni_Moda({ subsets: ["latin"] })

const BASE_URL = "https://www.mekongrivercruise.com"
const PAGE_URL = `${BASE_URL}/travel-ideas/croisiere-mekong-comparatif-prix`

export const metadata: Metadata = {
  title: "Croisière Mékong : Comparatif des Bateaux de Luxe, Prix Réels & Avis 2026",
  description:
    "Comparatif objectif des croisières fluviales d'exception sur le Mékong (Vietnam & Cambodge). CroisiEurope vs Heritage Line vs Aqua Mekong, niveau d'eau du Tonlé Sap, taxes portuaires et pourboires.",
  keywords: [
    "croisiere mekong",
    "croisiere mekong luxe",
    "croisiere vietnam cambodge avis",
    "meilleure croisiere mekong",
    "croisiere mekong croisieurope vs heritage line",
    "croisiere mekong prix tout compris",
    "niveau d eau lac tonle sap croisiere",
    "bateau de luxe mekong vietnam cambodge"
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Croisière Mékong : Comparatif Bateaux de Luxe, Prix & Tonlé Sap 2026",
    description:
      "Guide complet et impartial pour choisir sa croisière fluviale 5 étoiles entre Saïgon et Siem Reap : confort des cabines, francophonie à bord, frais cachés et réalités hydrologiques.",
    type: "article",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/images/the_jahan.avif`, width: 1200, height: 630, alt: "Croisière sur le Mékong Comparatif de Luxe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Croisière Mékong : Comparatif Bateaux, Prix & Avis (Guide 2026)",
    description: "Analyse objective des meilleures compagnies fluviales : Aqua Mekong, Heritage Line, CroisiEurope et Victoria Mekong.",
    images: [`${BASE_URL}/images/the_jahan.avif`],
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Croisière sur le Mékong : Comparatif Bateaux de Luxe, Prix Réels et Avis 2026",
  "description": "Comparatif indépendant et chiffré des croisières de prestige sur le Mékong entre Saïgon et Siem Reap. Analyse du confort francophone, de l'hydrologie du Tonlé Sap et des frais réels à bord.",
  "image": `${BASE_URL}/images/the_jahan.avif`,
  "inLanguage": "fr-FR",
  "about": [
    {
      "@type": "Thing",
      "name": "Croisière fluviale",
      "sameAs": "https://fr.wikipedia.org/wiki/Croisi%C3%A8re"
    },
    {
      "@type": "Place",
      "name": "Mékong",
      "sameAs": "https://fr.wikipedia.org/wiki/M%C3%A9kong"
    },
    {
      "@type": "Place",
      "name": "Tonlé Sap",
      "sameAs": "https://fr.wikipedia.org/wiki/Tonl%C3%A9_Sap"
    }
  ],
  "mentions": [
    {
      "@type": "Organization",
      "name": "CroisiEurope",
      "sameAs": "https://fr.wikipedia.org/wiki/CroisiEurope"
    },
    {
      "@type": "Organization",
      "name": "Aqua Expeditions",
      "sameAs": "https://en.wikipedia.org/wiki/Aqua_Expeditions"
    },
    {
      "@type": "Organization",
      "name": "Mekong River Commission",
      "sameAs": "https://fr.wikipedia.org/wiki/Commission_du_M%C3%A9kong"
    }
  ],
  "author": {
    "@type": "Person",
    "name": "Doan Nguyen",
    "jobTitle": "Directeur des Opérations Fluviales & Spécialiste Mékong",
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
      "name": "Quelle est la meilleure croisière de luxe sur le Mékong entre le Vietnam et le Cambodge ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le choix dépend de vos priorités : pour une expérience francophone native et un budget maîtrisé, le RV Indochine II de CroisiEurope est la référence. Pour une atmosphère coloniale romantique et raffinée, The Jahan et The Jayavarman d'Heritage Line offrent le meilleur charme patrimonial (cabines avec balcon privé). Enfin, pour l'ultra-luxe contemporain avec gastronomie étoilée et transferts en avion inclus en saison sèche, Aqua Mekong est le navire le plus exclusif (20 suites seulement, ratio équipage/passager de 1:1)."
      }
    },
    {
      "@type": "Question",
      "name": "Le bateau navigue-t-il directement jusqu'à Siem Reap ou fait-on le trajet en bus ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre décembre et août (saison des basses eaux), le niveau du lac Tonlé Sap chute entre 0,8 m et 1,5 m de profondeur. Tous les bateaux de croisière ayant un tirant d'eau supérieur à 1,6 m ne peuvent pas traverser le lac jusqu'à Siem Reap. La quasi-totalité des compagnies (CroisiEurope, Heritage Line, Victoria Mekong, Pandaw) débarquent leurs passagers à Kampong Cham ou Phnom Penh pour un transfert en autocar climatisé de 5 à 6 heures vers Siem Reap. Seul Aqua Mekong contourne cette contrainte en incluant un vol régulier Phnom Penh - Siem Reap dans son forfait."
      }
    },
    {
      "@type": "Question",
      "name": "Quels sont les frais cachés à prévoir sur une croisière Mékong ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les principaux frais exclus des tarifs de base sont : 1. Les taxes portuaires et d'amarrage obligatoires (65 $ à 95 $ USD par passager, payables en espèces au check-in). 2. Les pourboires recommandés pour l'équipage et le guide (12 $ à 18 $ USD par passager et par jour, soit environ 100 $ à 150 $ par semaine). 3. Le visa cambodgien à la frontière fluviale (35 $ à 40 $ USD). 4. Le supplément cabine individuelle (Single Supplement) qui varie de 50 % à 100 % sur la plupart des compagnies de prestige."
      }
    },
    {
      "@type": "Question",
      "name": "Faut-il imprimer son e-visa Cambodge pour le passage de frontière fluviale à Kaam Samnor ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, impérativement. Le poste de contrôle frontalier fluvial de Kaam Samnor (entre Chau Doc et Phnom Penh) refuse catégoriquement les e-visas présentés sur smartphone ou tablette. Chaque voyageur doit disposer de 2 exemplaires papier imprimés au format A4 : le premier est conservé par l'immigration cambodgienne à l'entrée, le second au départ. De plus, les autorités bancaires et commerçants cambodgiens rejettent systématiquement les billets de dollars américains imprimés avant 2013, froissés ou présentant la moindre déchirure."
      }
    }
  ]
}

export default function CroisiereMekongPage() {
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
            alt="Croisière de prestige sur le Mékong Vietnam Cambodge"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B49] via-transparent to-black/30" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              <Languages className="w-3.5 h-3.5" /> Guide Francophone 2026 · Analyse Indépendante
            </div>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6 leading-tight ${playfair.className}`}>
              Croisière sur le Mékong : Comparatif Bateaux, Prix Réels &amp; Avis d&apos;Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              CroisiEurope, Heritage Line, Aqua Mekong ou Victoria Mekong ? Décryptage chiffré des prestations, de la francophonie à bord, des frais cachés et de la vérité hydrologique du lac Tonlé Sap.
            </p>
          </div>
        </header>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Metadata & Author Box */}
          <AuthorByline
            authorName="Doan Nguyen"
            authorRole="Directeur des Opérations Fluviales (18 ans sur le Mékong)"
            publishedDate="3 Novembre 2026"
            readTime="11 min de lecture"
          />

          {/* Direct Answer Block - AI Citation Target */}
          <section className="mb-12 bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EBF5FB] text-[#2980B9] rounded-lg shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B49] mb-2">
                  En Résumé : Quelle Croisière Choisir selon Votre Profil ?
                </h2>
                <p className="text-base text-[#4A5568] leading-relaxed">
                  <strong>Pour les voyageurs francophones privilégiant le confort sans barrière linguistique :</strong> Le <em>RV Indochine II (CroisiEurope)</em> offre le meilleur encadrement francophone (équipage et conférenciers parlant français) avec boissons de table incluses, à un tarif maîtrisé (dès 2 800 € / personne).
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>Pour les amateurs de charme d&apos;époque et de romantisme :</strong> <em>The Jahan</em> et <em>The Jayavarman (Heritage Line)</em> incarnent l&apos;élégance coloniale indochinoise avec 100 % de cabines dotées de balcons privés en teck, mais <u>ne disposent pas d&apos;ascenseurs</u> (escaliers à 42°).
                </p>
                <p className="text-base text-[#4A5568] leading-relaxed mt-2">
                  <strong>Pour l&apos;ultra-luxe contemporain et le zéro fatigue :</strong> <em>Aqua Mekong</em> surclasse le marché avec seulement 20 suites design, une table supervisée par David Thompson, et surtout l&apos;inclusion d&apos;un vol régulier Phnom Penh ✈️ Siem Reap en saison des basses eaux pour éviter 6 heures de car.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Tableau Comparatif des Compagnies */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              1. Tableau Comparatif des 4 Grandes Compagnies sur le Mékong
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Pour vous aider à comparer objectivement les navires opérant l&apos;itinéraire classique de 8 jours / 7 nuits entre Saïgon (Vietnam) et Siem Reap (Cambodge), voici la synthèse des données techniques et des prestations :
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E5E0D8] shadow-sm bg-white mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#1A2B49] text-white">
                    <th className="p-4 font-semibold">Critère d&apos;Évaluation</th>
                    <th className="p-4 font-semibold">CroisiEurope (RV Indochine II)</th>
                    <th className="p-4 font-semibold">Heritage Line (The Jahan)</th>
                    <th className="p-4 font-semibold">Aqua Mekong</th>
                    <th className="p-4 font-semibold">Victoria Mekong</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8]">
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Capacité &amp; Intimité</td>
                    <td className="p-4 text-[#4A5568]">62 passagers (31 cabines)</td>
                    <td className="p-4 text-[#4A5568]">52 passagers (26 cabines)</td>
                    <td className="p-4 text-emerald-700 font-bold">40 passagers (20 suites)</td>
                    <td className="p-4 text-[#4A5568]">70 passagers (35 cabines)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Francophonie à Bord</td>
                    <td className="p-4 text-emerald-700 font-bold">100 % Francophone (Guides &amp; Menus)</td>
                    <td className="p-4 text-[#4A5568]">Anglophone (Guide FR sur demande)</td>
                    <td className="p-4 text-[#4A5568]">Anglophone cosmopolite</td>
                    <td className="p-4 text-[#4A5568]">Bilingue Anglais / Français</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Balcon Privé</td>
                    <td className="p-4 text-[#4A5568]">Oui (Cabines pont supérieur)</td>
                    <td className="p-4 text-emerald-700 font-semibold">100 % Balcons privatifs en teck</td>
                    <td className="p-4 text-[#4A5568]">Baies vitrées panoramiques</td>
                    <td className="p-4 text-emerald-700 font-semibold">100 % Balcons privatifs</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Ascenseur &amp; Mobilité</td>
                    <td className="p-4 text-rose-700">Aucun ascenseur</td>
                    <td className="p-4 text-rose-700">Aucun (Escaliers d&apos;époque 42°)</td>
                    <td className="p-4 text-amber-600">Siège élévateur motorisé</td>
                    <td className="p-4 text-emerald-700 font-bold">Ascenseur complet (4 ponts)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Gestion des Basses Eaux</td>
                    <td className="p-4 text-rose-700">Transfert en car (5-6h)</td>
                    <td className="p-4 text-rose-700">Transfert en car (5-6h)</td>
                    <td className="p-4 text-emerald-700 font-bold">Vol régulier inclus (Phnom Penh ✈️ REP)</td>
                    <td className="p-4 text-rose-700">Transfert en car (5-6h)</td>
                  </tr>
                  <tr className="hover:bg-[#F9F7F2]">
                    <td className="p-4 font-bold text-[#1A2B49]">Tarif Indicatif / Pers.</td>
                    <td className="p-4 text-emerald-700 font-semibold">2 800 € – 3 900 €</td>
                    <td className="p-4 text-[#4A5568]">4 600 € – 6 500 €</td>
                    <td className="p-4 text-rose-700 font-semibold">9 800 € – 12 500 €</td>
                    <td className="p-4 text-emerald-700 font-semibold">2 200 € – 3 400 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: La Vérité sur le Tonlé Sap */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              2. Navigation sur le Lac Tonlé Sap : Mythe vs Réalité des Basses Eaux
            </h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
              <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                <AlertTriangle className="w-5 h-5" />
                Information Cruciale Trop Souvent Dissimulée par les Catalogues
              </div>
              <p className="text-amber-900 text-sm leading-relaxed">
                De <strong>décembre à août</strong> (soit 9 mois sur 12), le lac Tonlé Sap est trop peu profond pour permettre le passage des navires de croisière. Les passagers qui réservent en pensant arriver majestueusement en bateau aux pieds d&apos;Angkor Wat découvrent souvent au dernier moment qu&apos;ils doivent subir un long trajet en bus.
              </p>
            </div>
            <p className="text-[#4A5568] leading-relaxed mb-4">
              Selon les relevés officiels de la <strong>Commission du fleuve Mékong (MRC)</strong>, la profondeur moyenne du lac Tonlé Sap descend à <strong>moins de 1 mètre</strong> pendant la saison sèche. Les navires de luxe nécessitant au minimum 1,60 m à 1,80 m de tirant d&apos;eau pour naviguer en toute sécurité, la navigation directe s&apos;interrompt systématiquement :
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Clock className="w-5 h-5 text-[#2980B9] shrink-0 mt-0.5" />
                <span><strong>Septembre à Novembre (Hautes Eaux) :</strong> Traversée intégrale du lac possible. Le bateau jette l&apos;ancre à Siem Reap (port de Chong Khneas). Expérience fluviale complète.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Décembre à Août (Basses Eaux) :</strong> Navigation arrêtée à Kampong Cham ou Phnom Penh. La majorité des voyagistes organisent le transfert en autocar (260 km, 5 à 6 heures de route nationale encombrée).</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A5568]">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>L&apos;Alternative Aqua Mekong :</strong> C&apos;est la seule compagnie qui prend en charge un vol intérieur privé ou régulier entre Phnom Penh et Siem Reap, épargnant ainsi toute fatigue routière à ses hôtes.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Frais Cachés & Budget Réel */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              3. Analyse du Coût Réel : Les Frais Obligatoires Non Mentionnés
            </h2>
            <p className="text-[#4A5568] mb-6 leading-relaxed">
              Le prix affiché sur la brochure n&apos;est presque jamais le montant final débité de votre compte. Voici le décompte transparent des frais annexes inhérents à une croisière fluviale entre le Vietnam et le Cambodge :
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2980B9] flex items-center justify-center mb-4">
                  <Anchor className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A2B49] mb-2">Taxes Portuaires</h3>
                <p className="text-2xl font-bold text-[#1A2B49] mb-2">65 $ à 95 $ USD</p>
                <p className="text-xs text-[#718096]">
                  Obligatoires par passager. Réclamées en espèces (dollars US neufs) lors de l&apos;enregistrement à bord pour couvrir les droits de quai et de navigation binationaux.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2980B9] flex items-center justify-center mb-4">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A2B49] mb-2">Pourboires à Bord</h3>
                <p className="text-2xl font-bold text-[#1A2B49] mb-2">105 $ à 175 $ USD</p>
                <p className="text-xs text-[#718096]">
                  Barème international d&apos;usage : 10 $ à 15 $/jour pour l&apos;équipage général + 3 $ à 5 $/jour pour le guide local d&apos;excursion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#E5E0D8] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#2980B9] flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#1A2B49] mb-2">Supplément Solo</h3>
                <p className="text-2xl font-bold text-[#1A2B49] mb-2">+50 % à +100 %</p>
                <p className="text-xs text-[#718096]">
                  Si vous voyagez seul(e), les compagnies maritimes imposent un surcoût conséquent pour l&apos;occupation individuelle d&apos;une cabine double.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Passage Frontière & Dollars US */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              4. Passage de Frontière Fluviale (Kaam Samnor) &amp; Règle Monétaire au Cambodge
            </h2>
            <div className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E0D8] shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-[#2980B9] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#1A2B49] mb-1">Obligation : 2 Exemplaires Papier du Visa Cambodgien</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Le poste frontière fluvial de Kaam Samnor ne dispose pas de lecteurs optiques numériques sur écran. <strong>Aucun visa sur téléphone ou tablette n&apos;est toléré.</strong> Vous devez obligatoirement imprimer deux copies papier de votre visa électronique (e-Visa type T) avant de monter à bord. Le commissaire de bord (Purser) collectera vos passeports pour effectuer les formalités pendant que vous déjeunez tranquillement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-[#E5E0D8] pt-6">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#1A2B49] mb-1">Exigence Stricte de la Banque Nationale du Cambodge (NBC) sur les Dollars US</h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Le Cambodge utilise couramment le dollar américain, mais avec une rigueur extrême :
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#4A5568] mt-2 space-y-1">
                    <li>Refus systématique de tous les billets émis <strong>avant 2013</strong> (anciennes séries à petites têtes).</li>
                    <li>Refus absolu des billets présentant une micro-déchirure même d&apos;un millimètre, une pliure usée, une tache ou un tampon d&apos;encre.</li>
                    <li>Exigez de votre banque en France/Suisse/Belgique des billets de 10 $, 20 $ et 50 $ neufs et impeccables avant votre départ.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className={`text-2xl md:text-3xl font-normal mb-6 text-[#1A2B49] ${playfair.className}`}>
              Questions Fréquentes des Voyageurs (FAQ Mékong)
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
              Besoin d&apos;un Conseil Impartial pour Choisir Votre Croisière ?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
              Nos spécialistes francophones naviguent sur le Mékong depuis plus de 15 ans. Nous comparons les disponibilités en temps réel, garantissons l&apos;absence de frais cachés et organisons votre voyage d&apos;exception sur-mesure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Demander un Devis Personnalisé
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cruises"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 transition-colors"
              >
                Consulter les Départs &amp; Tarifs
              </Link>
            </div>
          </section>

          {/* Author Card at the bottom */}
          <div className="mt-16">
            <AuthorCard
              name="Doan Nguyen"
              role="Directeur des Opérations Fluviales"
              bio="Ayant supervisé plus de 350 navigations entre le delta du Mékong et Siem Reap depuis 2008, Doan audite chaque navire pour garantir aux voyageurs francophones une expérience authentique, fluide et sécurisée."
            />
          </div>
        </div>
      </article>
    </>
  )
}
