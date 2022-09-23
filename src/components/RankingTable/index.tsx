import React, { useEffect, useState, useContext } from "react";
import { Popover, Table } from "antd";
import moment from "moment-timezone";

import { topListApi, getCategoryApi } from "apis/home";

import * as S from "./style";
import { CaContext } from "pages/Home";

interface Props {
    icon?: string;
    name?: string;
    type?: any;
    column?: any;
    value?: any;
}

function RankingTable({ icon, name, type, column, value }: Props): React.ReactElement {
    const [data, setData] = useState<any>([]);
    // const [categoryData, setCategoryData] = useState<any>([]);

    // let result = []
    // if (value.length != 0) {
    //     result = value;
    //     console.log("result", result)
    // }
    const categoryData = value;
    // setCategoryData(result)

    const columns = [
        {
            title: "",
            dataIndex: "id",
            key: "id",
            width: "10%",
            render: (text: any, record: any, index: number) => ++index,
        },
        {
            title: "",
            dataIndex: column[0],
            key: column[0],
            width: "23%",
        },
        {
            title: "",
            dataIndex: column[1],
            key: column[1],
            width: "40%",
            align: "center" as const,
            render: (text: string) => {
                if (type !== "HIGHEST") {
                    let category: any = text.split(",");
                    let newCategory: any = [];
                    category?.map((item: any) => {
                        categoryData.map((element: any) => {
                            if (element.key === item) newCategory.push(element.value);
                        })
                    })

                    return newCategory.length <= 2 ? (
                        <>
                            {newCategory.join(" + ")}
                        </>
                    ) : (
                        <>
                            {newCategory[0] + " + "}
                            <S.PopoverWrapper>
                                <Popover content={newCategory.join(" + ")}>
                                    {category.length - 1}
                                </Popover>
                            </S.PopoverWrapper>
                        </>
                    )
                }
            }
        },
        {
            title: "",
            dataIndex: column[2],
            key: column[2],
            width: "37%",
            align: "right" as const,
            render: (text: string) => {
                // console.log(type);
                // console.log(text);

                if (type === "HIGHEST") {
                    return text ? Number(text).toFixed(6)?.toLocaleString() + "$" : "0$";
                } else {
                    return text || "";
                }
            }
        },
    ];


    useEffect(() => {
        // getCategory();
        getData();
    }, []);


    // const getCategory = async () => {
    //     const res: any = await getCategoryApi();
    //     if (res) {
    //         setCategoryData(res);
    //     }
    // }

    const getData = async () => {
        const res: any = await topListApi({ type: type });
        if (res) {
            res.forEach((element: any) => {
                element.date = moment(element.created_at).format("YYYY.MM.DD");
            });
            setData(res);
        }
    }

    // console.log(data);



    return (
        <S.Container>
            <S.RankingTitle>
                <S.IconImg>
                    <img src={icon} />
                </S.IconImg>
                {name}
            </S.RankingTitle>
            <S.TableWrapper>
                <Table
                    showHeader={false}
                    dataSource={data}
                    columns={columns}
                    pagination={false}
                    bordered={false}
                />
            </S.TableWrapper>
        </S.Container>
    );
}

export default RankingTable;
