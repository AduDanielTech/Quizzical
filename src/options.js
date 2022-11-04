import React from 'react';
import { nanoid } from 'nanoid'
import { click } from '@testing-library/user-event/dist/click';
import { prettyDOM } from '@testing-library/react';
 let id = nanoid()

function Options({e,options,setPicked,color,setColor,correct,score,setscore}) {
let returned= options.map((element) => {
    let isCorrectAnswer = ""
     let isWrongAnswer = ""
   
     let incorrectAnswerClass = isCorrectAnswer ? 'incorrect' : ""
   
   function grade(target) {
   
    isCorrectAnswer = target.target.textContent === e.correct_answer 
    let correctAnswerClass = isCorrectAnswer ? 'correct' : "incorrect"
    target.target.className =  `answers ${correctAnswerClass}`
    
   return 
   }

            let replace  = () => {
            const hey = element.replaceAll('&quot;', '  ')
            let ho =  hey.replaceAll('#039;', '  ')
            let hi =  ho.replaceAll('acute;', '') 
            return  hi.replaceAll('&', '')
}

  return (
          <button  className={`answers  `} onClick={grade}  >
           {replace()} 
            </button>
        )

         } )

    return ( 
        <div className='options' key={id}>
         {returned}
        </div>
     );
}

export default Options;