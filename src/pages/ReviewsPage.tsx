import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, ChevronLeft, ChevronRight, Phone, CheckCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Evelyn Tainsky',
    text: 'Last month I had my roof replaced by All Phase Construction. From the beginning of the project to the end I have nothing to say other than I love dealing with every member of that team. Karl Walczak came to the house, went on the roof into the crawl space and presented a very clear picture of what had to be done and the cost. From that moment on I knew that I could trust him. They kept me informed every step of the way, were on time, and did exactly what they were supposed to. My roof is beautiful and well done. I would recommend you 100%.',
  },
  {
    id: 2,
    name: 'Betty Fronizer',
    text: 'Recently I had a roof put on my house by All Phase USA. I cannot say enough good about this company. Matt and Dillon brought in all the materials and showed me by computer how it was going to be installed. I got a call every week from Carissa letting me know where we were in the process. Matt was the project manager and kept on top of things. The crew covered all my plants and cleaned everything up at the end of the day. If you need a new roof call All Phase USA.',
  },
  {
    id: 3,
    name: 'Mom',
    text: "I had a tile roof installed with a solar attic fan by All Phase Construction, and I couldn't be happier with the results. From start to finish, the communication was clear and thorough. I had plenty of choices when it came to companies, and yes, some were less expensive, but the professionalism, quality, and peace of mind I got with All Phase made it absolutely worth it. A special shoutout to Graham, my salesman, and to Matt, the project manager. Highly recommend this team if you want it done right the first time!",
  },
  {
    id: 4,
    name: 'Anthony Colarusso',
    text: 'Just had my roof completed by All Phase. From start to finish they did everything they said they would. Once I signed with them they were way more communicative than I expected. Matt in production kept me in the loop from start to finish and Charly was there to walk me through the tear off and answered all the questions I had. Highly recommend as they made this first experience very easy.',
  },
  {
    id: 5,
    name: 'Ana Ramirez',
    text: 'All Phase Construction recently did my roof. From the start to the finish they did everything they said they were going to do. The project manager Matt was very communicative and answered any questions that I had the entire time. Would highly recommend.',
  },
  {
    id: 6,
    name: 'Douglas Dolphy',
    text: 'Awesome team work. Discussion held with us as to expectations from start to finish. Very professional and addressed promptly any concerns we had. Great attention paid to safety of our property and their own workers. Thanks Dylan and Graham, team leader Israel, for keeping things together. Great assets to All Phase Construction Company.',
  },
  {
    id: 7,
    name: 'Ana Blanco-Smith',
    text: "Karl conducted a roof inspection for one of my clients who is selling their home. He was thorough, honest and reliable. Upon finding the roof is in good condition, he promptly sent a detailed letter addressing the buyer's concerns and making himself available for further assistance. I highly recommend and look forward to working with him again.",
  },
  {
    id: 8,
    name: 'Bonnie Trappe',
    text: 'We recently had a new roof installed on our five story condominium building and we could not be more pleased with the experience. From the very beginning, All Phase Construction USA took the time to explain all roofing materials available and guided us through the entire process.',
  },
  {
    id: 9,
    name: 'Gail Lebus',
    text: 'Love My Metal Roof!! All Crew Worked Great. Any Questions were answered Promptly. Thank You Karl Walczak. The Barn is Next.',
  },
  {
    id: 10,
    name: 'Jeffrey Gelin',
    text: 'Reasonable price. They provide great and fast service.',
  },
];

export default function ReviewsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    document.title = 'Reviews & Testimonials | All Phase Construction';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read hundreds of 5-star reviews from satisfied customers across Broward & Palm Beach Counties. See why homeowners trust All Phase Construction for their roofing needs.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read hundreds of 5-star reviews from satisfied customers across Broward & Palm Beach Counties. See why homeowners trust All Phase Construction for their roofing needs.';
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView, isPaused]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - itemsPerView : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - itemsPerView ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerView);
  const totalDots = Math.ceil(reviews.length / itemsPerView);
  const currentDot = Math.floor(currentIndex / itemsPerView);

  return (
    <><div className="min-h-screen bg-black pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              What Our Customers Say
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            5-Star Rated Across Broward and Palm Beach Counties
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Don't just take our word for it — see why over 100 homeowners trust All Phase Construction with their roofs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-2xl lg:text-3xl font-bold text-red-600 mb-2">Hundreds</div>
            <div className="text-gray-400">of 5-Star Reviews</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">5-Star</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">2,500+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Recent Reviews from Google
            </h2>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {review.text}
                    </p>
                    <div className="pt-4 border-t border-zinc-700">
                      <p className="text-white font-semibold mb-1">{review.name}</p>
                      <p className="text-gray-500 text-sm">Google Review</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-lg"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 shadow-lg"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalDots)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index * itemsPerView)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  currentDot === index ? 'bg-red-600 w-8' : 'bg-zinc-700 hover:bg-zinc-600'
                }`}
                aria-label={`Go to review group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Talk to Our Past Customers
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            We're an open book. We encourage you to speak directly with our past customers to ask questions and learn what it's like to work with All Phase Construction. Real conversations, real answers — that's how we build trust.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Request Customer References
          </Link>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-800 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Schedule your free roof inspection today and see why South Florida homeowners choose All Phase Construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact"
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
