import React, { useContext, useEffect, useRef, useState } from "react";
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
import { Context } from "../../contexts/Context";


const Barchart = () => {
  const {dta} = useContext(Context);
  const [dt, setDt] = dta;
  const [plotdata, setplotdata] = useState({});
  const createData = async () => {
    setplotdata(await ch_data(dt));
  };

 
  useEffect(() => {
  
      createData();
      //preload();


    }, [plotdata]);
  return (
    <BarChart width={500} height={300} data={plotdata}>
      <XAxis dataKey="month" label={"month"} />
      <YAxis dataKey="count" label={"count"} />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default Barchart;
