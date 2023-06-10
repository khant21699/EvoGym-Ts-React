import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  topofPage: boolean;
};

const NavBar = ({ topofPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";
  const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const navbarBg = topofPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarBg} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />

            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benifits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <>
                <button
                  className=" rounded-full bg-secondary-500 p-2"
                  onClick={() => setMenuToggled(!menuToggled)}
                >
                  <Bars3Icon className=" h-6 w-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu bar */}
      {!isAboveMediumScreens && menuToggled && (
        <>
          <motion.div
            className=" fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0.5, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {/* close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setMenuToggled(!menuToggled)}>
                <XMarkIcon className="h-6 w-5 text-gray-400" />
              </button>
            </div>
            {/* menu Items */}
            <div
              onClick={() => setMenuToggled(!menuToggled)}
              className=" ml-[33%] flex flex-col gap-10 text-2xl"
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benifits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
