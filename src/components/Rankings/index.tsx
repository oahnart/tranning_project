import React, { ReactElement, useContext } from "react";
import { RankingTable } from "components";

import RankingIcon1 from "assets/icons/ranking-icon-1.svg";
import RankingIcon2 from "assets/icons/ranking-icon-2.svg";
import RankingIcon3 from "assets/icons/ranking-icon-3.svg";

import * as S from "./styled";
import { CaContext } from "pages/Home";

interface Props {
    res: any
}

function Rankings({res}: Props): ReactElement {
    // const res = useContext(CaContext)
    // console.log(res,"res")
    return (
        <S.Container>
            <RankingTable
                type="RECENTLY"
                icon={RankingIcon1}
                name="Recently Completed Project TOP 5"
                column={["name", "category", "date"]}
                value={res}
            />
            <RankingTable
                type="LONGEST"
                icon={RankingIcon2}
                name="The Longest-used project TOP 5"
                column={["name", "category", "month"]}
                value={res}
            />
            <RankingTable
                type="HIGHEST"
                icon={RankingIcon3}
                name="The Highest Amount Safe"
                column={["name", "", "sum"]}
                value={res}
            />
        </S.Container>
    );
}

export default Rankings;
