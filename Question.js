import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import questions from './data';


const Question = () => {
  const [question,setQuestion]=useState()
  const [click,setClick]=useState(false);

  // const {id,title,info}=ques;
  function handleBtn(personId){
    setClick(true);
    setQuestion(personId)
    // console.log(question);
   
    
  }

  
  return <article className='container'><h2>question component</h2>;
  {questions.map(({id,title,info})=>{
    return <article className='question'>{title}
     <button className='btn' onClick={handleBtn}>click</button> 
     {setClick && setQuestion===id && <p> Answer: {info}</p>}</article>
   
   
   
    

  })}
  
  </article>
};

export default Question;
