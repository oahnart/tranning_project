import styled from 'styled-components';
import { Input } from "antd";

const { Search } = Input;

interface Props {

}

export const SearchInput = styled(Search)`
    font-family: "OpenSans-Regular";
    font-size: 14px;
    width: 350px;
    height: 45px;
    border: 1px solid #E1E1E1;
    border-radius: 45px;
    background: #ffffff;

    .ant-input {
        padding: 0 20px;
        height: 45px;
        border-radius: 40px;
        border: none;
        background: none;
        box-shadow: none;
    }

    .ant-input-group-addon:last-child {
        background: none;

        &:last-child .ant-input-search-button {
            height: 45px;
            width: 45px;
            border: none;
            border-radius: 40px !important;
            background: none !important;
            box-shadow: none;

            &:not(.ant-btn-primary) {
                color: #547BFE;
            }
        }
    }
`