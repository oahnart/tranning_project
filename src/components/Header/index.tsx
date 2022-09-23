import React, { useState, useEffect, useRef } from "react";
import { Button } from "components";
import { MultipleLanguage } from "components";
import LogoImg from "assets/images/Header/logo.png";
import { UrlInternal } from "common/constants/endpoints";
import { useHistory } from "react-router-dom";

import * as S from "./styled";

function Header() {
  const history = useHistory();

  const [isKorea, setIsKorea] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dataMenu = [
    {
      title: "Overview",
      path: UrlInternal.HOME,
    },
    {
      title: "Company",
      path: UrlInternal.COMPANY,
    },
    // {
    //   title: "Security",
    //   path: UrlInternal.SECURITY,
    // },
    // {
    //   title: "Community",
    //   path: UrlInternal.COMMUNITY,
    // },
    // {
    //   title: "Help",
    //   path: UrlInternal.HELP,
    // },
  ];

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Logo href="#">
          <S.LogoImg src={LogoImg} alt="knosis-safe-logo" />
        </S.Logo>
        <S.Menu>
          <S.NavBar>
            {dataMenu.map((item: any, key: number) => (
              <S.NavItem
                // href={item.path}
                key={key}
                className={
                  history.location.pathname === item.path ? "active" : ""
                }
                onClick={() => history.push(item.path)}
              >
                {item.title}
              </S.NavItem>
            ))}
          </S.NavBar>
          <S.MulLanguagesWrapper ref={wrapperRef}>
            <S.MulLanguagesButton
              isKorea={isKorea}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            {isOpen && (
              <MultipleLanguage setIsKorea={setIsKorea} setIsOpen={setIsOpen} />
            )}
          </S.MulLanguagesWrapper>
          <S.HeaderButton>
            <Button href="https://klaysafe.com">Open App</Button>
          </S.HeaderButton>
        </S.Menu>
      </S.Container>
    </S.HeaderWrapper>
  );
}

export default Header;
