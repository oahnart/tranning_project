import React, { ReactElement } from "react";
import SearchIcon from "assets/icons/dropdown-icon.svg";
import * as S from "./styled";

interface Props {
    changeValue: any;
}

function SearchInput({changeValue }: Props): ReactElement {

    const onSearch = (value: any) => {
        changeValue(value);
    }

    return (
        <S.SearchInput
            placeholder={"Search Project by Name"}
            onSearch={onSearch}
            // allowClear={true}
        />
    );
}

export default SearchInput;
