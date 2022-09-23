import styled from 'styled-components';

interface Props {
}

export const CompareWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1398px;
    padding-top: 144px;
    margin: 0 auto;
    position: relative;

    .group-img {
        position: absolute;
        width: 462px;
        height: auto;
        top: 0;
        left: -8vw;
    }

    .dots-img {
        position: absolute;
        width: 113px;
        height: auto;
        top: 490px;
        right: -14vw;
    }

    .eclip-img {
        position: absolute;
        width: auto;
        height: 104px;
        top: 648px;
        right: -15vw;
    }
`

export const HeaderText = styled.div`
    font-family: "OpenSans-SemiBoldItalic";
    font-size: 40px;
    line-height: 54px;
    text-align: center;
    letter-spacing: -1px;
    margin-bottom: 60px;
    -webkit-text-stroke: 2px #000000;
`

export const Table = styled.div`
    width: 100%;
`

export const Row = styled.div`
    display: flex;
`

export const HeaderTableGrid = styled.div`
    width: 16%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RightColumnGrid = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 24px;
    width: 20%;
    padding: 25px 0;
`

export const ContentGrid = styled.div`
    width: 16%;
    text-align: center;
    padding: 25px 0;
`

export const ContentText = styled.div`
    width: 181px;
    font-family: "OpenSans-Bold";
    font-size: 24px;
    text-align: center;
`

export const IconImg = styled.img`
    width: auto;
    height: auto;
`

