import {decode} from "html-entities"
import { useState } from "react"


export default function AnswerCheck(props) {

    const answersArray = [props.userAnswer.firstAnswer, props.userAnswer.secondAnswer, props.userAnswer.thirdAnswer, props.userAnswer.fourthAnswer, props.userAnswer.fifthAnswer]

    const isItCorrect = decode(props.correct) == answersArray[props.index]

    const styles = {
        backgroundColor: isItCorrect ? "#94D7A2" : "#F8BCBC",
        color: isItCorrect ? "#014d10" : "#4f0606",
        border: "none",
        paddingLeft: 21,
        paddingRight: 21,
        paddingTop: 4,
        paddingBottom: 4 
    }

    const stylesForOthers = {
        backgroundColor: "#94D7A2",
        color: "#014d10",
        border: "none",
        paddingLeft: 21,
        paddingRight: 21,
        paddingTop: 4,
        paddingBottom: 4 
    }

    const stylesLast = {
        color: "gray",
        border: "1",
        borderColor: "gray"
    }

    return (
        <div className="questionSet">
            <h1 className="questions">{props.question}</h1>
            <div>
                {props.answers.length === 4 
                ?
                <div className="answers-sec">
                    {
                    answersArray[props.index] == decode(props.answers[0]) ? <p style={styles} className="option">{decode(props.answers[0])}</p> : decode(props.correct) == decode(props.answers[0]) ? <p style={stylesForOthers}  className="option">{decode(props.answers[0])}</p> : <p style={stylesLast} className="option">{decode(props.answers[0])}</p>
                    }
                    {
                    answersArray[props.index] == decode(props.answers[1]) ? <p style={styles} className="option">{decode(props.answers[1])}</p> : decode(props.correct) == decode(props.answers[1]) ? <p style={stylesForOthers}  className="option">{decode(props.answers[1])}</p> : <p style={stylesLast} className="option">{decode(props.answers[1])}</p>
                    }
                    {
                    answersArray[props.index] == decode(props.answers[2]) ? <p style={styles} className="option">{decode(props.answers[2])}</p> : decode(props.correct) == decode(props.answers[2]) ? <p style={stylesForOthers}  className="option">{decode(props.answers[2])}</p> : <p style={stylesLast} className="option">{decode(props.answers[2])}</p>
                    }
                    {
                    answersArray[props.index] == decode(props.answers[3]) ? <p style={styles} className="option">{decode(props.answers[3])}</p> : decode(props.correct) == decode(props.answers[3]) ? <p style={stylesForOthers}  className="option">{decode(props.answers[3])}</p> : <p style={stylesLast} className="option">{decode(props.answers[3])}</p>
                    }
                </div>
                :
                <div className="answers-sec">
                    {
                    answersArray[props.index] == decode(props.answers[0]) ? <p style={styles} className="option">{decode(props.answers[0])}</p> : decode(props.correct) == decode(props.answers[0]) ? <p style={stylesForOthers}  className="option">{decode(props.answers[0])}</p> : <p style={stylesLast} className="option">{decode(props.answers[0])}</p>
                    }
                    {
                    answersArray[props.index] == decode(props.answers[1]) ? <p style={styles} className="option">{decode(props.answers[1])}</p> : decode(props.correct) == decode(props.answers[1]) ? <p style={stylesForOthers}  className="option">{decode(props.answers[1])}</p> : <p style={stylesLast} className="option">{decode(props.answers[1])}</p>
                    }
                </div>}
            </div>
        </div>
    )
}