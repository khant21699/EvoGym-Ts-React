import Logo from "../../assets/Logo.png";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className=" mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className=" my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            numquam doloribus a cum! Laboriosam modi, eius sed accusamus
            voluptates porro eum recusandae praesentium veniam, consectetur
            tempora voluptatum aperiam provident earum.
          </p>
          <p>© Evogym All Rights Reserced.</p>
        </div>
        <div className=" mt-16 basis-1/4 md:mt-0">
          <h4 className=" font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Ei gravida id et etiam</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className=" mt-16 basis-1/4 md:mt-0">
          <h4 className=" font-bold">Contact Us</h4>
          <p className="my-5"> cumque tempora animi</p>
          <p>(+123)456-7890</p>
        </div>
      </div>
    </footer>
  );
}
