import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.92 }}
          className="text-3xl font-black text-yellow-300"
          aria-label="Back to top"
        >
          AK
        </motion.a>

        <ul className="hidden md:flex gap-2 text-sm uppercase tracking-[3px] text-zinc-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                whileHover={{ y: -2, color: "#fde68a" }}
                whileTap={{ scale: 0.94 }}
                className="relative block px-4 py-3 transition-colors after:absolute after:bottom-1 after:left-4 after:h-px after:w-0 after:bg-yellow-300 after:transition-all hover:after:w-[calc(100%-2rem)]"
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.button
          onClick={() => setOpen((value) => !value)}
          whileHover={{ scale: 1.06, borderColor: "rgba(250,204,21,0.45)" }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden rounded-md border border-white/15 p-2"
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {open ? <X /> : <Menu />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/85 px-6"
          >
            <div className="flex flex-col gap-2 py-5">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="border border-white/10 bg-white/5 px-4 py-4 text-sm uppercase tracking-[4px]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
