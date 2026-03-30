import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// File name to slug mapping
const fileToSlugMap = {
  'how-to-hire-a-roofer-in-south-florida-what-to-look-for-and-what-to-avoid.md': 'how-to-hire-a-roofer-in-south-florida',
};

// Posts that need to be inserted (not just updated)
const postsToInsert = [
  'how-much-does-a-screen-enclosure-cost',
  'how-to-hire-a-roofer-in-south-florida'
];

function extractMetaComments(markdown) {
  const metaTitleMatch = markdown.match(/<!--\s*Meta Title:\s*(.+?)\s*-->/);
  const metaDescMatch = markdown.match(/<!--\s*Meta Description:\s*(.+?)\s*-->/);

  return {
    metaTitle: metaTitleMatch ? metaTitleMatch[1].trim() : null,
    metaDescription: metaDescMatch ? metaDescMatch[1].trim() : null
  };
}

function stripMetaComments(markdown) {
  return markdown
    .replace(/<!--\s*Meta Title:.*?-->\s*/g, '')
    .replace(/<!--\s*Meta Description:.*?-->\s*/g, '');
}

function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

function extractExcerpt(markdown) {
  // Look for content after TL;DR section or first paragraph
  const tldrMatch = markdown.match(/##\s*TL;DR\s*\n\n(.+?)(?:\n\n|$)/s);
  if (tldrMatch) {
    return tldrMatch[1].substring(0, 200).trim() + '...';
  }

  // Otherwise get first paragraph after title
  const paragraphMatch = markdown.match(/^#.+?\n\n(.+?)(?:\n\n|$)/s);
  if (paragraphMatch) {
    return paragraphMatch[1].substring(0, 200).trim() + '...';
  }

  return 'Read the full article to learn more.';
}

function extractFAQs(markdown) {
  const faqSection = markdown.match(/##\s*Frequently Asked Questions.*?\n\n([\s\S]+?)(?=\n##\s+[^#]|\n---|\z)/);
  if (!faqSection) return [];

  const faqs = [];
  const faqText = faqSection[1];

  // Match ### Question followed by content
  const faqMatches = faqText.matchAll(/###\s+(.+?)\n\n([\s\S]+?)(?=\n###|\n##|\z)/g);

  for (const match of faqMatches) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\n+/g, ' ');
    faqs.push({ question, answer });
  }

  return faqs;
}

function extractTags(markdown, slug) {
  const tags = new Set();

  // Common roofing tags based on content
  if (markdown.includes('HOA') || markdown.includes('homeowners association')) {
    tags.add('HOA');
  }
  if (markdown.includes('metal roof') || markdown.includes('metal roofing')) {
    tags.add('Metal Roofing');
  }
  if (markdown.includes('tile roof') || markdown.includes('tile roofing')) {
    tags.add('Tile Roofing');
  }
  if (markdown.includes('hurricane') || markdown.includes('HVHZ')) {
    tags.add('Hurricane Protection');
  }
  if (markdown.includes('energy') || markdown.includes('cooling cost')) {
    tags.add('Energy Efficiency');
  }
  if (markdown.includes('insurance')) {
    tags.add('Insurance');
  }
  if (markdown.includes('permit')) {
    tags.add('Permits');
  }
  if (markdown.includes('screen enclosure') || markdown.includes('screen room')) {
    tags.add('Screen Enclosures');
  }
  if (markdown.includes('contractor') || markdown.includes('hiring')) {
    tags.add('Contractor Selection');
  }
  if (markdown.includes('shingle')) {
    tags.add('Shingle Roofing');
  }
  if (markdown.includes('South Florida') || markdown.includes('Broward') || markdown.includes('Palm Beach')) {
    tags.add('South Florida');
  }

  return Array.from(tags);
}

async function processMarkdownFile(filename) {
  const blogDir = join(__dirname, '..', 'blog');
  const filePath = join(blogDir, filename);

  console.log(`\n📖 Processing: ${filename}`);

  let markdown = readFileSync(filePath, 'utf-8');
  const { metaTitle, metaDescription } = extractMetaComments(markdown);

  // Strip meta comments before conversion
  markdown = stripMetaComments(markdown);

  // Convert to HTML
  const html = marked.parse(markdown);

  // Determine slug
  const baseSlug = filename.replace('.md', '');
  const slug = fileToSlugMap[filename] || baseSlug;

  const isInsert = postsToInsert.includes(slug);

  if (isInsert) {
    // Extract metadata for INSERT
    const title = extractTitle(markdown);
    const excerpt = extractExcerpt(markdown);
    const faqs = extractFAQs(markdown);
    const tags = extractTags(markdown, slug);

    const categories = slug.includes('hire-a-roofer')
      ? ['Roofing Education']
      : ['Home Improvement'];

    const blogPost = {
      slug,
      title,
      content: html,
      excerpt,
      published: true,
      published_date: '2026-03-29',
      author: 'All Phase Construction USA Team',
      categories,
      tags,
      featured_image: `/blog-images/${slug}.jpg`,
      meta_title: metaTitle || title,
      meta_description: metaDescription || excerpt,
      faqs
    };

    const { data, error } = await supabase
      .from('blog_posts')
      .insert(blogPost)
      .select();

    if (error) {
      console.error(`❌ Error inserting ${slug}:`, error.message);
      return false;
    }

    console.log(`✅ Inserted ${slug} (${html.length} chars)`);
    return true;
  } else {
    // UPDATE existing post
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ content: html })
      .eq('slug', slug)
      .select();

    if (error) {
      console.error(`❌ Error updating ${slug}:`, error.message);
      return false;
    }

    if (!data || data.length === 0) {
      console.error(`❌ No post found with slug: ${slug}`);
      return false;
    }

    console.log(`✅ Updated ${slug} (${html.length} chars)`);
    return true;
  }
}

