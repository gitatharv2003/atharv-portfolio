import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="
    py-10
    border-t
    border-yellow-400/10
    ">

      <div className="
      max-w-7xl
      mx-auto
      px-6
      flex
      flex-col
      items-center
      gap-6
      ">

        <div className="flex gap-8">

          <a
            href="https://github.com/gitatharv2003"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/atharv-kumar-verma"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={28} />
          </a>

        </div>

        <p className="text-gray-500">
          Designed & Built by Atharv Kumar Verma
        </p>

      </div>

    </footer>
  );
};

export default Footer;