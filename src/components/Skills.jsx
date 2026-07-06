import { motion } from "framer-motion";
import { SiFramer, SiGreensock, SiReact, SiTailwindcss, SiThreedotjs, SiVite } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const skills = [
  { name: "React", level: "94%", icon: SiReact },
  { name: "Vite", level: "92%", icon: SiVite },
  { name: "React Three Fiber", level: "88%", icon: TbBrandThreejs },
  { name: "Three.js", level: "86%", icon: SiThreedotjs },
  { name: "Drei", level: "84%", icon: TbBrandThreejs },
  { name: "GSAP", level: "86%", icon: SiGreensock },
  { name: "Framer Motion", level: "90%", icon: SiFramer },
  { name: "Tailwind CSS", level: "94%", icon: SiTailwindcss },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >
      <p className="text-sm uppercase tracking-[3px] text-yellow-300 sm:tracking-[6px]">
        Skills
      </p>

      <h2 className="mb-10 mt-4 text-4xl font-black sm:text-5xl md:mb-16 md:text-7xl">
        Tech Stack
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.015, borderColor: "rgba(250,204,21,0.38)" }}
            whileTap={{ scale: 0.985 }}
            className="group relative overflow-hidden border border-white/10 bg-black/40 p-5 backdrop-blur-xl sm:p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-violet-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative mb-3 flex items-center justify-between gap-4">
              <span className="flex min-w-0 items-center gap-3 text-base font-bold sm:text-xl">
                <motion.span whileHover={{ rotate: 8, scale: 1.12 }}>
                  <Icon className="text-yellow-300" size={28} />
                </motion.span>
                <span className="min-w-0 truncate">{skill.name}</span>
              </span>

              <span className="shrink-0 text-yellow-300">
                {skill.level}
              </span>
            </div>

            <div className="relative w-full bg-zinc-900 h-2 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.15, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-2 bg-gradient-to-r from-yellow-200 via-amber-400 to-violet-300"
              />

            </div>

          </motion.div>
        )})}

      </div>
    </section>
  );
};

export default Skills;
