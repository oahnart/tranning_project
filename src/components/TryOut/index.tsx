import React from 'react';
import Slider from 'react-slick';
import * as S from './style';
import tryOutBg from 'assets/images/TryOut/tryOutBg.png';
import { Button } from "components";


interface Props { }

function TryOut({ }: Props): React.ReactElement {
    return (
        <S.TryOutContainer>
            <S.Wrapper>
                <S.TryOutWrapper>
                    <S.Content>
                        <S.Title>
                            Try out now
                        </S.Title>
                        <S.Info>
                            Create a new Safe that is controlled by one or multiple owners
                        </S.Info>
                        <a href="https://klaysafe.com/welcome">
                            <Button>Create new safe</Button> 
                        </a>
                    </S.Content>
                    <S.Image>
                        <img src={tryOutBg} />
                    </S.Image>
                </S.TryOutWrapper>
            </S.Wrapper>

        </S.TryOutContainer>
    )
}

export default TryOut;