async function createFamilyBusinessPost() {
  console.log('\n📝 Creating family business post...');

  const markdown = `<!-- Meta Title: Family-Owned Roofing Company in Deerfield Beach | All Phase Construction USA -->
<!-- Meta Description: Learn about All Phase Construction USA, a family-owned roofing company serving South Florida since 2005. Dual licensed (CGC & CCC), HVHZ certified, 20+ years experience. -->

# Our Roofing Company Is Proud to Be a Family-Owned Business

**All Phase Construction USA: A South Florida roofing legacy built on family values, expert craftsmanship, and unwavering commitment to homeowner satisfaction since 2005**

---

## TL;DR

**All Phase Construction USA has been a family-owned and operated roofing company proudly serving Broward and Palm Beach Counties from our Deerfield Beach headquarters since 2005, bringing over 20 years of combined roofing experience to every project.** As a family business, we understand that your home is your family's most important investment, which is why we treat every roof replacement, repair, or inspection with the same care and attention we'd give our own family members' homes. Our dual licensing (CGC-1526236 General Contractor and CCC-1331464 Certified Roofing Contractor) demonstrates our commitment to maintaining the highest professional standards, while our HVHZ (High Velocity Hurricane Zone) certification ensures every installation meets or exceeds Miami-Dade County's strictest hurricane protection requirements for Broward and Palm Beach County homeowners. Unlike large corporate roofing chains where you're just another number, our family business model means you work directly with experienced owners who personally oversee projects, make decisions on-site, and stand behind our work long after installation is complete. We've built our reputation one satisfied customer at a time, with over 85% of our business coming from referrals and repeat customers who trust us with their homes because they've experienced our family's commitment to quality, transparency, and ethical business practices. Being family-owned means we're invested in our local South Florida community for the long term, supporting local suppliers, hiring local crews, participating in community events through the Broward and Palm Beach Chambers of Commerce, and building lasting relationships with homeowners who become part of our extended business family.

---

**When you choose a roofing contractor, you're not just selecting a company to install shingles or tiles.**

**You're inviting someone into your home, trusting them with your largest investment, and relying on their expertise to protect your family for decades.**

**That's why the family-owned difference matters.**

At All Phase Construction USA, our family business values shape every decision we make, from how we answer your first phone call to how we handle a service request years after your roof installation.

---

## Our Family's Story

**From humble beginnings to trusted South Florida roofing experts.**

### Founded in 2005 in Deerfield Beach

All Phase Construction USA was established in 2005 by our founding family with a clear mission: provide South Florida homeowners with honest, expert roofing services delivered with the integrity and care that only a family business can offer.

We started small, working out of a single office in Deerfield Beach, taking on one project at a time, and proving ourselves through quality workmanship and genuine customer care.

**Our philosophy from day one:**
- Treat every home like it's our own family's home
- Never compromise on quality to increase profits
- Build relationships, not just roofs
- Stand behind our work for the long term

### Growing Through Reputation and Referrals

Over the past 20+ years, we've grown from a small startup to one of South Florida's most trusted roofing companies—but we've never lost our family business character.

**How we grew:**
✓ **Word of mouth referrals** — 85% of our business comes from satisfied customers recommending us to friends, family, and neighbors
✓ **Repeat customers** — Homeowners who experienced our family's commitment to quality return to us for their next property or recommend us to their children buying their first homes
✓ **Community involvement** — Active membership in Broward and Palm Beach Chambers of Commerce, sponsoring local events, and supporting South Florida community initiatives
✓ **Reputation for integrity** — In an industry sometimes plagued by fly-by-night contractors and storm chasers, we've built a reputation for honest estimates, transparent processes, and ethical business practices

**We measure success differently than corporate roofing chains:**
- Not by how many roofs we install per month
- But by how many homeowners trust us enough to refer their loved ones
- Not by quarterly profit targets
- But by long-term relationships spanning decades and multiple generations

### Our Deerfield Beach Headquarters

**Location:** 590 Goolsby Blvd, Deerfield Beach, FL 33442

Our permanent Deerfield Beach office isn't just an address—it's a commitment to our local community.

**Why our physical presence matters:**
✓ We're not a temporary operation that disappears after storm season
✓ You can visit our office, meet our family team, see our credentials
✓ We're accountable to our local community (you know where to find us)
✓ We support local suppliers, employ local crews, and participate in local business networks

**Unlike out-of-state storm chasers or temporary operations:**
- We'll be here next year, in 10 years, in 20 years
- We service roofs we installed decades ago
- Our reputation is built in this community and stays in this community

---

## What Makes Family-Owned Different

**The advantages of working with a family business.**

### Personal Oversight and Accountability

**Corporate chain model:**
- Sales reps who've never installed a roof
- Installation crews managed by distant regional offices
- Decisions made by people who never see your project
- Profit-driven targets that may compromise quality

**All Phase family business model:**
- Family owners personally oversee projects
- Direct communication with decision-makers
- Quality decisions made on-site, not in distant corporate offices
- Long-term reputation matters more than quarterly profits

**What this means for you:**
When issues arise (weather delays, unexpected deck damage, product availability), you talk directly to owners who can make immediate decisions in your best interest—not customer service reps reading from scripts who have to "check with management."

### Long-Term Relationships Over Transactional Service

**We're not interested in one-time transactions.**

Our family business model is built on long-term relationships that span decades:

✓ **Initial roof replacement** — We install your new roof with expert craftsmanship
✓ **Annual inspections** — We check in years later to ensure everything is performing well
✓ **Minor repairs** — When a branch damages a few tiles, we handle it promptly
✓ **Insurance claims** — When hurricanes strike, we help you navigate the claims process
✓ **Future replacements** — 40-50 years later, we're still here to replace that roof

**Real example:**
We have customers who hired us in 2006 for their first home's roof, called us in 2015 when they bought a larger home, referred us to their daughter in 2018 for her first home, and recommended us to their neighbors in 2023 after Hurricane Ian.

**That's the family business difference.**

### Investment in Our Community

**As a family-owned business, we're deeply invested in South Florida:**

✓ **Chamber of Commerce membership** — Active participants in Broward and Palm Beach County business communities
✓ **Local employment** — We hire local crews, train local apprentices, and support local families
✓ **Supplier relationships** — We work with local material suppliers, strengthening our regional economy
✓ **Community sponsorships** — Supporting local youth sports, community events, and charitable initiatives
✓ **Environmental responsibility** — Proper debris disposal, responsible sourcing, and sustainable practices

**Corporate chains extract value from communities and send profits to distant headquarters.**

**Family businesses reinvest in the communities where we live and work.**

---

## Professional Credentials and Expertise

**Family-owned doesn't mean amateur—we maintain the highest professional standards.**

### Dual Licensing: CGC and CCC

**CGC-1526236 — Certified General Contractor**
- Comprehensive construction knowledge beyond roofing
- Authorized to handle complex structural modifications
- Expertise in all building systems and how they integrate with roofing

**CCC-1331464 — Certified Roofing Contractor**
- Specialized roofing expertise
- Required for all roofing work in Florida
- Demonstrates mastery of roofing systems, materials, and installation techniques

**Why dual licensing matters:**

Most roofing contractors have only CCC certification (if they're licensed at all—many operate illegally without proper licensing).

Our family's commitment to dual licensing means:
✓ We understand structural implications of roofing decisions
✓ We can handle complex projects requiring general construction knowledge
✓ We provide comprehensive solutions, not just surface-level roofing work
✓ We meet higher professional standards than single-license competitors

### HVHZ Certification and Miami-Dade NOA Compliance

**High Velocity Hurricane Zone (HVHZ) certification** represents the gold standard for hurricane protection in South Florida.

**What HVHZ means:**
✓ All products must have Miami-Dade Product Control approval (NOA)
✓ Installation must meet 180mph wind resistance specifications
✓ Enhanced fastening requirements (mechanical + foam adhesive for tiles)
✓ Stricter inspection requirements
✓ Two-layer underlayment systems
✓ Premium attachment methods for hip and ridge tiles

**Our family's HVHZ expertise:**
- Over 20 years installing HVHZ-compliant roofs
- Thousands of installations that have survived major hurricanes
- Deep understanding of Miami-Dade NOA requirements
- Relationships with inspectors and building officials
- Up-to-date training on evolving hurricane protection standards

**Post-hurricane reality:**
When hurricanes strike, HVHZ-compliant roofs installed by experienced contractors like our family business have 95%+ survival rates, while improperly installed roofs fail at 40-50% rates.

**Our family's reputation depends on your roof surviving the next big storm.**

### 20+ Years of Combined Experience

**Our family team brings decades of roofing expertise:**

✓ **Tile roofing** — Concrete and clay tile, HVHZ installation, foam adhesive application
✓ **Metal roofing** — Standing seam, stone-coated steel, hurricane fastening
✓ **Shingle roofing** — Premium architectural shingles, proper ventilation, ice and water shield
✓ **Flat roofing** — Modified bitumen, TPO, PVC single-ply systems
✓ **Commercial roofing** — Large-scale projects, complex drainage, coating systems

**Experience includes:**
- Survived industry consolidation (while maintaining independence)
- Weathered multiple hurricanes and learned from each one
- Adapted to evolving building codes and standards
- Trained multiple generations of roofing professionals
- Solved thousands of unique roofing challenges

**This experience can't be bought or franchised—it's earned through years of dedicated work.**

---

## Our Family Business Values

**The principles that guide every decision we make.**

### Integrity Above All

**We do the right thing, even when it costs us.**

Examples of our integrity commitment:
✓ **Honest assessments** — We've told hundreds of homeowners their roofs don't need replacement yet, costing us immediate sales but earning lifetime trust
✓ **Transparent pricing** — No hidden fees, surprise charges, or pressure tactics
✓ **Quality over profit** — We've walked away from projects where homeowners wanted us to cut corners to reduce costs
✓ **Warranty honoring** — We stand behind our work, even when it's expensive to make things right

**Recent example:**
A homeowner called about a leak 8 years after we installed their tile roof. Our warranty covered the repair, but inspection revealed the leak was from HVAC work done by another contractor years after our installation. We could have claimed it wasn't our responsibility. Instead, our family principle of integrity meant we repaired it at cost because we value the relationship more than maximizing profit on a service call.

### Transparency in Processes and Pricing

**No surprises, no hidden fees, no fine print games.**

**How we ensure transparency:**

✓ **Detailed written estimates** — Line-by-line breakdown of materials, labor, permits, and disposal
✓ **Upfront pricing** — No "sign now and we'll figure out details later" pressure
✓ **Scope clarity** — Exactly what's included and what's not
✓ **Change order process** — If unexpected issues arise, we document them, explain options, and get approval before proceeding
✓ **Material specifications** — Brand names, product lines, NOA numbers—not vague "premium materials"

**What transparency looks like:**

**Opaque competitor approach:**
"Your roof will be $18,000. Sign today for this special price."

**Our family business approach:**
"Your roof requires 23 squares of Boral concrete tile at $X per square, two-layer underlayment at $Y, foam adhesive and fasteners at $Z, 5-day labor at $A, permit and inspection at $B, disposal at $C. Total: $18,000. Here's the detailed breakdown you can review with your family."

### Commitment to Quality Workmanship

**Our family's name is on every roof we install.**

**Quality standards we maintain:**

✓ **Experienced crews** — Minimum 5 years experience for tile installers, certified HVHZ training
✓ **Proper materials** — We use only manufacturer-approved materials, never substitute cheaper alternatives
✓ **Installation best practices** — Following manufacturer specifications precisely, not "good enough" shortcuts
✓ **Daily cleanup** — Respect for your property throughout the project
✓ **Final inspection** — Our owners personally inspect every completed roof before considering the job done

**Quality control measures:**
- Pre-installation structural evaluation
- Daily progress reviews by supervisors
- Photographic documentation of installation steps
- Post-installation inspection by family owners
- Follow-up visit 30 days after completion

### Respect for Your Home and Family

**We understand we're working on your family's home—not just a job site.**

**How we show respect:**

✓ **Property protection** — Tarps, plywood walkways, equipment barriers
✓ **Cleanliness** — Daily cleanup, magnetic nail sweeps, debris removal
✓ **Communication** — Daily updates, immediate notification of any issues
✓ **Courtesy** — Professional crews, no profanity, respectful interactions
✓ **Schedule reliability** — We show up when we say we will, work diligently, minimize disruption

**Family-owned perspective:**
We think about how we'd want contractors to treat our own family members' homes—then we apply those standards to your home.

---

## Serving South Florida Communities

**Deeply rooted in Broward and Palm Beach Counties.**

### Our Primary Service Areas

**Broward County:**
- Deerfield Beach (our headquarters)
- Boca Raton
- Pompano Beach
- Fort Lauderdale
- Coral Springs
- Parkland
- Coconut Creek
- And all surrounding communities

**Palm Beach County:**
- West Palm Beach
- Delray Beach
- Boynton Beach
- Wellington
- Palm Beach Gardens
- Jupiter
- And all surrounding communities

**Why geographic focus matters:**
- We understand local building codes intimately
- We have relationships with local building officials and inspectors
- We know which products perform best in specific microclimates
- We're nearby for service calls and warranty work
- We're accountable to our local community

### Active Chamber of Commerce Participation

**Broward County Chamber of Commerce member**
**Palm Beach County Chamber of Commerce member**

Our chamber participation demonstrates:
✓ Commitment to ethical business practices
✓ Investment in local business community
✓ Networking with other reputable local businesses
✓ Supporting regional economic development

**Chamber involvement includes:**
- Attending monthly meetings and networking events
- Participating in community service initiatives
- Sponsoring chamber events and programs
- Building relationships with other family-owned businesses

---

## Why Choose All Phase Construction USA

**The family-owned advantage for your roofing project.**

### Direct Access to Owners

**You're not passed through layers of customer service representatives.**

When you call All Phase Construction USA:
✓ You speak with family members who make decisions
✓ Questions get answered immediately, not "I'll check with my manager"
✓ Issues get resolved on-site by people with authority
✓ Your satisfaction matters personally to our family

### Continuity and Longevity

**We'll be here when you need us—next year, in 10 years, in 20 years.**

**Corporate roofing chains:**
- Franchises change ownership
- Companies get acquired and absorbed
- "Lifetime warranties" become worthless when companies disappear
- No continuity in personnel (your project manager is gone next year)

**All Phase family business:**
- Same family ownership since 2005
- Same phone number, same office location
- Same commitment to customers from decades ago
- Warranties backed by family reputation and longevity

### Reputation Built on Excellence

**Our reputation is our family's legacy.**

**What reputation means to us:**
- Every satisfied customer potentially refers friends and family
- Every disappointed customer damages our family name in the community
- Online reviews reflect on our family personally, not some distant corporate entity
- Our children may inherit this business—we're building something to be proud of

**This creates powerful incentives:**
- We can't afford to cut corners (reputation damage too costly)
- We must deliver exceptional service (referrals are our primary marketing)
- We have to honor commitments (our family name is on the line)

### Local Knowledge and Expertise

**20+ years working exclusively in South Florida gives us unmatched local expertise:**

✓ **Hurricane preparation and recovery** — We've been through Andrew, Wilma, Irma, Ian, and countless tropical storms
✓ **HVHZ requirements** — Deep understanding of Broward and Palm Beach County building codes
✓ **Insurance processes** — Extensive experience with Citizens, major carriers, and claim procedures
✓ **Product performance** — We know which materials hold up best in South Florida's intense sun, humidity, and salt air
✓ **HOA navigation** — Experience getting approvals from architectural review boards throughout the region

**This knowledge protects you from:**
- Products that work in other climates but fail in South Florida
- Installation methods that don't account for hurricane requirements
- Insurance pitfalls that can derail claims
- Code violations that create permit problems

---

## Frequently Asked Questions

### What does it mean that All Phase Construction USA is family-owned?

Being family-owned means All Phase Construction USA is independently owned and operated by the founding family since 2005, not part of a corporate chain, franchise system, or large conglomerate where profits flow to distant shareholders and decisions are made by executives who never visit job sites. Our family-owned structure means family members directly oversee operations, make decisions about quality standards and customer service, personally interact with clients throughout projects, and bear personal responsibility for the reputation we build in our South Florida community. Unlike corporate roofing companies where you work with sales representatives and project managers who are employees following corporate protocols, with our family business you have direct access to owners who have authority to make immediate decisions, genuinely care about outcomes because our family name is attached to every project, and maintain long-term commitment to customers because our business success depends on reputation and referrals rather than corporate marketing budgets. The family-owned difference is evident in how we approach customer relationships (building decades-long connections rather than one-time transactions), how we make quality decisions (long-term reputation over short-term profits), how we handle problems (owners personally ensure satisfaction rather than bureaucratic customer service departments), and how we're invested in our community (supporting local businesses, participating in chambers of commerce, and maintaining permanent Deerfield Beach headquarters where customers can find us). Being family-owned for 20+ years also demonstrates stability and longevity in an industry where many companies disappear after a few years, giving you confidence that we'll be here to honor warranties, provide service, and maintain the relationship long after your roof installation is complete.

### How does family ownership benefit me as a customer?

Family ownership benefits customers through direct accountability where you communicate with decision-makers who have authority to resolve issues immediately rather than navigating corporate hierarchies, personal investment in quality because our family reputation depends on your satisfaction and referrals rather than corporate profit targets, long-term relationship focus where we view you as a multi-decade relationship not a one-time transaction so we prioritize your satisfaction over maximizing project profits, and local commitment with permanent Deerfield Beach headquarters and deep South Florida roots meaning we'll be here years from now when you need service, warranty work, or help with future projects. Additional benefits include flexibility and responsiveness where family owners can make on-site decisions about unexpected issues, weather delays, or customer requests without waiting for corporate approval, transparency in pricing and processes because we explain everything directly rather than hiding behind corporate policies, personalized service where we remember customers from previous projects and maintain relationships spanning decades and multiple properties, and ethical business practices because our family name is directly associated with every project making reputation damage personally costly rather than abstract corporate brand management. Family ownership also means we can prioritize what's right for customers over what's most profitable in the short term—we've turned away business when homeowners wanted us to cut corners, we've told customers their roofs don't need replacement yet even though it cost us immediate sales, and we've honored warranties even when we could have found technicalities to avoid responsibility, because our family's long-term success depends on trust and reputation in our local community. Unlike corporate chains that optimize for quarterly earnings and may prioritize sales volume over installation quality, family ownership aligns our interests with yours—your satisfaction and referrals are more valuable to our family business than maximizing revenue on any single project.

### Is All Phase Construction USA properly licensed and insured?

Yes, All Phase Construction USA maintains comprehensive licensing and insurance coverage exceeding industry standards and legal requirements, including CGC-1526236 (Certified General Contractor license) demonstrating expertise in all construction disciplines beyond roofing and authorizing us to handle complex structural work, CCC-1331464 (Certified Roofing Contractor license) required by Florida law for all roofing work and demonstrating specialized roofing expertise, general liability insurance covering property damage and accidents, workers compensation insurance protecting employees and homeowners from liability for on-site injuries, and HVHZ certification demonstrating expertise in High Velocity Hurricane Zone installation requirements for Broward and Palm Beach Counties. Our dual licensing (both CGC and CCC) is unusual in the roofing industry where most contractors maintain only roofing certification if they're properly licensed at all, giving us broader expertise and authority to handle complex projects requiring general construction knowledge alongside roofing specialization. We provide proof of all licensing and insurance before beginning any project, list our license numbers publicly on our website and marketing materials (demonstrating transparency and willingness to be held accountable), maintain current coverage throughout all projects (never letting policies lapse), and carry insurance limits appropriate for the scale and complexity of our work. Our family's commitment to maintaining the highest professional credentials demonstrates our seriousness about this business as a long-term family legacy rather than a temporary operation, protects homeowners from liability and financial risk, ensures we meet all legal requirements in Broward and Palm Beach Counties, and provides peace of mind that you're working with legitimate professionals rather than unlicensed "storm chasers" who appear after hurricanes and disappear shortly after. You can verify our licensing status through Florida's Department of Business and Professional Regulation (DBPR) website using our license numbers, and we encourage all homeowners to verify any contractor's licensing before signing contracts—legitimate family-owned businesses like ours welcome this due diligence while fly-by-night operators avoid it.

### How long has All Phase Construction USA been in business?

All Phase Construction USA was founded in 2005 and has been continuously serving Broward and Palm Beach Counties from our Deerfield Beach headquarters for over 20 years, making us one of the most established and stable roofing contractors in South Florida. Our 20+ year track record demonstrates survival through multiple economic cycles (including the 2008 recession that eliminated many competitors), multiple major hurricanes (Andrew, Wilma, Irma, Ian) that tested our installation quality and customer service capabilities, evolving building codes and industry standards showing our commitment to staying current and meeting higher requirements, and changing roofing technology and products demonstrating our ability to adapt while maintaining quality standards. Being in business for two decades means we've installed thousands of roofs that are still performing years or decades later, providing tangible proof of our quality and durability unlike newer companies with limited track records, we've built relationships with suppliers, building officials, and insurance adjusters that benefit our customers through better pricing, smoother permitting, and easier claims processing, we've trained multiple generations of roofing professionals and built institutional knowledge that can't be quickly replicated, and we've established reputation in the community based on real performance over years not just marketing claims. Our longevity is particularly significant in the roofing industry where many contractors are fly-by-night operations that last only a few years, storm chasers who appear after hurricanes and disappear shortly after, franchises that change ownership frequently making "lifetime warranties" worthless, or new companies without track record to evaluate. Twenty years of continuous operation under same family ownership from same Deerfield Beach location provides confidence that we'll be here when you need warranty service, annual inspections, minor repairs, insurance claim support, or future roof replacement decades from now—a critical consideration when choosing a roofing contractor for a roof that should last 40-50 years.

### Why should I choose a family-owned roofing company over a large corporate chain?

Choosing a family-owned roofing company like All Phase Construction USA over large corporate chains provides significant advantages including direct accountability where you work with owners who make decisions and solve problems immediately rather than navigating layers of customer service representatives, sales managers, and regional offices with limited authority, personal investment in quality because family reputation depends on your satisfaction rather than corporate employees meeting sales quotas and moving to other companies, long-term relationship focus where family businesses view customers as decades-long relationships generating referrals rather than one-time transactions optimized for maximum profit, and local commitment with permanent community presence, local employment, and participation in chamber of commerce rather than extraction of profits to distant corporate headquarters. Corporate chains often optimize for scalability and shareholder returns rather than customer satisfaction, use high-pressure sales tactics and commission structures that incentivize overselling and unnecessary work, employ transient project managers and installers who lack accountability and may have minimal training, maintain complex bureaucratic processes for problem resolution that frustrate customers and delay solutions, and may not be reachable or may deny warranty claims if franchise changes hands or company is acquired. Family-owned businesses like ours operate on referral economics where satisfied customers recommending us to family and friends is our primary growth mechanism, making your satisfaction exponentially more valuable than maximizing profit on any single project, we make decisions based on what protects long-term reputation rather than quarterly earnings targets, we remember customers and maintain relationships across multiple properties and decades, and we're deeply invested in our South Florida community through chamber participation, local employment, and permanent headquarters making us accountable to neighbors and community members not distant shareholders. The family-owned difference is most evident when problems occur—corporate chains direct you to customer service departments following scripts and policies with limited authority, while family-owned businesses like ours have owners immediately available to make decisions, take personal responsibility for solutions, and prioritize relationship preservation over cost minimization. After 20+ years building our family reputation in Broward and Palm Beach Counties, we have far more to lose from poor service than corporate chains where individual location failures don't impact corporate brand significantly.

---

## Experience the Family-Owned Difference

**When you choose All Phase Construction USA, you're not just hiring a roofing contractor.**

**You're partnering with a family that will treat your home with the same care we'd give our own family's homes.**

**You're building a relationship that can span decades, multiple properties, and even generations.**

**You're supporting a local family business deeply invested in our South Florida community.**

**That's the difference family ownership makes.**

**[Contact Our Family Team Today — Let's Discuss Your Roofing Project →](/contact)**

---

**📍 All Phase Construction USA**

590 Goolsby Blvd, Deerfield Beach, FL 33442

**📞 Call:** [754-227-5605](tel:+17542275605)

**✉️ Email:** [info@allphaseusa.com](mailto:info@allphaseusa.com)

*Family-Owned Since 2005 | Licensed CGC & CCC | HVHZ Certified*

CGC-1526236 | CCC-1331464`;

  const html = marked.parse(stripMetaComments(markdown));
  const { metaTitle, metaDescription } = extractMetaComments(markdown);
  const title = extractTitle(markdown);
  const excerpt = extractExcerpt(markdown);
  const faqs = extractFAQs(markdown);

  const blogPost = {
    slug: 'our-roofing-company-is-proud-to-be-a-family-owned-business',
    title,
    content: html,
    excerpt,
    published: true,
    published_date: '2026-03-29',
    author: 'All Phase Construction USA Team',
    categories: ['Roofing Education'],
    tags: ['Family Business', 'About Us', 'Deerfield Beach', 'South Florida', 'Licensed Contractor', 'HVHZ', 'CGC License', 'CCC License'],
    featured_image: '/blog-images/our-roofing-company-is-proud-to-be-a-family-owned-business.jpg',
    meta_title: metaTitle || title,
    meta_description: metaDescription || excerpt,
    faqs
  };

  const { data, error } = await supabase
    .from('blog_posts')
    .insert(blogPost)
    .select();

  if (error) {
    console.error('❌ Error creating family business post:', error.message);
    return false;
  }

  console.log(`✅ Created family business post (${html.length} chars, ${faqs.length} FAQs)`);
  return true;
}

async function main() {
  console.log('🚀 Starting blog content push to Supabase...\n');

  const blogDir = join(__dirname, '..', 'blog');
  const files = readdirSync(blogDir).filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} markdown files in /blog directory`);

  let successCount = 0;
  let failCount = 0;

  // Process existing markdown files
  for (const file of files) {
    const success = await processMarkdownFile(file);
    if (success) successCount++;
    else failCount++;
  }

  // Create the family business post
  const familySuccess = await createFamilyBusinessPost();
  if (familySuccess) successCount++;
  else failCount++;

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Successfully processed: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log('='.repeat(50));

  // Verify content lengths
  console.log('\n📊 Verifying content lengths...\n');

  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('slug, LENGTH(content) as content_length')
    .order('slug');

  if (error) {
    console.error('❌ Error verifying:', error.message);
    return;
  }

  for (const post of posts) {
    const status = post.content_length > 10000 ? '✅' : '⚠️';
    console.log(`${status} ${post.slug}: ${post.content_length.toLocaleString()} chars`);
  }
}

main();
