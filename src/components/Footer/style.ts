import styled from "styled-components";

export const Container = styled.div<{ bgColor?: string }>`
  padding-top: 100px;

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  .container {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  width: 1398px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border-top: 1px solid #e4e4e4;
`;

export const ElementWrapper = styled.div`
  padding: 0 20px;
  border-right: #b5b5b5 solid 1px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  :nth-last-child(1) {
    border-right: none;
  }
`;

export const Element = styled.div`
  .url {
    color: #547bfe;
  }
`;
