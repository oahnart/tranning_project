import styled from "styled-components";

export const Container = styled.div`
  .bizcharts {
    margin: 0 auto;
    &::before {
      content: "";
      position: absolute;
      left: 48px;
      top: -14px;
      width: 1px;
      height: calc(100% - 5px);
      background-color: #e1e1e1;
    }
  }
`;
