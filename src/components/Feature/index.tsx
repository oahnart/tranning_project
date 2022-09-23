import React, { ReactElement, useState } from "react";
import FeatureImg from "assets/images/Assets/feature.png";
import FeatureImg2 from "assets/images/Assets/feature-2.png";
import { Tabs } from "components";

import * as S from "./styled";

interface Props {}

function Feature({}: Props): ReactElement {
    const [active, setActive] = useState<number>(0);

    return (
        <S.Container>
            <S.TitleText>Features</S.TitleText>
            <S.Row>
                <S.FeatureTab>
                    <Tabs handleChange={setActive} />
                </S.FeatureTab>
                {
                    active===0 ? (
                        <img src={FeatureImg} />
                    ) : (
                        <img src={FeatureImg2} />
                    )
                }
                
            </S.Row>
        </S.Container>
    );
}

export default Feature;
