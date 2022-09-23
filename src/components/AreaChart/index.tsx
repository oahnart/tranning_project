import React from "react";
import { Area, ResponsiveContainer, AreaChart } from "recharts";
import * as S from "./style";

interface Props {
  data:any
}

function AreaCharts({data}:Props) {
  return (
    <S.Container>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="colorUv"
              x1="-2.81256e-07"
              y1="25"
              x2="273.5"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#033DFF" />
              <stop offset="1" stopColor="#C7EFFF" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#fff"
            fill="url(#colorUv)"
            // fill="#547BFE"
          />
        </AreaChart>
      </ResponsiveContainer>
    </S.Container>
  );
}

export default AreaCharts;
