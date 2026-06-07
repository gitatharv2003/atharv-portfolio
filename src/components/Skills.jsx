import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    level: "95%",
  },
  {
    name: "CSS",
    level: "90%",
  },
  {
    name: "JavaScript",
    level: "88%",
  },
  {
    name: "React",
    level: "85%",
  },
  {
    name: "Tailwind CSS",
    level: "92%",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <p className="text-yellow-400 uppercase tracking-[6px]">
        Skills
      </p>

      <h2 className="text-5xl md:text-7xl font-black mt-4 mb-16">
        What I Work With
      </h2>

      <div className="space-y-8">

        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >

            <div className="flex justify-between mb-3">
              <span className="text-xl">
                {skill.name}
              </span>

              <span className="text-yellow-400">
                {skill.level}
              </span>
            </div>

            <div className="w-full bg-zinc-900 rounded-full h-3">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-yellow-400 h-3 rounded-full"
              />

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;