import React, { useEffect, useState } from "react";
import { Chart, Geom, Axis } from "bizcharts";
import moment from "moment";
import { getLineChartApi } from "apis/home";

import * as S from "./style";

// const data = [
//   { date: moment("20200128", "YYYYMMDD").format("MMM"), value: "60.00" },
//   { date: moment("20200229", "YYYYMMDD").format("MMM"), value: "80.00" },
//   { date: moment("20200301", "YYYYMMDD").format("MMM"), value: "99.00" },
//   { date: moment("20200402", "YYYYMMDD").format("MMM"), value: "89.00" },
//   { date: moment("20200503", "YYYYMMDD").format("MMM"), value: "79.00" },
//   { date: moment("20200604", "YYYYMMDD").format("MMM"), value: "89.00" },
//   { date: moment("20200705", "YYYYMMDD").format("MMM"), value: "49.00" },
//   { date: moment("20200806", "YYYYMMDD").format("MMM"), value: "79.00" },
//   { date: moment("20200907", "YYYYMMDD").format("MMM"), value: "69.00" },
//   { date: moment("20201007", "YYYYMMDD").format("MMM"), value: "69.00" },
//   { date: moment("20201107", "YYYYMMDD").format("MMM"), value: "69.00" },
//   { date: moment("20201207", "YYYYMMDD").format("MMM"), value: "69.00" },
// ];

const scale = {
  value: {
    type: "linear",
    formatter: (val: any) => {
      return "$" + val;
    },
    tickCount: 6,
    ticks: ["0.00", "50.00", "100.00", "150.00", "200.00", "250.00"],
  },
};

function LineChart() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res: any = await getLineChartApi();
    if (res) {
      res.forEach((element: any) => {
        element.date = moment(element.created_at, "YYYYMMDD").date();
        element.value = element.amount_usd;
      });
      setData(res);
    }
  }

  return (
    <S.Container>
      <Chart width={400} height={190} data={data} scale={scale}>
        <Axis name="date" />
        <Axis name="value" />
        <Geom
          type="line"
          position="date*value"
          shape="smooth"
          color={"#547BFE"}
        />
      </Chart>
    </S.Container>
  );
}

export default LineChart;
