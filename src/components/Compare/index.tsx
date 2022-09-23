import React, { ReactElement } from "react";

import CheckIcon from "assets/icons/check.svg";
import XIcon from "assets/icons/x.svg";
import UncheckIcon from "assets/icons/uncheck.svg";
import LineIcon from "assets/icons/line.svg";
import GroupImg from "assets/images/Compare/group.png";
import DotsImg from "assets/images/Compare/dots.png";
import ElipImg from "assets/images/Compare/elip.png";

import * as S from "./styled";

interface Props {
}

function Compare({} :Props) : ReactElement {
    const columns = ["Klay Safe", "'Old' Multisig", 'Software wallets ("EOA")', "Hardware wallets", "Centralised exchange"];
    
    const rows = [
      { name: "Multi-signature", status: [0, 0, 3, 3, 3] },
      { name: "DeFi integrations", status: [0, 3, 1, 3, 3] },
      { name: "Privacy", status: [0, 0, 1, 0, 3] },
      { name: 'Collectibles ("NFTs")', status: [0, 3, 1, 3, 3] },
      { name: "Gasless signatures", status: [0, 3, 2, 2, 2] },
      { name: "Open source", status: [0, 0, 1, 3, 3] },
      { name: "Formally verified", status: [0, 3, 3, 3, 3] },
    ];

    const handleShowStatus = (status: number) => {
      if (status == 0) return <S.IconImg src={CheckIcon} />;
      if (status == 1) return <S.IconImg src={UncheckIcon} />;
      if (status == 2) return <S.IconImg src={LineIcon} />;
      if (status == 3) return <S.IconImg src={XIcon} />;
    }

    return (
      <S.CompareWrapper>
        <S.Container>
            <img src={GroupImg} className="group-img" />
            <img src={DotsImg} className="dots-img" />
            <img src={ElipImg} className="eclip-img" />
            <S.HeaderText>Compare storage solutions</S.HeaderText>
            <S.Table>
              <S.Row>
                <S.RightColumnGrid></S.RightColumnGrid>
                { columns.map(item => (
                  <S.HeaderTableGrid>
                    <S.ContentText>{item}</S.ContentText>
                  </S.HeaderTableGrid>
                ))}
              </S.Row>
              {
                rows.map(row => (
                  <S.Row>
                    <S.RightColumnGrid>{row.name}</S.RightColumnGrid>
                    {
                      row.status.map(item => (
                        <S.ContentGrid>{handleShowStatus(item)}</S.ContentGrid>
                      ))
                    }
                  </S.Row>
                ))
              }
            </S.Table>
        </S.Container>
      </S.CompareWrapper>
    );
}

export default Compare;
