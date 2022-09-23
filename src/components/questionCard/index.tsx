import React from 'react';
import * as S from './style';
import external from 'assets/images/Question/external-link.png';

interface Props {
    children?: any;
    title?: string;
    info?: string;
    url?: any;
    onClickProp?: () => void
}

function questionCard({ children, onClickProp, title, info, url }: Props): React.ReactElement {
    return (
        <S.questionContainer>
            <S.questionWrapper>
                <S.Title>
                    <S.Question>
                        {title}
                    </S.Question>
                    <S.Link>
                        <a href={url}>
                            <img src={external}></img>
                        </a>
                    </S.Link>
                </S.Title>
                <S.Info>
                    {info}
                </S.Info>
            </S.questionWrapper>
        </S.questionContainer>
    )
}

export default questionCard;