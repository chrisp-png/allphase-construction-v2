import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Heart, Users, Award, Shield, Phone, Landmark } from 'lucide-react';

export default function CommunityPage() {
  return (
    <>
      <SEO
        title="Community Involvement | All Phase Construction USA"
        description="The organizations All Phase Construction USA supports across Broward & Palm Beach County — Big Brothers Big Sisters of Broward, Boca Raton Softball, and more."
      />

      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <section className="relative pt-32 pb-12 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/10 via-transparent to-transparent" />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Community Involvement
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Rooted in South Florida
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              All Phase Construction USA has been headquartered in Deerfield Beach since 2006 — we started
              the year Hurricane Wilma reminded South Florida what a roof is really for. Two decades later,
              the people who work here still live here. Our kids play in these leagues. Our neighbors are the
              ones calling at 2 a.m. with a leak.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Community involvement isn't a marketing program for us. It's a short list of organizations we
              actually put money and hours behind — and we'd rather show you exactly who they are than post a
              wall of logos.
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* BBBS */}
            <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-red-500 shrink-0" />
                <h2 className="text-2xl font-bold text-white">Big Brothers Big Sisters of Broward County</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Big Brothers Big Sisters has been matching children with adult mentors since 1904, and the
                Broward County chapter has been doing it here for more than 50 years. The model is simple and
                it works: one adult (a "Big"), one child (a "Little"), a real relationship, and a Match Support
                Specialist who stays with the pair to keep it healthy. Programs run both in the community and
                inside Broward County public schools.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                The numbers are why we chose them. In the past year, BBBS of Broward served <strong className="text-white">1,333
                young people</strong> — growing local reach by nearly 29% — and in 2024 alone they built{' '}
                <strong className="text-white">1,024 one-to-one mentoring matches</strong> for Broward kids. That growth earned
                them the 2025 Growth Award from Big Brothers Big Sisters of America. Child safety comes first:
                every Big goes through background screening and training before a match is ever made.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                We sponsor BBBS of Broward because mentorship is one of the few things that genuinely changes a
                kid's trajectory — and because these are kids in our own county.
              </p>
              <a
                href="https://www.bbbsbroward.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                Visit Big Brothers Big Sisters of Broward →
              </a>
            </article>

            {/* BRSA */}
            <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-red-500 shrink-0" />
                <h2 className="text-2xl font-bold text-white">Boca Raton Softball Association</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Boca Raton Softball Association is a Florida 501(c)(3) that has run girls fast pitch softball
                in Boca Raton for more than 25 years, operated entirely by a volunteer Board of Directors.
                Alongside the recreational leagues, they run the Boltz travel program at the 8U, 10U, 12U and 14U
                levels — and players who came up through their rec leagues have gone on to compete at the college
                and professional level.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                We're a team sponsor for the season. Youth sports is where a lot of South Florida kids learn to
                show up on time, do the unglamorous work, and be part of something bigger than themselves —
                which, not coincidentally, is exactly what we look for when we hire.
              </p>
              <a
                href="https://www.bocasoftball.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                Visit Boca Raton Softball Association →
              </a>
            </article>

            {/* Zoya / rescue animals */}
            <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-red-500 shrink-0" />
                <h2 className="text-2xl font-bold text-white">The Cats (and Raccoons) of 590 Goolsby</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our office manager, <strong className="text-white">Zoya Haydic</strong>, rescues animals. Not as a program, not as
                a campaign — it's just what she does.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                There is almost always a rescue cat in our Deerfield Beach office: injured, sick, or too small to
                be anywhere else, getting looked after between vet visits. And on the side of our building there's
                a standing feeding station. What shows up is a rotating cast — cats, raccoons, and an assortment
                of furry South Florida critters who have figured out exactly where to be, and at what hour.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We mention it because it's true, and because it says something about the people who answer your
                phone. If you call us and hear a meow in the background, that's Zoya's doing.
              </p>
            </article>

            {/* No Fallen Heroes */}
            <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-red-500 shrink-0" />
                <h2 className="text-2xl font-bold text-white">No Fallen Heroes Foundation</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                The No Fallen Heroes Foundation is a 501(c)(3) that supports veterans, first responders, and their
                families — funding healing retreats for the people who carried more than most of us will ever be
                asked to carry.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Zoya volunteers her time with them, which is how we came to know their work. All Phase has made a
                donation to the foundation, and our goal is to fully sponsor a veteran through the program.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                We'll let them tell their own story — it's theirs to tell, and they tell it far better than we could.
              </p>
              <a
                href="https://nofallenheroesfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                Visit the No Fallen Heroes Foundation →
              </a>
            </article>

            {/* Deerfield Beach Historical Society */}
            <article className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6 text-red-500 shrink-0" />
                <h2 className="text-2xl font-bold text-white">Deerfield Beach Historical Society</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Deerfield Beach Historical Society preserves the history of the city we've called home since
                day one. Working out of the historic Butler House, the Society keeps the city's archives, runs the
                Museum of Black History, and operates the only public art gallery in Deerfield Beach — the quiet,
                unglamorous work of keeping a community's memory intact.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                We're a business member. When your company is named after the place it works, helping the people
                who protect that place's history isn't complicated — it's just right.
              </p>
              <a
                href="https://deerfieldbeachhistoricalsociety.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
              >
                Visit the Deerfield Beach Historical Society →
              </a>
            </article>

            {/* Why this page exists */}
            <article className="bg-gradient-to-br from-red-950/30 to-zinc-900/60 border border-red-900/40 rounded-xl p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why This Page Exists</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Every roofer in South Florida will tell you they care about the community. This is the page where
                we have to be specific about it. Every organization above is linked, and every one of them can
                confirm we're on their sponsor list.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you run a local organization in Broward or Palm Beach County and think we'd be a good fit, we'd
                genuinely like to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+17542275605"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (754) 227-5605
                </a>
                <Link
                  to="/about-us"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg border border-zinc-700 transition-colors"
                >
                  About All Phase
                </Link>
              </div>
            </article>

          </div>
        </section>
      </div>
    </>
  );
}
