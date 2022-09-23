import styled from 'styled-components'

export const Container = styled.div`
    padding: 0 25px;
    width: 453px;
    height: 320px;
    background-color: #FFF;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
`

export const RankingTitle  = styled.div`
    display: flex;
    align-items: center;
    font-family: "OpenSans-BoldItalic";
    font-size: 18px;
    height: 90px;
    border-bottom: 1px solid #E1E1E1;
`

export const IconImg = styled.span`
    margin-right:16px;
    height: 40px;
    width: 40px;
`

 export const TableWrapper = styled.div`
    .ant-table-container .ant-table-content table {
        width: 100%;
        font-family: "OpenSans-Regular";
        font-size: 16px;
        color: #525356;
        line-height: 10px;
    }

    .ant-table-cell {
        padding: 8px 0;
        height: 42px;
    }
    .ant-table-tbody > tr > td{
        border-bottom: none;
    }

    .ant-table-row:first-child > .ant-table-cell {
        font-family: "OpenSans-SemiBold";
    }
 `

 export const PopoverWrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: #F5F5F5;
    border-radius: 3px;
    cursor: default;
 `