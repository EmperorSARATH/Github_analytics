import { useContext, useState } from "react";
import { getRepo } from "../constants/data";
import { Context } from "../contexts/Context";
import { Link, useLocation } from "react-router-dom";

const Github = () => {
  const [repo, setRepo] = useState("");
  const { dta } = useContext(Context);
  const [dt, setDt] = dta;

  const handleSubmit = (e) => {
    e.preventDefault();
    setDt(repo);

  };
  return (
    <section className="flex h-screen items-center justify-center">
      <form action="">
        <input
          type="text"
          placeholder="Enter github repo..."
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          className="border-2 border-black p-2"
        />
        <button className="bg-teal-400 border-2 border-solid shadow-xl p-2 text-white transition ease-in duration-200 hover:bg-white hover:border-teal-500 hover:scale-105 hover:shadow-teal-300 hover:text-black hover:" type="submit" onClick={handleSubmit}>
          <Link to="/profile">Submit</Link>
        </button>
      </form>
    </section>
  );
};

export default Github;
