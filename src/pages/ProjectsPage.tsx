import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Lightbox from '../components/Lightbox';

interface Project {
  id: string;
  title: string;
  slug: string;
  city: string;
  county: string;
  roof_type: string;
  project_type: string;
  description: string;
  image_url: string;
  featured: boolean;
  completed_date: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [selectedRoofType, setSelectedRoofType] = useState<string>('All Roof Types');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.title = 'Our Roofing Projects | All Phase Construction USA';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our completed roofing projects across Broward and Palm Beach Counties. Expert tile, shingle, metal, and commercial roof installations.');
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, selectedProjectType, selectedCity, selectedRoofType]);

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .not('title', 'is', null)
        .order('completed_date', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  }

  function filterProjects() {
    let filtered = [...projects];

    if (selectedProjectType !== 'All') {
      filtered = filtered.filter(p => p.project_type === selectedProjectType);
    }

    if (selectedCity !== 'All Cities') {
      filtered = filtered.filter(p => p.city === selectedCity);
    }

    if (selectedRoofType !== 'All Roof Types') {
      filtered = filtered.filter(p => p.roof_type === selectedRoofType);
    }

    setFilteredProjects(filtered);
  }

  const uniqueCities = ['All Cities', ...Array.from(new Set(projects.map(p => p.city))).sort()];
  const uniqueRoofTypes = ['All Roof Types', ...Array.from(new Set(projects.map(p => p.roof_type))).sort()];

  function openLightbox(project: Project) {
    setSelectedProject(project);
    setLightboxOpen(true);
  }

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "All Phase Construction USA Roofing Projects",
    "description": "Completed roofing projects across Broward and Palm Beach Counties",
    "itemListElement": filteredProjects.map((project, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "All Phase Construction USA",
        "telephone": "(754) 227-5605"
      },
      "areaServed": {
        "@type": "City",
        "name": project.city,
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Florida",
          "containedInPlace": {
            "@type": "Country",
            "name": "US"
          }
        }
      },
      "serviceType": `${project.roof_type} Roofing`,
      "image": project.image_url
    }))
  };

  return (
    <><script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="min-h-screen bg-black pt-36 pb-16">
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Roofing Projects
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our completed work across Broward and Palm Beach Counties
              </p>
            </div>

            {loading ? (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
                <p className="text-gray-400 mt-4">Loading projects...</p>
              </div>
            ) : (
              <>
                <div className="bg-zinc-900 rounded-lg p-6 mb-12">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => setSelectedProjectType('All')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                          selectedProjectType === 'All'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setSelectedProjectType('Residential')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                          selectedProjectType === 'Residential'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                        }`}
                      >
                        Residential
                      </button>
                      <button
                        onClick={() => setSelectedProjectType('Commercial')}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                          selectedProjectType === 'Commercial'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                        }`}
                      >
                        Commercial
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto">
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600"
                      >
                        {uniqueCities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>

                      <select
                        value={selectedRoofType}
                        onChange={(e) => setSelectedRoofType(e.target.value)}
                        className="px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-red-600"
                      >
                        {uniqueRoofTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <p className="text-gray-400 mt-4">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </p>
                </div>

                {filteredProjects.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => openLightbox(project)}
                        className="group cursor-pointer bg-zinc-900 rounded-lg overflow-hidden hover:ring-2 hover:ring-red-600 transition-all"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={project.image_url}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <p className="text-white font-semibold">{project.city}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full mb-2">
                            {project.roof_type}
                          </span>
                          <h3 className="text-white font-semibold mb-2 group-hover:text-red-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">No projects found with the selected filters.</p>
                  </div>
                )}

                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-xl text-white mb-8">
                    Call <a href="tel:+17542275605" className="font-bold hover:underline">(754) 227-5605</a> for a Free Estimate
                  </p>
                  <a
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {lightboxOpen && selectedProject && (
        <Lightbox
          images={[{ src: selectedProject.image_url, alt: selectedProject.title, caption: `${selectedProject.title} - ${selectedProject.city}` }]}
          currentIndex={0}
          onClose={() => {
            setLightboxOpen(false);
            setSelectedProject(null);
          }}
          onNext={() => {}}
          onPrevious={() => {}}
        />
      )}
    </>
  );
}
