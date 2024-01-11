import bg from "../assets/blue.jpg";
const Navbar = () => {
  return (
    <div className="flex h-auto items-center justify-end">
      <div className="pr-12">
        <img
          src={bg}
          alt=""
          className="h-10 w-10 rounded-full border-2 border-slate-300 object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
