import styled from 'styled-components'

export const Wrapper = styled.div`
   
   .container{
     
      width:100%;
   z-index: 9999;
   top:0;
   }
   .content {  
      position:absolute;
      display: flex;  
      flex-direction: row;
      
   }
   .bg{
     
   width: 1920px;
  height: 80px;
  margin: 0 0 42px;
  padding: 20px 261px 3px 261px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
   }
   .Yeolame{
      position:absolute;
   width: 134px;
  height: 40px;
  margin: 0 51.4px 0 0;
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
  margin: 10px 2.5px 8px 125.6px;
  padding: 0 9px 2px 16.4px;
  background-color: #08ceac;
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
   position: relative;
   height: 25px;
  font-family: NotoSansKR;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: #3f444d;

.log{
   position: relative;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff; 
  margin: 1px 0 18px 20px;
  padding: 6.1px 50.5px 7.9px 50.5px;
  border-radius: 20px;
  background-color: #08ceac;
}
}


   span{
      position: relative;
      margin: 10px 70px 25px 70px;
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