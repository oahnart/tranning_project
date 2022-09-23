import React, { ReactElement } from "react";
import DropdownIcon from "assets/icons/dropdown-icon.svg";
import * as S from "./styled";

const { Option } = S.CusSelect;

interface Props {
    options: any;
    changeValue: any;
}

function Select({ options, changeValue }: Props): ReactElement {

    const handleChange = (value: any) => {
        changeValue(value);
    };

    return (
        <S.CusSelect
            onChange={handleChange}
            defaultValue={""}
            bordered={true}
            options={options}
            suffixIcon={<img src={DropdownIcon} />}
        />
    );
}

export default Select;
