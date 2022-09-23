import React from "react";
import { Button } from "components";
import DesImg from "assets/images/Header/des-img.png";

import * as S from "./style";

interface Props {}

function Banner({}: Props): React.ReactElement {
    return (
        <S.BannerWrapper>
            <S.Container>
                <S.TextWrapper>
                    <S.Content>
                        The most trusted platform to manage digital assets on Klaytn
                    </S.Content>
                    <Button href="https://klaysafe.com/welcome">Get in touch</Button>
                    <Button href="https://klaysafe.com/welcome">How it works</Button>
                </S.TextWrapper>
                <S.Image src={DesImg} />
            </S.Container>
        </S.BannerWrapper>
    );
}

export default Banner;
