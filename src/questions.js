import React from 'react';
import Options from './options';
import { nanoid } from 'nanoid'
import shuffleAnswers from './shuffleAnswers';
const Questions = ({e,score,setscore}) => {
   

   const [color , setColor] = React.useState(false)
   const [picked,setPicked] = React.useState([])
    const [grade , setgrade] = React.useState([])
    const [reactions , setreactions] = React.useState([])

  let styles={}
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
  let options = shuffleAnswers(option)
   
     
     return(
        
          <div className='quest'>
         <h1>{replace()}</h1>
         <div >
         <Options
          key={nanoid} 
          options={options }
          e={e} 
         setPicked={setPicked}
         setColor={setColor}
         color={color}
         correct={e.correct_answer}
         score={score}
          setscore={setscore}
         />
         <div className='answered '></div>
         </div>
       <div className='picked'>
       {picked}
       </div>
     
        </div>
     
     )
};
export default Questions