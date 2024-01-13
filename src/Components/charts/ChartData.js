const ch_data = async (name) => {
  const months = [];
  const api_url = import.meta.env.VITE_APP_GITHUB_PROFILE_URL + name + "/repos";
  try {
    const res = await fetch(api_url);
    const dict = {};

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    //new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await res.json();

    for (let i = 0; i < data?.length; i++) {
      const val = data[i].created_at.split("-")[1];
      months.push(val);
    }

    for (const month of months) {
      dict[month] = (dict[month] || 0) + 1;
    }

    let mnths = [];
    //console.log(dict);
    for (const [key, value] of Object.entries(dict)) {
      //console.log(value);
      mnths.push({ month: key, count: value });
    }

    // console.log(mnths.sort());
    return mnths.sort((a, b) => a.month - b.month);
  } catch (err) {
    console.log(err);
  }
};

export { ch_data };
