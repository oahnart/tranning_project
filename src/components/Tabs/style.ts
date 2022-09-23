import styled from "styled-components";

export const Tabs = styled.div`
  .wrapper{
    position: relative;
  }
  
  .text{
    text-align: center;
    display:flex;
    margin: 0 -15px;
    gap: 29px;
    padding-left: 16px;
  }
 
  .tabitem{
    padding-bottom: 16px;
    color: #547BFE;
    border-bottom: 2px solid  #547BFE;
    text-align: center;
    width  : 180px;
    
  }
  .tabitem--inactive{
    padding-bottom: 16px;
    color: rgba(84, 123, 254, 0.5);
    border-bottom:  2px solid  rgba(84, 123, 254, 0.5);
    text-align: center;
    width  : 180px;
   
  }
  
  .tabitem__title{
   
    font-family: 'OpenSans-Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    cursor: pointer;
  }

  
  .title{
    font-family: 'OpenSans-ExtraBold';
    font-weight: 800;
    font-size: 30px;
    line-height: 41px;
    color: #000000;
    padding-top: 20px;
    padding-bottom: 16px;
  }
  .content{
    width: 453px;
    height: 174px;
    font-family: 'OpenSans-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    color: #757575;
  }
 
  `
;
 