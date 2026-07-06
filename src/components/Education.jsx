import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
      <p className="text-sm uppercase tracking-[3px] text-yellow-300 sm:tracking-[6px]">
        Education
      </p>

      <h2 className="mb-10 mt-4 text-4xl font-black sm:text-5xl md:mb-16 md:text-7xl">
        Academic Journey
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -8, scale: 1.01, borderColor: "rgba(250,204,21,0.34)" }}
        whileTap={{ scale: 0.99 }}
        className="group relative overflow-hidden border border-white/10 bg-black/45 p-5 backdrop-blur-xl sm:p-8 md:p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-violet-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <motion.div whileHover={{ rotate: -8, scale: 1.1 }} className="inline-flex">
            <GraduationCap className="text-yellow-300" size={42} />
          </motion.div>
          <p className="w-fit border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-yellow-200">
            2022 - 2026
          </p>
        </div>

        <h3 className="relative mt-8 text-3xl font-bold sm:text-4xl">
          Bachelor of Technology
        </h3>

        <p className="relative mt-4 text-base text-zinc-400 sm:text-lg">
          Dr. A.P.J Abdul Kalam Technical University
        </p>

        <p className="relative mt-6 max-w-2xl leading-7 text-zinc-500">
          Engineering fundamentals paired with hands-on frontend development,
          interaction design, and modern web tooling.
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
