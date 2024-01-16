const fetchProfile = async (name) => {
  const api_url = import.meta.env.VITE_APP_GITHUB_PROFILE_URL + name;
  try {
    const res = await fetch(api_url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    //new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchRepo = async (name) => {
  const api_url = import.meta.env.VITE_APP_GITHUB_PROFILE_URL + name + "/repos";
  try {
    const res = await fetch(api_url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    //new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchFollowers = async(name)=>{
  const api_url = import.meta.env.VITE_APP_GITHUB_PROFILE_URL + name + "/followers";
  try {
    const res = await fetch(api_url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    //new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }

}

const fetchFollowing = async(name)=>{
  const api_url = import.meta.env.VITE_APP_GITHUB_PROFILE_URL + name + "/following";
  try {
    const res = await fetch(api_url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    //new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }

}

export { fetchProfile, fetchRepo, fetchFollowers, fetchFollowing};
