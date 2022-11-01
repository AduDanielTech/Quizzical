import React from 'react';
import { nanoid } from 'nanoid'
import { click } from '@testing-library/user-event/dist/click';
import { prettyDOM } from '@testing-library/react';
 let id = nanoid()

function Options({e,options,setPicked,color,setColor,correct,score,setscore}) {
   /*  const [color , setColor] = React.useState([])
  let styles={}
  function colorChange(target) {
   styles = target.target.textContent === e.correct_answer? setColor(' correct') : setColor(' incorrect');
   
 return target.target.className = "answers" +" " + color
  }
 
 */
     let returned= options.map(element => {
       
   let replace  = () => {
   const hey = element.replaceAll('&quot;', '  ')
   let ho =  hey.replaceAll('#039;', '  ')
   let hi =  ho.replaceAll('acute;', '')
   return  hi.replaceAll('&', '')
   }
  
  function addPicked(t) {
    var marked = color ? '' : 'marked'
         t.target.className = "answers" +" " + marked
        console.log( setPicked(pre => {
         return (
            t.target.textContent
         )
        }));
         let scoreCount = score + 1
       /*  let groupAnswers = t.target.parentElement.children
        for (var i = 0; i < groupAnswers.length; i++) {
          console.log(groupAnswers[i])
      } */
      console.log(t.target);
   /*   const scoreCoun =   () => { 
      return t.target.textContent === correct ? setscore(scoreCount) : score}
   scoreCoun() */
         setColor(pre => !pre ? true : false)
        
       return console.log(  )
        }
        return (
          <button  className={`answers `} onClick={addPicked} >
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