
 const shuffleAnswers = (t) => {
  return  t
  .map((answer)=> ({ sort: Math.random(), value: answer }))
  .sort((a, b) =>a.sort - b.sort)
  .map((obj) => obj.value)

  
}
export default shuffleAnswers