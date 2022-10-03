/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-26 11:42:50
 * @modify date 2022-01-26 11:42:50
 * @desc [description]
 */
import "antd/dist/antd.css";
import React, { lazy, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
/** Common */
import { UrlInternal } from "common/constants/endpoints";
import GlobalStyles from "common/style/GlobalStyle";
import Normalize from "common/style/Normalize";
import defaultTheme from "common/style/themes/default";

import DataResponse from "dataResponse/response.json";
import fileDownload from "js-file-download";

/** Router Global */
import { PublicRoute } from "router"; //PrivateRoute,

/** Utils */
import ScrollToTop from "utils/ScrollToTop";
import { downloadExcel, DownloadTableExcel } from "react-export-table-to-excel";

/** Page */
const Mypage = lazy(() => import("pages/Mypage"));

// console.log("getDataById", a);

const App: React.FC = () => {
  const tableRef = useRef(null);
  const [data, setData] = useState([]);
  const header = ["id", "text vn", "text english"];

  useEffect(() => {
    const data: any = DataResponse.list.map((data, index) => ({
      id: index,
      textVN: data.content.submission.target.content,
      textEN: data.content.text,
    }));
    console.log("data", data);
    setData(data);
    // fileDownload(data, "filename.csv");
  }, []);

  function handleDownloadExcel() {
    downloadExcel({
      fileName: "react-export-table-to-excel -> downloadExcel method",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        // accept two different data structures
        body: data,
      },
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <GlobalStyles />
      <button onClick={handleDownloadExcel}>download excel</button>
      <Router>
        {/* <Header /> */}
        <ScrollToTop />
        <Switch>
          <PublicRoute exact path={UrlInternal.MYPAGE} component={Mypage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
