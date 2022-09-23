import React, { ReactElement } from "react";
import KoreaImg from "assets/images/Header/korea.png";
import EnglandImg from "assets/images/Header/england.jpg";

import * as S from "./style";

interface Props {
  setIsKorea: (value: boolean) => void;
  setIsOpen: (value: boolean) => void;
}

function MultipleLanguage({setIsKorea, setIsOpen}: Props): ReactElement {
  const changeLanguage = (value: boolean) => {
    setIsKorea(value);
    setIsOpen(false);
  }

  return (
    <S.Container id="languageOption">
      <S.LanguageButton onClick={() => changeLanguage(true)}>
        <S.LanguageImg image={KoreaImg}/>
        <S.LanguageText>Korea</S.LanguageText>
      </S.LanguageButton>
      <S.LanguageButton onClick={() => changeLanguage(false)}>
        <S.LanguageImg image={EnglandImg}/>
        <S.LanguageText>English</S.LanguageText>
      </S.LanguageButton>
    </S.Container>
  )
}

export default MultipleLanguage;
