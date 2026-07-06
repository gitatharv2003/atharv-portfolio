import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  { icon: Mail, label: "Email", value: "atharvkumar182@gmail.com", href: "mailto:atharvkumar182@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7310483130", href: "tel:+917310483130" },
  { icon: MapPin, label: "Location", value: "Varanasi, India", href: "https://maps.google.com/?q=Varanasi%2C%20India" },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:py-32"
    >

      <p className="text-sm uppercase tracking-[3px] text-yellow-300 sm:tracking-[6px]">
        Contact
      </p>

      <h2 className="mb-10 mt-4 text-4xl font-black sm:text-5xl md:mb-16 md:text-7xl">
        Let's Connect
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        {contactItems.map(({ icon: Icon, label, value, href }, index) => (
          <motion.a
            key={label}
            href={href}
            target={label === "Location" ? "_blank" : undefined}
            rel={label === "Location" ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, scale: 1.018, borderColor: "rgba(250,204,21,0.38)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden border border-white/10 bg-black/45 p-5 backdrop-blur-xl sm:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-transparent to-violet-300/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            <motion.div
              whileHover={{ rotate: -8, scale: 1.12 }}
              className="relative inline-flex"
            >
              <Icon className="text-yellow-300" size={35} />
            </motion.div>
            <p className="relative mt-8 text-xs uppercase tracking-[2px] text-zinc-500 sm:text-sm sm:tracking-[4px]">
              {label}
            </p>
            <p className="relative mt-3 break-words text-base font-semibold sm:text-lg">
              {value}
            </p>
          </motion.a>
        ))}

      </div>
    </section>
  );
};

export default Contact;
