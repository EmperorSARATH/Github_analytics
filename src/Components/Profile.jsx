import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { getRepo, projectList } from "../constants/data";
import Skeleton from "react-loading-skeleton";
import { fetchProfile, fetchRepo } from "../api/responses";
import { Context } from "../contexts/Context";
import projectbg from "../assets/project-bg.jpg";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [repodata, setRepoData] = useState({});

  const { dta } = useContext(Context);
  const [dt] = dta;

  let isProfileRendered = useRef(false);

  const preload = async () => {
    try {
      setData(await fetchProfile(dt));
      setRepoData(await fetchRepo(dt));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isProfileRendered.current === false) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      preload();

      console.log(isProfileRendered.current);

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, []);

  return (
    <section>
      {loading && <Skeleton className="h-screen" />}
      {!loading && data && (
        <div className="p-10">
          <div className="flex justify-between">
            <span className="text-lg font-semibold leading-5 text-slate-800">
              Profile
            </span>
            <Link
              to={data.html_url}
              target="_blank"
              className="rounded-full border bg-indigo-600 p-2 px-4 text-white transition duration-700 ease-in-out hover:border hover:border-indigo-500 hover:bg-white hover:text-inherit"
            >
              View profile
            </Link>
          </div>

          <div className="grid grid-cols-1 py-5">
            <ProfileCard data={data} />
            {/* <div className="mr-3 rounded-lg bg-indigo-500 p-5">
              <h1>Storage</h1>
            </div>
            <div className="rounded-lg bg-indigo-500 p-10">
              <h1>Upload</h1>
            </div> */}

            <div className="mr-3 mt-4 border-2 bg-white p-5">
              All Projects
              <div className="mt-5 flex flex-col">
                <h1>
                  Here you can find more details about your projects. Keep you
                  user engaged by providing meaningful information.
                </h1>
                <div className="my-3 flex flex-col gap-x-5 gap-y-5">
                  {Array.from(repodata)
                    .slice(0, 4)
                    .map((item, index) => (
                      <div key={index} className="flex items-center gap-x-5">
                        <img
                          src={projectbg}
                          alt=""
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <div className="flex w-full flex-col">
                          <span className="text-[16px]">{item.name}</span>
                          <div className="flex items-center gap-x-3">
                            <span>Language used : {item.language}</span>
                            <span>Visibility : {item.visibility}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* <div className="my-3 mr-3 rounded-lg bg-indigo-500 p-5">
              <h1>Storage</h1>
            </div>
            <div className="my-3 mr-3 rounded-lg bg-indigo-500 p-5">
              <h1>Storage</h1>
            </div> */}
          </div>
        </div>
      )}
      {!loading && !data && (
        <span className="flex justify-center p-10 text-xl font-semibold text-slate-500">
          No data found
        </span>
      )}
    </section>
  );
};

export default Profile;
