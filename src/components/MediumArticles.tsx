'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Clock, BookOpen, Loader2 } from 'lucide-react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  readTime: string;
}

export default function MediumArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        setLoading(true);
        // Using Medium's RSS feed for the user
        const response = await fetch(`https://api.rss2json.com/api.json?rss_url=https://medium.com/feed/@razanalqaddoumi`);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const formattedArticles = data.items.slice(0, 6).map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            }),
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            thumbnail: item.thumbnail || 'https://miro.medium.com/v2/resize:fit:1400/1*cc1b1Q5a3xJk4k7k5k6k5g.png',
            readTime: Math.ceil(item.content.length / 1000) + ' min read'
          }));
          setArticles(formattedArticles);
        } else {
          throw new Error('Failed to fetch articles');
        }
      } catch (err) {
        setError('Failed to load articles. Please check back later.');
        console.error('Medium fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  if (loading) {
    return (
      <section id="articles" className="relative pt-[12rem] pb-[12rem] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Articles</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Thoughts, insights, and technical writings.
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="articles" className="relative pt-[12rem] pb-[12rem] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Articles</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Thoughts, insights, and technical writings.
            </p>
          </div>
          <div className="text-center py-20">
            <p className="text-gray-400">{error}</p>
            <a 
              href="https://medium.com/@razanalqaddoumi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Medium Profile
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="relative pt-[12rem] pb-[12rem] bg-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, insights, and technical writings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group relative flex flex-col bg-white/5 border border-white/10 hover:bg-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/50 transition-colors duration-300 pointer-events-none"></div>
              
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://miro.medium.com/v2/resize:fit:1400/1*cc1b1Q5a3xJk4k7k5k6k5g.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="relative z-10 p-6 flex flex-col flex-grow">
                {/* Article Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.pubDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h3>

                {/* Article Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {article.description}
                </p>

                {/* Read More Link */}
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors mt-auto"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Article
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://medium.com/@razanalqaddoumi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
