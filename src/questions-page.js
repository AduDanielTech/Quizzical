import React from 'react';
import Questions from './questions';
import { nanoid } from 'nanoid'
import ErrorBoundary from './errorBoundary'
const  QuestionsPage = ({score,setscore}) => {
    const [data , setData] = React.useState([])
  
    
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(res => res.json())
        .then(data=> setData(data.results)) 
    },[])

    function getAnswers() {
      let pickedAns = []
      let answersDiv = document.querySelectorAll('.marked')
      for (let i = 0; i < answersDiv.length; i++) {
       function hey() {
      return(  answersDiv[i].forEach((e) =>{
          pickedAns.push(e)
         }))
       }
       hey()
      }
    
   /*   function correct() {
      data.map((data) => {
    return  data.correct_answer})
     } */

   } 
  
     return(
        <div className='quest-cont'>
          <h1>Answer the following questions</h1>
          <br/>
        Score =   {score}
            {data.map((data) => {
         
           return (<Questions
                e={data}
                key={nanoid()}
                score={score} 
                setscore={setscore}
                />) 
        }) }
         <button className='check button' onClick={getAnswers}>Submit</button>
        </div>
     )
};
export default QuestionsPage