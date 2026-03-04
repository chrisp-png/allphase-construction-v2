# Social Proof Asset Library

## Purpose
Organized repository of authentic All Phase Construction USA photos for use across the website.

## Folder Structure

### `/people/`
Individual photos of team members, sales reps, inspectors, or single individuals interacting with customers.
- Use for: About page bios, testimonial backgrounds, trust elements
- Contains people: YES

### `/teams/`
Group photos of crews, team meetings, company events, or multiple employees working together.
- Use for: About page team section, company culture, hero backgrounds
- Contains people: YES

### `/customers/`
Happy customers, homeowners with completed roofs, customer interactions, handshakes, testimonials.
- Use for: Testimonial backgrounds, social proof sections, case studies
- Contains people: YES

### `/projects/`
Completed projects, before/after shots, work in progress, roof installations, materials.
- Use for: Portfolio, service pages, process illustrations
- Contains people: MAYBE (if crew visible)

### `/drone/`
Aerial/drone photography of roofs, properties, installations from above.
- Use for: Hero backgrounds, portfolio showcase, technical documentation
- Contains people: NO (usually)

## Categorization Rules

**Priority Order:**
1. If photo shows customer interaction → `/customers/`
2. If photo shows team/crew (2+ people) → `/teams/`
3. If photo shows single person working → `/people/`
4. If photo is aerial/overhead → `/drone/`
5. If photo focuses on completed work → `/projects/`

**When Uncertain:**
- STOP and ask for clarification
- Do NOT guess category
- Better to pause than miscategorize

## Naming Convention

Format: `category-description-identifier.ext`

Examples:
- `customer-happy-homeowner-boca-raton-01.jpg`
- `team-crew-installing-shingles-02.jpg`
- `drone-aerial-tile-roof-completed-03.jpg`
- `person-inspector-with-homeowner-01.jpg`

Rules:
- All lowercase
- Hyphens for spaces
- No city names unless visually obvious
- Sequential numbering if similar shots
- Keep under 50 characters

## Alt Text Guidelines

**Format:** "[Subject] + [Action/Context] + [Location if obvious]"

Examples:
- "All Phase roofing inspector discussing roof damage with homeowner"
- "Roofing crew installing tile shingles in South Florida"
- "Aerial view of completed tile roof installation"
- "Happy customer standing in front of newly replaced roof"

**Rules:**
- Descriptive and factual
- No keyword stuffing
- No generic terms like "photo" or "image"
- Include company name only if branded vehicle/uniform visible
- 8-15 words ideal length

## Usage Tracking

All images are indexed in `IMAGE_INDEX.json` with:
- File path
- Category
- Contains people (yes/no)
- Suitable for (testimonials, about, process, service, hero)
- Alt text
- Upload date

## Status

**Current State:** Asset preparation phase - NO images deployed to pages yet
**Next Phase:** Review and approval before implementation
**Total Images:** 0 (awaiting upload)
