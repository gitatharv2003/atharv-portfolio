import { motion } from "framer-motion";
import { Code2, Cpu, Gauge, Sparkles } from "lucide-react";

const strengths = [
  { icon: Code2, label: "Frontend craft", text: "Clean React architecture with sharp, reusable UI systems." },
  { icon: Cpu, label: "3D interfaces", text: "R3F, Three.js, Drei, and postprocessing for immersive scenes." },
  { icon: Gauge, label: "Performance", text: "Fast loading, responsive layouts, and smooth interaction loops." },
  { icon: Sparkles, label: "Motion design", text: "GSAP and Framer Motion details that make screens feel alive." },
];

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-sm uppercase tracking-[3px] text-yellow-300 sm:tracking-[6px]">
          About Me
        </p>

        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
          Building interfaces that feel engineered,
          cinematic, and unmistakably modern.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-7 text-zinc-400 sm:mt-10 md:text-lg md:leading-8">
          I'm Atharv Kumar Verma, a B.Tech student focused on premium frontend
          experiences. I turn ideas into responsive web applications with strong
          visual systems, immersive interaction, and production-minded code.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {strengths.map(({ icon: Icon, label, text }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.018, borderColor: "rgba(250,204,21,0.34)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden border border-white/10 bg-black/35 p-5 backdrop-blur-xl sm:p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-violet-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            <motion.div whileHover={{ rotate: 8, scale: 1.12 }} className="relative inline-flex">
              <Icon className="text-yellow-300" size={30} />
            </motion.div>
            <h3 className="relative mt-6 text-xl font-bold">{label}</h3>
            <p className="relative mt-3 text-sm leading-6 text-zinc-400">{text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default About;
