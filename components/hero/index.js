import NavBar from "./nav/NavHome";
const index = () => {
  return (
    <div className="flex items-center justify-center bg-[var(--color-bg)] h-[300px]">
      <NavBar />
      {/* overlay */}
      <div />
      <div className="container mx-auto">
        <div className="text-center mt-20 max-[639px]:mt-0">
          <h2 className="text-2xl font-mono mx-auto w-12/12 leading-relaxed">
            I am fullstack web development
          </h2>
          <p className="text-black text-opacity-60 text-lg mx-auto mt-3 leading-relaxed">
            Ive been a web developer for 1 year and already have good skills
          </p>
          <button>book</button>
        </div>
      </div>
    </div>
  );
};

export default index;
