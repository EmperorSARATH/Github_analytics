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
          placeholder="Enter github repo.."
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          <Link to="/profile">Submit</Link>
        </button>
      </form>
    </section>
  );
};

export default Github;
