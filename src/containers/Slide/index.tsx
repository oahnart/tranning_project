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
   
   
  return (
  <S.Wrapper >

<Router>
    <div className="my-page">마이페이지</div>
    <div className="container">
    <div className= "bt">
        <Link to="/">
          <button className='dl'>투자현황</button>
        </Link>
        <Link to="/about">
          <button className='dl'>투자내역</button>
        </Link>
        <Link to="/users">
          <button className='dl'>나의계좌</button>
        </Link>
        <Link to="/my">
          <button className='dl'>나의정보</button>
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