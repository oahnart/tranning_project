import styled from 'styled-components'
import BackgroundImg from "assets/images/Header/bg.png";

export const BannerWrapper = styled.div`
    width: 100%;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Container =styled.div`
    max-width: 1398px;
    padding: 100px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    @media only screen and (max-width: 1600px) {
        padding-left: 36px;
        padding-right: 36px;
    }

    @media only screen and (max-width: 1200px) {
        max-width: 992px;
    }
`

export const TextWrapper = styled.div`
    width: 650px;
    margin-top: -50px;

    @media only screen and (max-width: 1366px) {
        width: 530px;
    }

    @media only screen and (max-width: 1200px) {
        margin-top: -20px;
        width: 450px;
    }
`

export const Content = styled.div`
    font-family: "OpenSans-ExtraBoldItalic";
    font-size: 48px;
    line-height: 70px;
    margin-bottom: 50px;

    @media only screen and (max-width: 1366px) {
        font-size: 40px;
        line-height: 56px;
    }

    @media only screen and (max-width: 1200px) {
        font-size: 34px;
        line-height: 48px;
    }
`

export const Image = styled.img`
    width: 709px;
    height: auto;

    @media only screen and (max-width: 1366px) {
        width: 600px;
    }

    @media only screen and (max-width: 1200px) {
        width: 450px;
    }
`

 