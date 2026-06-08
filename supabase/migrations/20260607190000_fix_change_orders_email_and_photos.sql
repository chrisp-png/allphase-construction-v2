/*
  # Fix Blog Post: correct email to leads@ and ensure photos on change-orders post

  - Slug: understanding-roof-change-orders-hidden-wood-damage
  - Supersedes 20260607180000: that revision still carried info@allphaseusa.com.
  - Sets leads@allphaseusa.com in the body, keeps the 4 inline <figure> images
    and the featured_image. Idempotent upsert; published stays true.
*/

INSERT INTO blog_posts (slug, title, featured_image, content, published)
VALUES (
  'understanding-roof-change-orders-hidden-wood-damage',
  'Why Your Roof Change Order Cost More Than You Expected (And Why That''s Actually Good News)',
  '/projects/delray-beach-tile-tear-off-and-deck-inspection-all-phase-usa.webp',
  $BODY$<p><strong>Hidden truss rot, termite damage, and the honest reason your change order came in high — plus how we document every single board so you know exactly what you paid for.</strong></p>

<hr />

<p>If you've recently received a change order in the middle of your roofing project, there's a good chance your first reaction was a little bit of sticker shock. We get it. You budgeted for a new roof, you were ready for that number, and then partway through the job we hand you a bill for work you never saw coming.</p>

<p>That's an uncomfortable moment for any homeowner, and we never take it lightly. So we want to pull the curtain back and explain exactly what a change order is, why it happens, why the price is what it is, and the one thing we do on every job that most roofers don't: we photograph and number every board we replace, so you can see with your own eyes that you only paid for what actually came off your roof.</p>

<p>This isn't a sales pitch. It's the honest story of what's hiding under a South Florida roof.</p>

<hr />

<h2>What a Change Order Actually Is</h2>

<p>A change order is simply a written agreement to do work that wasn't part of the original contract. In roofing, it almost always means one thing: we found damage underneath your old roof that nobody could see until we tore it off.</p>

<p>When we give you the original estimate, we price the work we can see and reasonably predict. We inspect the roof, check for soft spots, and evaluate the age and condition of everything we have access to. But here's the hard truth every honest contractor will tell you: until the old roofing material comes off and we're standing on the bare wood deck, nobody knows for certain what's underneath. Not us, not the inspector, not you.</p>

<p>A change order is what happens when the roof finally shows us what it's been hiding.</p>

<hr />

<h2>"But I Don't Even Have a Leak"</h2>

<p>This is the part that surprises people the most. We hear it all the time: <em>"My ceilings are fine. I've never had a drop of water come through. How can the wood be rotted?"</em></p>

<p>It's a completely fair question, and the answer is one of the most misunderstood things about roofs. <strong>You do not need an active leak to have serious wood damage.</strong> Some of the worst rot we find never produced a single water stain inside the home.</p>

<p>Here's how it happens. The edges of your roof — where the trusses and rafters extend out to the fascia and overhangs — are the most exposed parts of the entire structure. Year after year they take on wind-driven rain, humidity, condensation, and moisture wicking up from the edges. The decay starts at the very ends of the trusses and works its way inward slowly. Because it's happening out at the eaves rather than over your living space, the water never reaches your ceiling. It just quietly eats away at the wood for years.</p>

<p>Add Florida's climate, plus termites and other wood-destroying insects that love soft, moist lumber, and you have the perfect recipe for hidden decay. By the time we pull the old roof, we routinely find truss ends, decking boards, and fascia that look fine from below but crumble the moment you put weight — or a nail — into them. Years of neglect from previous owners or previous roofers tend to show up all at once.</p>

<hr />

<figure><img src="/projects/this-is-what-happens-when-pests-left-unattended-to-extreme-damage-all-phase-usa.webp" alt="Severe hidden wood rot and pest damage exposed after roof tear-off by All Phase Construction USA" loading="lazy" width="1440" height="1080" /><figcaption>What hidden pest and moisture damage looks like once the roof is opened up — none of it visible from inside the home.</figcaption></figure>

<h2>Why Soft Wood Is a Roof That Fails in the Next Storm</h2>

<p>This is the heart of why we won't roof over bad wood, and it matters far more than the change order price.</p>

<p>A roof is only as strong as what it's nailed to. Every shingle, every piece of underlayment, every fastener depends on biting into solid, healthy wood. When the deck or the truss ends are rotted or soft, the nails don't grip — they go in like the wood is a sponge. The roof might look perfectly finished when we're done, but the connection underneath is weak.</p>

<p>Then the first real storm rolls through, and we get plenty of them. The wind gets under the edge of that roof, and because the nails were never able to anchor into solid wood, the whole system starts to peel and pull away. That's not a leak anymore. That's a roof coming off your house — often taking the new materials and your insurance deductible right along with it.</p>

<p>This is exactly why building to <a href="https://allphaseconstructionfl.com/hurricane-help">High-Velocity Hurricane Zone standards</a> starts with the wood, not the shingles. Most roofers know this. The difference is what they choose to do about it.</p>

<hr />

<figure><img src="/projects/bad-decking-boca-raton-flat-roofing-all-phase-usa.webp" alt="Rotted roof decking found during a flat roof tear-off in Boca Raton" loading="lazy" width="1440" height="1080" /><figcaption>Rotted, delaminated roof decking in Boca Raton. New fasteners can’t grip wood like this — it has to be replaced, not covered over.</figcaption></figure>

<h2>What Most Roofers Do vs. What We Do</h2>

<p>Here's the uncomfortable industry reality. When a crew tears off a roof and finds rotted wood, they're standing at a fork in the road.</p>

<p>One path is to stop, document it, explain it to the homeowner, and replace the bad wood properly. That path costs more and involves a hard conversation. The other path is to nail the new roof right over the soft, rotted wood, collect the original contract amount, and drive away before anyone's the wiser.</p>

<p>A lot of companies take the second path. It's faster, it avoids the awkward conversation, and the problem won't surface until long after their workmanship warranty has expired — if they offered one at all. The homeowner finds out the hard way, usually during a hurricane.</p>

<p>We don't do business that way. When we find compromised wood, we replace it. Period. As a <a href="https://allphaseconstructionfl.com/about-us">dual-licensed roofing and general contractor</a>, we're held to a structural standard, not just a surface one. It means we sometimes have to come to you with a change order you weren't expecting, and that can be a tough conversation. But we'd rather have it now than have your roof fail when you need it most. Fixing it right the first time is the entire point.</p>

<hr />

<figure><img src="/projects/complete-redeck-because-pests-all-phase-usa.webp" alt="Roof completely re-decked with new plywood after pest damage by All Phase Construction USA" loading="lazy" width="1440" height="1080" /><figcaption>Rather than roof over compromised wood, we fully re-decked this roof after finding pest damage throughout.</figcaption></figure>

<h2>Where the Price Comes From</h2>

<p>These numbers aren't pulled out of thin air. Lumber is expensive, specialty roof decking even more so, and the labor to safely remove rotted structural wood and replace it — often two stories up on a steep pitch — is skilled, dangerous work.</p>

<p>We price replacement wood by the linear foot off a published lumber schedule that we use for every customer. Tongue-and-groove decking, dimensional fascia in pine or cedar, and structural truss reinforcements each carry a set rate, and steep or multi-story areas include an add-on for the added difficulty and risk. The point is that the pricing is consistent and standardized. You're charged the same rate as everyone else for the exact footage of wood that came off your roof — no more.</p>

<hr />

<h2>How We Prove You Only Paid for What You Got</h2>

<p>This is the part we're genuinely proud of, and it's where we separate ourselves from the pack.</p>

<p>On every job, we don't just replace bad wood and tell you about it. <strong>We photograph and individually number every single piece of lumber we remove and replace.</strong> If you've seen the photos from your project, you've seen the boards laid out with markings written directly on them: the length, the size (1x8, 2x4, and so on), and a count number in parentheses — 1, 2, 3, and right up the line. Every board accounted for. Every board on camera.</p>

<p>We also go a step further to protect your wallet. When a board is long enough that we can cut it and use the good sections in two different spots, we do exactly that — and you'll see it labeled as something like 4A and 4B. That's a single piece of lumber doing two jobs, so you're not paying for two. We could just as easily throw the offcut away and bill you for fresh material in both locations. We don't, and the numbering on the photos proves it.</p>

<p>When the work is done, you have a complete photographic record: every rotted board that came out, every new board that went in, the footage, and the count. You're not taking our word for it — you can see it, and you can add it up against the lumber schedule yourself. That kind of transparency should be standard in this industry. It almost never is.</p>

<hr />

<figure><img src="/projects/marking-replaced-decking-for-transparency-in-boynton-beach-fl-all-phase-usa.webp" alt="All Phase Construction USA marking and numbering replaced roof decking for transparency in Boynton Beach FL" loading="lazy" width="1440" height="1920" /><figcaption>We mark and number every replaced board (Boynton Beach) so you can see exactly what was changed and check the count against your invoice.</figcaption></figure>

<h2>A Smart Move Before You Ever Start: Get Pre-Qualified for Financing</h2>

<p>Here's a piece of advice we give every homeowner, even the ones who fully intend to pay cash: <strong>get pre-qualified for financing before your project starts, whether you plan to use it or not.</strong></p>

<p>Why? Because the whole point of this article is that hidden damage is, by definition, a surprise. You can't budget perfectly for something nobody can see until the roof is open. If a change order comes up mid-project — rotted truss ends, termite damage, soft decking — you don't want to be caught flat-footed, scrambling to free up funds while your home sits under a partially opened roof.</p>

<p>Getting pre-qualified ahead of time is quick, and it does not obligate you to borrow anything. Think of it like keeping a spare tire in the trunk. You hope you never touch it, but if something unexpected comes up, you can approve the additional work the same day and keep the project moving without delay. It removes the financial pressure from an already stressful moment and lets you make the right structural decision instead of the cheapest one.</p>

<p>You can review options and get pre-qualified through our <a href="https://allphaseconstructionfl.com/easy-payments/">Easy Payments & Financing page</a>. It takes only a few minutes, and having it in place before tear-off is one of the smartest, lowest-stress things a homeowner can do.</p>

<hr />

<h2>The Bottom Line</h2>

<p>A change order is never fun to receive, and we'll never pretend otherwise. But please know what it really represents. It means we found damage that was hidden from everyone — including us — until your old roof came off. It means that instead of covering it up and walking away, we stopped and showed you the truth. And it means the roof you're paying for is being built on solid, healthy wood that will actually hold your shingles down when the next big storm tests it.</p>

<p>The high number on a change order isn't us trying to take advantage of you. It's the cost of doing the job the right way, on a roof that someone, somewhere down the line, didn't. We document every board, number every piece, and stretch your material as far as it will honestly go — because we want you to look at that final invoice and know exactly what you paid for and why.</p>

<p>If you ever have questions about a change order on your project, ask us. Pull up the photos. We'll walk you through every numbered board. That's a conversation we're always happy to have.</p>

<hr />

<h2>Frequently Asked Questions</h2>

<p><strong>Why didn't you find this damage during the inspection?</strong></p>

<p>Much of the most serious wood damage — rotted truss ends, soft decking, termite activity — is physically hidden beneath the existing roof covering and is not visible from the ground, the attic, or the surface. A thorough inspection identifies everything reasonably accessible, but some conditions only become visible once the old roof is torn off. That's the moment we document it and bring it to you.</p>

<p><strong>Do I need an active leak to have rotted roof wood?</strong></p>

<p>No. A great deal of wood rot occurs at the perimeter of the roof — at the truss ends, eaves, and fascia — where moisture, humidity, and wind-driven rain attack the wood without ever reaching your interior ceilings. It's common to have significant hidden damage with no leak inside the home.</p>

<p><strong>How do I know I'm only being charged for the wood that was actually replaced?</strong></p>

<p>We photograph and individually number every board we remove and replace, writing the size, length, and a count number directly on each piece. You receive that photographic record, and all replacement lumber is priced by the linear foot off a standardized schedule, so you can verify the charges yourself.</p>

<p><strong>Should I get financing pre-qualified even if I plan to pay cash?</strong></p>

<p>Yes. Pre-qualifying is fast, free, and creates no obligation to borrow. Because hidden damage can't be predicted before tear-off, having financing ready means you can approve any necessary change-order work immediately and keep your project on schedule, without financial pressure. You can start at our <a href="https://allphaseconstructionfl.com/easy-payments/">Easy Payments page</a>.</p>

<p><strong>What happens if a roofer just covers up rotted wood?</strong></p>

<p>The new roof may look fine, but fasteners driven into soft or rotted wood don't hold. Under hurricane-force wind, those weak connections can fail and allow sections of the roof to peel away — a far more expensive and dangerous outcome than replacing the wood up front.</p>

<hr />

<p><strong>📍 Visit Us:</strong> <a href="https://www.google.com/maps/place/590+Goolsby+Blvd,+Deerfield+Beach,+FL+33442">590 Goolsby Blvd, Deerfield Beach, FL 33442</a></p>

<p><strong>📞 Call:</strong> <a href="tel:+17542275605">754-227-5605</a></p>

<p><strong>✉️ Email:</strong> <a href="mailto:leads@allphaseusa.com">leads@allphaseusa.com</a></p>

<p><em>Serving Broward & Palm Beach Counties | Licensed & Insured</em>
CGC-1526236 | CCC-1331464</p>$BODY$,
  true
)
ON CONFLICT (slug) DO UPDATE
SET featured_image = EXCLUDED.featured_image,
    content = EXCLUDED.content,
    published = true,
    updated_at = NOW();
