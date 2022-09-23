import styled from 'styled-components';

interface Props {
}

export const Container = styled.div`
    width: 100%;
    max-width: 1398px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ImageWrapper = styled.div`
    width: 804px;
    height: 509px;
    position: relative;

    .table-img {
        position: absolute;
        width: 609px;
        height: auto;
    }

    .language-img {
        position: absolute;
        width: 200px;
        height: auto;
        top: 75px;
        left: 620px;
    }

    .eth-img {
        position: absolute;
        width: 157px;
        height: auto;
        top: 313px;
        left: 106px;
    }

    .ticket-img {
        position: absolute;
        width: 218px;
        height: 255px;
        top: 244px;
        left: 453px;
    }
`

export const TextWrapper = styled.div`
    width: 453px;
`

export const TitleText = styled.div`
    font-family: "OpenSans-ExtraBold";
    font-size: 30px;
    line-height: 41px;
    text-align: right;
    margin-bottom: 16px;
`

export const DetailText = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 18px;
    line-height: 29px;
    color: #757575;
    text-align: right;
`