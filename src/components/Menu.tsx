import Image from 'next/image'

const Menu = () => {
  return (
    <nav className="absolute top-0 w-full z-10 p-4 flex justify-between items-center">
      <Image
        src="/logo.svg"
        alt="Experience In Motion"
        className="object-cover"
        width={100}
        height={50}
      />

      {/*<h1 className="text-white text-xl font-light">Exotion</h1>*/} {/*<Button variant="ghost" className="text-white hover:text-white/80 text-lg">*/} {/*  Login*/} {/*</Button>*/}
    </nav>
  );
};

export default Menu;
