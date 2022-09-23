
// import { TableProject, Banner, Footer, Header, Slider, Button,Question, Feature, Assets, Compare, Services, TryOut, Review } from "components";


import {
  Banner,
  Footer,
  Header,
  Slider,
  Question,
  Feature,
  Assets,
  Compare,
  Services,
  TryOut,
  Review,
  OverviewHeader,
  Rankings,
  Select,
  SearchInput,
  LineChart,
  BarChart,
  Tabs,
  AreaChart,
  TableProject,
} from "components";

import React from "react";
import * as S from "./style";

function Test() {
  return (
    <S.Container>
      {/**chart */}
      <p className="span-test">LineChart</p>
      <LineChart />
      <p className="span-test">BarChart</p>
      <BarChart />

      {/*********Overview Page*********************** */}
      <p className="span-test">Overview Header</p>
      <OverviewHeader />

 

      {/** Select Component */}
      <p className="span-test">Select Component</p>
      {/* <Select
        options={[
          { label: "Category", value: "" },
          { label: "Cate 1", value: "1" },
          { label: "Cate 2", value: "2" },
          { label: "Cate 3", value: "3" },
        ]}
      />
      <Select
        options={[
          { label: "Badge", value: "" },
          { label: "Cate 1", value: "1" },
          { label: "Cate 2", value: "2" },
          { label: "Cate 3", value: "3" },
        ]}
      /> */}

      {/*Searach Input*/}
      {/* <p className="span-test">Search Component</p>
      <SearchInput /> */}

      {/**header */}
      <p className="span-test">header</p>
      <Header />

      {/**banner*/}
      <p className="span-test">banner</p>
      <Banner />

      {/**services*/}
      <p className="span-test">services</p>
      <Services />

      {/**features */}
      <p className="span-test">features</p>
      <S.FeatureContainer>
        <Feature />
        <Assets />
      </S.FeatureContainer>
      <Compare />

      {/**Lower part */}
      <p className="span-test">Lower part</p>
      <Question />
      <Review />
      <TryOut />
      <Footer />
      
    </S.Container>
  );
}

export default Test;
