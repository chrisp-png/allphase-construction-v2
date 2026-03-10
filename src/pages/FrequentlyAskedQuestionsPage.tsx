import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { generateLocalBusinessSchema } from '../utils/seoSchemas';

interface FAQItem {
  question: string;
  answer: JSX.Element;
  category: string;
}

const faqData: FAQItem[] = [
  // Quick Reference
  {
    category: 'Top Questions (Quick Reference)',
    question: 'Do I need a roof repair or a full replacement?',
    answer: (
      <>
        The decision depends on several factors: the age of your existing roof, the number of active leaks, visible signs of lifted shingles or tiles, and whether you've needed repeated repairs within the past 12–24 months. In the HVHZ, there's an additional consideration most homeowners don't realize—older roofs may not meet current uplift code requirements even if they're not actively leaking.
        <br /><br />
        A roof installed before 2002 (or even before the 2010 code updates) likely uses fastening patterns and materials that won't satisfy today's wind resistance standards, which can affect both your insurance and your home's safety. Learn more about the <Link to="/roof-replacement-process/" className="text-red-600 hover:text-red-500">roof replacement process</Link>.
      </>
    )
  },
  {
    category: 'Top Questions (Quick Reference)',
    question: 'How long does a roof replacement take in South Florida?',
    answer: (
      <>
        For a typical 2,000–2,500 square foot home, the actual <Link to="/roof-replacement-process/" className="text-red-600 hover:text-red-500">roof installation</Link> process takes 1–3 working days once the roofing crew begins. However, the entire roofing process from contract signing to final inspection typically spans 2–4 weeks due to permit and engineering lead time. During peak hurricane season or in the aftermath of a major storm, permit processing can stretch to 3–4 weeks or longer as building departments handle increased volume.
      </>
    )
  },
  {
    category: 'Top Questions (Quick Reference)',
    question: 'How much does a new roof cost in the HVHZ?',
    answer: (
      <>
        New roof cost in South Florida runs significantly higher than national averages due to Miami-Dade code requirements, engineering fees, and enhanced installation methods. For a typical 1,800–2,200 square foot home, expect approximately $15,000–$25,000 for architectural asphalt shingles, $25,000–$45,000 for concrete or clay tile roofs, and $30,000–$50,000+ for standing seam metal roofs. These ranges include permits, engineering where required, and code-compliant installation—costs that simply don't exist in most other markets. Use our <Link to="/pricing-guide/" className="text-red-600 hover:text-red-500">pricing guide</Link> for detailed cost breakdowns.
      </>
    )
  },
  {
    category: 'Top Questions (Quick Reference)',
    question: 'Will my homeowners insurance pay for my new roof?',
    answer: (
      <>
        Insurance coverage typically covers sudden storm damage or wind damage but excludes age-related wear and deterioration. In South Florida, carriers have become increasingly strict about roof age—many policies push for replacement once shingle roofs reach 15–20 years and clay tile roofs approach 25–30 years. If your roof sustains storm damage, document everything with photos immediately and request a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500">professional roof inspection</Link> to support your claim.
      </>
    )
  },
  {
    category: 'Top Questions (Quick Reference)',
    question: 'Are there special hurricane requirements for roofs here?',
    answer: (
      <>
        Yes, and they're substantial. HVHZ wind-speed ratings require roofing systems designed to withstand 170+ mph winds in coastal Miami-Dade and Broward areas. All roofing materials must carry Miami-Dade Product Approval or NOA certification, installed according to specific fastener patterns—often 6–8 nails per shingle versus 4–6 elsewhere. Common upgrades include secondary water barriers (self-adhering underlayment), enhanced roof-to-wall connections, and engineered attachment details verified by a Florida-licensed professional engineer.
      </>
    )
  },

  // Basic Roofing FAQs
  {
    category: 'Basic Roofing for South Florida Homes',
    question: 'How long should my roof last in South Florida\'s climate?',
    answer: (
      <>
        Manufacturer lifespans assume moderate weather conditions—South Florida delivers anything but moderate. Architectural <Link to="/shingle-roofing/" className="text-red-600 hover:text-red-500">asphalt shingles</Link> rated for 30 years elsewhere typically last 15–22 years here due to intense UV exposure, 90+ inches of annual rainfall, and 175+ thunderstorm days per year. <Link to="/tile-roofing/" className="text-red-600 hover:text-red-500">Concrete tile</Link> performs better at 30–50 years, while clay tiles can reach 75+ years with proper maintenance. <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500">Metal roofs</Link> offer excellent longevity at 40–60+ years. The combination of UV degradation, salt air corrosion (especially within 3 miles of the coast), and hurricane stress accelerates aging on every roof type.
      </>
    )
  },
  {
    category: 'Basic Roofing for South Florida Homes',
    question: 'What are the most common roofing materials in South Florida?',
    answer: (
      <>
        The most common roofing materials you'll see locally include:
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><Link to="/shingle-roofing/" className="text-red-600 hover:text-red-500">Architectural asphalt shingles</Link> – Cost-effective and widely available, but require Class H (high wind) ratings and enhanced nailing patterns in HVHZ.</li>
          <li><Link to="/tile-roofing/" className="text-red-600 hover:text-red-500">Concrete and clay tile roofs</Link> – Traditional in Spanish and Mediterranean-style homes, offering excellent longevity and aesthetic appeal.</li>
          <li><Link to="/metal-roofing/" className="text-red-600 hover:text-red-500">Standing seam metal roofs</Link> – Superior hurricane performance when properly engineered, with excellent reflectivity for energy efficiency.</li>
          <li><Link to="/flat-roofing/" className="text-red-600 hover:text-red-500">Flat roof systems (TPO, modified bitumen)</Link> – Common on <Link to="/commercial-roofing/" className="text-red-600 hover:text-red-500">commercial buildings</Link> and low-slope residential sections.</li>
        </ul>
      </>
    )
  },
  {
    category: 'Basic Roofing for South Florida Homes',
    question: 'Will a metal roof make my house hotter?',
    answer: (
      <>
        This is one of the most frequently asked roofing questions we hear, and the answer surprises most homeowners. Modern <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500">metal roofs</Link> with reflective finishes and cool roof coatings actually run cooler than dark asphalt shingles. CRRC-rated metal roofing with 0.65+ solar reflectance can reduce cooling costs by 20–30%. Combined with proper attic ventilation and insulation, metal roofs often improve your home's energy efficiency rather than hurt it.
      </>
    )
  },
  {
    category: 'Basic Roofing for South Florida Homes',
    question: 'Does roof color matter in our climate?',
    answer: (
      <>
        Absolutely. Lighter and reflective colors reduce attic temperatures and AC load significantly—a white or light gray metal roof can keep your roof deck 50–70°F cooler than a dark shingle roof on a summer afternoon. However, HOA restrictions and aesthetic preferences sometimes limit options. If you're constrained to darker colors, consider cool roof coatings that reflect infrared heat while maintaining the desired appearance.
      </>
    )
  },

  // Roof Repair vs. Replacement
  {
    category: 'Roof Repair vs. Roof Replacement',
    question: 'When does roof repair make sense?',
    answer: (
      <>
        Repair is typically appropriate when damage is limited and localized—a small leak around a vent pipe, a few missing shingles after a squall, or a handful of cracked tiles from fallen debris. Your roof should be under a certain age (generally under 10–12 years for shingles, under 20 years for tile) and still within manufacturer guidelines. The damage should represent a small percentage of the total roof area, and the underlying roof deck and fastening system should remain sound.
      </>
    )
  },
  {
    category: 'Roof Repair vs. Roof Replacement',
    question: 'When should you consider roof replacement?',
    answer: (
      <>
        Several conditions point toward full <Link to="/roof-replacement-process/" className="text-red-600 hover:text-red-500">replacement</Link> rather than minor repairs:
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Widespread granule loss on shingles (check your gutters for accumulation)</li>
          <li>Multiple chronic leaks that reappear despite previous repairs</li>
          <li>Visible uplift damage or broken tiles across multiple slopes</li>
          <li>Roofs older than local insurer thresholds (typically 15–20 years for shingles)</li>
          <li>Roofs installed before key Florida Building Code changes (pre-2002 or pre-2010) that don't meet current uplift resistance standards</li>
          <li>Damaged shingles, cracked shingles, or loose shingles covering more than 25% of the roof surface</li>
        </ul>
      </>
    )
  },
  {
    category: 'Roof Repair vs. Roof Replacement',
    question: 'How does code affect roof repair vs. replacement?',
    answer: (
      <>
        This is where HVHZ regulations create unique situations. In Miami-Dade and Broward, once repairs exceed a certain percentage of the roof area (often 25% or more), local building codes may require bringing the entire roofing system up to current standards. What starts as a repair project can quickly become a full replacement when code compliance enters the equation. This isn't arbitrary—it ensures that repaired roofs can actually withstand the next major hurricane.
      </>
    )
  },

  // Permits and Engineering
  {
    category: 'Permits, Engineering, and Building Code',
    question: 'What does "High Velocity Hurricane Zone" mean?',
    answer: (
      <>
        The Florida Building Code designates Miami-Dade and Broward counties entirely as HVHZ, with portions of Palm Beach under similar standards. This designation reflects the region's extreme hurricane exposure—coastal areas must withstand design wind speeds of 170–200 mph. The HVHZ retains unique protocols not required elsewhere in Florida, including mandatory high-velocity wind tunnel testing for products and debris-impact resistance testing using 2x4 lumber projectiles at 100 mph velocity.
      </>
    )
  },
  {
    category: 'Permits, Engineering, and Building Code',
    question: 'Do I really need a permit for my roof?',
    answer: (
      <>
        For full replacements, the answer is always yes. Most structural repairs also require permits. Your roofing contractor should handle permit applications, construction drawings, and scheduling all required inspections with local building departments. Permits protect you—they ensure independent verification that your roof installation meets local building codes and will perform as designed when the next hurricane arrives.
      </>
    )
  },
  {
    category: 'Permits, Engineering, and Building Code',
    question: 'Why is engineering sometimes required for a roof?',
    answer: (
      <>
        Unlike standard roofing zones where generic installation instructions suffice, HVHZ projects often require a Florida-licensed professional engineer to calculate uplift forces, specify fastening schedules, and detail attachment methods for your specific building. This is particularly common for <Link to="/tile-roofing/" className="text-red-600 hover:text-red-500">tile roofing</Link> and <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500">metal roofs</Link>, where wind pressures can exceed 150–180 psf depending on your home's exposure category, height, and roof geometry.
      </>
    )
  },

  // Maintenance and Hurricane Prep
  {
    category: 'Roof Maintenance and Hurricane Preparedness',
    question: 'How often should I have my roof inspected?',
    answer: (
      <>
        Schedule a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500">professional roof inspection</Link> at least once annually—late spring or early summer before hurricane season is ideal timing. Additionally, request an inspection after any named storm or significant wind event that affects your area. Photo-documented inspections provide valuable records for future insurance claims and establish baseline conditions for tracking deterioration over time.
      </>
    )
  },
  {
    category: 'Roof Maintenance and Hurricane Preparedness',
    question: 'What are common signs of roof damage in South Florida?',
    answer: (
      <>
        Watch for these visible signs that indicate your roof needs attention:
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Lifted, creased, or curled shingles</li>
          <li>Cracked, displaced, or broken tiles</li>
          <li>Loose ridge caps or hip tiles</li>
          <li>Rusted, detached, or deteriorated flashing around roof penetrations</li>
          <li>Water stains on interior ceilings or walls</li>
          <li>Moisture buildup or daylight visible in the attic</li>
          <li>Debris-clogged valleys, gutters, or drains on flat roofs</li>
          <li>Algae or mold growth indicating trapped moisture</li>
        </ul>
      </>
    )
  },
  {
    category: 'Roof Maintenance and Hurricane Preparedness',
    question: 'How can I prepare my roof for hurricane season?',
    answer: (
      <>
        Hurricane preparedness should begin well before the August–October peak of storm activity. Trim overhanging branches from trees near your roof—falling limbs cause approximately 70% of shingle punctures during storms. Clear accumulated debris from valleys, gutters, and drains. If you have attic access, visually inspect roof-to-wall connections and hurricane straps for obvious corrosion or loose hardware. Schedule any needed repairs by late June to avoid the rush when storms threaten.
      </>
    )
  },

  // Costs and Insurance
  {
    category: 'Costs, Insurance, and Financing',
    question: 'What factors influence roof pricing in South Florida?',
    answer: (
      <>
        Multiple variables affect your final cost:
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Total roof size and complexity (hip roofs with multiple valleys cost more than simple gable designs)</li>
          <li>Roof pitch (steeper slopes require additional safety measures and labor time)</li>
          <li>Number of stories (two-story homes require more equipment and present access challenges)</li>
          <li>Material choice and quality grade within that material category</li>
          <li>Tear-off complexity (removing existing shingles versus multiple layers versus tile)</li>
          <li>Roof deck condition and extent of repairs needed</li>
          <li>Permit and inspection fees (vary by municipality)</li>
          <li>Engineering requirements for uplift calculations</li>
          <li>Hurricane upgrades like secondary water barrier and enhanced roof-to-wall connections</li>
        </ul>
        Visit our <Link to="/pricing-guide/" className="text-red-600 hover:text-red-500">pricing guide</Link> for detailed cost information.
      </>
    )
  },
  {
    category: 'Costs, Insurance, and Financing',
    question: 'When does homeowners insurance pay for a roof?',
    answer: (
      <>
        Insurers typically cover wind, hail, or impact damage from named storms and severe weather conditions. Coverage generally excludes old age, normal wear, and damage resulting from poor maintenance. After any storm event, document damage immediately with photos and request a <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500">professional inspection</Link>. Insurance adjusters look for evidence of sudden, storm-related damage versus gradual deterioration.
      </>
    )
  },
  {
    category: 'Costs, Insurance, and Financing',
    question: 'Can a new roof lower my insurance premium?',
    answer: (
      <>
        Yes, significantly in many cases. A quality roof meeting current HVHZ standards, combined with a favorable Florida wind mitigation inspection report, can earn substantial premium credits. Documented features that reduce premiums include roof covering meeting current Florida Building Code, enhanced nailing patterns (6-nail or higher per shingle), secondary water barrier (sealed roof deck), roof-to-wall connections using clips or straps, and roof geometry (hip roofs typically receive better credits than gable roofs). Homeowners report insurance savings of $500–$2,000+ annually with compliant HVHZ roofs.
      </>
    )
  },
  {
    category: 'Costs, Insurance, and Financing',
    question: 'What financing options are available?',
    answer: (
      <>
        Roof replacement represents a significant investment, and several financing approaches can help manage the cost. Traditional home improvement installment loans spread payments over 3–10+ years. Home equity loans or lines of credit may offer lower interest rates for homeowners with available equity. Some roofing companies offer in-house financing or partnerships with lending institutions that specialize in home improvement projects. Learn more about our <Link to="/easy-payments/" className="text-red-600 hover:text-red-500">financing options</Link>.
      </>
    )
  },

  // Choosing a Contractor
  {
    category: 'Choosing a Qualified HVHZ Roofing Contractor',
    question: 'What licenses should a South Florida roofer have?',
    answer: (
      <>
        Florida requires roofing contractors to hold either a State Certified Roofing Contractor license or a Registered Roofing Contractor license (valid only in their registered county). Verify license status through the Florida Department of Business and Professional Regulation (DBPR) license lookup before signing any contract. Confirm the license is active, not suspended or expired, and matches the company name and individual who will be responsible for your project. Learn more about <Link to="/how-to-hire-roofing-contractor/" className="text-red-600 hover:text-red-500">hiring a qualified contractor</Link>.
      </>
    )
  },
  {
    category: 'Choosing a Qualified HVHZ Roofing Contractor',
    question: 'What questions should I ask a roofer in Miami-Dade/Broward?',
    answer: (
      <>
        Before hiring local contractors, ask these essential questions:
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>How many years of experience do you have working specifically in the HVHZ?</li>
          <li>Are you familiar with Miami-Dade NOA requirements and product approvals?</li>
          <li>Do you handle engineering, permits, and inspections in-house or through subcontractors?</li>
          <li>Can you provide references from recent HVHZ projects in my municipality?</li>
          <li>What hurricane-specific details will your proposal include (fastener schedules, underlayment type, wind rating)?</li>
          <li>What is your process if an inspector requires corrections?</li>
        </ul>
        Read our complete <Link to="/how-to-hire-roofing-contractor/" className="text-red-600 hover:text-red-500">guide to hiring a roofing contractor</Link> and learn <Link to="/licensed-roofing-contractor" className="text-red-600 hover:text-red-500">how to verify a roofer's license</Link> before signing.
      </>
    )
  },

  // Material-Specific Questions
  {
    category: 'Asphalt Shingle Roofs',
    question: 'How long do shingle roofs really last in South Florida?',
    answer: (
      <>
        Despite manufacturer claims of 25–30 years, architectural <Link to="/shingle-roofing/" className="text-red-600 hover:text-red-500">asphalt shingles</Link> typically last 15–22 years in South Florida before requiring replacement. Intense UV exposure causes granule loss and brittleness, while heat cycles (surfaces regularly exceed 150°F in summer) break down adhesive bonds. After 15 years, most shingle roofs show enough wear that insurers push for replacement.
      </>
    )
  },
  {
    category: 'Asphalt Shingle Roofs',
    question: 'What\'s different about 130-mph and higher wind-rated shingles?',
    answer: (
      <>
        High-wind <Link to="/shingle-roofing/" className="text-red-600 hover:text-red-500">shingles</Link> (Class H) feature enhanced adhesive strips, reinforced nailing zones, and are tested to withstand sustained winds of 130+ mph under TAS 107 protocols. In HVHZ, even these premium shingles must be installed with 6 nails per shingle in 110+ mph zones rather than the 4-nail pattern allowed elsewhere.
      </>
    )
  },
  {
    category: 'Tile Roofs',
    question: 'What\'s the difference between concrete and clay tiles?',
    answer: (
      <>
        Concrete tiles offer durability and variety at lower cost, typically lasting 30–50 years. Clay tiles cost more but can exceed 75 years with maintenance and offer superior color retention since the color runs through the material rather than sitting on the surface. Both require additional uplift engineering in HVHZ due to their weight and the complex attachment systems needed to resist high winds. Learn more about <Link to="/tile-roofing/" className="text-red-600 hover:text-red-500">tile roofing systems</Link>.
      </>
    )
  },
  {
    category: 'Tile Roofs',
    question: 'Why do tile roofs need special engineering?',
    answer: (
      <>
        <Link to="/tile-roofing/" className="text-red-600 hover:text-red-500">Tile roofing systems</Link> in HVHZ face unique uplift challenges. Each tile must resist forces that can exceed 150 psf while the weight of the tile system (8–10 pounds per square foot) stresses the roof structure. Engineers calculate fastener schedules—typically involving specialty foam adhesive systems, mechanical clips, or wire ties—to ensure tiles stay attached when 170+ mph winds try to peel them off.
      </>
    )
  },
  {
    category: 'Metal Roofs',
    question: 'How do metal roofs perform in hurricanes?',
    answer: (
      <>
        When properly engineered and installed, <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500">metal roofs</Link> offer exceptional hurricane performance. The 2017 Hurricane Irma data showed engineered metal roof systems experienced dramatically lower failure rates than shingle or tile roofs with improper fastening. The key is "properly engineered"—metal installed without adequate clip spacing or with incorrect panel gauges will fail.
      </>
    )
  },
  {
    category: 'Metal Roofs',
    question: 'What about noise and coastal corrosion on metal roofs?',
    answer: (
      <>
        Rain noise concerns are largely mitigated by proper insulation and solid sheathing beneath the metal panels—installed correctly, <Link to="/metal-roofing/" className="text-red-600 hover:text-red-500">metal roofs</Link> aren't significantly louder than other roofing materials during rainstorms. For coastal properties, specify aluminum or galvanized steel with appropriate coatings rated for salt air exposure. Have fasteners and sealant inspected every few years, as these components age faster than the panels themselves near saltwater.
      </>
    )
  },
  {
    category: 'Flat Roofs',
    question: 'What systems work for flat roofs in Florida?',
    answer: (
      <>
        Common <Link to="/flat-roofing/" className="text-red-600 hover:text-red-500">flat roof systems</Link> include TPO (thermoplastic polyolefin), PVC, and modified bitumen. TPO dominates the <Link to="/commercial-roofing/" className="text-red-600 hover:text-red-500">commercial roof</Link> market due to its welded seams, reflective surface, and competitive pricing. Modified bitumen offers traditional torch-applied or self-adhered installation options with proven durability.
      </>
    )
  },
  {
    category: 'Flat Roofs',
    question: 'How long do flat roofs last in South Florida?',
    answer: (
      <>
        With proper maintenance, <Link to="/flat-roofing/" className="text-red-600 hover:text-red-500">flat roof systems</Link> typically last 15–25+ years in South Florida. The biggest enemies are ponding water, UV degradation, and debris accumulation blocking drains. Regular <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500">inspections</Link> and prompt drain cleaning significantly extend flat roof life.
      </>
    )
  },

  // Wind Mitigation & Insurance Savings
  {
    category: 'Wind Mitigation & Insurance Savings',
    question: 'What is a wind mitigation inspection and why do I need one?',
    answer: (
      <>
        A wind mitigation inspection is a standardized assessment (OIR-B1-1802 form) that documents specific hurricane-resistant features of your roof and home. Florida law requires insurance companies to offer premium discounts for qualifying features. The inspector evaluates your roof covering type and age, roof deck attachment method, roof-to-wall connections (clips, straps, or structural), roof geometry (hip vs. gable), and secondary water resistance. A favorable report typically costs $75–$150 and can save you $500–$2,000+ per year on homeowners insurance.
      </>
    )
  },
  {
    category: 'Wind Mitigation & Insurance Savings',
    question: 'How much can I save on insurance with a new roof?',
    answer: (
      <>
        Insurance savings from a new HVHZ-compliant roof vary by carrier and policy, but homeowners commonly report annual premium reductions of $800–$2,500. The biggest savings come from documented features including FBC-equivalent or newer roof covering, sealed roof deck (secondary water barrier), hurricane clips or continuous straps at roof-to-wall connections, and hip roof geometry. Combined, these features can reduce your wind premium by 20–60%. A <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500">professional inspection</Link> after installation documents these savings for your insurer.
      </>
    )
  },

  // Roof Leak & Emergency
  {
    category: 'Roof Leaks & Emergency Repair',
    question: 'My roof is leaking during a storm—what should I do right now?',
    answer: (
      <>
        First, protect your belongings by moving valuables and placing containers under active drips. Do not attempt to climb onto a wet roof during a storm. Document the leak location and any visible water damage with photos and video for insurance purposes. Once the storm passes, call a <Link to="/roof-repair/" className="text-red-600 hover:text-red-500">licensed roofing contractor</Link> for emergency tarping and assessment. Most reputable roofers offer emergency response within 24–48 hours of major storm events. Your homeowners insurance typically covers emergency mitigation costs like temporary tarping.
      </>
    )
  },
  {
    category: 'Roof Leaks & Emergency Repair',
    question: 'Can a roof leak be repaired without replacing the whole roof?',
    answer: (
      <>
        Yes, many leaks can be repaired without a full replacement—especially if the roof is relatively young and the damage is localized. Common repairable issues include failed flashing around vents or skylights, cracked or displaced individual tiles, damaged shingles in a small area, and deteriorated pipe boot seals. However, if your roof has multiple leak points, is past its expected lifespan, or shows widespread deterioration, <Link to="/roof-replacement-process/" className="text-red-600 hover:text-red-500">replacement</Link> is often the more cost-effective long-term solution. A thorough <Link to="/roof-inspection/" className="text-red-600 hover:text-red-500">roof inspection</Link> determines the right approach.
      </>
    )
  },

  // HOA & Permitting Specifics
  {
    category: 'Permits, Engineering, and Building Code',
    question: 'Does my HOA need to approve my roof replacement?',
    answer: (
      <>
        Most South Florida HOAs require architectural review board approval before roof work begins. This typically covers material type, color selection, and profile style. Submit your request early—HOA approval can take 2–6 weeks depending on meeting schedules. Your contractor should be able to provide material samples and product specifications for the HOA submission. Note that HOA approval does not replace building permits; you need both. Some HOAs have pre-approved material lists that can speed up the process.
      </>
    )
  },

  // Service Area Questions
  {
    category: 'Service Areas',
    question: 'What areas do you serve?',
    answer: (
      <>
        We serve all of Broward County and Palm Beach County including <Link to="/locations/fort-lauderdale/" className="text-red-600 hover:text-red-500">Fort Lauderdale</Link>, <Link to="/locations/pompano-beach/" className="text-red-600 hover:text-red-500">Pompano Beach</Link>, <Link to="/locations/hollywood/" className="text-red-600 hover:text-red-500">Hollywood</Link>, <Link to="/locations/coral-springs/" className="text-red-600 hover:text-red-500">Coral Springs</Link>, <Link to="/locations/deerfield-beach/" className="text-red-600 hover:text-red-500">Deerfield Beach</Link>, <Link to="/locations/boca-raton/" className="text-red-600 hover:text-red-500">Boca Raton</Link>, <Link to="/locations/west-palm-beach/" className="text-red-600 hover:text-red-500">West Palm Beach</Link>, and surrounding communities. Contact us to confirm service availability for your specific location.
      </>
    )
  },
  {
    category: 'Service Areas',
    question: 'Do you work in Miami-Dade County?',
    answer: (
      <>
        Our primary service area covers Broward County and Palm Beach County, where we're headquartered in <Link to="/locations/deerfield-beach/" className="text-red-600 hover:text-red-500">Deerfield Beach</Link>. We do not currently service Miami-Dade County. For projects in Broward or Palm Beach, call <a href="tel:+17542275605" className="text-red-600 hover:text-red-500">(754) 227-5605</a> for a free estimate.
      </>
    )
  }
];

export default function FrequentlyAskedQuestionsPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1]));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category)))];

  const filteredFAQs = selectedCategory === 'All'
    ? faqData
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageUrl = 'https://allphaseconstructionfl.com/frequently-asked-questions';

  // Local Business Schema with AggregateRating
  const localBusinessSchema = generateLocalBusinessSchema(pageUrl);

  // Plain-text answers for FAQ schema (Google requires text, not JSX)
  const faqPlainAnswers: Record<string, string> = {
    'Do I need a roof repair or a full replacement?': 'The decision depends on the age of your roof, the number of active leaks, visible signs of lifted shingles or tiles, and whether you have needed repeated repairs. In the HVHZ, older roofs may not meet current uplift code requirements even if not actively leaking.',
    'How long does a roof replacement take in South Florida?': 'For a typical 2,000–2,500 sq ft home, installation takes 1–3 working days. The full process from contract to final inspection typically spans 2–4 weeks due to permits and engineering.',
    'How much does a new roof cost in the HVHZ?': 'For a 1,800–2,200 sq ft home: $15,000–$25,000 for asphalt shingles, $25,000–$45,000 for tile, $30,000–$50,000+ for standing seam metal. Costs include permits, engineering, and HVHZ-compliant installation.',
    'Will my homeowners insurance pay for my new roof?': 'Insurance typically covers sudden storm or wind damage but excludes age-related wear. Document damage with photos immediately and get a professional inspection to support your claim.',
    'Are there special hurricane requirements for roofs here?': 'Yes. HVHZ requires roofing systems designed for 170+ mph winds. All materials need Miami-Dade Product Approval, with enhanced fastener patterns, secondary water barriers, and engineered roof-to-wall connections.',
    'How long should my roof last in South Florida\'s climate?': 'Asphalt shingles last 15–22 years (vs. 30 elsewhere), concrete tile 30–50 years, clay tile 75+ years, and metal roofs 40–60+ years. UV, salt air, and hurricane stress accelerate aging.',
    'What are the most common roofing materials in South Florida?': 'Architectural asphalt shingles, concrete and clay tiles, standing seam metal roofs, and flat roof systems (TPO, modified bitumen) are the most common in South Florida.',
    'Will a metal roof make my house hotter?': 'No. Modern metal roofs with reflective finishes run cooler than dark asphalt shingles. CRRC-rated metal roofing can reduce cooling costs by 20–30%.',
    'Does roof color matter in our climate?': 'Yes. Lighter colors reduce attic temperatures significantly. A white metal roof can keep your roof deck 50–70°F cooler than a dark shingle roof on summer afternoons.',
    'When does roof repair make sense?': 'Repair is appropriate when damage is localized, your roof is under 10–12 years for shingles or 20 years for tile, and the underlying deck and fastening system remain sound.',
    'When should you consider roof replacement?': 'Consider replacement for widespread granule loss, multiple chronic leaks, visible uplift damage across multiple slopes, roofs older than insurer thresholds, or roofs installed before 2002 code changes.',
    'How does code affect roof repair vs. replacement?': 'In HVHZ, once repairs exceed about 25% of roof area, building codes may require bringing the entire system up to current standards, turning a repair into a full replacement.',
    'What does "High Velocity Hurricane Zone" mean?': 'The HVHZ designates Miami-Dade and Broward counties for extreme hurricane exposure, requiring wind speeds of 170–200 mph design capacity and mandatory high-velocity wind tunnel testing for all products.',
    'Do I really need a permit for my roof?': 'Yes, for full replacements and most structural repairs. Permits ensure independent verification that your installation meets local building codes for hurricane performance.',
    'Why is engineering sometimes required for a roof?': 'HVHZ projects often need a Florida-licensed engineer to calculate uplift forces and specify fastening schedules, especially for tile and metal roofs where wind pressures can exceed 150–180 psf.',
    'How often should I have my roof inspected?': 'At least once annually before hurricane season, plus after any named storm or significant wind event. Photo-documented inspections support future insurance claims.',
    'What are common signs of roof damage in South Florida?': 'Watch for lifted or curled shingles, cracked tiles, loose ridge caps, deteriorated flashing, water stains on ceilings, daylight in the attic, clogged valleys, and algae or mold growth.',
    'How can I prepare my roof for hurricane season?': 'Trim overhanging branches, clear gutters and drains, inspect hurricane straps in the attic, and schedule needed repairs by late June before the August–October peak season.',
    'What factors influence roof pricing in South Florida?': 'Roof size and complexity, pitch, stories, material choice, tear-off complexity, deck condition, permit fees, engineering requirements, and hurricane upgrades all affect cost.',
    'When does homeowners insurance pay for a roof?': 'Insurers cover wind, hail, or impact damage from storms. Coverage excludes age-related wear and poor maintenance. Document damage immediately with photos after any storm.',
    'Can a new roof lower my insurance premium?': 'Yes. A new HVHZ-compliant roof with favorable wind mitigation features can reduce premiums by $500–$2,000+ annually through documented credits for roof covering, nailing pattern, secondary water barrier, and connections.',
    'What financing options are available?': 'Options include home improvement installment loans (3–10+ years), home equity loans or lines of credit, and contractor financing partnerships with home improvement lenders.',
    'What licenses should a South Florida roofer have?': 'Florida requires a State Certified Roofing Contractor license (CCC) or Registered Roofing Contractor license. Verify through DBPR license lookup before signing any contract.',
    'What questions should I ask a roofer in Miami-Dade/Broward?': 'Ask about HVHZ experience, Miami-Dade NOA familiarity, engineering and permit handling, recent local project references, hurricane-specific proposal details, and inspection correction processes.',
    'How long do shingle roofs really last in South Florida?': 'Architectural asphalt shingles typically last 15–22 years in South Florida despite 25–30 year manufacturer claims, due to intense UV, 150°F+ surface temperatures, and adhesive bond breakdown.',
    'What\'s different about 130-mph and higher wind-rated shingles?': 'Class H shingles have enhanced adhesive strips and reinforced nailing zones, tested for 130+ mph winds. In HVHZ, they must be installed with 6 nails per shingle instead of 4.',
    'What\'s the difference between concrete and clay tiles?': 'Concrete tiles last 30–50 years at lower cost. Clay tiles cost more but can exceed 75 years with superior color retention since color runs through the material rather than surface-applied.',
    'Why do tile roofs need special engineering?': 'Tile systems face unique uplift challenges in HVHZ. Each tile must resist forces exceeding 150 psf while the 8–10 lbs/sq ft weight stresses the structure, requiring engineered fastener schedules.',
    'How do metal roofs perform in hurricanes?': 'Properly engineered metal roofs show dramatically lower failure rates than other materials. Hurricane Irma data confirmed their superior performance when correctly installed with adequate clip spacing.',
    'What about noise and coastal corrosion on metal roofs?': 'Rain noise is mitigated by proper insulation and sheathing. For coastal properties, specify aluminum or galvanized steel with salt-air-rated coatings and inspect fasteners every few years.',
    'What systems work for flat roofs in Florida?': 'TPO, PVC, and modified bitumen are the most common. TPO dominates commercial roofing due to welded seams, reflective surface, and competitive pricing.',
    'How long do flat roofs last in South Florida?': 'With proper maintenance, flat roof systems last 15–25+ years. The biggest enemies are ponding water, UV degradation, and debris blocking drains.',
    'What is a wind mitigation inspection and why do I need one?': 'A wind mitigation inspection (OIR-B1-1802 form) documents hurricane-resistant features of your roof. Florida law requires insurers to offer discounts for qualifying features, typically saving $500–$2,000+ per year.',
    'How much can I save on insurance with a new roof?': 'Homeowners commonly save $800–$2,500 annually with HVHZ-compliant roofs. Savings come from documented features including FBC-equivalent covering, sealed deck, hurricane straps, and hip geometry.',
    'My roof is leaking during a storm—what should I do right now?': 'Protect belongings, place containers under drips, do not climb on a wet roof. Document with photos. Call a licensed roofer for emergency tarping after the storm passes. Insurance covers emergency mitigation.',
    'Can a roof leak be repaired without replacing the whole roof?': 'Yes, if the roof is young and damage is localized. Repairable issues include failed flashing, cracked tiles, small shingle areas, and pipe boot seals. Multiple leak points may indicate replacement is needed.',
    'Does my HOA need to approve my roof replacement?': 'Most South Florida HOAs require architectural review board approval covering material type, color, and profile. Allow 2–6 weeks for HOA approval. Note that HOA approval does not replace building permits.',
    'What areas do you serve?': 'We serve all of Broward County and Palm Beach County including Fort Lauderdale, Pompano Beach, Hollywood, Coral Springs, Deerfield Beach, Boca Raton, West Palm Beach, and surrounding communities.',
    'Do you work in Miami-Dade County?': 'Our primary service area covers Broward County and Palm Beach County, headquartered in Deerfield Beach. We do not currently service Miami-Dade County.'
  };

  // Generate FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faqPlainAnswers[faq.question] || faq.question
      }
    }))
  };

  const combinedSchemas = [localBusinessSchema, faqSchema];

  return (
    <>
      <Helmet>
        <title>Roofing FAQ South Florida | HVHZ Roofing Questions Answered | All Phase Construction USA</title>
        <meta name="description" content="Expert answers to South Florida roofing FAQs. HVHZ requirements, roof replacement costs, permits, insurance, hurricane prep, and contractor selection. Broward & Palm Beach County." />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(combinedSchemas)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Roofing FAQs</span>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Roofing Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              HVHZ – South Florida Guide
            </p>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              If you own a home or building in Miami-Dade, Broward, or Palm Beach County, your roof faces challenges that most of the country never has to consider. This practical FAQ page addresses the roofing questions that matter most to property owners living in Florida's High Velocity Hurricane Zone—a designation that fundamentally changes how roofs must be designed, installed, and maintained.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-16">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-xs text-red-600 font-semibold uppercase tracking-wide mb-2">
                      {faq.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-6 h-6 text-red-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {openItems.has(index) && (
                  <div className="px-6 pb-5">
                    <div className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Resources */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/roof-replacement-process/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Roof Replacement Process
                  </h3>
                  <p className="text-sm text-gray-400">Step-by-step guide</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
              <Link
                to="/pricing-guide/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Pricing Guide
                  </h3>
                  <p className="text-sm text-gray-400">Detailed cost breakdown</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
              <Link
                to="/roof-inspection/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Free Roof Inspection
                  </h3>
                  <p className="text-sm text-gray-400">Professional assessment</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
              <Link
                to="/how-to-hire-roofing-contractor/"
                className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-red-600 transition-colors">
                    Hiring Guide
                  </h3>
                  <p className="text-sm text-gray-400">Choosing the right contractor</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Still Have Questions? Get a Free Roof Assessment
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every South Florida home is different. Get honest, expert answers specific to your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17542275605"
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 inline-block"
              >
                Call (754) 227-5605
              </a>
              <Link
                to="/contact/"
                className="px-8 py-4 bg-zinc-700 text-white rounded-lg font-semibold hover:bg-zinc-600 transition-all duration-300 inline-block"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
