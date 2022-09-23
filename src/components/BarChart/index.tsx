import React, { useEffect, useState } from "react";
import { Chart, Interval, Tooltip } from "bizcharts";
import { getBarChartApi } from "apis/home";

import * as S from "./style";

// const data = [
//   { name: "DeFi", sales: 38, color: "#66C9C2" },
//   { name: "Gaming", sales: 52, color: "#BCE06F" },
//   { name: "NFT", sales: 61, color: "#86C3DF" },
//   { name: "Enter- tainment", sales: 45, color: "#DF7070" },
//   { name: "Tools", sales: 48, color: "#6D848E" },
//   { name: "Wallets", sales: 38, color: "#208FE2" },
//   { name: "Oracle/ Bridges", sales: 38, color: "#20CB91" },
//   { name: "Dapps", sales: 38, color: "#E0A32C" },
//   { name: "Cexes/ Payments", sales: 38, color: "#DC9B9C" },
//   { name: "Others", sales: 100, color: "#c4ffa2" },
// ];

// const dataNameNft = [
//   { name: "DeFi", id: 1 },
//   { name: "Gaming", id: 2 },
//   { name: "NFT", id: 3 },
//   {
//     name: (
//       <>
//         Enter-
//         <br />
//         tainment
//       </>
//     ),
//     id: 4,
//   },
//   { name: "Tools", id: 5 },
//   { name: "Wallets", id: 6 },
//   {
//     name: (
//       <>
//         Oracle/
//         <br />
//         Bridges
//       </>
//     ),
//     id: 7,
//   },
//   { name: "Dapps", id: 8 },
//   {
//     name: (
//       <>
//         Cexes/
//         <br />
//         Payments
//       </>
//     ),
//     id: 9,
//   },
//   { name: "Others", id: 10 },
// ];

const colors = [
    "#66C9C2",
    "#BCE06F",
    "#86C3DF",
    "#DF7070",
    "#6D848E",
    "#208FE2",
    "#20CB91",
    "#E0A32C",
    "#DC9B9C",
    "#7C68C0",
    "#C4FFA2",
    "#FF9A57"
];

const scale = {
    sales: {
        min: 0,
        max: 100,
        tickCount: 8,
    },
    color: {
        min: 0,
        max: 100,
        tickCount: 8,
    },
};

function BarChart() {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getBarChartData();
    }, []);

    const getBarChartData = async () => {
        const res: any = await getBarChartApi();
        // console.log(res);
        if (res) {
            res.forEach((element: any, index: number) => {
                element.sales = Number(element.total);
                element.name = element.category.value;
                element.color = colors[index];
            });
            setData(res);
        }
    };

    return (
        <S.Container>
            <Chart
                height={190}
                autoFit
                data={data}
                interactions={["active-region"]}
                padding="auto"
                scale={scale}
            >
                <Interval position="name*sales" color="color" size={16} />
                <Tooltip shared />
            </Chart>
            <div className="box-name">
                {data?.map((dt: any, i: any) => (
                    <div className="name" key={i}>
                        {dt?.category.value.length > 5
                            ? `${dt?.category.value.substring(0,3)}`
                            : dt?.category.value}
                    </div>
                ))}
            </div>
        </S.Container>
    );
}

export default BarChart;
