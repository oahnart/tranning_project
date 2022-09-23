import styled from "styled-components";

interface Props {
    image?: string;
}

export const Container = styled.div`
    margin-top: 20px;
    padding: 5px;
    width: 130px;
    height: auto;
    background-color: white;
    border-radius: 8px;
    box-shadow: 1px 1px 10px #00000050;
`

export const LanguageButton = styled.button`
    padding-left: 15px;
    width: 100%;
    height: 36px;
    background: none;
    border-radius: 8px;
    vertical-align: middle;
    text-align: left;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #efefef;
    }
`

export const LanguageImg = styled.div<Props>`
    display: inline-block;
    margin-right: 15px;
    background: none;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid #e5e5e5;
    box-shadow: inset 2px 5px 5px #00000050;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const LanguageText = styled.text`
    padding-top: 3px;
    font-family: "OpenSans-Regular";
    font-size: 14px;
`
