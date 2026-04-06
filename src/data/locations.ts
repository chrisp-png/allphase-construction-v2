/**
 * SINGLE SOURCE OF TRUTH FOR ALL LOCATION PAGES
 *
 * This dataset powers both:
 * 1. Live route rendering (/locations/:slug)
 * 2. Build-time prerendering (scripts/prerender-static.mjs)
 *
 * STRATEGY (2026-04-06): /locations/[city]/ pages target ROOF REPLACEMENT
 * intent. /roof-repair/[city]/ pages already capture repair intent.
 * Titles, meta descriptions, and on-page facts blocks are tuned for
 * replacement keywords. New structured fields (county, hvhz, neighborhoods,
 * zips, landmarks, localHook) feed the shared <LocationFactsBlock> component
 * for AI/GEO snippet relevance.
 *
 * HVHZ note: hvhz=true is set ONLY for Broward / Miami-Dade cities that
 * actually sit inside the High Velocity Hurricane Zone. For Palm Beach
 * County cities we install to HVHZ spec voluntarily; that is reflected in
 * copy via localHook, NOT by setting hvhz=true.
 */

export interface Location {
  slug: string;
  city: string;
  state: string;

  // SEO overrides (if not provided, templates are used)
  titleOverride?: string;
  descriptionOverride?: string;
  ogTitleOverride?: string;
  ogDescriptionOverride?: string;
  canonicalOverride?: string;
  robotsOverride?: string;
  schemaOverride?: object;

  // Structured local SEO fields (consumed by LocationFactsBlock + AI/GEO)
  county?: 'Broward' | 'Palm Beach' | 'Miami-Dade';
  hvhz?: boolean;
  neighborhoods?: string[];
  zips?: string[];
  landmarks?: string[];
  localHook?: string;
}

