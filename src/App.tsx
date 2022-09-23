/**
 * @author Peter
 * @email [hoangvanlam9988@gmail.com]
 * @create date 2022-01-26 11:42:50
 * @modify date 2022-01-26 11:42:50
 * @desc [description]
 */
import "antd/dist/antd.css";
import React, { lazy } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
/** Common */
import { UrlInternal } from "common/constants/endpoints";
import GlobalStyles from "common/style/GlobalStyle";
import Normalize from "common/style/Normalize";
import defaultTheme from "common/style/themes/default";

/** Router Global */
import { PublicRoute } from "router"; //PrivateRoute,

/** Utils */
import ScrollToTop from "utils/ScrollToTop";

import { Header, Footer } from "components";

/** Page */
const Home = lazy(() => import("pages/Home"));
const Company = lazy(() => import("pages/Company"));
const TestComponent = lazy(() => import("TestComponent"));

// console.log("getDataById", a);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Normalize />
      <GlobalStyles />
      <Router>
        {/* <Header /> */}
        <ScrollToTop />
        <Switch>
          <PublicRoute exact path={UrlInternal.HOME} component={Home} />
          <PublicRoute exact path={UrlInternal.COMPANY} component={Company} />
          <PublicRoute
            exact
            path={UrlInternal.TEST}
            component={TestComponent}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
