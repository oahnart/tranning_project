import styled from 'styled-components'

export const Container = styled.div`
    width: 335px;
    height: 375px;
    padding: 40px;
    border-radius: 40px;
    border: 1px solid #F2F2F2;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.05);
    background-color: #FFFFFF;

    @media only screen and (max-width: 1600px) {
        width: 315px;
        padding: 40 20px;
    }

    @media only screen and (max-width: 1366px) {
        width: 295px;
        padding: 40px 20px;
    }
`

export const Image = styled.img`
    width: 135px;
    height: auto;
    margin-left: 23%;
`

export const Title = styled.div`
    font-family: "OpenSans-BoldItalic";
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 15px;
`

export const DetailText = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 16px;
    line-height: 22.4px;
    text-align: center;
    color: #757575;
`

 