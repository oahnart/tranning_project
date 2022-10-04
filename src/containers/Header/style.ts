import styled from 'styled-components'

export const Wrapper = styled.div`
   
   .container{
   width:100%;
   z-index: 9999;
   top:0;
   }
   .content {  
      width: 1920px;
      display: flex;
      inline-size: max-content;
      margin: 20px auto;
   }

   .bg{
      position: absolute;
   width: 1920px;
    height: 80px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 14%);
   }
   .Yeolame{
      position:absolute;
   width: 134px;
  height: 40px;
  margin: 0px -0.6px 0px 43px;
  font-family: SegoeUI;
  font-size: 29px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #3f444d;
   }
   .bg_asset{
   width: 67.4px;
  height: 21px;
  margin: 10px 1.5px 8px 164.6px;
  padding: 0 9px 2px 16.4px;
  clip-path: polygon(0 0,90% 0%,100% 50%,90% 100%,0% 100% );
 background-color: #08ceac;
 z-index: -1;
   }
   svg{
      width: 31.5px;
    height: 28px;
    margin: -8px -30px -16px -20.6px;
    color: #08ceac;
   }
   .ww{
      display: flex;
   }
.asset {
   position:absolute;
   width: 42px;
  height: 19px;
  font-family: SegoeUI;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: 2.8px;
  text-align: left;
  color: #fff;
  
}

.span_content{
  font-family: NotoSansKR;
  font-size: 17px;
  line-height: 1.47;
  color: #3f444d;

.log{
  font-family: NotoSansKR;
  width: 145px;
  height: 38px;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  color: #fff; 
  border-radius: 20px;
  background-color: #08ceac;
}
}

.zz{
   margin-left: 215.5px;
}
.ss{
   margin-right:212px;
}
   span{
      margin-right: 70px;
      position: relative;
      color: #3f444d;
   }
  
`














export const Header = styled.div`
   width:100%;
   margin-bottom: 1rem;
`
export const Content = styled.div`
   width:100%;
`

export const Footer = styled.div`
   width:100%;
`