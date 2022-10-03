import React,{useState} from 'react'
import * as S from './style'
import Body from '../../pages/Mypage/body/body'
import Content2 from '../../pages/Mypage/Content2/' 

import {
    BrowserRouter as Router,
    Switch,
    Route,
   Link
  } from "react-router-dom";

function Slide() {
  const  [cli,setCli] = useState('1');
   
  return (
  <S.Wrapper >

<Router>
    <div className="my-page">마이페이지</div>
    <div className="container">
    <div className= "bt" >
        <Link to="/">
          <button className={`dl ${cli === '1' ? 'active' :''}`} onClick={() => setCli('1')}>투자현황</button>
        </Link>
        <Link to="/about">
          <button className={`dl ${cli === '2'? 'active' :''}`} onClick={() => setCli('2')}>투자내역</button>
        </Link>
        <Link to="/users">
          <button className={`dl ${cli === '3' ? 'active' :''}`} onClick={() => setCli('3')}>나의계좌</button>
        </Link>
        <Link to="/my">
          <button className={`dl ${cli === '4' ? 'active' :''}`} onClick={() => setCli('4')}>나의정보</button>
        </Link>
        </div>
        <div className ="component">
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/about" component={Content2} />
        </Switch>
        </div>
        </div>
    </Router>
            
  </S.Wrapper>
  )
}

export default Slide