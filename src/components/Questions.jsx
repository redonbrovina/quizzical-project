import { useState } from "react"
import {decode} from "html-entities"
import {nanoid} from "nanoid"


export default function Questions(props) {

    const namesArray = ["firstAnswer", "secondAnswer", "thirdAnswer", "fourthAnswer", "fifthAnswer"]
    const array = [nanoid(), nanoid(), nanoid(), nanoid()]
    const answers = props.answers
    const [isShuffle, setIsShuffle] = useState(false)

    
    function shuffle(array) {
        let currentIndex = array.length;
      
        while (currentIndex != 0) {

          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }

      if(!isShuffle){
        shuffle(answers)
        setIsShuffle(true)
      }

    return (
        <div className="questionSet">
            <h1 className="questions">{props.question}</h1>
            <fieldset className="answers">
                {
                    props.answers.length === 4 
                    ?
                    <div>
                        <input
                            type="radio"
                            id = {array[0]}
                            name={namesArray[props.index]}
                            value={decode(answers[0])}
                            onChange={props.handleChange}
                        />
                        <label className="option" htmlFor={array[0]}>{decode(answers[0])}</label>

                        <input
                            type="radio"
                            id={array[1]}
                            name={namesArray[props.index]}
                            value={decode(answers[1])}
                            onChange={props.handleChange}
                        />
                        <label className="option" htmlFor={array[1]}>{decode(answers[1])}</label>

                        <input
                            type="radio"
                            id={array[2]}
                            name={namesArray[props.index]}
                            value={decode(answers[2])}
                            onChange={props.handleChange}
                        />
                        <label className="option" htmlFor={array[2]}>{decode(answers[2])}</label>

                        <input
                            type="radio"
                            id={array[3]}
                            name={namesArray[props.index]}
                            value={decode(answers[3])}
                            onChange={props.handleChange}
                        />
                        <label className="option" htmlFor={array[3]}>{decode(answers[3])}</label>
                    </div> 
                    :
                    <div>
                        <input
                            type="radio"
                            id={array[0]}
                            name={namesArray[props.index]}
                            value={decode(answers[0])}
                            onChange={props.handleChange}
                        />
                        <label className="option" htmlFor={array[0]}>{decode(answers[0])}</label>

                        <input
                            type="radio"
                            id={array[1]}
                            name={namesArray[props.index]}
                            value={decode(answers[1])}
                            onChange={props.handleChange}
                        />
                        <label className="option" htmlFor={array[1]}>{decode(answers[1])}</label>
                    </div>
                }          
            </fieldset>
        </div>
    )
}
