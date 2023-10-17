import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';


const Question = ({title,info}) => {
 

  
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn'>clicnk e</button>
      </header>
      <p>{info}</p>

    </article>
  )
  
};

export default Question;
