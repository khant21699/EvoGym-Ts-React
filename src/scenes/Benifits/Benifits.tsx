import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import Benifit from "./Benifit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface BenifitType {
  icon: JSX.Element;
  title: string;
  descrption: string;
}
const benifits: Array<BenifitType> = [
  {
    icon: <HomeModernIcon className=" h-6 w-6" />,
    title: "State of the Art Facilities",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio distinctio, eligendi optio similique exercitationem in repellat",
  },
  {
    icon: <UserGroupIcon className=" h-6 w-6" />,
    title: "100's of Diverse Classes",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio distinctio, eligendi optio similique exercitationem in repellat",
  },
  {
    icon: <AcademicCapIcon className=" h-6 w-6" />,
    title: "Expert and Pro Trainers",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio distinctio, eligendi optio similique exercitationem in repellat",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Benifits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benifits" className=" mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
        {/* header */}
        <div className="md:my-5 md:w-3/5">
          <motion.h1
            className="basis-3/5 font-montserrat text-3xl font-bold"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.3 }}
            // viewport={{ amount: 0.1, once: true }}
            viewport={{ amount: 0.1 }}
          >
            More Than Just A Gym
          </motion.h1>
          <motion.p
            className=" my-5 text-sm"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
            // viewport={{ amount: 0.1, once: true }}
            viewport={{ amount: 0.1 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            omnis architecto dolorum cumque voluptatem ex harum expedita! Hic
            ducimus ex sit, doloribus id maxime, ipsa magni dolore odit
            repudiandae ullam!
          </motion.p>
        </div>
        {/* benifits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          variants={container}
          // viewport={{ amount: 0.1, once: true }}
          viewport={{ amount: 0.1 }}
        >
          {benifits.map((benifit: BenifitType) => {
            return (
              <Benifit
                key={benifit.title}
                icon={benifit.icon}
                title={benifit.title}
                description={benifit.descrption}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>
        {/* graphic section */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
          {/* graphic */}
          <img
            src={BenefitsPageGraphic}
            alt="benifitPage-graphic"
            className=" mx-auto"
          />

          {/* description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
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
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className=" text-primary-500">FIT</span>
                  </motion.h1>
                </div>
              </div>
            </div>
            {/* discription */}
            <div>
              <motion.p
                className=" my-5 "
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
                // viewport={{ amount: 0.1, once: true }}
                viewport={{ amount: 0.1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate perferendis, neque ad, tenetur nesciunt ipsam
                molestias blanditiis necessitatibus cupiditate quibusdam eius
                repellendus aliquam libero vero ex nulla minus repellat
                praesentium?
              </motion.p>
              <motion.p
                className=" mb-5"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                // viewport={{ amount: 0.1, once: true }}
                viewport={{ amount: 0.1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate perferendis,necessitatibus cupiditate quibusdam eius
                repellendus
              </motion.p>
            </div>
            {/* button */}
            <div className="relative mt-16">
              <div className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benifits;
