import React from "react";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
// import "./style.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const OnSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      e.preventDefault(); // Prevent the default form submission

      // Perform any additional validation or data manipulation here if needed

      // Submit the form data using AJAX or fetch request
      // Example using fetch:
      fetch("https://formsubmit.co/a0c276134e0dab477df40732b283baa5", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((response) => {
          if (response.ok) {
            // Handle success or show a success message
            console.log("Form submitted successfully");
            const ele = document.getElementById("confirmSubmitBox");
            ele?.classList.add("active");
            function remove() {
              ele?.classList.remove("active");
            }
            setTimeout(remove, 5000);
          } else {
            // Handle error or show an error message
            console.error("Error submitting the form");
          }
        })
        .catch((error) => {
          console.error("Error submitting the form", error);
        });
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          // viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <motion.h1
            className="basis-3/5 font-montserrat text-3xl font-bold"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            // viewport={{ amount: 0.1, once: true }}
            viewport={{ amount: 0.1 }}
          >
            <span className=" text-primary-500">JOIN NOW</span>
            TO GET IN SHAPE
          </motion.h1>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum unde
            aperiam eum repellat, iure aliquam ratione ab dolores incidunt
            ducimus a deleniti deserunt, sit cum esse eligendi facilis accusamus
            tempore!
          </p>
        </motion.div>
        {/* form and img */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            // viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form target="_blank" onSubmit={OnSubmit}>
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/"
              />

              <input
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 character"}
                </p>
              )}
              <input
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid Email Address"}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 character"}
                </p>
              )}
              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            // viewport={{ amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full mt-5"
                src={ContactUsPageGraphic}
                alt="contactUsPageGraphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
