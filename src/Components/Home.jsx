import { Barchart, Linechart } from ".";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../contexts/Context";
import Searchbox from "./search/Searchbox";
import { fetchProfile } from "../api/responses";

import Skeleton from "react-loading-skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const isProfileRendered = useRef(false);

  const { dta } = useContext(Context);
  const [dt] = dta;

  console.log("username=", dt);

  const preload = async () => {
    try {
      const res = await fetchProfile(dt);

      setData(await res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    preload();

    if (isProfileRendered.current === false) {
      console.log(isProfileRendered.current);

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, [dt]);

  return (
    <section className="h-screen">
      {loading && <Skeleton className="h-screen" />}
      {!loading && data && (
        <div>
          <div className="p-10">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold leading-5 text-slate-800">
                Dashboard
              </span>
              <Searchbox />
            </div>
            <div className="mt-10 w-full">
              <ul className="flex flex-wrap gap-x-6">
                <li
                  className="flex flex-none rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                    hover:shadow-cyan-500"
                >
                  <div className="flex gap-x-6">
                    <div className="flex h-full w-full items-center gap-x-5">
                      <img
                        src={data.avatar_url}
                        alt="flag"
                        className="h-10 rounded-full "
                      />
                    </div>
                    <span className="flex items-center">{data.name}</span>
                  </div>
                </li>

                <li
                  className="flex flex-none rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                    hover:shadow-cyan-500"
                >
                  <div className="flex flex-col justify-center">
                    <div className="flex gap-x-6">
                      <svg
                        xmlns="http://www.w3.1org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>

                      <span>Followers</span>
                      <span>{data.followers}</span>
                    </div>
                  </div>
                </li>

                <li
                  className="flex flex-none rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                    hover:shadow-cyan-500"
                >
                  <div className="flex flex-col">
                    <span>Following</span>
                    <span className="text-center">{data.following}</span>
                  </div>
                </li>

                <li
                  className="flex flex-none rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg
                    hover:shadow-cyan-500"
                >
                  <div className="flex flex-col">
                    <span>Date Created :</span>
                    <span>{data?.created_at?.split("T")[0]}</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 flex w-full justify-between">
              <Linechart />
              <Barchart />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
