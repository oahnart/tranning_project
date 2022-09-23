import React from "react";
import { Button } from "components";
import DesImg from "assets/images/Header/des-img.png";

import * as S from "./style";

interface Props {
    headerData?: any,
}

function OverviewHeader({ headerData }: Props): React.ReactElement {
    return (
        <S.HeaderWrapper>
            <S.Container>
                <S.Title>Welcome to Klay Safe</S.Title>
                <S.ContentText>Knosis Safe is the most trusted platform to manage digital assets</S.ContentText>
                <S.StatisticContainer>
                    <S.StatisticElement>
                        <S.StatisticNumber>{(+headerData?.total_amount).toFixed(2)}$</S.StatisticNumber>
                        <S.StatisticTitle>Total Storage Amount</S.StatisticTitle>
                    </S.StatisticElement>
                    <S.StatisticElement>
                        <S.StatisticNumber>{(headerData?.total_project < 10) ? ("00" + headerData?.total_project)
                            : (headerData?.total_project < 100 && headerData?.total_project >=10) ? ("0" + headerData?.total_project)
                            : ( headerData?.total_project)   
                    }</S.StatisticNumber>
                        <S.StatisticTitle>Projects</S.StatisticTitle>
                    </S.StatisticElement>
                </S.StatisticContainer>
                <S.Button href="https://klaysafe.com/welcome">Start create Safe</S.Button>
            </S.Container>
        </S.HeaderWrapper>
    );
}

export default OverviewHeader;
