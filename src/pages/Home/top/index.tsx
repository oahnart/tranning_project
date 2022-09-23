import React ,{Component} from 'react'
import { Header,Button,Services} from 'components'
import * as S from './style'
import Bg from "assets/images/bg 1.png";
import Cicle from "assets/images/Ellipse 87.png";
import Group from "assets/images/Group 70.png";
import Web from "assets/images/web.png";
import Desktop from "assets/images/desktop.png";
import Smartphone from "assets/images/smartphone.png";


import D from "assets/images/d.png";

const dataApi = [
{
  picture:<div className='webbg'> <img className='web' src={Web} alt="web"></img></div>,
  title:"Web",
  content:"Access the most recent version of the Klay Safe directly in your browser."
},
{
  picture:<div className='deskktopbg'><img className='desktop' src={Desktop} alt="web"></img></div>,
  title:"Desktop",
  content:"Download the Klay Safe as a static desktop application for Windows, MacOS or Linux."
},
{
  picture:<div className='smartphonebg'><img className='smartphone' src={Smartphone} alt="smartphone"></img></div>,
  title:"Mobile Responsive",
  content:"Conveniently manage your digital assets on-the-go."
}
]

function top() {
  return (
   <S.Container>
    <Header/>
    <div className='page'>
      <div className='top'>
      <div className='bg'>
        <img src={Bg} alt="bg" /> 
      </div>
      <div className='textbut'>
        <div className='text'>
          The most trusted platform
          to manage digital assets
          on Klaytn
      </div>
      <div className='but'>
      <div className='but1'><Button>Get in touch</Button></div>
      <div className='but2'><Button>How it works</Button></div>
      </div>
      </div>
      </div>
      </div>

  <S.page >
    <Services />
  {/* <div className='page2'>
    <div className='top2'>
      <div className='Group'>
      <img src={Group} alt="group" className='Group' />  
      </div>
      <img className='cicle' src={Cicle}  alt="cicle"/>
      <div className='boxs'>
      <div className='ci'></div>
      <div className='down'>
          <div className='text'>Download to experience</div>
          <div className='ex'>We’ve already built website, desktop and mobile responsive for you.</div>
          <div className='but '>
           <button  className='file'>All releases and SHA256 checksums</button> 
           <button className="D"><img src={D} alt="d"></img></button>
           </div>
        </div>
        <div className='box'>
        {dataApi.map((data,index) => (
            <div className='item-box' key={index}>
            <div className='picture'>{data.picture}</div>  
            <div className='bot'>            
            <div className='title'>{data.title} </div>
            <div className='content'>{data.content}</div>
            </div>
            </div>
          ))}
           
        </div>
      </div>
      </div>
      </div> */}
  </S.page>
      
   </S.Container>
  )
}

export default top 