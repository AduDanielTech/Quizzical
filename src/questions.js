import React from 'react';
import Options from './options';
import { nanoid } from 'nanoid'

const Questions = ({e,score,setscore}) => {
   

   const [color , setColor] = React.useState(false)
   const [picked,setPicked] = React.useState([])
    const [grade , setgrade] = React.useState([])
    const [reactions , setreactions] = React.useState([])

  let styles={}
  function gradeChange(target) {
    const Option  = document.querySelectorAll('.options')
    let className = target.target.parentElement.parentElement.lastChild.classList
    let reactionsDiv =  target.target.parentElement.parentElement.lastChild.textcontent
    const ugh =  grade === 'incorrect'  ||grade === ' correct'? className.add('ans'): console.log('not there');
  
 
   styles = target.target.textContent === e.correct_answer?setgrade('correct') :  setgrade('incorrect');
 return target.target.className = 'answers' + ' ' + grade
  }
 

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
         gradeChange={gradeChange}
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