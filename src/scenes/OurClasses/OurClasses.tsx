import { SelectedPage } from "../../shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";
import "./style.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface classType {
  name: string;
  discription?: string;
  image: string;
}

const classes: Array<classType> = [
  {
    name: "Weight Training Classes",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum adipisci eos, labore corporis similique corrupti reiciendis nulla unde",
    image: image1,
  },
  {
    name: "Yoga Classes",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum adipisci eos, labore corporis similique corrupti reiciendis nulla unde",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum adipisci eos, labore corporis similique corrupti reiciendis nulla unde",
    image: image3,
  },
  {
    name: "Adventure Classes",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum adipisci eos, labore corporis similique corrupti reiciendis nulla unde",
    image: image4,
  },
  {
    name: "Fitness Classes",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum adipisci eos, labore corporis similique corrupti reiciendis nulla unde",
    image: image5,
  },
  {
    name: "Training Classes",
    discription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum adipisci eos, labore corporis similique corrupti reiciendis nulla unde",
    image: image6,
  },
];

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section className=" w-full bg-primary-100 py-32" id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className=" mx-auto w-5/6 "
          initial="hidden"
          whileInView="visible"
          //   viewport={{ once: true, amount: 0.1 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 ">
            <motion.h1
              className="basis-3/5 font-montserrat text-3xl font-bold"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
              //   viewport={{ amount: 0.1, once: true }}
              viewport={{ amount: 0.1 }}
            >
              Our Classes
            </motion.h1>
            <p className=" py-5 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              tempore eveniet dolorem quisquam, quae libero tempora dicta
              dolorum accusamus repellendus atque adipisci blanditiis, labore
              magni ut pariatur officiis optio! Repudiandae.
            </p>
          </div>
        </motion.div>
        <div
          id="imgScrollBar"
          className=" flex h-[410px] w-full  overflow-scroll overflow-y-hidden "
        >
          <ul className=" w-[2800px] whitespace-nowrap">
            {classes.map((img: classType, index) => {
              return (
                <Class
                  key={`${index}-${img.name}`}
                  name={img.name}
                  description={img.discription}
                  image={img.image}
                />
              );
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
