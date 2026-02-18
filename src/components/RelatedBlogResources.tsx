import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogResource {
  title: string;
  url: string;
  excerpt: string;
}

interface RelatedBlogResourcesProps {
  sectionTitle: string;
  sectionIntro: string;
  blogPosts: BlogResource[];
}

export default function RelatedBlogResources({ sectionTitle, sectionIntro, blogPosts }: RelatedBlogResourcesProps) {
  return (
    <div className="bg-zinc-950 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{sectionTitle}</h2>
          <p className="text-gray-400 text-lg max-w-3xl">{sectionIntro}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.url}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-600 hover:shadow-xl transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center text-red-600 font-semibold text-sm">
                Read Guide
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-right">
          <Link
            to="/learning-center"
            className="inline-flex items-center text-red-600 hover:text-red-500 font-semibold transition-colors"
          >
            Explore all roofing guides
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
