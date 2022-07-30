import React, { useEffect, useState } from 'react'
import { Data } from '../Data/Data'

function Main() {

    const [Question, setQuestion] = useState('')

    useEffect(() => {
        for(let i = 0; i < Data.length; i++) {
            setQuestion((Data[0].hint)) 
        }
    },[])

    const nextQuestion = () => {
        for(let i = 0; i < Data.length; i++) {
            
        }
    }
  return (
    <div>
        <h6>Jawab pertanyaan dibawah ini</h6>
        <p>{Question}</p>

        <button onClick={nextQuestion}>submit</button>
    </div>
  )
}

export default Main