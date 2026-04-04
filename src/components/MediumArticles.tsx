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

// Static articles from Medium
const staticArticles: Article[] = [
  {
    title: "Why Your Database Queries Are Suddenly Slow (And How to Fix It)",
    link: "https://medium.com/@razanalqaddoumi/why-your-database-queries-are-suddenly-slow-and-how-to-fix-it",
    description: "Let me tell you a story that almost every developer goes through. Your application was working perfectly, database queries were fast, and then suddenly... everything slowed down. This article explores common causes and practical solutions for database performance issues.",
    thumbnail: "https://picsum.photos/seed/database/800/400.jpg",
    readTime: "8 min read",
    pubDate: "Mar 2024"
  },
  {
    title: "Prompt Engineering: Stop Talking to AI and Start Directing It",
    link: "https://medium.com/@razanalqaddoumi/prompt-engineering-stop-talking-to-ai-and-start-directing-it",
    description: "By now, most of us have tried using AI. And honestly, many times the output feels generic, robotic, or just wrong. You rephrase the same prompt multiple times but still don't get the result you want. The problem isn't the AI—it's how you're talking to it.",
    thumbnail: "https://picsum.photos/seed/ai/800/400.jpg",
    readTime: "6 min read",
    pubDate: "Mar 2024"
  },
  {
    title: "Top 4 Authentication Mechanisms",
    link: "https://medium.com/@razanalqaddoumi/top-4-authentication-mechanisms",
    description: "How the Internet Actually Knows It's You: We use apps, websites and services every day, but most of us don't really think about how we're authenticated. This article breaks down the most common authentication mechanisms and when to use each one.",
    thumbnail: "https://picsum.photos/seed/security/800/400.jpg",
    readTime: "7 min read",
    pubDate: "Feb 2024"
  },
  {
    title: "Shallow Copy vs Deep Copy in JavaScript",
    link: "https://medium.com/@razanalqaddoumi/shallow-copy-vs-deep-copy-in-javascript",
    description: "When I first started coding in JS, I ran into a strange problem: I'd copy an object, change something in the copy… and suddenly the original object changed too! If you've been there, this article will help you understand the difference between shallow and deep copying.",
    thumbnail: "https://picsum.photos/seed/javascript/800/400.jpg",
    readTime: "5 min read",
    pubDate: "Feb 2024"
  },
  {
    title: "Level Up Your React Skills with These Practical Tips 👩‍💻",
    link: "https://medium.com/@razanalqaddoumi/level-up-your-react-skills-with-these-practical-tips",
    description: "Are you looking to write cleaner, faster and more maintainable React code? I've discovered that small, practical adjustments can make a huge difference in your React development. Here are my top tips for leveling up your React skills.",
    thumbnail: "https://picsum.photos/seed/react/800/400.jpg",
    readTime: "9 min read",
    pubDate: "Jan 2024"
  },
  {
    title: "The Most Important Person You'll Ever Code For Is You",
    link: "https://medium.com/@razanalqaddoumi/the-most-important-person-youll-ever-code-for-is-you",
    description: "Have you ever opened an old project and felt lost, wondering, 'Who wrote this code?' The answer is… you. This article is about writing code that your future self will thank you for—maintainable, readable, and well-documented.",
    thumbnail: "https://picsum.photos/seed/coding/800/400.jpg",
    readTime: "6 min read",
    pubDate: "Jan 2024"
  }
];

export default function MediumArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and set static articles
    const timer = setTimeout(() => {
      setArticles(staticArticles);
      setLoading(false);
    }, 1000); // Brief loading for UX

    return () => clearTimeout(timer);
  }, []);

  // 1. Loading State
  if (loading) {
    return (
      <section id="articles" className="relative pt-[12rem] pb-[12rem] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Loader2 className="w-10 h-10 animate-spin text-purple-400 mx-auto" />
        </div>
      </section>
    );
  }

  // 2. Success State (Static articles are always available)
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
              {/* Image & Overlay logic kept the same as your original */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="relative z-10 p-6 flex flex-col flex-grow">
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

                <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {article.description}
                </p>

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