import { eventNames } from 'process'
import React, { FormEventHandler, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Data } from '../Data/Data'

function Main() {

    const [Question, setQuestion] = useState(Data[0].hint)
    const [Answer, setAnswer] = useState(Data[0].answer)
    const [Index, setIndex] = useState(1)
    const [Text, setText] = useState('')
  
    // useEffect(() => {
    //   generateAnswer(Answer)
    // },[Answer])
    

    const nextQuestion = () => {
        // setting question based on index
        setIndex(prevIndex => prevIndex + 1)
        alert(`you submitted ${Text} as answer`)
        setQuestion(Data[Index].hint)
        setAnswer(Data[Index].answer)
    }
    const submitAnswer = (e:InputHTMLAttributes<HTMLInputElement>) => {
      // e.preventDefault();
      alert(`you submitted ${Text} as answer`)
    }

  return (
    <div>
        <h6>Jawab pertanyaan dibawah ini</h6>
        <p>{Question}</p>

        <div className="answerContainer">
          <input type="text" 
          value={Text}
          onChange={e => setText(e.target.value)}
          />
        </div>

        <button onClick={nextQuestion}>submit</button>
    </div>
  )
}

export default Main