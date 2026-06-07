import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[8px] text-yellow-400 mb-4">
            Frontend Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            ATHARV
          </h1>

          <h1 className="text-6xl md:text-8xl font-black text-yellow-400">
            VERMA
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            Passionate frontend developer creating
            beautiful, responsive and modern web
            experiences using React and Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#projects"
              className="
              px-8
              py-4
              bg-yellow-400
              text-black
              font-semibold
              rounded-xl
              hover:scale-105
              transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="
              px-8
              py-4
              border
              border-yellow-400
              rounded-xl
              hover:bg-yellow-400/10
              transition
              "
            >
              Resume
            </a>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src={profile}
            alt="Atharv"
            className="
h-[650px]
w-full
object-cover
rounded-[40px]
border
border-yellow-400/20
shadow-[0_0_60px_rgba(250,204,21,0.15)]
hover:scale-[1.02]
transition-all
duration-500
"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;