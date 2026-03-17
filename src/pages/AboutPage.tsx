import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Award, MapPin, Wind, Phone, CheckCircle, User, Briefcase, GraduationCap, Heart, Users, Star, Wrench } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  since?: string;
  bio: string;
  highlights?: string[];
  photoPlaceholder: string; // Initials for placeholder
}

const teamMembers: TeamMember[] = [
  {
    name: 'Christopher Porosky',
    title: 'Owner & Founder',
    bio: 'From framing houses alongside his father as a teenager to leading one of South Florida\'s most trusted roofing companies, Chris has spent over 20 years in the construction industry. A dual-licensed Certified General Contractor (CGC-1526236) and Certified Roofing Contractor (CCC-1331464), Chris founded All Phase Construction USA with a simple philosophy: an educated customer is the best customer. His pursuit of continuing education — including becoming a Certified Energy Rater and traveling to Germany to study Passive Haus (zero-energy homes) — changed the way he designs roofing applications for the Florida climate. Chris is a local Deerfield Beach resident and active community supporter.',
    highlights: [
      'Certified General Contractor (CGC-1526236)',
      'Certified Roofing Contractor (CCC-1331464)',
      'Certified Energy Rater (Level 2)',
      'TAMKO Platinum Contractor',
      'Expert Witness for Roof Damage Assessments',
      'Campbell University, BBA in Business/Trust Management',
      'NRCA Member & PRAC Appointee (2019)',
    ],
    photoPlaceholder: 'CP',
  },
  {
    name: 'Zoya Haydic',
    title: 'Office Manager',
    since: '2016',
    bio: 'Zoya has been with All Phase Construction USA since 2016, evolving into a versatile team leader who wears many hats across the business. Born in Sofia, Bulgaria, she speaks Bulgarian and Croatian fluently and brings a diverse professional background spanning banking, real estate, insurance, and small business ownership. Her well-rounded experience gives her a deep understanding of what it takes to run a successful construction operation — from project coordination to customer communication.',
    photoPlaceholder: 'ZH',
  },
  {
    name: 'Dillon Mavrich',
    title: 'Sales Manager',
    bio: 'Dillon brings over 10 years of hands-on roofing experience to his role as Sales Manager. Known for his strategic leadership and customer-first approach, he guides clients through every step of the roofing process with clarity and confidence. A dedicated family man and strong team leader, Dillon ensures every homeowner receives honest assessments and solutions tailored to their property\'s needs.',
    photoPlaceholder: 'DM',
  },
  {
    name: 'Karl Walczak',
    title: 'Roofing Sales Representative',
    bio: 'Karl combines a background in regional sourcing and customer engagement with a deep commitment to helping homeowners protect and enhance their properties. Based in South Florida, he takes a consultative approach — ensuring every client receives a customized roofing experience from the initial inspection through final installation. Originally from the UK and now a longtime U.S. resident, Karl is known for his reliability, transparency, and strong work ethic.',
    photoPlaceholder: 'KW',
  },
  {
    name: 'Graham Dailey',
    title: 'Roofing Sales Representative',
    bio: 'Graham brings years of hospitality experience — including training at Le Cordon Bleu and working in acclaimed restaurants — to his role on the All Phase sales team. That service-driven mindset translates directly to roofing: he\'s eager to help, attentive to detail, and genuinely enjoys making sure every homeowner feels taken care of. After years of late-night restaurant hours that didn\'t align with family life, Graham made the move to roofing and hasn\'t looked back. He loves being outdoors, working on roofs, and spending weekends camping with his family.',
    photoPlaceholder: 'GD',
  },
  {
    name: 'Joy Geraci',
    title: 'Project Coordinator',
    since: '2015',
    bio: 'Joy has been with All Phase Construction since 2015, coordinating projects from beginning to end — from ordering materials and scheduling deliveries to direct customer communication and crew scheduling. A Florida native with extensive knowledge of the Florida Building Code, Joy brings an unmatched level of detail and dedication to every project. Her commitment to customer service makes her an essential part of the All Phase team.',
    photoPlaceholder: 'JG',
  },
  {
    name: 'Matt Denofrio',
    title: 'Production Manager',
    bio: 'Originally from the Chicago area, Matt has called South Florida home for over 20 years. His extensive background in the hospitality industry — from dishwasher to management — instilled a customer-service-first mentality that he brings to every roofing project. With a "play hard, work harder" approach, Matt oversees production operations and ensures every job meets All Phase\'s standards for quality and timeliness.',
    photoPlaceholder: 'MD',
  },
  {
    name: 'Carlos Murcia',
    title: 'Service Manager',
    bio: 'Carlos started as a laborer with All Phase and worked his way up through hard work and dedication. Sponsored by All Phase to obtain his work visa, Carlos is now a proud American citizen. His detailed approach, hands-on experience, and relentless work ethic have made him one of the best in the industry when it comes to diagnosing and stopping roof leaks. Carlos continuously advances his roofing knowledge through manufacturer training and certifications.',
    photoPlaceholder: 'CM',
  },
  {
    name: 'Clarissa Albelli',
    title: 'Customer Engagement Specialist',
    bio: 'Clarissa is most likely the first voice you\'ll hear when you call All Phase. She guides customers through the first steps of their roofing journey — ensuring every interaction is helpful, friendly, and efficient. Originally from the Pocono Mountains, Clarissa brings a personal goal to every workday: make at least one person smile. Her belief that kindness is free, powerful, and can turn someone\'s whole day around is exactly the kind of energy that defines the All Phase experience.',
    photoPlaceholder: 'CA',
  },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Licensed Roofer Deerfield Beach FL';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet the All Phase Construction USA team — dual-licensed roofing & general contractors (CCC-1331464, CGC-1526236) serving Broward & Palm Beach since 2005. 2,500+ roofs installed.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet the All Phase Construction USA team — dual-licensed roofing & general contractors (CCC-1331464, CGC-1526236) serving Broward & Palm Beach since 2005. 2,500+ roofs installed.';
      document.head.appendChild(meta);
    }
  }, []);

  const serviceAreas = {
    broward: [
      'Fort Lauderdale',
      'Coral Springs',
      'Pompano Beach',
      'Deerfield Beach',
      'Coconut Creek',
      'Parkland',
      'Weston',
      'Davie',
      'Plantation',
      'Sunrise',
      'Hollywood',
      'Pembroke Pines',
      'Miramar'
    ],
    palmBeach: [
      'Boca Raton',
      'Delray Beach',
      'Boynton Beach',
      'Wellington',
      'West Palm Beach',
      'Lake Worth',
      'Jupiter',
      'Palm Beach Gardens',
      'Royal Palm Beach',
      'Loxahatchee',
      'Greenacres',
      'Lantana'
    ]
  };

  const certifications = [
    'Tamko Platinum Contractor',
    'CertainTeed Select Shingle Master',
    'GAF Certified',
    'Carlisle Certified',
    'Soprema Certified',
    'FiberTite Certified',
    'IB Roof Systems Top Tier',
    'Mule Hide Certified',
    'Certified Wind Mitigator',
    'Certified Energy Rater (Level 2)',
    'TRI Alliance High Wind',
    'AAMA Installation Masters (RLC-1)',
    'MySafeFloridaHome Contractor',
    'Conklin Preferred Contractor',
  ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': 'https://allphaseconstructionfl.com/#organization',
    name: 'All Phase Construction USA',
    alternateName: 'All Phase Roofing',
    description: 'Dual-licensed roofing and general contractor (CCC-1331464, CGC-1526236) serving Broward and Palm Beach Counties since 2005. Over 2,500 roofs installed. HVHZ certified.',
    url: 'https://allphaseconstructionfl.com',
    logo: 'https://allphaseconstructionfl.com/logo.png',
    image: 'https://allphaseconstructionfl.com/images/og-default.jpg',
    telephone: '+17542275605',
    email: 'info@allphaseconstructionfl.com',
    foundingDate: '2005',
    founder: {
      '@type': 'Person',
      name: 'Christopher Porosky',
      jobTitle: 'Owner / President',
      knowsAbout: ['Roofing', 'General Contracting', 'HVHZ Construction', 'Wind Mitigation']
    },
    numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 10, maxValue: 50 },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '590 Goolsby Blvd',
      addressLocality: 'Deerfield Beach',
      addressRegion: 'FL',
      postalCode: '33442',
      addressCountry: 'US'
    },
    geo: { '@type': 'GeoCoordinates', latitude: '26.3184', longitude: '-80.0998' },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Broward County', containedInPlace: { '@type': 'AdministrativeArea', name: 'Florida' } },
      { '@type': 'AdministrativeArea', name: 'Palm Beach County', containedInPlace: { '@type': 'AdministrativeArea', name: 'Florida' } }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '150'
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Florida Certified Roofing Contractor — CCC-1331464' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Florida Certified General Contractor — CGC-1526236' }
    ],
    sameAs: [
      'https://www.facebook.com/allphaseconstructionusa',
      'https://www.instagram.com/allphaseconstructionusa',
      'https://www.linkedin.com/company/allphaseconstructionusa',
      'https://www.youtube.com/@allphaseconstructionusa'
    ],
    knowsAbout: ['Roofing', 'Roof Replacement', 'Roof Repair', 'Roof Inspection', 'Commercial Roofing', 'Tile Roofing', 'Metal Roofing', 'Shingle Roofing', 'Flat Roofing', 'Wind Mitigation']
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* Hero Section with Team Photo Background */}
      <div className="relative min-h-[600px] overflow-hidden bg-black pt-36 pb-16">
        {/* Team Photo Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale-[40%] brightness-[0.35] animate-[drift_45s_ease-in-out_infinite]"
            style={{ backgroundImage: 'url(/long-term-piece-of-mind-all-phase-construction-usa.png)' }}
          />
        </div>

        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.8)_100%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/40 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                Dual-Licensed: CCC-1331464 & CGC-1526236
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              About All Phase Construction USA
            </h1>

            {/* AI-Extraction Direct-Answer Opening */}
            <p className="text-xl text-gray-200 max-w-4xl mx-auto drop-shadow-lg mb-4">
              All Phase Construction USA is a family-owned, dual-licensed roofing contractor (CCC-1331464) and certified general contractor (CGC-1526236) based in Deerfield Beach, Florida. Founded by Chris Porosky with over 20 years of experience, our team of dedicated professionals has completed 2,500+ roofing projects across Broward and Palm Beach Counties.
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto drop-shadow-lg">
              We specialize in tile, metal, shingle, flat, and commercial roofing systems — all built to South Florida's HVHZ wind code standards.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-black pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">

        {/* Prominent Team Photo Section */}
        <div className="mb-16 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/long-term-piece-of-mind-all-phase-construction-usa.png"
              alt="All Phase Construction USA team in front of branded work truck in Deerfield Beach, FL"
              width="1200"
              height="600"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-6 py-8 md:px-12 md:py-10">
              <h3 className="text-white font-bold text-2xl md:text-3xl mb-3">
                The All Phase Team
              </h3>
              <div className="h-1 w-24 bg-red-600 mb-4 rounded-full"></div>
              <p className="text-gray-200 text-base md:text-lg max-w-2xl">
                Built to handle South Florida roofing the right way — serving Broward and Palm Beach Counties from our Deerfield Beach headquarters.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">2,500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">CGC & CCC</div>
            <div className="text-gray-400">Dual Licensed</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5-Star</div>
            <div className="text-gray-400">Rated</div>
          </div>
        </div>

        {/* ============================================ */}
        {/* MEET THE TEAM SECTION                        */}
        {/* ============================================ */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The people behind every roof we build. Our team combines decades of construction experience with genuine care for every customer.
            </p>
          </div>

          {/* Owner/Founder - Featured Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 lg:p-10 mb-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Photo Placeholder */}
              <div className="lg:col-span-1">
                <div className="aspect-[3/4] max-w-[320px] mx-auto bg-zinc-800 border-2 border-red-600/30 rounded-xl flex flex-col items-center justify-center text-center p-6">
                  <div className="w-24 h-24 bg-red-600/20 border border-red-600/40 rounded-full flex items-center justify-center mb-4">
                    <span className="text-red-500 text-3xl font-bold">{teamMembers[0].photoPlaceholder}</span>
                  </div>
                  <p className="text-zinc-500 text-sm italic">Headshot coming soon</p>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{teamMembers[0].name}</h3>
                </div>
                <div className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 px-3 py-1 rounded-lg text-sm font-semibold mb-4 border border-red-600/20">
                  <Star className="w-4 h-4" />
                  {teamMembers[0].title}
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {teamMembers[0].bio}
                </p>

                {/* Qualifications Grid */}
                {teamMembers[0].highlights && (
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Key Qualifications</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {teamMembers[0].highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {teamMembers.slice(1, 3).map((member) => (
              <div key={member.name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all duration-300">
                <div className="flex gap-5">
                  {/* Photo Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center">
                      <span className="text-zinc-500 text-lg font-bold">{member.photoPlaceholder}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-500 text-sm font-semibold">{member.title}</span>
                      {member.since && (
                        <span className="text-zinc-600 text-xs">Since {member.since}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of the Team */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.slice(3).map((member) => (
              <div key={member.name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600/30 transition-all duration-300">
                {/* Photo Placeholder */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-500 text-base font-bold">{member.photoPlaceholder}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 text-sm font-semibold">{member.title}</span>
                      {member.since && (
                        <span className="text-zinc-600 text-xs">Since {member.since}</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reliability Starts at the Top */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Reliability Starts at the Top
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  All Phase Construction USA, LLC is led by Chris Porosky, a Certified Roofing and General Contractor with over 20 years of experience focused primarily on roofing systems, inspections, and long-term roof performance. With a commitment to quality craftsmanship and honest service, Chris has built his reputation on doing things the right way and delivering dependable results for homeowners and businesses throughout South Florida.
                </p>
                <p>
                  Over the years, our work has become focused almost exclusively on roofing. From inspections and repairs to full roof replacements and long-term maintenance, our experience is rooted in understanding how roofing systems perform in South Florida's climate. This roofing-first approach allows us to identify issues others miss and deliver solutions designed for durability, code compliance, and long-term performance.
                </p>
                <p>
                  As a dual-licensed contractor holding both a General Contractor (CGC-1526236) and Roofing Contractor (CCC-1331464) license, All Phase Construction USA brings a broader level of expertise than most roofing companies. This dual licensing allows our team to understand not only the roofing system itself, but also the structural components that support it—helping identify issues others may overlook and delivering solutions designed to last.
                </p>
                <p>
                  Based in Deerfield Beach, we proudly serve residential and commercial clients throughout Broward and Palm Beach Counties. From standing seam metal roofing systems to tile and shingle installations, our team has completed thousands of projects and earned a reputation for professionalism, reliability, and doing the job right.
                </p>
              </div>
              <Link
                to="/contact/"
                className="inline-block mt-8 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Schedule Your Free Inspection
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl shadow-red-900/20 hover:border-red-600/60 transition-all duration-300">
              <img
                src="/long-term-piece-of-mind-all-phase-construction-usa.png"
                alt="All Phase Construction USA team in front of branded work truck in Deerfield Beach, FL"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <p className="text-white font-semibold text-lg mb-1">
                  The All Phase Team
                </p>
                <div className="h-0.5 w-16 bg-red-600 mb-2"></div>
                <p className="text-gray-300 text-sm">
                  Built to handle South Florida roofing the right way
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <Shield className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dual-Licensed Contractor</h3>
              <p className="text-gray-400">
                We hold both General Contractor and Roofing Contractor licenses—a rare combination that ensures comprehensive expertise on every project.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <Award className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Manufacturer Certified</h3>
              <p className="text-gray-400">
                Our certifications from TAMKO, GAF, CertainTeed, and Carlisle mean access to the best warranties in the industry.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <MapPin className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Local & Accountable</h3>
              <p className="text-gray-400">
                Based in Deerfield Beach, we're your neighbors. Our reputation in this community matters to us—and it shows in our work.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-red-600/50 transition-all duration-300">
              <Wind className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Hurricane Experts</h3>
              <p className="text-gray-400">
                As Certified Wind Mitigators, we know how to protect South Florida homes from storm damage and help you save on insurance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Leading Certifications
            </h2>
            <p className="text-xl text-gray-400">
              Our credentials reflect our commitment to excellence and ongoing training.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 flex items-center justify-center text-center hover:border-red-600/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-semibold text-sm">{cert}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center max-w-3xl mx-auto">
            These certifications aren't just logos—they represent hundreds of hours of training and a commitment to installing roofing systems the right way. They also give our customers access to the best manufacturer warranties available.
          </p>
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <p className="text-gray-500 text-center text-sm">
              Proud member of the{' '}
              <a
                href="https://www.browardchamber.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors underline decoration-gray-600 hover:decoration-red-600"
              >
                Broward County Chamber of Commerce
              </a>
              {' '}&{' '}
              <a
                href="https://www.nrca.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors underline decoration-gray-600 hover:decoration-red-600"
              >
                National Roofing Contractors Association (NRCA)
              </a>
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden order-2 lg:order-1">
              <img
                src="/habitat-for-humanity.jpg"
                alt="All Phase Construction employee volunteering at Habitat for Humanity build"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Giving Back to Our Community
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  At All Phase Construction, we believe in using our skills to make a difference. We're proud to partner with Habitat for Humanity, donating our time and expertise to help build safe, affordable homes for families in need throughout South Florida.
                </p>
                <p>
                  It's one of the most rewarding parts of what we do—and a reminder of why quality roofing matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proudly Serving South Florida
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6">Broward County</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-400">
                {serviceAreas.broward.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6">Palm Beach County</h3>
              <div className="grid grid-cols-2 gap-3 text-gray-400">
                {serviceAreas.palmBeach.map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work with a Contractor You Can Trust?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Schedule your free roof inspection today. No pressure, no obligation—just honest answers about your roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact/"
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Schedule Free Inspection
            </Link>
            <a
              href="tel:+17542275605"
              className="flex items-center gap-2 px-8 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-600"
            >
              <Phone className="w-5 h-5" />
              Call (754) 227-5605
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 pt-8 border-t border-zinc-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Dual Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>2,500+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
