import React from 'react';
import { nanoid } from 'nanoid'
import { click } from '@testing-library/user-event/dist/click';
import { prettyDOM } from '@testing-library/react';
 let id = nanoid()

function Options({e,options,gradeChange,setPicked,color,setColor,correct,score,setscore}) {
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
      
       
         let scoreCount = score + 1
       /*  let groupAnswers = t.target.parentElement.children
        for (var i = 0; i < groupAnswers.length; i++) {
          console.log(groupAnswers[i])
      } */
   /*   const scoreCoun =   () => { 
      return t.target.textContent === correct ? setscore(scoreCount) : score}
   scoreCoun() */
         setColor(pre => !pre ? true : false)
       
        window.addEventListener('DOMContentLoaded',()=>{
        
          
        })
       return console.log( )
        }
        return (
          <button  className={`answers `} onClick={gradeChange} >
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