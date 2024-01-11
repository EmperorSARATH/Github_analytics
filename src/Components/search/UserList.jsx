import { useContext, useEffect, useRef, useState } from "react";
import { fetchProfile } from "../../api/responses";
import { Context } from "../../contexts/Context";

const UserList = () => {
  //   const [res_user, setUsers] = useState([]);
  const { repo_user } = useContext(Context);
  const [user, setUser] = repo_user;

  let isProfileRendered = useRef(false);

  const preload = async (value) => {
    try {
      const dt = await fetchProfile(value);
      setUser(dt?.login);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isProfileRendered.current === false) {
      preload(user);

      console.log(isProfileRendered.current);

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, [user]);

  return (
    user && (
      <div>
        <select name="" id="">
          <option value={user.login}>{user.login}</option>
        </select>
      </div>
    )
  );
};

export default UserList;
