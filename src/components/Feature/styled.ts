import styled from 'styled-components';

interface Props {
}

export const Container = styled.div`
    width: 100%;
    max-width: 1398px;
    margin: 0 auto;
    margin-bottom: 80px;
`

export const TitleText = styled.div`
    font-family: "OpenSans-SemiBoldItalic";
    font-size: 40px;
    line-height: 54px;
    letter-spacing: -1px;
    -webkit-text-stroke: 2px #000000;
    text-align: center;
    margin-bottom: 50px;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FeatureTab = styled.div`
    width: 443px;
`