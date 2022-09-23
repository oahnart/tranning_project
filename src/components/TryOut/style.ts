import styled from 'styled-components'
import DotBg from 'assets/images/TryOut/dotBG.png';
import RectangleBg from 'assets/images/TryOut/RectangleBg.png';

export const TryOutContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    /* margin-bottom: 120px; */
 `

export const Wrapper = styled.div`
   width: 100%;
   max-width: 1398px;
   padding: 56px 41px 39px 42px;

    max-width: 1398px;
    padding: 56px 41px 39px 42px;

    background-image: url(${DotBg}), url(${RectangleBg});
    background-repeat: no-repeat, no-repeat;
    background-position: top right, bottom left;
`

export const TryOutWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;

    background: linear-gradient(89.94deg, #ECF7FF 25.83%, #DBF0FF 99.92%);
    border-radius: 75px;
 `
 
 export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 50px 0px;
 `
 
 export const Image = styled.div`
   display: flex;
   align-items: center;
   img {
         max-width: 518px;
         width: 100%;
      }
 `
 
 export const Title = styled.div`
    font-family: 'OpenSans-SemiBoldItalic';
    -webkit-text-stroke: 2px #000000;
    font-size: 40px;
    line-height: 54px;
    color: #000000;

    padding-bottom: 12px;
    
 `

export const Info = styled.div`
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #757575;
    
    margin-bottom: 24px;
`