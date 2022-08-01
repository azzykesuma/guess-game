import { eventNames } from 'process'
import React, { FormEventHandler, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Data } from '../Data/Data'

function Main() {

    const [Question, setQuestion] = useState(Data[0].hint)
    const [Answer, setAnswer] = useState(Data[0].answer)
    const [Index, setIndex] = useState(1)
    const [Text, setText] = useState('')
    const [End, setEnd] = useState(false)
    const [Wrong, setWrong] = useState('')

    console.log(Data.length === Index)

    const nextQuestion = () => {
        // setting question based on index
        setIndex(prevIndex => prevIndex + 1)

        if(Text === Answer) {
          setQuestion(Data[Index].hint)
          setAnswer(Data[Index].answer)
          setText('')
          setWrong('')
          
        } else {
          setWrong('Salah')
          
        }
        console.log(Index)
    }

    const reset = () => {
      setQuestion(Data[0].hint)
      setAnswer(Data[0].answer)
      setIndex(1)
      setEnd(false)
    }
    
    useEffect(() => {
      if(Data.length === Index) {
        setQuestion('Selesai')
        setEnd(true)
      }
    },[Question])

  return (
    <div className='main'>
        <h6 className='header__main'>Jawab pertanyaan dibawah ini</h6>
        <p className='rule__main'>Gunakan huruf kapital di awal jawaban</p>
        <p>{Question}</p>

        <div className="answerContainer">
          { Data.length === Index ? null : (
            <input type="text" 
            value={Text}
            onChange={e => setText(e.target.value)}
            />
          )}
        </div>
        <p className='wrong__main'>{Wrong}</p>
        {End ? <button className='button__main' onClick={reset}>Kembali</button> : <button className='button__main' onClick={nextQuestion}>Next</button>}
    </div>
  )
}

export default Main