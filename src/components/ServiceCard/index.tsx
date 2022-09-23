import React from 'react';
import * as S from './style';

interface Props {
    image?: string;
    title?: string;
    detail?: string;
}

function ServiceCard({image, title, detail}: Props): React.ReactElement {
    return (
        <S.Container>
            <S.Image src={image} />
            <S.Title>{title}</S.Title>
            <S.DetailText>{detail}</S.DetailText>
        </S.Container>
    )
}

export default ServiceCard;