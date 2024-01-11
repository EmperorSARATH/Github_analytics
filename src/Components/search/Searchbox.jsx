import { useContext, useState } from "react";
import UserList from "./UserList";
import { Context } from "../../contexts/Context";

const Searchbox = () => {
  const { repo_user } = useContext(Context);
  const [user, setUser] = repo_user;

  const handleSubmit = (e) => {
    e.preventDefault();
    //setUser(input);
  };

  return (
    <section>
      <form className="relative flex cursor-pointer items-center rounded-full bg-[#f87171]">
        <input
          type="text"
          placeholder="Search here"
          className="flex h-10 w-[300px] items-center rounded-l-full border-2 border-r-0 border-t-2 p-2 px-3 text-sm text-slate-500 focus:border-slate-300 focus:outline-none max-md:hidden"
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit" title="Search" onSubmit={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mx-4 w-6 text-xl text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>
      {user && <UserList />}
    </section>
  );
};

export default Searchbox;
