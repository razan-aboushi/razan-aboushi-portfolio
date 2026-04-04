import { ExternalLink, Calendar, BookOpen } from 'lucide-react';

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
}

const staticArticles: Article[] = [
  {
    title: "Why Your Database Queries Are Suddenly Slow (And How to Fix It)",
    link: "https://medium.com/@razanalqaddoumi/why-your-database-queries-are-suddenly-slow-and-how-to-fix-it-e5f429df6a4d",
    description: "Let me tell you a story that almost every developer goes through. Your application was working perfectly, database queries were fast, and then suddenly... everything slowed down. This article explores common causes and practical solutions.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    pubDate: "Mar 2024"
  },
  {
    title: "Prompt Engineering: Stop Talking to AI and Start Directing It",
    link: "https://medium.com/@razanalqaddoumi/prompt-engineering-stop-talking-to-ai-and-start-directing-it-aba0cde39538",
    description: "By now, most of us have tried using AI. And honestly, many times the output feels generic, robotic, or just wrong. You rephrase the same prompt multiple times but still don't get the result you want. The problem isn't the AI—it's how you're talking to it.",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    pubDate: "Mar 2024"
  },
  {
    title: "Top 4 Authentication Mechanisms",
    link: "https://medium.com/@razanalqaddoumi/top-4-authentication-mechanisms-30c5779f7fc6",
    description: "How to Internet Actually Knows It's You: We use apps, websites and services every day, but most of us don't really think about how we're authenticated. This article breaks down the most common authentication mechanisms and when to use each one.",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&crop=entropy&auto=format",
    pubDate: "Feb 2024"
  },
  {
    title: "Shallow Copy vs Deep Copy in JavaScript",
    link: "https://medium.com/@razanalqaddoumi/shallow-copy-vs-deep-copy-in-javascript-d91e2619aef7",
    description: "When I first started coding in JS, I ran into a strange problem: I'd copy an object, change something in the copy… and suddenly the original object changed too! If you've been there, this article will help you understand the difference.",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop&crop=entropy&auto=format",
    pubDate: "Feb 2024"
  },
  {
    title: "Level Up Your React Skills with These Practical Tips",
    link: "https://medium.com/@razanalqaddoumi/level-up-your-react-skills-with-these-practical-tips-a16b11bceaaf",
    description: "Are you looking to write cleaner, faster and more maintainable React code? I've discovered that small, practical adjustments can make a huge difference in your React development. Here are my top tips for leveling up.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=entropy&auto=format",
    pubDate: "Jan 2024"
  },
  {
    title: "The Most Important Person You'll Ever Code For Is You",
    link: "https://medium.com/@razanalqaddoumi/the-most-important-person-youll-ever-code-for-is-you-85b767801aa6",
    description: "Have you ever opened an old project and felt lost, wondering, 'Who wrote this code?' The answer is… you. This article is about writing code that your future self will thank you for—maintainable, readable, and well-documented.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=entropy&auto=format",
    pubDate: "Jan 2024"
  }
];

export default function MediumArticles() {
  return (
    <section id="articles" className="relative py-24 bg-[#0a0a0a] scroll-mt-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-pink-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Articles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, insights, and technical writings on software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticArticles.map((article, index) => (
             <article 
             key={index}
             className="group flex flex-col bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full"
           >
              <div className="relative h-48 overflow-hidden shrink-0">
                <img 
                  src={article.thumbnail} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-[#0a0a0a]/50">
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{article.pubDate}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow">
                  {article.description}
                </p>

                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium text-sm px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 w-fit mt-auto"
                >
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  Read Article
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-16 px-4 sm:px-0">
          <a 
            href="https://medium.com/@razanalqaddoumi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex sm:inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-full transition-all duration-300 sm:hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
          >
            <BookOpen className="w-5 h-5 shrink-0" />
            <span className="text-sm sm:text-base whitespace-nowrap">
              View All 10+ Articles on Medium
            </span>
            <ExternalLink className="w-4 h-4 shrink-0 text-white/80 group-hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}