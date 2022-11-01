import React from 'react';
import Options from './options';
import { nanoid } from 'nanoid'

const Questions = ({e,score,setscore}) => {
   

   const [color , setColor] = React.useState(false)
   const [picked,setPicked] = React.useState([])
       let option = []
        e.incorrect_answers.forEach(element => {
        return  option.push(element)
         });
       option.push(e.correct_answer)
       
   let replace  = () => {
    const hey =  e.question.replaceAll('&quot;', '  ')
    let ho =  hey.replaceAll('#039;', '  ')
    let hi =  ho.replaceAll('acute;', '')
    return  hi.replaceAll('&', '')
    }
  
   
     
     return(
        
          <div className='quest'>
         <h1>{replace()}</h1>
         <div >
         <Options
          key={nanoid} 
          options={option}
          e={e} 
         setPicked={setPicked}
         setColor={setColor}
         color={color}
         correct={e.correct_answer}
         score={score}
          setscore={setscore}
         />
         </div>
       <div className='picked'>
       {picked}
       </div>
     
        </div>
     
     )
};
export default Questions