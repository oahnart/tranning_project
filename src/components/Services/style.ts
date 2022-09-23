import styled from 'styled-components'

export const ServicesWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 110px;

    .elip-img {
        position: absolute;
        width: 120px;
        height: auto;
        top: 90px;
        left: 170px;
        z-index: -1;
    }

    .dots-img {
        position: absolute;
        width: 405px;
        height: auto;
        top: 0px;
        left:  303px;
        z-index: -1;
    }

    
`

export const Container =styled.div`
    max-width: 1398px;
    padding-top: 120px;
    padding-bottom: 140px;
    display: flex;
    justify-content: space-between;
    margin: auto;

    @media only screen  and (max-width: 1600px) {
        padding-left: 36px;
        padding-right: 36px;
    }
`

export const LeftWrapper = styled.div`
    width: 1045px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1600px) {
        width: 985px;
    }

    @media only screen and (max-width: 1366px) {
        width: 925px;
    }
`

export const RightWrapper = styled.div`
    position: relative;
    width: 280px;
`

export const ServiceTitle = styled.div`
    font-family: "OpenSans-SemiBoldItalic";
    font-size: 40px;
    line-height: 54px;
    text-align: right;
    margin-top: 60px;
    margin-bottom: 20px;
    -webkit-text-stroke: 2px #000000;
`

export const ContentText = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 16px;
    line-height: 25.6px;
    text-align: right;
    margin-bottom: 43px;
    color: #565656;
`

export const Link = styled.a`
    font-family: "OpenSans-RegularItalic";
    font-size: 16px;
    line-height: 25.6px;
    text-align: right !important;
    color: #547bfe;
    text-decoration: underline;
`

export const LinkIcon = styled.span`
    margin-left: 10px;
`
 
export const BackgroundDiv = styled.div`
    position: absolute;
    width: 178px;
    height: 178px;
    border-top-right-radius: 100px;
    background-color: #FFF5DB;
    top: 0;
    right: -50px;
    z-index: -1;
`