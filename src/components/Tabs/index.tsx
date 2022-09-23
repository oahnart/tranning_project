import React, { useState } from "react";
import * as S from  "./style";

interface Props {
  handleChange: (value: number) => void;
}

const Data = [
  {
    id: 0,
    text: "For teams",
    title: "Multi-signature ",
    content:"Fully customize how you manage your company crypto assets, with the option to require a predefined number of signatures to confirm transactions. Require multiple team members to confirm every transaction in order to execute it, which helps prevent unauthorized access to company crypto.",
    
  },
  { id: 1, 
    text: "For individuals",
    title: "Multi-signature",
    content:"Fully customize how you manage your personal crypto assets, with the option to require multiple devices to confirm transactions (hardware wallets, EOA-based wallets, paper wallets, or a combination of them)."  ,
   
  },
 
 
];

 
 const  TabsComponent  = ({ handleChange }: Props) => {
  const [active, setActive] = useState(0);

  const handleChangeTab = (value: number) => {
    setActive(value);
    handleChange(value);
  }
   
   return (
    <S.Tabs>
     <div className="wrapper">
      <div className="bigtext">
       <div className="text">
         {Data.map(({ id, text}) =><TabItemComponent 
            key={text}
            title={text}
            onItemClicked={() => handleChangeTab(id)}
            isActive={active === id}
          />
          
       )}
       </div>  
       {Data.map((dt , index) => (
        dt.id === active && <>
          <div className="title">{dt.title}</div>
          <div className="content">{dt.content}</div>
        </>
       ))}
      </div>
      </div>
      </S.Tabs>
   )
 }
 
 const TabItemComponent = ({ 
   title = '',
   onItemClicked = () => console.error('You passed no action to the component'),
   isActive = false,
 }) => {
   return ( 
     <div className={isActive ? 'tabitem' : 'tabitem--inactive'} onClick={onItemClicked}>
       <div className="tabitem__title">{title}</div>
     </div>
   )
 };

  export default TabsComponent;


  