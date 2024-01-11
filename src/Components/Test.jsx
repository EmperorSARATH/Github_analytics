import { useEffect } from "react";

const Test = () => {
  const fetch = async (name) => {
    const api_url = import.meta.env.VITE_APP_GITHUB_API_URL + name;
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

  useEffect(() => {
    fetch("codermedia");
  }, []);
  return <div>Test</div>;
};

export default Test;
