import styled from 'styled-components'
import Bg1 from 'assets/images/Review/Dot.png';
import Bg2 from 'assets/images/Review/Ellipse.png';
import Bg3 from 'assets/images/Review/Ellipse1.png';

export const SliderContainer = styled.div`
    width: 100%;
    /* max-width: 841px; */
    margin: 0 auto;
 `

export const SliderWrapper = styled.div`
    .slick-slider > .slick-dots {
        display: inline-block;
        width: fit-content;
        height: fit-content;

        position: absolute;
        left: 460px;
        top: 66%;
    }
    .slick-slider > .slick-dots > li > button::before{
        font-size: 16px;
        color: #E7F0FC;
        opacity: 1;
    }
    .slick-slider > .slick-dots > li.slick-active > button::before{
        color: #2639ED;
    }   
    .slick-slider > .slick-dots > li {
        margin: 0 23px 0 0 !important;
    }
 `

export const SliderContent = styled.div`
    display: flex; 
    position: relative;
    align-items: center;

    /* justify-content: space-between; */
`
export const PictureWrapper = styled.div`
    padding: 42px 37px 0 10px;

    background-image: url(${Bg1}), url(${Bg3});
    background-repeat: no-repeat, no-repeat;
    background-position: top right,left 0px bottom 12px;
`

export const ProfilePicture = styled.img`
    width: 100%;


`

export const Content = styled.div`
    margin: 0 0 6% 3%;
`

export const Name = styled.div`
    font-family: 'OpenSans-Regular';
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 16px;

    -webkit-text-stroke: 0.8px #000000;
    color: #000000;
`

export const Quote = styled.div`
    max-width: 375px;
    font-family: 'OpenSans-Regular';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #565656;
`
