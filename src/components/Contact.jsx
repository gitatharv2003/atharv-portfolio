import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-32 px-6"
    >

      <p className="text-yellow-400 uppercase tracking-[6px]">
        Contact
      </p>

      <h2 className="text-5xl md:text-7xl font-black mt-4 mb-16">
        Let's Connect
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="
        bg-[#101010]
        rounded-[30px]
        p-8
        border
        border-yellow-400/10
        ">
          <Mail size={35} />
          <p className="mt-6">
            atharvkumar182@gmail.com
          </p>
        </div>

        <div className="
        bg-[#101010]
        rounded-[30px]
        p-8
        border
        border-yellow-400/10
        ">
          <Phone size={35} />
          <p className="mt-6">
            +91 7310483130
          </p>
        </div>

        <div className="
        bg-[#101010]
        rounded-[30px]
        p-8
        border
        border-yellow-400/10
        ">
          <MapPin size={35} />
          <p className="mt-6">
            Varanasi, India
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;