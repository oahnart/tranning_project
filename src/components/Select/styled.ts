import styled from 'styled-components';
import { Select, Dropdown } from "antd";
interface Props {

}

export const CusSelect = styled(Select)`
    font-family: "OpenSans-Regular";
    font-size: 14px;
    border-radius: 40px;
    margin-right: 28px;
    min-width: 180px;
    &:not(.ant-select-customize-input) .ant-select-selector {
        border-radius: 50px;
        height: 45px;
        display: flex;
        align-items: center;
    }

    .ant-select-selector .ant-select-selection-item {
        margin-right: 20px;
        padding-left: 10px !important;
    }
`