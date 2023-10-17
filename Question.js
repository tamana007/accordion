import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';


const Question = () => {

  const {id,title,info}=questions;
  
  return <article className='container'><h2>question component</h2>;
  {questions.map((question)=>{
    return <article>{questions.id}</article>
    

  })}
  
  </article>
};

export default Question;
