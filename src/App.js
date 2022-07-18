import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
function App() {

  const[questions,setQuestions] = useState([])
  const [title,setTitle] = useState('')
  const [message,setMessage] =useState('To Start the Quiz click the button below')
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [buttonValue,setButtonValue] =useState('Start')
  const showQuestion = ()=> {
    const nextQuestion= currentQuestion+1
    if(currentQuestion<questions.length) setMessage(questions[currentQuestion].questionText)
    if(nextQuestion<questions.length) {
          setCurrentQuestion(nextQuestion)
          setButtonValue('Next')}
          else {
            console.log("you reached end")
            setButtonValue('END')
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
    <div className="App">
        <Header />
        <div className='main'>
         <div className='question_block'>
                <h2>{title}</h2>
                <h3>{message}</h3>
                <div className='answers'>
                  {/* {questions[currentQuestion].answerOptions.forEach((answer)=>{
                     //answer section will be here
                  })} */}
                </div>
                <button onClick={showQuestion}>{buttonValue}</button>
         </div>
        </div>
        <Footer />
    </div>
  );
}

export default App;
