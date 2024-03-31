import React, { useState } from "react";
import data from "./accordion-data"
import "./accordion.css"

const Accordion = () => {

    const [singleSelectionId, setSingleSelectionId] = useState(null)
    const [isSelected, setIsSelected] = useState(false);
    const [enableMultiselection, setMultiSelection] = useState(false)
    const [questionsArray, setQuestionsArray]= useState([])

    const handleSingleSelection = (questionId) => {
        setSingleSelectionId(singleSelectionId === questionId ? null : questionId)
    }

    const activateMultiSelection = () => {
        setMultiSelection(prevValue => !prevValue)
    }
    const handleMultiSelection =(questionId)=>{
        const filter = questionsArray.find(questions => questions.id === questionId)
        filter ? setQuestionsArray(prevValue => questionsArray.filter(question => question.id != questionId)) : setQuestionsArray(prevValue => [...prevValue, {id: questionId}])
    }
    const QuestionAnswers = data.map(response => {
        return <div className="all-questions">

            <section className="questions-top" setSingleSelectionId
                onClick={enableMultiselection ? () =>  handleMultiSelection(response.id) : () =>  handleSingleSelection(response.id)}>
                <p className="question-title">{response.title}</p>
                <span>+</span>
            </section>
            
            {enableMultiselection 
            && questionsArray.find(quesions => quesions.id === response.id) || singleSelectionId === response.id 
            ? <div className="question-answers">
                <p>{response.answer}</p>
            </div> : null
            }
        </div>
    })


    return (<div className="main-body">
        <h1>This is an accordion template</h1>
        <buttton className="multi-selection__button" onClick={activateMultiSelection}>Enable multiple selection</buttton>
        <div className="main">
        {QuestionAnswers}
        </div>
    </div>)
}

export default Accordion