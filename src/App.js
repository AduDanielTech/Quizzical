import React from "react"
import './App.css'
import Test from "./google-fonts";
import Homepage from './start-page'
import { useState } from 'react'
import QuestionsPage from './questions-page'
import Help from './helping'
let App = () => {
 
   const [startQuiz,setStartQuiz] = useState(false)
  const [score, setscore] = useState(0)


   function start() {
    setStartQuiz(pre => !pre)
   }
   
   let page = startQuiz ? <QuestionsPage score={score} setscore={setscore}/>: <Homepage  questions={start}/> 

   return(
  <div className="app" id="app">
{/* {page} */}
   <QuestionsPage/>
  </div>
   )
};
/* const root = document.documentElement;
const btn = document.querySelector('.algo-btn')
btn.addEventListener('mouseover', () => {
  root.style.setProperty('--size', '250px')
  root.style.setProperty('--shineColor', 'rgba(255,255,255,0.3)')
})
btn.addEventListener('mouseleave', () => {
  root.style.setProperty('--size', '0px')
  root.style.setProperty('--shineColor', 'rgba(255,255,255,0.0)')
})
btn.addEventListener('mousemove', (e) => {
  root.style.setProperty('--x',e.offsetX + 'px')
  root.style.setProperty('--y',e.offsetY + 'px')
 
}) */
export default App
