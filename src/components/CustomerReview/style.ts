import styled from 'styled-components'
import Bg2 from 'assets/images/Review/Ellipse.png';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* margin-bottom: 55px; */
`

export const ReviewContainer = styled.div`
    margin: auto;
    margin-bottom: 50px;
    width: 100%;
    max-width: 1398px;
    display: flex;
    justify-content: center;
    flex-direction: column;

`

export const Title = styled.div`
    font-family: 'OpenSans-SemiBoldItalic';
    font-size: 40px;
    line-height: 54px;
    text-align: center;

    -webkit-text-stroke: 2px #000000;
    color: #000000;
    margin-bottom: 12px;
`

export const Info = styled.div`
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;

    color: #757575;
    margin-bottom: 71px;
`

export const ReviewWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
 `

export const ContentWrapper = styled.div`
    width: 70%;
 `

export const Image = styled.div`
    margin-top: 42px;
    width: 30%;
    background-image: url(${Bg2});
    background-repeat: no-repeat;
    background-position: 7% 52%;
    img {
        max-width: 348px;
        width: 100%;
    }
`

 