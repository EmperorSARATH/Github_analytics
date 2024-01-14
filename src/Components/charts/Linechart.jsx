import { useContext, useEffect, useState } from "react";
import { ch_data } from "./ChartData";
import { Context } from "../../contexts/Context";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Linechart = () => {
  const [plotdata, setplotdata] = useState({});

  const { dta } = useContext(Context);
  const [dt] = dta;
  const createData = async () => {
    setplotdata(await ch_data(dt));
  };

  console.log(plotdata);

  useEffect(() => {
    createData();
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
