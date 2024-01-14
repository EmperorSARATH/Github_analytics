import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/Context";

const Searchbox = () => {
  const [user, setUser] = useState("");
  const [user_changed, setUserChanged] = useState(false);
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);

  const { dta } = useContext(Context);
  const [dt, setDt] = dta;

  const searchList = async (user) => {
    try {
      const res = await fetch(
        import.meta.env.VITE_APP_GITHUB_API_URL +
          "search/users?q=" +
          user +
          "&per_page=3",
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      //new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await res.json();

      setOptions(data.items);
      setCount(data.total_count);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleUserChange = (value) => {
    setUser(value);

    setUserChanged(true);
    setOptions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDt(user);
  };

  useEffect(() => {
    //console.log(user);
    const timer = setTimeout(() => {
      if (user !== "" && user_changed === false) {
        searchList(user);
        return;
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [user]);

  return (
    <section className="relative z-50">
      <form
        className="relative flex cursor-pointer items-center rounded-full bg-[#f87171]"
        onSubmit={handleSubmit}
      >
        <input
          id="search"
          type="text"
          placeholder="Search your profile here"
          autoComplete="off"
          className="flex h-10 w-[300px] items-center rounded-l-full border-2 border-r-0 border-t-2 p-2 px-3 text-sm text-slate-500 focus:border-slate-300 focus:outline-none max-md:hidden"
          value={user}
          onChange={handleChange}
          onFocus={() => setUserChanged(false)}
        />
        <button title="Search" type="submit">
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
      {options && user && (
        <ul className="absolute my-2 flex w-[300px] flex-col justify-center">
          {Object.entries(options).map((item, index) => {
            return (
              <div
                className="my-2 flex w-full items-center rounded-full bg-slate-50 p-2 px-3"
                key={index}
              >
                <button
                  className="w-full"
                  onClick={() => handleUserChange(item[1].login)}
                >
                  <li key={index} className="flex items-center gap-x-5">
                    <img
                      src={item[1].avatar_url}
                      className="h-8 w-8 rounded-full"
                    />
                    {item[1].login}
                  </li>
                </button>
              </div>
            );
          })}
        </ul>
      )}
      {count == 0 && user.length > 4 && (
        <div className="absolute my-2 flex w-[300px] items-center gap-x-2 rounded-full bg-slate-50 p-2 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8 text-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
          <span className="text-base text-slate-700">No profiles found</span>
        </div>
      )}
    </section>
  );
};

export default Searchbox;
