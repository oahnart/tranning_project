import styled from 'styled-components';

interface Props {
}

export const Container = styled.div`
    width: 100%;
    max-width: 1398px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 25px;
    border-radius: 30px;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
`

export const Row = styled.div`
    display: flex;

    .text-left {
        text-align: left;
    }

    .text-blue {
        color: #547bfe;
    }

    .mb-28 {
        margin-bottom: 38px !important;
    }
`

export const Column = styled.div`
    &:first-child {
        width: 331px;
        border-right: 1px solid #E1E1E1;
    }

    &:nth-child(2) {
        width: 576px;
        padding: 5px 46px 5px 13px;
        border-right: 1px solid #E1E1E1;
    }

    &:nth-child(3) {
        padding: 5px 0px 5px 46px;
    }
`

export const SmallCell = styled.div`
    padding: 0 15px;

    &:first-child {
        border-bottom: 1px solid #E1E1E1;
        padding-top: 21px;
        padding-bottom: 46px;
    }

    &:last-child {
        padding-top: 46px;
        padding-bottom: 21px;
    }
`

export const Image = styled.img`
    margin-right: 20px;
`

export const Title = styled.div`
    margin-bottom: 8px;
    font-family: "OpenSans-BoldItalic";
    font-size: 24px;
    line-height: 33px;
    color: #272727;
    text-align: center;
`

export const Content = styled.div`
    font-family: "OpenSans-Regular";
    font-size: 20px;
    line-height: 27px;
    color: #525356;
`