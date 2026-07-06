import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Cpu, Sparkles } from "lucide-react";

const BuildConsole3D = lazy(() => import("./BuildConsole3D"));

const metrics = [
  { label: "Motion", value: "60FPS" },
  { label: "Scene", value: "3D" },
  { label: "UX", value: "Sharp" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="inline-flex items-center gap-2 border border-yellow-300/30 bg-black/35 px-4 py-2 text-sm uppercase tracking-[5px] text-yellow-300 backdrop-blur-md"
          >
            <Sparkles size={16} />
            Frontend Developer
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            className="mt-7 text-6xl font-black leading-none md:text-8xl lg:text-9xl"
          >
            {["ATHARV", "VERMA"].map((word, index) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 42, filter: "blur(12px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
                className={index === 1 ? "block bg-gradient-to-r from-yellow-200 via-amber-400 to-violet-300 bg-clip-text text-transparent" : "block"}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
          >
            I build sharp, responsive web experiences with React, motion, and
            detail-obsessed interfaces that feel fast before the user even
            notices why.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">

            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.03, boxShadow: "0 0 70px rgba(250,204,21,0.32)" }}
              whileTap={{ scale: 0.94 }}
              className="
              inline-flex items-center gap-2
              rounded-md border border-yellow-300
              bg-yellow-300 px-7 py-4
              font-bold text-black
              shadow-[0_0_45px_rgba(250,204,21,0.22)]
              transition duration-300
              hover:-translate-y-1 hover:bg-yellow-200
              "
            >
              <ArrowDown size={18} />
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ y: -4, scale: 1.03, borderColor: "rgba(216,180,254,0.65)" }}
              whileTap={{ scale: 0.94 }}
              className="
              inline-flex items-center gap-2
              rounded-md border border-white/20
              bg-white/5 px-7 py-4
              font-semibold text-white
              backdrop-blur-md
              transition duration-300
              hover:-translate-y-1 hover:border-violet-300/60 hover:bg-white/10
              "
            >
              <Download size={18} />
              Resume
            </motion.a>

          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/10 bg-black/20 backdrop-blur-md">
            {["React", "Motion", "Tailwind"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + index * 0.08 }}
                whileHover={{ backgroundColor: "rgba(250,204,21,0.08)" }}
                className="px-4 py-4 text-center"
              >
                <span className="text-sm uppercase tracking-[3px] text-zinc-500">
                  Stack
                </span>
                <p className="mt-1 font-bold text-zinc-100">{item}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[560px]"
        >

          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-8 z-20 border border-yellow-300/30 bg-black/50 px-4 py-3 text-sm uppercase tracking-[4px] text-yellow-200 backdrop-blur-md md:-right-5"
          >
            Live Stack
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.01, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[560px] overflow-hidden border border-yellow-300/20 bg-black/45 p-5 shadow-[0_40px_140px_rgba(0,0,0,0.72),0_0_70px_rgba(250,204,21,0.14)] backdrop-blur-xl md:min-h-[650px] md:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(250,204,21,0.18),transparent_28%),radial-gradient(circle_at_72%_72%,rgba(168,85,247,0.18),transparent_26%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[4px] text-zinc-500">
                  Build Console
                </p>
                <h3 className="mt-2 text-3xl font-black md:text-4xl">
                  Interface Engine
                </h3>
              </div>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="border border-yellow-300/30 bg-yellow-300/10 p-3 text-yellow-200"
              >
                <Cpu size={30} />
              </motion.div>
            </div>

            <div className="absolute inset-x-3 top-24 bottom-24 z-10 md:inset-x-6 md:top-28 md:bottom-28">
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center border border-white/10 bg-black/30 text-sm uppercase tracking-[4px] text-yellow-200">
                    Loading 3D
                  </div>
                }
              >
                <BuildConsole3D />
              </Suspense>
            </div>

            <div className="absolute left-5 top-28 z-20 flex gap-2 md:left-7 md:top-32">
              {["React", "R3F", "GSAP"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.08 }}
                  whileHover={{ y: -3, borderColor: "rgba(250,204,21,0.45)" }}
                  className="border border-white/10 bg-black/55 px-3 py-2 text-xs font-bold text-zinc-100 backdrop-blur-xl"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="absolute right-5 top-28 z-20 border border-yellow-300/20 bg-yellow-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[3px] text-yellow-100 backdrop-blur-xl md:right-7 md:top-32">
              Live 3D
            </div>

            <div className="absolute inset-x-5 bottom-5 z-10 grid grid-cols-3 border border-white/10 bg-black/55 backdrop-blur-xl md:inset-x-7 md:bottom-7">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + index * 0.08 }}
                  whileHover={{ backgroundColor: "rgba(250,204,21,0.08)" }}
                  className="px-3 py-4 text-center"
                >
                  <p className="text-xs uppercase tracking-[3px] text-zinc-500">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-sm font-black text-yellow-100 md:text-lg">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent"
            />
          </motion.div>

          <div className="absolute inset-0 border border-white/10 mix-blend-screen" />
          <motion.div
            animate={{ opacity: [0.18, 0.38, 0.18], scale: [1, 1.04, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 -z-10 bg-yellow-300/10 blur-[80px]"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
