import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-500/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-black text-yellow-400">
          AK
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black px-6 pb-6">
          <div className="flex flex-col gap-4">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;