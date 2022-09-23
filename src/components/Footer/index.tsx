import React from "react";
import * as S from "./style";

interface Props {
  bgColor?: string;
}

function Footer({ bgColor }: Props): React.ReactElement {
  const footerElement = [
    {
      id: 1,
      content: "Terms",
      url: "#",
    },
    {
      id: 2,
      content: "Privacy",
      url: "#",
    },
    {
      id: 3,
      content: "Press Kit",
      url: "#",
    },
    {
      id: 4,
      content: "Licenses",
      url: "#",
    },
    {
      id: 5,
      content: "Imprint",
      url: "#",
    },
    {
      id: 6,
      content: "Cookie Policy - Preferences",
      url: "#",
    },
  ];
  return (
    <S.Container bgColor={bgColor}>
      <div className="container">
        <S.Wrapper>
          {footerElement.map((item: any, index: number) => {
            return (
              <S.ElementWrapper key={index}>
                <S.Element>
                  <a href={item.url}>
                    <div className="url"> {item.content} </div>
                  </a>
                </S.Element>
              </S.ElementWrapper>
            );
          })}
        </S.Wrapper>
      </div>
    </S.Container>
  );
}

export default Footer;
