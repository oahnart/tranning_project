import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 480px; */
  max-width: 507px;
  margin: 0 auto;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 180px;
    width: 27px;
    background-color: #fff;
    z-index: 1;
  }

  .box-name {
    display: flex;
    justify-content: space-between;
    position: absolute;
    right: 0;
    bottom: 8px;
    background-color: #fff;
    height: 40px;
    padding: 6px 0 0;
    width: 100%;
    max-width: 480px;
    .name {
      font-family: "OpenSans-Regular";
      font-weight: 400;
      font-size: 10px;
      color: #525356;
      text-align: center;
      width: 36px;
      //flex: 0 0 10%;
      word-wrap: break-word;
      white-space: pre-wrap;
      padding: 0 1px;
    }
  }
`;
