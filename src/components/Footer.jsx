import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-6 md:flex-row">

        <p className="text-zinc-500">
          Designed and built by Atharv Kumar Verma
        </p>

        <div className="flex items-center gap-4">

          <motion.a
            href="https://github.com/gitatharv2003"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.08, borderColor: "rgba(250,204,21,0.4)" }}
            whileTap={{ scale: 0.92 }}
            className="border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-yellow-300/40 hover:text-yellow-300"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/atharv-kumar-verma"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4, scale: 1.08, borderColor: "rgba(250,204,21,0.4)" }}
            whileTap={{ scale: 0.92 }}
            className="border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-yellow-300/40 hover:text-yellow-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -4, scale: 1.08, boxShadow: "0 0 40px rgba(250,204,21,0.25)" }}
            whileTap={{ scale: 0.92 }}
            className="border border-yellow-300/20 bg-yellow-300 px-3 py-3 text-black transition hover:-translate-y-1 hover:bg-yellow-200"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
