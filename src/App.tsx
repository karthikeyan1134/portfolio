import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  Network, 
  Bot,
  Download,
  Send
} from 'lucide-react';

function App() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "I build scalable web applications",
        "I create AI-powered solutions",
        "I develop distributed systems"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Karthikeyan
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-12">
            <span ref={typedRef}></span>
          </div>
          <div className="flex gap-6 justify-center mb-12">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="../files/RESUME (3).pdf" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
            >
              <Send size={20} />
              Get in Touch
            </motion.a>
          </div>
          <div className="flex gap-4 justify-center">
            <SocialLink href="https://github.com/karthikeyan1134" icon={<Github size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/karthikeyan-akkapalli/" icon={<Linkedin size={24} />} />
            <SocialLink href="akkapallikarthikeyan@gmail.com" icon={<Mail size={24} />} />
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8"
        >
          <ChevronDown size={32} />
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm a Computer Science student and full-stack developer with a passion for building scalable applications 
              and solving complex problems. With expertise in web development, cloud computing, and system programming, 
              I create efficient solutions that make a difference.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <TimelineItem 
                  year="2020 - 2024"
                  title="B.Tech in Computer Science"
                  subtitle="SRM AP University"
                  description="GPA: 8.1/10.0"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <TimelineItem 
                  year="2024"
                  title="Data Engineer Intern"
                  subtitle="Edubot Software and Services"
                  description="Designed a prototype of weather forecasting system using IOT and mechine learning"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ExpertiseCard
              icon={<Code2 size={32} />}
              title="Software Development"
              description="Full-stack development with React, Django, and Flask. Strong DSA foundation."
            />
            <ExpertiseCard
              icon={<Network size={32} />}
              title="System Programming"
              description="Built P2P systems and proxy servers with advanced networking features."
            />
            <ExpertiseCard
              icon={<Bot size={32} />}
              title="Automation"
              description="Experience in API integration and task automation systems."
            />
            <ExpertiseCard
              icon={<Cloud size={32} />}
              title="Cloud Computing"
              description="AWS services expertise and cloud-based application development."
            />
            <ExpertiseCard
              icon={<Database size={32} />}
              title="Data Engineering"
              description="pipeline optimization and SQL database management."
            />
            <ExpertiseCard
              icon={<Brain size={32} />}
              title="Problem Solving"
              description="Active competitive programmer with strong algorithmic thinking."
            />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid gap-8">
            <ProjectCard
              title="P2P File Sharing System"
              description="A decentralized file-sharing system with UDP-based server discovery and multi-threading support."
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
              tags={['C++', 'Python', 'Networking', 'Multi-threading']}
              github="https://github.com"
              demo="https://demo.com"
            />
            <ProjectCard
              title="HTTP/HTTPS Proxy Server"
              description="Advanced proxy server with caching, logging, and security features."
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2000"
              tags={['Python', 'Networking', 'Security']}
              github="https://github.com"
              demo="https://demo.com"
            />
            <ProjectCard
              title="Weather Forecasting System"
              description="Real-time weather data visualization system with API integration."
              image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2000"
              tags={['React', 'APIs', 'Data Visualization']}
              github="https://github.com"
              demo="https://demo.com"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 px-4 bg-gray-900/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Mail className="text-blue-400" size={20} />
                  <a href="mailto:akkapallikarthikeyan@gmail.com" className="hover:text-blue-400 transition-colors">
                  akkapallikarthikeyan@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Linkedin className="text-blue-400" size={20} />
                  <a href="https://www.linkedin.com/in/karthikeyan-akkapalli/" className="hover:text-blue-400 transition-colors">
                  karthikeyan-akkapalli
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Github className="text-blue-400" size={20} />
                  <a href="https://github.com/karthikeyan1134" className="hover:text-blue-400 transition-colors">
                  karthikeyan1134
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      className="hover:text-blue-400 transition-colors"
    >
      {icon}
    </motion.a>
  );
}

function TimelineItem({ year, title, subtitle, description }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-700 last:pb-0">
      <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-400 rounded-full" />
      <span className="text-sm text-blue-400">{year}</span>
      <h4 className="text-lg font-semibold mt-1">{title}</h4>
      <p className="text-gray-400">{subtitle}</p>
      <p className="text-gray-300 mt-1">{description}</p>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm transition-all"
    >
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ title, description, image, tags, github, demo }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden bg-gray-800/50 rounded-lg backdrop-blur-sm"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-2">
            <a href={github} className="text-blue-400 hover:text-blue-300 transition-colors">
              <Github size={20} />
            </a>
            <a href={demo} className="text-blue-400 hover:text-blue-300 transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default App;