export const locations: Location[] = [
  // ─── HQ ───
  {
    slug: "deerfield-beach",
    city: "Deerfield Beach",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Deerfield Beach, FL | All Phase USA",
    descriptionOverride: "Deerfield Beach roof replacement HQ since 2005. Dual-licensed, HVHZ-certified, 2,500+ roofs. Free same-day inspection: (754) 227-5605.",
    neighborhoods: ["The Cove", "Deer Creek", "Century Village", "The Lakes", "Crystal Lake", "Waterford", "Independence Bay"],
    zips: ["33064","33441","33442","33443"],
    landmarks: ["Deerfield Beach Pier","Quiet Waters Park","Hillsboro Inlet","Sample Road corridor"],
    localHook: "Headquartered in Deerfield Beach since 2005 — every truck rolls from 590 Goolsby Blvd."
  },

  // ─── Wave A ───
  {
    slug: "boca-raton",
    city: "Boca Raton",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement Boca Raton, FL | All Phase USA",
    descriptionOverride: "Boca Raton roof replacement. Dual-licensed, built to Miami-Dade HVHZ spec. Insurance savings built in. Free inspection: (754) 227-5605.",
    neighborhoods: ["Broken Sound","Royal Palm Yacht & Country Club","Old Floresta","Boca West","Boca Pointe","Woodfield Country Club","The Oaks at Boca Raton","Mizner Park","Boca Square","Boca Bath & Tennis","Camino Gardens","Sun Valley"],
    zips: ["33427","33428","33429","33431","33432","33433","33434","33486","33487","33488","33496","33497","33498"],
    landmarks: ["Mizner Park","Florida Atlantic University","Town Center at Boca Raton","Boca Raton Resort & Club","Spanish River Park","Red Reef Park","Boca Raton Inlet"],
    localHook: "Boca Raton Building Department generally prefers Miami-Dade HVHZ standards. We voluntarily install every Boca replacement to that spec."
  },
  {
    slug: "fort-lauderdale",
    city: "Fort Lauderdale",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Fort Lauderdale, FL | All Phase USA",
    descriptionOverride: "Fort Lauderdale roof replacement by an HVHZ-certified, dual-licensed contractor. Tile, metal, shingle & flat. Free inspection: (754) 227-5605.",
    neighborhoods: ["Las Olas Isles","Victoria Park","Coral Ridge","Harbor Beach","Rio Vista","Coral Ridge Country Club Estates","Bay Colony","Imperial Point","Tarpon River","Sailboat Bend","Lauderdale Harbours"],
    zips: ["33301","33304","33305","33306","33308","33309","33311","33312","33315","33316","33317","33334"],
    landmarks: ["Las Olas Boulevard","Fort Lauderdale Beach","Port Everglades","Hugh Taylor Birch State Park","Fort Lauderdale Executive Airport","Galleria Mall"],
    localHook: "HVHZ jurisdiction. Every Fort Lauderdale reroof is built to FBC Chapter 16/44 high-velocity hurricane-zone code, with OIR-B1-1802 wind-mitigation paperwork at handover."
  },
  {
    slug: "coral-springs",
    city: "Coral Springs",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Coral Springs, FL | All Phase USA",
    descriptionOverride: "Coral Springs roof replacement specialist. Chamber member, HVHZ-certified, dual-licensed. Tile, metal & shingle reroofs. Free inspection: (754) 227-5605.",
    neighborhoods: ["Eagle Trace","Heron Bay","Whispering Woods","Cypress Run","Westview","Forest Hills","Pine Ridge","Maplewood Isles","Ramblewood","Country Club"],
    zips: ["33065","33067","33071","33075","33076","33077"],
    landmarks: ["Sawgrass Expressway","Coral Springs Center for the Arts","Mullins Park","Sportsplex","Coral Square Mall"],
    localHook: "HVHZ-certified Coral Springs reroofs. Active Greater Coral Springs Chamber of Commerce member."
  },
  {
    slug: "pompano-beach",
    city: "Pompano Beach",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Pompano Beach, FL | All Phase USA",
    descriptionOverride: "Pompano Beach roof replacement near Palm Aire, Harbor Village & Cypress Lakes. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods: ["Palm Aire","Harbor Village","Cypress Lakes","Cypress Bend","Old Pompano","Garden Isles","Coral Key","Leisureville","Cresthaven"],
    zips: ["33060","33061","33062","33063","33064","33065","33066","33068","33069","33072","33073","33074","33076"],
    landmarks: ["Pompano Beach Pier","Pompano Park (Isle Casino)","Festival Marketplace","Pompano Beach Airpark","Hillsboro Inlet"],
    localHook: "HVHZ jurisdiction. Pompano Beach reroofs include drone-validated wind-mitigation documentation."
  },
  {
    slug: "delray-beach",
    city: "Delray Beach",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement Delray Beach, FL | All Phase USA",
    descriptionOverride: "Delray Beach roof replacement. Dual-licensed, built to Miami-Dade HVHZ spec for maximum insurance savings. Free inspection: (754) 227-5605.",
    neighborhoods: ["Atlantic Avenue corridor","Pineapple Grove","Tropic Isle","Seagate","Lake Ida","Delray Shores","Hammock Reserve","Mizner Country Club","Hidden Lake","Bexley Park"],
    zips: ["33444","33445","33446","33447","33448","33483","33484"],
    landmarks: ["Atlantic Avenue","Delray Beach Pavilion","Morikami Museum","Old School Square","Wakodahatchee Wetlands"],
    localHook: "Palm Beach County jurisdiction; we voluntarily install every Delray replacement to Miami-Dade HVHZ spec for insurance savings."
  },
  {
    slug: "parkland",
    city: "Parkland",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Parkland, FL | Luxury Tile & Slate | All Phase",
    descriptionOverride: "Parkland luxury home roof replacement. Tile, slate & metal. HVHZ-certified, HOA & ARC experienced, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods: ["Heron Bay","Parkland Golf & Country Club","Parkland Isles","Cypress Cay","Mayfair","Parkland Bay","Pine Tree Estates","Ranches of Parkland","Riverstone","Watercrest"],
    zips: ["33067","33076"],
    landmarks: ["Pine Trails Park","Parkland Equestrian Center","Heron Bay Commons","Marjory Stoneman Douglas High School"],
    localHook: "HVHZ-certified luxury reroofs in Parkland. HOA/ARC submission packages handled in-house."
  },
  {
    slug: "wellington",
    city: "Wellington",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement Wellington, FL | All Phase USA",
    descriptionOverride: "Wellington roof replacement. Tile & metal for estates and equestrian communities. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    neighborhoods: ["Palm Beach Polo & Country Club","Wellington Aero Club","Olympia","Versailles","Black Diamond","Binks Forest","Wycliffe","Sugar Pond Manor","Saddle Trail Park","Equestrian Club Estates"],
    zips: ["33414","33449","33470"],
    landmarks: ["Wellington International (Winter Equestrian Festival)","International Polo Club Palm Beach","Wellington Green Mall","Wellington Environmental Preserve"],
    localHook: "Equestrian-community specialist. Voluntarily build every Wellington replacement to Miami-Dade HVHZ spec."
  },

  // ─── Wave B ───
  {
    slug: "pembroke-pines",
    city: "Pembroke Pines",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Pembroke Pines, FL | All Phase USA",
    descriptionOverride: "Pembroke Pines roof replacement for single-family homes & townhomes. HVHZ-certified, dual-licensed, 2,500+ projects. Free inspection: (754) 227-5605.",
    neighborhoods: ["Chapel Trail","SilverLakes","Pembroke Falls","Pembroke Shores","Encantada","Spring Valley","Walnut Creek","Grand Palms","Pembroke Isles"],
    zips: ["33023","33024","33025","33026","33027","33028","33029","33082","33084"],
    landmarks: ["C.B. Smith Park","Pembroke Lakes Mall","Pines Boulevard corridor","Memorial Hospital Pembroke"],
    localHook: "HVHZ jurisdiction. Pembroke Pines reroofs are built to FBC Chapter 16/44 high-velocity hurricane code."
  },
  {
    slug: "miramar",
    city: "Miramar",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Miramar, FL | All Phase USA",
    descriptionOverride: "Miramar roof replacement. Tile, metal & shingle. Dual-licensed, HVHZ-certified, 2,500+ projects. Free inspection: (754) 227-5605.",
    neighborhoods: ["Riviera Isles","Sunset Lakes","Vizcaya","Huntington","Avalon","Monarch Lakes","Country Lakes","Silver Isles","Banyan Bay","Miramar Park"],
    zips: ["33023","33025","33027","33029"],
    landmarks: ["Miramar Regional Park","Miramar Town Center","Ansin Sports Complex","Memorial Hospital Miramar"],
    localHook: "HVHZ-certified Miramar reroofs. Bilingual project management."
  },
  {
    slug: "plantation",
    city: "Plantation",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Plantation, FL | All Phase USA",
    descriptionOverride: "Plantation roof replacement. Shingle tear-offs, tile reroofs & flat-roof systems. HVHZ-compliant, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods: ["Plantation Acres","Jacaranda","Plantation Isles","Plantation Gardens","Hawks Landing","Lauderdale West","The Estates","Plantation Park"],
    zips: ["33313","33317","33322","33323","33324","33325","33388"],
    landmarks: ["Plantation Heritage Park","Broward Mall","The Fountains shopping center","Westside Regional Medical Center"],
    localHook: "HVHZ-certified Plantation reroofs. Permitting handled in-house with the Plantation Building Department."
  },
  {
    slug: "davie",
    city: "Davie",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Davie, FL | Ranch & Estate Reroofs | All Phase",
    descriptionOverride: "Davie roof replacement for ranch-style and estate homes. Shingle, tile & metal. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods: ["Forest Ridge","Long Lake Ranches","Pine Island Ridge","Stonebrook Estates","Imagination Farms","Westridge","Hawkes Bluff","Rolling Hills","Whispering Pines","Bridgeview"],
    zips: ["33024","33312","33314","33317","33324","33325","33326","33328","33329","33330","33331","33332"],
    landmarks: ["Nova Southeastern University","Robbins Lodge Park","Tree Tops Park","Bergeron Rodeo Grounds"],
    localHook: "HVHZ-certified Davie reroofs. Equestrian and acreage homes welcome."
  },
  {
    slug: "sunrise",
    city: "Sunrise",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Sunrise, FL | Hurricane-Rated | All Phase",
    descriptionOverride: "Sunrise hurricane-rated roof replacement. Shingle, tile & metal. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods: ["Sawgrass Lakes","Welleby","Sunrise Lakes","Springtree","Sunrise Golf Village","Sunset Strip","Bonaventure border"],
    zips: ["33304","33313","33319","33321","33322","33323","33325","33326","33345","33351"],
    landmarks: ["Sawgrass Mills","Amerant Bank Arena","Markham Park","Sawgrass International Corporate Park"],
    localHook: "HVHZ-certified Sunrise reroofs. Discounts for Sawgrass corridor employees."
  },
  {
    slug: "hollywood",
    city: "Hollywood",
    state: "FL",
    county: "Broward",
    hvhz: true,
    titleOverride: "Roof Replacement Hollywood, FL | Coastal Specialist | All Phase",
    descriptionOverride: "Hollywood, FL roof replacement. Coastal-rated reroofs & storm-damage replacement. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods: ["Hollywood Lakes","Emerald Hills","Beverly Park","Hollywood Hills","Highland Gardens","Boulevard Heights","Driftwood","Oakwood","Lawn Acres","Park East"],
    zips: ["33019","33020","33021","33023","33024","33025","33026","33027","33028","33029"],
    landmarks: ["Hollywood Beach Boardwalk","Hard Rock Hotel & Casino","Hollywood Beach Theatre","Westfield Hollywood Mall"],
    localHook: "Coastal HVHZ specialist. Marine-grade fasteners and salt-air-resistant fascia on every Hollywood reroof."
  },
  {
    slug: "west-palm-beach",
    city: "West Palm Beach",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement West Palm Beach, FL | All Phase USA",
    descriptionOverride: "West Palm Beach roof replacement. Voluntarily built to Miami-Dade HVHZ spec. Tile, metal, shingle & flat. Free inspection: (754) 227-5605.",
    neighborhoods: ["El Cid","SoSo (South of Southern)","Flamingo Park","Northwood","Grandview Heights","Ibis Golf & Country Club","Andros Isle","Bear Lakes","Breakers West","Lake Clarke Shores border"],
    zips: ["33401","33403","33404","33405","33406","33407","33409","33411","33412","33413","33415","33417"],
    landmarks: ["CityPlace / Rosemary Square","Clematis Street","Norton Museum of Art","Palm Beach International Airport","Kravis Center"],
    localHook: "Palm Beach County jurisdiction; we voluntarily install every WPB replacement to Miami-Dade HVHZ spec."
  },
  {
    slug: "boynton-beach",
    city: "Boynton Beach",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement Boynton Beach, FL | All Phase USA",
    descriptionOverride: "Boynton Beach roof replacement. Aberdeen, Leisureville, Hunters Run & all PBC. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    neighborhoods: ["Aberdeen","Hunters Run","Leisureville","Indian Spring","Quail Ridge","Valencia Cove","Coral Lakes","Sun Valley","Canyon Isles","Tartan Lakes"],
    zips: ["33424","33425","33426","33435","33436","33437","33472","33473","33474"],
    landmarks: ["Boynton Beach Inlet","Boynton Beach Mall","Oceanfront Park","Arthur R. Marshall Loxahatchee Wildlife Refuge"],
    localHook: "Palm Beach County jurisdiction; voluntarily built to HVHZ spec. 55+ community specialists."
  },
  {
    slug: "palm-beach-gardens",
    city: "Palm Beach Gardens",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement Palm Beach Gardens, FL | Tile Estate | All Phase",
    descriptionOverride: "Palm Beach Gardens premium tile roof replacement. PGA National, BallenIsles, Mirasol. HOA/ARC experts. Free inspection: (754) 227-5605.",
    neighborhoods: ["PGA National","BallenIsles","Mirasol","Frenchman's Reserve","Frenchman's Creek","Old Palm Golf Club","Eastpointe","Mirabella","Evergrene","The Sanctuary"],
    zips: ["33403","33408","33410","33412","33418"],
    landmarks: ["The Gardens Mall","PGA National Resort","Downtown at the Gardens","Roger Dean Stadium","MacArthur Beach State Park"],
    localHook: "Premium tile specialist. HOA/ARC submission packages and color-matched concrete tile for PGA National and BallenIsles."
  },
  {
    slug: "jupiter",
    city: "Jupiter",
    state: "FL",
    county: "Palm Beach",
    hvhz: false,
    titleOverride: "Roof Replacement Jupiter, FL | Coastal Tile & Metal | All Phase",
    descriptionOverride: "Jupiter coastal roof replacement near Abacoa, Jonathan's Landing & Jupiter Beach. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    neighborhoods: ["Abacoa","Jonathan's Landing","Admirals Cove","Loxahatchee Club","Maplewood","Jupiter Hills","Trump National border","Jupiter Farms","Egret Landing"],
    zips: ["33458","33468","33469","33477","33478"],
    landmarks: ["Jupiter Inlet Lighthouse","Roger Dean Chevrolet Stadium","Jupiter Beach Park","Loxahatchee River","Burt Reynolds Park"],
    localHook: "Coastal Jupiter specialist. Salt-spray-rated fasteners standard, voluntarily built to HVHZ spec."
  },

  // ─── Wave C ───
  { slug:"coconut-creek", city:"Coconut Creek", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Coconut Creek, FL | All Phase USA",
    descriptionOverride:"Coconut Creek roof replacement. Wynmoor, Township & Centura Parc. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods:["Wynmoor Village","Township","Centura Parc","Winston Park","Banyan Trails"],
    zips:["33063","33066","33073","33076","33093","33097"],
    landmarks:["Butterfly World","Promenade at Coconut Creek","Tradewinds Park"],
    localHook:"HVHZ-certified. 55+ specialists in Wynmoor and Township." },
  { slug:"cooper-city", city:"Cooper City", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Cooper City, FL | All Phase USA",
    descriptionOverride:"Cooper City roof replacement. Embassy Lakes, Rock Creek, Monterra. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods:["Embassy Lakes","Rock Creek","Monterra","Country Address","Forest Lake","Flamingo Gardens"],
    zips:["33024","33026","33328","33330","33331"],
    landmarks:["Brian Piccolo Sports Park","Cooper City High School","Flamingo Gardens"],
    localHook:"HVHZ-certified Cooper City reroofs." },
  { slug:"tamarac", city:"Tamarac", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Tamarac, FL | All Phase USA",
    descriptionOverride:"Tamarac affordable roof replacement. Kings Point, Mainlands, Woodlands. HVHZ-certified. Free inspection: (754) 227-5605.",
    neighborhoods:["Kings Point","Mainlands","Woodlands","Westwood","Sunflower / Heathgate"],
    zips:["33309","33319","33321","33351","33359"],
    landmarks:["Tamarac Community Center","Sawgrass Expressway","Caporella Aquatic Center"],
    localHook:"55+ specialists for Kings Point and Mainlands." },
  { slug:"margate", city:"Margate", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Margate, FL | All Phase USA",
    descriptionOverride:"Margate roof replacement. Full reroofs, leak repair & hurricane upgrades. HVHZ-certified. Free inspection: (754) 227-5605.",
    neighborhoods:["Holiday Springs","Margate Estates","Carolina Estates"],
    zips:["33063","33068","33073","33093"],
    landmarks:["Calypso Cove Aquatic Facility","Margate Sports Complex"],
    localHook:"HVHZ-certified Margate reroofs." },
  { slug:"lauderhill", city:"Lauderhill", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Lauderhill, FL | All Phase USA",
    descriptionOverride:"Lauderhill affordable roof replacement. Shingle, tile & metal. HVHZ-compliant, licensed & insured. Free inspection: (754) 227-5605.",
    neighborhoods:["Inverrary","Cypress Chase","Castle Gardens"],
    zips:["33311","33313","33319","33321","33351"],
    landmarks:["Inverrary Country Club","Central Broward Regional Park"],
    localHook:"HVHZ-certified Lauderhill reroofs." },
  { slug:"north-lauderdale", city:"North Lauderdale", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement North Lauderdale, FL | All Phase USA",
    descriptionOverride:"North Lauderdale roof replacement. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    zips:["33068"], localHook:"HVHZ-certified North Lauderdale reroofs." },
  { slug:"oakland-park", city:"Oakland Park", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Oakland Park, FL | All Phase USA",
    descriptionOverride:"Oakland Park roof replacement. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    zips:["33304","33306","33308","33309","33311","33334"],
    landmarks:["Oakland Park Boulevard corridor","Easterlin Park"],
    localHook:"HVHZ-certified Oakland Park reroofs." },
  { slug:"wilton-manors", city:"Wilton Manors", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Wilton Manors, FL | Mid-Century Specialist | All Phase",
    descriptionOverride:"Wilton Manors roof replacement. Mid-century, ranch & MiMo home specialists. HVHZ-certified. Free inspection: (754) 227-5605.",
    neighborhoods:["Wilton Drive","Coral Gardens","Cloverleaf Estates","Westwood Heights"],
    zips:["33305","33311","33334"],
    landmarks:["Wilton Drive (\"The Drive\")","Hagen Park","Richardson Historic Park"],
    localHook:"Mid-century and MiMo home specialists. HVHZ-certified." },
  { slug:"lighthouse-point", city:"Lighthouse Point", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Lighthouse Point, FL | Waterfront | All Phase",
    descriptionOverride:"Lighthouse Point waterfront roof replacement. Hillsboro Inlet & Intracoastal. HVHZ-certified. Free inspection: (754) 227-5605.",
    zips:["33064"],
    landmarks:["Hillsboro Inlet Lighthouse","Lighthouse Point Yacht Club"],
    localHook:"Waterfront and Intracoastal HVHZ specialist." },
  { slug:"lauderdale-by-the-sea", city:"Lauderdale-By-The-Sea", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Lauderdale-By-The-Sea, FL | All Phase USA",
    descriptionOverride:"Lauderdale-By-The-Sea oceanfront roof replacement. Coastal-rated. HVHZ-certified. Free inspection: (754) 227-5605.",
    zips:["33062","33308"],
    landmarks:["Anglin's Pier","Sea Ranch Lakes border"],
    localHook:"Oceanfront HVHZ specialist." },
  { slug:"hallandale-beach", city:"Hallandale Beach", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Hallandale Beach, FL | Condo & Flat | All Phase",
    descriptionOverride:"Hallandale Beach condo & flat-roof replacement. TPO, modified bitumen & built-up. HVHZ-certified. Free inspection: (754) 227-5605.",
    zips:["33008","33009"],
    landmarks:["Gulfstream Park","Hallandale Beach Boulevard","Diplomat Resort"],
    localHook:"Condo and high-rise HVHZ flat-roof specialist." },
  { slug:"dania-beach", city:"Dania Beach", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Dania Beach, FL | All Phase USA",
    descriptionOverride:"Dania Beach roof replacement. Coastal-rated, HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    zips:["33004","33312","33314","33316"],
    landmarks:["Dania Beach Pier","IGFA Fishing Hall of Fame","Dania Pointe"],
    localHook:"HVHZ-certified Dania Beach reroofs." },
  { slug:"weston", city:"Weston", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Weston Roof Replacement | HVHZ-Certified | All Phase USA",
    descriptionOverride:"Weston roof replacement. Bonaventure, Windmill Ranches, The Ridges. HVHZ-certified, dual-licensed. Free inspection: (754) 227-5605.",
    neighborhoods:["Bonaventure","Windmill Ranches","The Ridges","Country Isles","Weston Hills","Savanna","Indian Trace"],
    zips:["33326","33327","33331","33332"],
    landmarks:["Weston Town Center","Markham Park","Cleveland Clinic Florida"],
    localHook:"HVHZ-certified Weston reroofs. Master-planned community specialists." },
  { slug:"westlake", city:"Westlake", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Westlake, FL | New Build Reroofs | All Phase",
    descriptionOverride:"Westlake, FL roof replacement. Newest Palm Beach County city. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33470"],
    landmarks:["Minto Communities Westlake","Adventure Park"],
    localHook:"Palm Beach County's newest city. Voluntarily built to HVHZ spec." },
  { slug:"royal-palm-beach", city:"Royal Palm Beach", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Royal Palm Beach, FL | All Phase USA",
    descriptionOverride:"Royal Palm Beach roof replacement. Madison Green, Counterpoint Estates. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33411","33412","33421"],
    landmarks:["Royal Palm Beach Commons Park","Madison Green Country Club"],
    localHook:"Palm Beach County jurisdiction; voluntarily built to HVHZ spec." },
  { slug:"greenacres", city:"Greenacres", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Greenacres, FL | All Phase USA",
    descriptionOverride:"Greenacres roof replacement. Palm Beach National, Pine Ridge North. Voluntarily HVHZ-spec build. Free inspection: (754) 227-5605.",
    zips:["33413","33415","33454","33463","33467"],
    landmarks:["Palm Beach National Golf","Samuel J. Ferreri Community Park"],
    localHook:"Palm Beach County jurisdiction; voluntarily built to HVHZ spec." },
  { slug:"lake-worth-beach", city:"Lake Worth Beach", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Lake Worth Beach, FL | All Phase USA",
    descriptionOverride:"Lake Worth Beach historic & coastal roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33460","33461","33462","33463","33465","33466","33467"],
    landmarks:["Lake Worth Beach Pier","Bryant Park","Lake Worth Casino"],
    localHook:"Historic district experience; voluntarily built to HVHZ spec." },
  { slug:"lantana", city:"Lantana", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Lantana, FL | All Phase USA",
    descriptionOverride:"Lantana roof replacement. Hypoluxo Island & coastal homes. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33462","33465"],
    landmarks:["Lantana Beach","Hypoluxo Island"],
    localHook:"Coastal Lantana specialist." },
  { slug:"lake-park", city:"Lake Park", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Lake Park, FL | All Phase USA",
    descriptionOverride:"Lake Park roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33403"], localHook:"Voluntarily built to HVHZ spec." },
  { slug:"north-palm-beach", city:"North Palm Beach", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement North Palm Beach, FL | All Phase USA",
    descriptionOverride:"North Palm Beach coastal roof replacement. Lost Tree, Old Port Cove. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33408","33410"],
    landmarks:["North Palm Beach Country Club","Lake Worth Lagoon"],
    localHook:"Voluntarily built to HVHZ spec for coastal homes." },
  { slug:"palm-beach", city:"Palm Beach", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Palm Beach, FL | Estate Tile | All Phase",
    descriptionOverride:"Palm Beach Island estate roof replacement. Premium tile, slate & copper. HOA/ARC experienced. Free inspection: (754) 227-5605.",
    zips:["33480"],
    landmarks:["Worth Avenue","The Breakers","Mar-a-Lago"],
    localHook:"Estate tile and slate specialist for Palm Beach Island." },
  { slug:"highland-beach", city:"Highland Beach", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Highland Beach, FL | All Phase USA",
    descriptionOverride:"Highland Beach oceanfront roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33487"], localHook:"Oceanfront condo specialist." },
  { slug:"ocean-ridge", city:"Ocean Ridge", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Ocean Ridge, FL | All Phase USA",
    descriptionOverride:"Ocean Ridge oceanfront roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33435"], localHook:"Oceanfront HVHZ-spec build." },
  { slug:"gulf-stream", city:"Gulf Stream", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Gulf Stream, FL | All Phase USA",
    descriptionOverride:"Gulf Stream estate roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33483"], localHook:"Estate specialist; voluntarily built to HVHZ spec." },
  { slug:"hillsboro-beach", city:"Hillsboro Beach", state:"FL", county:"Broward", hvhz:true,
    titleOverride:"Roof Replacement Hillsboro Beach, FL | All Phase USA",
    descriptionOverride:"Hillsboro Beach oceanfront roof replacement. HVHZ-certified, coastal-rated. Free inspection: (754) 227-5605.",
    zips:["33062"], localHook:"Oceanfront HVHZ specialist." },
  { slug:"jupiter-inlet-colony", city:"Jupiter Inlet Colony", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Jupiter Inlet Colony, FL | All Phase USA",
    descriptionOverride:"Jupiter Inlet Colony oceanfront roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33469"], localHook:"Oceanfront island specialist." },
  { slug:"haverhill", city:"Haverhill", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Haverhill, FL | All Phase USA",
    descriptionOverride:"Haverhill roof replacement. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33415","33417"], localHook:"Voluntarily built to HVHZ spec." },
  { slug:"hypoluxo", city:"Hypoluxo", state:"FL", county:"Palm Beach", hvhz:false,
    titleOverride:"Roof Replacement Hypoluxo, FL | All Phase USA",
    descriptionOverride:"Hypoluxo roof replacement. Hypoluxo Island specialist. Voluntarily built to HVHZ spec. Free inspection: (754) 227-5605.",
    zips:["33462"], localHook:"Hypoluxo Island specialist." }
];

/** Get a location by its slug */
export function getLocationBySlug(slug: string): Location | null {
  return locations.find(loc => loc.slug === slug) || null;
}

/** Get all location slugs (useful for route generation) */
export function getAllLocationSlugs(): string[] {
  return locations.map(loc => loc.slug);
}
