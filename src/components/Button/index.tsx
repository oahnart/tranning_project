import React from 'react';
import * as S from './style';

interface Props {
    href?: string;
    children?: any;
	onClickProp?: ()=> void
 }

function Button({ children,onClickProp, href }: Props): React.ReactElement {
    const onClickButton = () =>{
        if (href) {window.location.href=`${href}`};
    }

    return (
        <S.CustomizedButton onClick={onClickButton}>
            {children}
        </S.CustomizedButton>
    )
}

export default Button;