import React, { useState, useEffect, useContext } from 'react';
import { Table, Image, Popover, Pagination } from 'antd';
import {
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';

import { tableHomeApi } from "apis";

import * as S from './style';


import lock from 'assets/images/ProjectsTable/lock.png';
import money from 'assets/images/ProjectsTable/money.png';
import user from 'assets/images/ProjectsTable/user.png';
import { AreaChart, Select, SearchInput } from "components";
import { indexOf } from '@antv/util';
import Item from 'antd/lib/list/Item';
import { saveLocalStorage } from 'utils/localStorage';
import { CaContext } from "../../pages/Home"
import { element } from 'prop-types';

interface Props {  /*categoriesTable: any */ }

function TableProject({ /*categoriesTable */ }: Props): React.ReactElement {
  const [category, setCategory] = useState('');
  const [badge, setBadge] = useState('');
  const [searchData, setSearchData] = useState('');
  const [dataTable, setDataTable] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("")
  const [direction, setDirection] = useState("")
  const categoriesRawTable: any = useContext(CaContext)
  // if (categoriesRawTable[0] != undefined) {
  //   const categoriesRender = categoriesRawTable;
  //   console.log(categoriesRender[1].value)
  // }

  let categoriesTable = [{ label: "Category", value: "" }];
  for (let i = 0; i < categoriesRawTable.length; i++) {
    let categoriesRender = {
      label: categoriesRawTable[i]['value'],
      value: categoriesRawTable[i]['value'],
    }
    categoriesTable.push(categoriesRender)
  }
  // if (categoriesRawTable[0] != undefined) {
  //   console.log("dataRaw", categoriesRawTable[0])
  // }


  useEffect(() => {
    (
      async function getDataTableApi() {
        const res: any = await tableHomeApi({
          perPage: String(pageSize),
          page: String(page),
          query: searchData,
          sort: sort,
          direction: direction,
          category: category,
          badge: badge,
        });
        setDataTable(res);
      }
    )()
  }, [pageSize, page, searchData, category, badge, sort, direction])

  const dataSource = dataTable?.map((x?: any) => {
    return {
      id: x.id,
      name: x.name,
      badges: (x.badge).split(","),
      period: x.month,
      category: ((x.category).split(",")) /*.map((item: any) => {
        if (categoriesRawTable[0] != undefined) {
          let categoriesR = categoriesRawTable;
          categoriesR.map((element: any) => {
            if (element.key == item) [''].push(element.value)
          })
        }
      })*/ ,
      amount: "$" + (Math.round(x.sum * 100) / 100).toFixed(2),
      change: x.amount_of_change.map((e: any) => {
        return (
          {
            uv: Number(e.sum_amount_usd),
          }
        )
      }),
    }
  })
  // console.log("dataSource", dataSource);

  function onClickDownName(e: any) {
    setSort("NAME")
    setDirection("DESC")
  }
  function onClickUpName(e: any) {
    setSort("NAME")
    setDirection("ASC")
  }
  function onClickDownPeriod(e: any) {
    setSort("LONGEST")
    setDirection("DESC")
  }
  function onClickUpPeriod(e: any) {
    setSort("LONGEST")
    setDirection("ASC")
  }
  function onClickDownAmount(e: any) {
    setSort("AMOUNT")
    setDirection("DESC")
  }
  function onClickUpAmount(e: any) {
    setSort("AMOUNT")
    setDirection("ASC")
  }

  // table columns
  const NameTitle = () => {
    return (
      <S.sortBtn >
        Name
        <span style={{ position: "relative" }}>
          <CaretDownOutlined
            className={`sort-down ${(sort == "NAME" && direction == "DESC") ? "active" : ""}`}
            onClick={(e) => onClickDownName(e)}
          />
          <CaretUpOutlined
            className={`sort-up ${(sort == "NAME" && direction == "ASC") ? "active" : ""}`}
            onClick={(e) => onClickUpName(e)}
          />
        </span>
      </S.sortBtn>
    )
  }

  const periodTitle = () => {
    return (
      <S.sortBtn >
        Safe period
        <span style={{ position: "relative" }}>
          <CaretDownOutlined
            className={`sort-down ${(sort == "LONGEST" && direction == "DESC") ? "active" : ""}`}
            onClick={(e) => onClickDownPeriod(e)}
          />
          <CaretUpOutlined
            className={`sort-up ${(sort == "LONGEST" && direction == "ASC") ? "active" : ""}`}
            onClick={(e) => onClickUpPeriod(e)}
          />
        </span>
      </S.sortBtn>
    )
  }

  const amountTitle = () => {
    return (
      <S.sortBtn >
        Amount Safe
        <span style={{ position: "relative" }}>
          <CaretDownOutlined
            className={`sort-down ${(sort == "AMOUNT" && direction == "DESC") ? "active" : ""}`}
            onClick={(e) => onClickDownAmount(e)}
          />
          <CaretUpOutlined
            className={`sort-up ${(sort == "AMOUNT" && direction == "ASC") ? "active" : ""}`}
            onClick={(e) => onClickUpAmount(e)}
          />
        </span>
      </S.sortBtn>
    )
  }

  const columns: any = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      render: (_: any, __: any, index: number) =>
        Number(
          (index + 1) + (page - 1) * pageSize
        ),
    },
    {
      title: NameTitle(),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Badge',
      dataIndex: 'badges',
      key: 'badges',
      render: (badges: any) => (
        <span>
          {
            badges.map((badge: any) => {
              const influencer = (
                <div>
                  connected with<b> influencer</b>
                </div>
              )
              return (
                <>
                  {(badge == "INFLUENCER") && <span><Popover content={influencer}> <img src={user} /> </Popover> </span>}
                  {(badge == "TOP_LONGEST") && <span> <Popover content="Top 10% Secure Score"><img src={lock} /></Popover> </span>}
                  {(badge == "TOP_AMOUNT") && <span> <Popover content="Top 10% Safe Amount"><img src={money} /> </Popover></span>}
                </>
              )
            })
          }
        </span>
      ),
    },
    {
      title: periodTitle(),
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: any) => {
        if (category.length > 1) {
          return (
            <span>
              {category[0]}
              <span className="category__count">
                <Popover content={category.map((item: any, key: number) => {
                  return (
                    <span key={key} style={{ margin: '7px' }}>{item}</span>
                  )
                })
                }>
                  {category.length}
                </Popover>
              </span>
            </span>
          )
        }
        return (
          <span className='category'>
            {category[0]}
          </span>
        )
      }
    },
    {
      title: amountTitle(),
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Amount of Change in Safe (10 days)',
      dataIndex: 'change',
      key: 'change',
      render: (change: any) => {
        return (
          <div className="chart">
            <AreaChart
              data={change}
            />
          </div>
        )
      }
    },
  ];

  return (
    <S.Container>
      <S.FilterDiv>
        <S.SelectContainer>
          <Select
            options={categoriesTable}
            changeValue={(e: any) => setCategory(e)}
          />
          <Select
            options={[
              { label: "Badge", value: "" },
              { label: "Connected with Influencer", value: "INFLUENCER" },
              { label: "Top 10% Longest Safe", value: "TOP_LONGEST" },
              { label: "Top 10% Safe Amount", value: "TOP_AMOUNT" },
            ]}
            changeValue={(e: any) => setBadge(e)}
          />
        </S.SelectContainer>
        <SearchInput
          changeValue={(e: any) => setSearchData(e)}
        />
      </S.FilterDiv>
      <S.TableContainer>
        <S.Table>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '50', '100'],
              locale: { items_per_page: "" },
              total: dataSource.length,
              defaultPageSize: 10,
              onChange: ((page, pageSize) => {
                setPage(page)
                setPageSize(pageSize)
              }),
              showTotal: (total: any, range: any) => `${range[0]}-${range[1]} of ${total}`
            }}
          />
        </S.Table>
      </S.TableContainer>
    </S.Container>
  );
}
export default TableProject;