import React from "react";
import {
  Banner,
  Footer,
  Header,
  Review,
  Question,
  Feature,
  Assets,
  Compare,
  Services,
  TryOut,
} from "components";

import * as S from "./style";
import MainTemplate from "templates";

function Company() {
  return (
    <MainTemplate>
      <S.Container>
        <Banner />
        <Services />
        <S.FeaturesContainer>
          <Feature />
          <Assets />
        </S.FeaturesContainer>
        <Compare />
        <Question />
        <Review />
        <TryOut />
      </S.Container>
    </MainTemplate>
  );
}

export default Company;
