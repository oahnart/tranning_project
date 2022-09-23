import React from 'react';
import * as S from './style';
import Slider from 'components/Slider';
import GroupImg from 'assets/images/Review/Group.png';

interface Props { }

function Review({ }: Props): React.ReactElement {
    return (
        <S.Container>
            <S.ReviewContainer>
            <S.Title>
                What our happy client say
            </S.Title>
            <S.Info>
                Several selected clients, who already believe in our service.
            </S.Info>
            <S.ReviewWrapper>
                <S.ContentWrapper>
                    <Slider />
                </S.ContentWrapper>
                <S.Image>
                    <img src={GroupImg} id="group-image" />
                </S.Image>
            </S.ReviewWrapper>
        </S.ReviewContainer>
        </S.Container>
        
    )
}

export default Review;