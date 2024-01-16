import React, { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { ch_data } from "./ChartData";

import { chart_data } from "../../constants/data";

const Barchart = () => {
  const [plotdata, setplotdata] = useState({});
  const createData = async () => {
    setplotdata(await ch_data("EmperorSarath"));
  };

  let isProfileRendered = useRef(false);
  useEffect(() => {
    if (isProfileRendered.current === false) {
      createData();
      //preload();

      console.log(isProfileRendered.current);

      return () => {
        isProfileRendered.current = true;
      };
    }
  }, []);
  return (
   
    <BarChart width={500} height={200} data={plotdata}>
      <XAxis dataKey="month" label={"month"} minTickGap={50} />
      <YAxis dataKey="count" label={"count"} />
      <Tooltip  />
      <Bar dataKey="count" fill="#35B774 " />
    </BarChart>
   
  );
};

export default Barchart;
