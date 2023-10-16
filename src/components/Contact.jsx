import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HOC";
import { slideIn } from "../utils/motion";
import { useSpanish } from "../Context/SpanishContext.jsx";

const Contact = () => {
  const { spanish } = useSpanish();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_75q910d",
        "template_xtn5xbj",
        {
          from_name: form.name,
          to_name: "Johnny Sierra",
          from_email: form.email,
          to_email: "johnny.sierra.dev@gmail.com",
          message: form.message,
        },
        "MYImjy6QRLV5XmqON",
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setSent(false);
        },
      );
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {sent === null && (
          <>
            <p className={styles.sectionSubText}>
              {!spanish ? "Get in touch" : "Ponte en contacto"}
            </p>
            <h3 className={styles.sectionHeadText}>
              {!spanish ? "Contact" : "Contacto"}
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {!spanish ? "Your Name" : "Tu Nombre"}
                </span>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Cool Guy"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {!spanish ? "Your Email" : "Tu Correo Electrónico"}
                </span>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Cool.guy@coolguy.com"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  {!spanish ? "Your Message" : "Tu Mensaje"}
                </span>

                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={
                    !spanish ? "What you want to say?" : "¿Qué quieres decir?"
                  }
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              >
                {loading
                  ? !spanish
                    ? "Sending..."
                    : "Enviando..."
                  : !spanish
                  ? "Send"
                  : "Enviar"}
              </button>
            </form>
          </>
        )}
        {sent === true && sent !== null ? (
          <div className="min-h-[30vh] flex flex-col items-center justify-center relative text-center font-bold text-4xl">
            {!spanish ? (
              <div>
                Your message has been sent! <br /> <br /> I will get back to you
                as soon as possible.
              </div>
            ) : (
              <div>
                ¡Tu mensaje ha sido enviado! <br /> <br /> Me pondré en contacto
                contigo lo antes posible.
              </div>
            )}

            <button
              className="bg-tertiary mt-4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              onClick={() => setSent(null)}
            >
              {!spanish ? "Okay" : "Bueno"}
            </button>
          </div>
        ) : sent === false ? (
          <div className="min-h-[30vh] flex flex-col items-center justify-center relative text-center font-bold text-4xl">
            {!spanish ? (
              <div>
                Something went wrong! <br /> <br /> Please try again later.
              </div>
            ) : (
              <div>
                ¡Algo salió mal! <br /> <br /> Por favor, inténtalo de nuevo más
                tarde.
              </div>
            )}
            <button
              className="bg-tertiary mt-4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              onClick={() => setSent(null)}
            >
              {!spanish ? "Okay" : "Bueno"}
            </button>
          </div>
        ) : null}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
