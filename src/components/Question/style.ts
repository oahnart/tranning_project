import styled from 'styled-components'
import bg2 from 'assets/images/Question/bg2.png';
import bg1 from 'assets/images/Question/bg1.png';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const QuestionContainer = styled.div`
    display: flex;

    max-width: 1398px;
    width: 100%;
    justify-content: space-between;
    /* gap: 4%; */
    margin-bottom: 50px;

    margin: 150px auto;
    width: 100%;
    max-width: 1398px;
    gap: 4%;
    margin-bottom: 80px;

 `

export const QuestionWrapper = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;

    background-image: url(${bg1});
    background-repeat: no-repeat;
    background-position: right 169px bottom 22px;
    padding-bottom: 50px;
`
export const CardWrapper = styled.div`
    width:86%;
    
    :nth-child(1) {
        align-self: start;
    }

    :nth-child(2) {
        align-self: end;
    }
    :nth-child(3) {
        align-self: center;
    }
`


export const Guide = styled.div`
    width: 38%;
    margin-top: 4%;
    padding: 20px 0 0 34px;

    background-image: url(${bg2});
    background-repeat: no-repeat;
`

export const GuideTitle = styled.div`
    max-width: 510px;
    margin-bottom: 20px;

    font-family: 'OpenSans-SemiBoldItalic';
    -webkit-text-stroke: 2px #000000;
    font-size: 40px;
    line-height: 54px;

    color: #000000;
`

export const GuideInfo = styled.div`
    font-family: 'OpenSans-Regular';
    font-size: 16px;
    line-height: 26px;
    max-width: 480px;

    color: #565656;
`