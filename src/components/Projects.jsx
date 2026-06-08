import cineflow from "../assets/cineflow.png";
import gallery from "../assets/gallery.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6"
    >

      <div className="mb-16">
        <p className="text-yellow-400 uppercase tracking-[6px]">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black mt-4">
          Projects
        </h2>
      </div>

      {/* CineFlow */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="
bg-[#101010]
rounded-[40px]
overflow-hidden
border
border-yellow-400/10

hover:-translate-y-3
hover:border-yellow-400/30
transition-all
duration-500

mb-16
"
      >

        <img
          src={cineflow}
          alt="CineFlow"
          className="w-full"
        />

        <div className="p-10">

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full">
              Tailwind CSS
            </span>
          </div>

          <h3 className="text-4xl font-bold">
            CineFlow
          </h3>

          <p className="text-gray-400 mt-4 max-w-3xl">
            Premium movie discovery platform inspired by
            modern streaming applications. Users can
            browse movies, explore featured content and
            enjoy a cinematic user experience.
          </p>

          <div className="flex gap-4 mt-8">

           <a
  href="https://cineflow-green-psi.vercel.app/"
  target="_blank"
  rel="noreferrer"
  className="
  px-8
  py-4
  bg-yellow-400
  text-black
  rounded-xl
  font-semibold
  "
>
  Live Demo
</a>

           <a
  href="https://github.com/gitatharv2003/cineflow"
  target="_blank"
  rel="noreferrer"
  className="
  px-8
  py-4
  border
  border-yellow-400
  rounded-xl
  "
>
  Source Code
</a>

          </div>

        </div>

      </motion.div>

      {/* Gallery */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="
        bg-[#101010]
        rounded-[40px]
        overflow-hidden
        border
        border-yellow-400/10
        "
      >

        <img
          src={gallery}
          alt="Gallery"
          className="w-full"
        />

        <div className="p-10">

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full">
              Responsive UI
            </span>
          </div>

          <h3 className="text-4xl font-bold">
            Gallery Showcase
          </h3>

          <p className="text-gray-400 mt-4 max-w-3xl">
            Modern image gallery built with responsive
            layouts, smooth interactions and beautiful
            presentation of visual content.
          </p>

          <div className="flex gap-4 mt-8">

            <a
  href="https://gallery-app-kohl-delta.vercel.app/"
  target="_blank"
  rel="noreferrer"
  className="
  px-8
  py-4
  bg-yellow-400
  text-black
  rounded-xl
  font-semibold
  "
>
  Live Demo
</a>

            <a
  href="https://github.com/gitatharv2003/Gallery-app"
  target="_blank"
  rel="noreferrer"
  className="
  px-8
  py-4
  border
  border-yellow-400
  rounded-xl
  "
>
  Source Code
</a>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Projects;