import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
import questions from './data';
// import{questions}from './data'

function App() {
  const[question,setQuestion]=useState(questions)
  return <main>
    <div className='container'>
    <h3>Questions and Answers Login</h3>;
    <section className='info'>
      {question.map((question)=>{
 return( <SingleQuestion key={question.id}{...question}/>
 
 )
      })
       
}

    </section>
    </div>
    
  
  </main>
}

export default App;
