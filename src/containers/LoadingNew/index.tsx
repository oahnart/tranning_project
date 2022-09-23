import { Overlay } from "components/Overlay";
import React, { useEffect } from "react";

import { Indicator } from "./style";

interface Props {
  isShow?: boolean;
  colorIndi?: string;
  colorBG?: string;
}

const LoadingNew: React.FC<Props> = ({ colorBG, colorIndi }) => {
  return (
    <Overlay show colorBG={colorBG}>
      <Indicator colorBD={colorIndi} />
    </Overlay>
  );
};

export default LoadingNew;
  