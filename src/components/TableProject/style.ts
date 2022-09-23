import styled from 'styled-components'
import Polygon1 from 'assets/images/ProjectsTable/Polygon1.png'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    margin-top: 50px;
 `

export const FilterDiv = styled.div`
    max-width: 1398px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 28px;
`

export const SelectContainer = styled.div`
`

export const TableContainer = styled.div`
    max-width: 1398px;
    width: 100%;
    padding: 32px 32px 20px 32px;

    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    
    .ant-popover-inner {
        border-radius: 10px !important;
    }
`

export const Table = styled.div`
    font-size: 16px !important;
    font-family: "OpenSans-Regular" !important; 

    .ant-table-thead {
        background: #F1FBFF;
    }
    .ant-table-thead > tr > th {
        background: none;
        
        font-family: 'OpenSans-SemiBoldItalic';
        font-size: 16px;
        line-height: 22px;
        color: #272727;
        text-align: center;
        /* border-bottom: none; */

        .ant-table-column-title{
            font-family: 'OpenSans-SemiBoldItalic';
            font-size: 16px;
            line-height: 22px;
            color: #272727;
            text-align: center;
        }
        :first-child {
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px !important;
        }
        :last-child {
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px !important;
        }
    }

    .ant-table table {
        border-bottom: 1px solid #E8E8E8;
        padding-bottom: 20px;
    }

    .ant-table-tbody > tr > td {
        border: none;
        color: #525356;

        font-family: "OpenSans-Regular";
        font-size: 16px;
        line-height: 22px;
        text-align: center;

        .badge {
            margin: 6px;
        }
        .chart {
            display: flex;
            justify-content: center;
        }

        .category{
            font-family: "OpenSans-Regular" !important; 
            font-size: 16px;
            line-height: 22px;
            text-align: center;

        }

        .category__count{
            margin-left: 10px;
            padding: 0 8px;
            background: #F5F5F5;
            border-radius: 3px;

            font-family: "OpenSans-Regular" !important; 
            font-size: 16px;
            line-height: 22px;
        }
    }

    .ant-table-column-sorter {
        color: #525356;
        display: flex;
    }

    .ant-table-column-sorter-down {
        /* font-size: 18px; */
    }
    .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
    }
// pagination
    .ant-table-pagination.ant-pagination{
        margin: 23px 0 3px ;
    }

    .ant-pagination-item,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
        display: none;
    }

    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border: none;
        box-shadow: none !important;
    }
    .ant-pagination-options {
        order: -1;
        margin-right: 25px;
    }
    .ant-pagination-options::before {
        content: 'Rows per page:';
        font-family: "OpenSans-Regular" !important; 
        font-size: 14px !important;
        color: #525356 !important;
    }

    .ant-select-single.ant-select-show-arrow .ant-select-selection-item, .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
        font-family: "OpenSans-Regular" !important; 
        font-size: 14px;
        color: #525356;
    }
    .ant-pagination-total-text {
        font-family: "OpenSans-Regular" !important; 
        font-size: 14px !important;
        color: #525356 !important;
    }

    .ant-pagination-prev .ant-pagination-item-link, .ant-pagination-next .ant-pagination-item-link {
        font-size: 15px
    }

    .ant-pagination-prev, .ant-pagination-jump-prev, .ant-pagination-jump-next {
    margin-right: -5px;

    } 
`;

export const sortBtn = styled.span`
    /* margin-left: -20px; */
    font-family: 'OpenSans-SemiBoldItalic';
    .sort-down {
        position: absolute;
        left: 8px;
        bottom: -2px;
        color: #cccccc;
        font-size: 12px;
    }

    .sort-up {
        position: absolute;
        left: 8px;
        bottom: 7px;
        color: #cccccc;
        font-size: 12px;
    }

    .active {
        color: black;
    }
`

