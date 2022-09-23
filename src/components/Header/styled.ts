import styled from "styled-components";
import KoreaImg from "assets/images/Header/korea.png";
import EnglandImg from "assets/images/Header/england.jpg";
import { ReactElement } from "bizcharts/lib/components/Annotation";

interface Props {
  isKorea?: boolean;
}

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16) !important;
  position: relative;
  z-index: 1;
`

export const Container = styled.div`
  max-width: 1398px;
  height: 55px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1600px) {
    padding: 0 36px;
  }
`;

export const Logo = styled.a`
  width: 172px;
  height: 35px;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: auto;
`;

export const Menu = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
`;

export const NavBar = styled.ul`
  margin-bottom: 0;
  height: 55px;
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  border-right: 1px solid #e5e5e5;

  .active {
    color: #547bfe;
  }
`;

export const NavItem = styled.div`
  display: inline-block;
  cursor: pointer;
  font-family: "OpenSans-SemiBold";
  font-size: 16px;
  padding: 0 20px;
  color: #525356;

  &:hover {
    color: #7e9bff;
  }
`;

export const MulLanguagesWrapper = styled.div`
  width: 54px;
  height: 24px;
  margin-right: 30px;
`;

export const MulLanguagesButton = styled.button<Props>`
  margin-left: 30px;
  background: none;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  border: 1px solid #e5e5e5;
  box-shadow: inset 2px 5px 5px #00000050;
  background-image: url(${(props) => (props.isKorea ? KoreaImg : EnglandImg)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HeaderButton = styled.div`
  button {
    padding: 0 15px;
    padding-top: 0px;
    width: 130px;
    height: 32px;

    &:hover {
      padding: 0 15px;
      padding-top: 0px;
    }
  }
`
