import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-100 min-h-24 px-10 flex justify-between items-center shadow-xl">
      <div className="flex justify-between items-center w-full">
        <h6>VOKU</h6>
        <Navigation />
      </div>
    </header>
  );
};
export { Header };
