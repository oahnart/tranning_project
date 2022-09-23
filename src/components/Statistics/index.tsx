import React, { ReactElement, useEffect, useState } from "react";
import BarChart from "components/BarChart";
import LineChart from "components/LineChart";
import { statisticalHomeApi } from "apis/home";

import LogoImg from "assets/images/Overview/logo-com.png";

import * as S from "./styled";

interface Props {}

function Statistics({}: Props): ReactElement {
    const [ klayData, setKlayData ] = useState<any>(null);
    const [ barChartData, setBarChartData ] = useState<any>(null);
    const [ lineChartData, setLineChartData ] = useState<any>(null);

    useEffect(() => {
        getKlayData();
    }, [])

    const getKlayData = async () => {
        const res = await statisticalHomeApi();
        if (res) setKlayData(res);
    }

    const showValue = (image?: any, name?: string, value?: string) => {
        return (
            <S.SmallCell>
                <S.Row>
                    <S.Image src={image} />
                    <div>
                        <S.Title className="text-left">{name}</S.Title>
                        <S.Content>US $ {value}</S.Content>
                    </div>
                </S.Row>
            </S.SmallCell>
        );
    }

    return (
        <S.Container>
            <S.Row>
                <S.Column>
                    {
                        showValue(LogoImg, "Klaytn (KLAY)", Number(klayData?.price_klay).toFixed(10))
                    }
                    {
                        showValue(LogoImg, "MARKET CAP", Number(klayData?.market_cap_klay).toLocaleString())
                    }
                </S.Column>
                <S.Column>
                    <S.Title>Popular Category</S.Title>
                    <S.Title className="text-blue">NFT 28</S.Title>
                    <BarChart />
                </S.Column>
                <S.Column>
                    <S.Title className="mb-28">Total Amount in use</S.Title>
                    <LineChart />
                </S.Column>
            </S.Row>
        </S.Container>
    );
}

export default Statistics;
