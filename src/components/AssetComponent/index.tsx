import React, { ReactElement } from "react";
import TableImg from "assets/images/Assets/table.png";
import LanguageImg from "assets/images/Assets/language.png";
import EthImg from "assets/images/Assets/eth.png";
import TicketImg from "assets/images/Assets/ticket.png";

import * as S from "./styled";

interface Props {}

function AssetComponent({}: Props): ReactElement {
    return (
        <S.Container>
            <S.ImageWrapper>
                <img src={TableImg} className="table-img"/>
                <img src={LanguageImg} className="language-img"/>
                <img src={EthImg} className="eth-img"/>
                <img src={TicketImg} className="ticket-img"/>
            </S.ImageWrapper>
            <S.TextWrapper>
                <S.TitleText>Assets</S.TitleText>
                <S.DetailText>
                    Klay Safe supports ETH tokens, ERC20, KIP7 and ETH NFTs,
                    ERC721, KIP17. You can also see the fiat values of your
                    assets.
                </S.DetailText>
            </S.TextWrapper>
        </S.Container>
    );
}

export default AssetComponent;
