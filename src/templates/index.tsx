import { Footer, Header } from "components";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  bgFooter?: string;
}

function MainTemplate({ children, bgFooter }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer bgColor={bgFooter} />
    </>
  );
}

export default MainTemplate;
