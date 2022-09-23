import styled from 'styled-components'
import BackgroundImg from "assets/images/Overview/bg.png";

export const HeaderWrapper = styled.div`
    padding-top: 65px;
    width: 100%;
`

export const Container =styled.div`
    max-width: 1398px;
    padding: 100px 0;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 35px;
    border: 1px solid #547BFE;
    border-radius: 30px;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    text-align: center;
`

export const Title = styled.div`
    margin-bottom: 5px;
    font-family: "OpenSans-ExtraBoldItalic";
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #547BFE;
`

export const ContentText = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #547BFE;
`

export const StatisticContainer = styled.div`
    margin: auto;
    margin-top: 40px;
    margin-bottom: 53px;
    width: 600px;
    display: flex;
    justify-content: center;
`

export const StatisticElement = styled.div`
    width: 300px;

    &:first-child {
        border-right: 1px solid #547BFE;
    }
`

export const StatisticNumber = styled.div`
    font-family: "OpenSans-SemiBold";
    font-size: 55px;
    line-height: 75px;
    color: #272727;
    margin-bottom: 8px;
    text-align: center;
`

export const StatisticTitle = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 16px;
    line-height: 26px;
    color: #525356;
    text-align: center;
`

export const Button = styled.a`
    display: inline-block;
    margin: 0 auto;
    padding-top: 9px;
    width: 340px;
    height: 45px;
    font-family: "OpenSans-Bold";
    font-size: 15px;
    color: #547BFE;
    background-color: #FFF;
    border-radius: 45px;
    border: 1px solid #547BFE;
`