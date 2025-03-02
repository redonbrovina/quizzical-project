import blobRight from "../../public/blob.svg"
import blobLeft from "../../public/second-blob.svg"
import { decode } from "html-entities"
import { useState, useEffect } from "react"
import Questions from "./Questions"
import { nanoid } from "nanoid"
import AnswerCheck from "./AnswerCheck"
import { ring } from 'ldrs'

ring.register()

export default function FirstQuiz(props) {

    const [triviaDatabase, setTriviaDatabase] = useState([])
    const [questions, setQuestions] = useState([])
    const [isTime, setIsTime] = useState(false)
    const [ userAnswer, setUserAnswer ] = useState({
        firstAnswer: "",
        secondAnswer: "",
        thirdAnswer: "",
        fourthAnswer: "",
        fifthAnswer: "",
    })
    const [countEl, setCountEl] = useState(0);


    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=21")
        .then(res => res.json())
        .then(data => setTriviaDatabase(data))
    }, [])

    useEffect(() => {
        try{
            if(triviaDatabase.results.length != 0){
                const results = triviaDatabase.results
                const objectData = []
                for(let i = 0; i<results.length; i++){
                    objectData.push(
                        {
                            id: nanoid(),
                            question: decode(results[i].question),
                            answers: [...results[i].incorrect_answers, results[i].correct_answer],
                            correct: results[i].correct_answer,
                            index: i
                        }  
                    )
                }
                setQuestions(objectData)
            }
        }catch(err){
        }
    }, [triviaDatabase])

    const questionElements = questions.map(qs => {
        return <Questions key={qs.id} id={qs.id} question={qs.question} answers={qs.answers} index={qs.index} handleChange={handleChange}/>
    })

    const answerElements = questions.map(as => {
        return <AnswerCheck key={as.id} question={as.question} answers={as.answers} correct={as.correct} userAnswer={userAnswer} index={as.index} />
    })

    function handleChange(event) {
        const {name, value} = event.target
        setUserAnswer(prevState => {
            return (
                {
                    ...prevState,
                    [name]: value
                }
            )
        })
    }

    function submitQuiz() {
        setIsTime(!isTime)
        addCount()
    }

    const correctEl = questions.map( qs => {
        return  decode(qs.correct)
    })

    const allAnswers = [userAnswer.firstAnswer, userAnswer.secondAnswer, userAnswer.thirdAnswer, userAnswer.fourthAnswer, userAnswer.fifthAnswer]

    function addCount() {
        let counter = 0
        for(let i = 0; i<correctEl.length; i++){
            if(correctEl[i] == allAnswers[i]){
                counter++
            }
        }
        setCountEl(counter)
    }
    
    

    return (
        <div className="full-screen-quiz">
            {
                isTime 
                ?
                    <div className="answerEl">
                       {answerElements}
                        <div className="bottom-el">
                            <h2>You scored {countEl}/5 correct answers</h2>
                            <button onClick={props.startQuiz} className="play-btn">Play again</button>
                        </div>

                    </div> 
                :
                (
                (triviaDatabase.results) ? 
                    <div className='quiz-screen'>
                        <div>
                            {questionElements}
                        </div>
                        <button onClick={submitQuiz} className="check-btn">Check answers</button>
                    </div> :
                    <div className="loading-screen">
                        <l-ring
                            size="40"
                            stroke="5"
                            bg-opacity="0"
                            speed="2" 
                            color="#293264" 
                        ></l-ring>
                        <h1>Loading...</h1>
                    </div>
                )
            }
            <img src={blobRight}  className='blob-right-quiz'/>
            <img src={blobLeft}  className='blob-left-quiz'/>
        </div>
    )

}