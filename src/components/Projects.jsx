import cineflow from "../assets/cineflow.png";
import gallery from "../assets/gallery.png";
import { motion } from "framer-motion";
import { ExternalLink, Layers3, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CineFlow",
    image: cineflow,
    description:
      "Premium movie discovery platform inspired by streaming-grade browsing, featured content, and a polished cinematic interface.",
    tech: ["React", "Tailwind CSS", "Responsive UX"],
    live: "https://cineflow-green-psi.vercel.app/",
    source: "https://github.com/gitatharv2003/cineflow",
    accent: "from-yellow-300/30 via-orange-400/10 to-transparent",
  },
  {
    title: "Gallery Showcase",
    image: gallery,
    description:
      "Modern image gallery with responsive layouts, fluid previews, and a visual presentation tuned for fast scanning.",
    tech: ["React", "CSS", "Image UI"],
    live: "https://gallery-app-kohl-delta.vercel.app/",
    source: "https://github.com/gitatharv2003/Gallery-app",
    accent: "from-violet-300/25 via-cyan-300/10 to-transparent",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6"
    >

      <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
        <p className="text-yellow-300 uppercase tracking-[6px]">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-4">
          Projects
        </h2>
        </div>

        <p className="max-w-md text-zinc-400">
          Built to feel premium: fast layouts, confident spacing, and motion
          that supports the work instead of stealing the whole room.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 90, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -12, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/45 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl"
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-200/70 to-transparent" />
            </motion.div>
            <div className="grid lg:grid-cols-[1.25fr_.75fr]">
              <div className="relative min-h-[280px] overflow-hidden md:min-h-[430px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 border border-white/15 bg-black/45 px-4 py-2 text-sm uppercase tracking-[3px] text-zinc-200 backdrop-blur-md">
                  <Layers3 size={16} />
                  Showcase
                </div>
              </div>

              <div className="relative flex flex-col justify-between p-7 md:p-10">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 text-yellow-300">
                    <Zap size={18} />
                    <span className="text-sm uppercase tracking-[4px]">
                      Featured Build
                    </span>
                  </div>

                  <h3 className="text-4xl font-black md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ y: -2, scale: 1.04, borderColor: "rgba(250,204,21,0.45)" }}
                        whileTap={{ scale: 0.96 }}
                        className="border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-sm font-semibold text-yellow-100"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.03, boxShadow: "0 0 45px rgba(250,204,21,0.24)" }}
                    whileTap={{ scale: 0.94 }}
                    className="inline-flex items-center gap-2 rounded-md bg-yellow-300 px-6 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-yellow-200"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.03, borderColor: "rgba(216,180,254,0.65)" }}
                    whileTap={{ scale: 0.94 }}
                    className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-violet-300/60 hover:bg-white/10"
                  >
                    <FaGithub size={18} />
                    Source
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

    </section>
  );
};

export default Projects;
