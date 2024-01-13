import { useContext, useEffect, useRef, useState } from "react";
import { fetchRepo } from "../../api/responses";
import { chart_data, months } from "../../constants/data";
import { ch_data } from "./ChartData";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Context } from "../../contexts/Context";

const Linechart = () => {
  const [repodata, setRepoData] = useState({});
  const [plotdata, setplotdata] = useState({});

  const { dta } = useContext(Context);
  const [dt, setDt] = dta;
  const createData = async () => {
    setplotdata(await ch_data(dt));
  };

  console.log(plotdata);
  // let isProfileRendered = useRef(false);

  const preload = async () => {
    try {
      setRepoData(await fetchRepo(dt));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function test() {
      await createData();
      await preload();
    }

    test();
    // if (isProfileRendered.current === false) {
    //   createData();
    //   preload();
    //   console.log(isProfileRendered.current);
    //   return () => {
    //     isProfileRendered.current = true;
    //   };
    // }
  }, [dt]);

  return (
    <LineChart width={700} height={300} data={plotdata}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" label="month" minTickGap={50} />
      <YAxis label="count" minTickGap={50} />
      <Line type="monotone" dataKey="month" stroke="#8884d8" />
      <Line type="monotone" dataKey="count" stroke="#82ca9d" />
      <Tooltip position={{ x: 80, y: 15 }} />
    </LineChart>
  );
};

export default Linechart;
