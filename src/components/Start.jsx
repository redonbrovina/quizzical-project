import blobRight from "../../public/blob.svg"
import blobLeft from "../../public/second-blob.svg"

export default function Start(props) {
    return (
        <div className='start-page'>
          <h1 className='title'>Quizzical</h1>
          <p className='description'>Trivia can be fun sometimes</p>
          <button onClick={props.startQuiz} className='start-btn'>Start quiz</button>
          <img src={blobRight}  className='blob-right'/>
          <img src={blobLeft}  className='blob-left'/>
        </div>
    )
}


