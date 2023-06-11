type Props = {
  name: string;
  description?: string;
  image: string;
};

export default function Class({ name, description, image }: Props) {
  const OverlayStyle = `p-5 absolute z-30 flex h-[380px] w-[400px] flex-col item-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <div className=" relative mx-5 inline-block h-[380px] w-[400px] overflow-hidden rounded-md">
      <div className={OverlayStyle}>
        <p className="text-2xl">{name}</p>
        <p className=" m-5">{description}</p>
      </div>
      <img className=" w-full h-full mb-3" src={image} alt={image} />
    </div>
  );
}
