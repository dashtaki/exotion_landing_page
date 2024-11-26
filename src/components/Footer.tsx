const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-[#4230d7] text-white">
      <div className="text-center flex justify-around">
        <div className="max-w-6xl mx-auto space-y-6">
          <h3 className="text-sm uppercase tracking-wider">Location</h3>
          <p className="text-4xl md:text-6xl font-light">Germany,
            Cologne</p>{/*<p className="text-4xl md:text-6xl font-light">Cologne</p>*/}
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <h3 className="text-sm uppercase tracking-wider">Contact</h3>
          <p className="text-4xl md:text-6xl font-light">info@exotion.com</p>
        </div>
      </div>

      <div className="text-center mt-12 mb-6">
        © Copyright {new Date().getFullYear()} - by Exotion
      </div>
    </footer>
  );
};

export default Footer;
