import React from 'react';
import * as S from './style';
import {QuestionCircleOutlined} from '@ant-design/icons';
import { Link,NavLink } from 'react-router-dom';

const dataApi = [
  {
    id:1,
    title:'나의 총 자산',
    number:'999,999,999원',
    text:'예치금',
    text2:'투자대기금',
    text3:'투자금',
    number1:"999,999,999원",
    number2:"999,999,999원",
    number3:"999,999,999원",
  },
  {
    id:2,
    title:'총 누적 투자 원금',
    number:'999,999,999원 ',
    text:'누적상환 원금',
    text2:'상환예정 금액',
    text3:'상환지연 금액',
    text4:'손실원금',
    number1:"999,999,999원",
    number2:"999,999,999원",
    number3:"999,999,999원",
    number4:"999,999,999원",
  }
  ,{
    id:3, 
    title:'총 누적 수익',
    number:'999,999,999원',
    text:'이자 수익',
    text2:'연체 이자수익',
    text3:'플랫폼 수수료',
    text4:'세금',
    number1:"999,999,999원",
    number2:"999,999,999원",
    number3:"999,999,999원",
    number4:"999,999,999원",
  },
 
]
const dataApis= [
  {
    id:1,
    title:'총 투자 건수',
    number:'999건',
  },
  {
    id:2,
    title:'투자중',
    number:'999건',
  },
  {
    id:3,
    title:'상환완료',
    number:'999건',
  },
  {
    id:4,
    title:'연체',
    number:'999건',
  },
]

function body() {
  return (
    <S.Container>

   <div className='container'>
    <div className='row'>
        <div className='price'>
          
        <div className='text'>내가 보유한 예치금 잔액 
        <button className='but'>예치금 관리</button>  
        </div>
            <div className='number'>999,999,999원</div>
        </div>
        <div className='price'>
           <div className='text'>나의 잔여투자 한도 
           <QuestionCircleOutlined className='why' />
           </div>
           <div className='number2'>999,999,999원</div>
        </div>
    </div>
    <div className='my'>
    <div className='content'>
        <div className = 'title'>
          나의  자산  내역 
        </div>
        <div className='box'>
      {dataApi.map((data,index)=>(
        <div className='item-box' key={index}>
          <div className='top'>
          <div className='title1'>{data.title}</div>
          <div className='num'>{data.number}</div>
          <div className='Line'></div>
          <div className='item_text'> 
         
          <div className='w'>
          {data.text}<br/>
          {data.text2}<br/>
          {data.text3}<br/>
          {data.text4}<br/>
          </div>
          <div className='d'>
            {data.number1}<br/>
            {data.number2}<br/>
            {data.number3}<br/>
            {data.number4}<br/>
          </div>
          
        </div>
          </div>
          </div>
    
      ))}
     
    
        </div>
        <div className='content2'>
        <div className='title2'>
          나의  투자  내역
        </div>
          <Link  to= "/"> 
          <div className='title3'>투자내역 자세히 보기</div></Link>
          <div className='box'>
        {dataApis.map ((data,index) => (
          <div className='content2'> 
          <div className='item-box2'>
              
          <div className='title4'>
            {data.title}
           <div className='nu'> {data.number} </div>
            </div>
            </div>
           </div>
        ))}
        </div>
        </div>
        </div>
    </div>
   </div>
  
    </S.Container>
 
  )
}

export default body