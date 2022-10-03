import React from "react";
import Header from "containers/Header";
import Slide from '../../containers/Slide/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import * as S from "./style";


function MyPage() {
  return (
  <div>
    <S.Container>
    <Header />
      <Switch>  
        <Router>
        <Route exact path='/' component ={ Slide } />
      
        </Router>
      </Switch>
      </S.Container>
   
 
  </div>
  )
}

export default MyPage;
