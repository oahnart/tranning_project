import React, { useEffect, useState, createContext } from "react";

import { OverviewHeader, Rankings, Statistics, TableProject } from "components";
import MainTemplate from "templates";
import { statisticalApi, getCategoryApi } from "apis";
import * as S from "./style";

export const CaContext = createContext([]);

function Home() {
  const [dataHeader, setDataHeader] = useState();
  const [categoriesTable, setCategoriesTable] = useState([]);
  useEffect(() => {
    (
      async function getDataStatistical() {
        const res: any = await statisticalApi();
        setDataHeader(res);
        // console.log("res",res);
      }
    )()
  }, [])

  useEffect(() => {
    (
      async function getCategoriesTableApi() {
        const res: any = await getCategoryApi();
        setCategoriesTable(res);
      }
    )()
  }, [])

  return (
    <MainTemplate bgFooter="#f1fbff">
      <S.Container>
        <CaContext.Provider value={categoriesTable}>
          <OverviewHeader headerData={dataHeader} />
          <Rankings res={categoriesTable} />
          <Statistics />
          <TableProject />
          {/* <Footer />     */}
        </CaContext.Provider>
      </S.Container>
    </MainTemplate>
  );
}

export default Home;
