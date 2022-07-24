import React from 'react'
import { useEffect, useState } from 'react';

function Main() {
    
  const [questions,setQuestions] = useState([])
  const [title,setTitle] = useState('')
  const [message,setMessage] =useState('To Start the Quiz click the button below')
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [buttonState,setButtonState] = useState('active')
  const [relBtnState,setRelBtnState] = useState('inActive')
  const [bValue,setBValue] = useState('question_block')
  const [answers,setAnswers] = useState([])
  const [score,setScore] = useState(0)
  const showQuestion = () => {
    setMessage(questions[currentQuestion].questionText)
    setAnswers(questions[currentQuestion].answerOptions )
    setCurrentQuestion(currentQuestion+1)
    setButtonState('inActive')
  }
  const handleButtonClick= (isCorrect) => {
    let nextQuestion= currentQuestion+1
    if(currentQuestion<questions.length) setMessage(questions[currentQuestion].questionText)
    if(currentQuestion<=questions.length-1) {
      setCurrentQuestion(nextQuestion)
      setAnswers(questions[currentQuestion].answerOptions)

    }
      else if(currentQuestion===questions.length) {
          setAnswers([])
          setMessage(`Your Score is : ${score}`)
          setBValue('question_block2')
          setRelBtnState('active')
      }       
        if (isCorrect) {
          setScore(score+1)
        }
  }


  useEffect(()=>{
    getQuestions()
  },[])

  const getQuestions = async () => {
    const response = await fetch("./questions.json")
    const data = await response.json()
    setTitle(data.title)
    setQuestions(data.arrayOfQuestions)
  }
  return (
    <div className='main'>
         <div className={bValue}>
                <h2>{title}</h2>
                <h3>{message}</h3>
                <div className='answer_block'>
                 {
                 answers.map((ans,i)=>(
                    <button key={i} onClick={()=>handleButtonClick(ans.isCorrect)} >{ans.answerText}</button>
                 ))
                 }
                
                </div>
                <button onClick={showQuestion} className={buttonState}>Start</button>
                <button onClick={()=>document.location.reload()} className={relBtnState}>Restart the Game</button>
         </div>
        </div>
  )
}

export default Main