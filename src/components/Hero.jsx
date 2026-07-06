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
    <section className="flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:pb-0 lg:pt-24">

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">

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
            className="inline-flex max-w-full items-center gap-2 border border-yellow-300/30 bg-black/35 px-3 py-2 text-xs uppercase tracking-[3px] text-yellow-300 backdrop-blur-md sm:px-4 sm:text-sm sm:tracking-[5px]"
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
            className="mt-7 text-[clamp(3.25rem,18vw,6rem)] font-black leading-none sm:text-7xl md:text-8xl lg:text-9xl"
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
            className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-8 md:text-xl md:leading-8"
          >
            I build sharp, responsive web experiences with React, motion, and
            detail-obsessed interfaces that feel fast before the user even
            notices why.
          </motion.p>

          <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4">

            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.03, boxShadow: "0 0 70px rgba(250,204,21,0.32)" }}
              whileTap={{ scale: 0.94 }}
              className="
              inline-flex items-center justify-center gap-2
              rounded-md border border-yellow-300
              bg-yellow-300 px-5 py-3.5 sm:px-7 sm:py-4
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
              inline-flex items-center justify-center gap-2
              rounded-md border border-white/20
              bg-white/5 px-5 py-3.5 sm:px-7 sm:py-4
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

          <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 bg-black/20 backdrop-blur-md sm:mt-12">
            {["React", "Motion", "Tailwind"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + index * 0.08 }}
                whileHover={{ backgroundColor: "rgba(250,204,21,0.08)" }}
                className="min-w-0 px-2 py-3 text-center sm:px-4 sm:py-4"
              >
                <span className="text-[10px] uppercase tracking-[2px] text-zinc-500 sm:text-sm sm:tracking-[3px]">
                  Stack
                </span>
                <p className="mt-1 truncate text-sm font-bold text-zinc-100 sm:text-base">{item}</p>
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
            className="absolute -right-1 top-6 z-20 border border-yellow-300/30 bg-black/50 px-3 py-2 text-[10px] uppercase tracking-[2px] text-yellow-200 backdrop-blur-md sm:top-8 sm:px-4 sm:py-3 sm:text-sm sm:tracking-[4px] md:-right-5"
          >
            Live Stack
          </motion.div>

          <motion.div
            whileHover={{ y: -8, scale: 1.01, rotateX: 2, rotateY: -2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[430px] overflow-hidden border border-yellow-300/20 bg-black/45 p-4 shadow-[0_40px_140px_rgba(0,0,0,0.72),0_0_70px_rgba(250,204,21,0.14)] backdrop-blur-xl sm:min-h-[520px] sm:p-5 md:min-h-[650px] md:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(250,204,21,0.18),transparent_28%),radial-gradient(circle_at_72%_72%,rgba(168,85,247,0.18),transparent_26%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[2px] text-zinc-500 sm:text-sm sm:tracking-[4px]">
                  Build Console
                </p>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">
                  Interface Engine
                </h3>
              </div>
              <motion.div
                animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="shrink-0 border border-yellow-300/30 bg-yellow-300/10 p-2 text-yellow-200 sm:p-3"
              >
                <Cpu size={30} />
              </motion.div>
            </div>

            <div className="absolute inset-x-2 bottom-20 top-24 z-10 sm:inset-x-3 sm:bottom-24 md:inset-x-6 md:top-28 md:bottom-28">
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

            <div className="absolute left-4 top-28 z-20 flex max-w-[62%] flex-wrap gap-2 md:left-7 md:top-32">
              {["React", "R3F", "GSAP"].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.08 }}
                  whileHover={{ y: -3, borderColor: "rgba(250,204,21,0.45)" }}
                  className="border border-white/10 bg-black/55 px-2.5 py-1.5 text-[10px] font-bold text-zinc-100 backdrop-blur-xl sm:px-3 sm:py-2 sm:text-xs"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="absolute right-4 top-28 z-20 border border-yellow-300/20 bg-yellow-300/10 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-yellow-100 backdrop-blur-xl sm:px-3 sm:py-2 sm:text-xs sm:tracking-[3px] md:right-7 md:top-32">
              Live 3D
            </div>

            <div className="absolute inset-x-4 bottom-4 z-10 grid grid-cols-3 border border-white/10 bg-black/55 backdrop-blur-xl md:inset-x-7 md:bottom-7">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + index * 0.08 }}
                  whileHover={{ backgroundColor: "rgba(250,204,21,0.08)" }}
                  className="min-w-0 px-2 py-3 text-center sm:px-3 sm:py-4"
                >
                  <p className="text-[10px] uppercase tracking-[1.5px] text-zinc-500 sm:text-xs sm:tracking-[3px]">
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
