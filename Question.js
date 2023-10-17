import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';


const Question = ({title,info}) => {
 const [click,setClick]=useState(false);
//  const[info,setInfo]=useState('');

function changeState(){
  setClick(!click)
}

  
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={changeState}>{click?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
      </header>
      {click && <p>{info}</p>}
      

    </article>
  )
  
};

export default Question;
