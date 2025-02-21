import { useState } from "react"
import { StateQuiz } from "@/types/types-quizzjavv"
import Questions from "./Questions"
import Quizinicio from "./Quizinicio"
import Results from "./Results"
import { questions } from "@/data/questions"

const Quizjavv = () => {
    const [stateQuiz, setStateQuiz] = useState<StateQuiz>("init")
    const [currentQuestion, setCurrentQuestion] = useState<number>(0)

    const handleIniciar = () => {
        setStateQuiz("in-course")
    }

    const handleTerminar = () => {
        setStateQuiz("end")
        setCurrentQuestion(0)
    }

    const handleNextCurrentQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        }
    }

    const handlePrevCurrentQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1)
        }
    }

    // Manejamos la respuesta que se dé a la pregunta
    const handleQuestionAnswer = ( currentAnswer: number): void => {
        if (questions[currentQuestion].answers[currentAnswer].is_correct ) {
            console.log('CORRECTO')
        } else {
            console.log('INCORRECTO')
        }
    }

    return (
        <>
            <h1>Quiz Javv 2025</h1>
            {stateQuiz === "init" && <Quizinicio handleIniciar={handleIniciar} />}
            {
                stateQuiz === "in-course" && <Questions
                    handleTerminar={handleTerminar}
                    handleNextCurrentQuestion ={handleNextCurrentQuestion}
                    handlePrevCurrentQuestion ={handlePrevCurrentQuestion}
                    currentQuestion = {currentQuestion}
                    handleQuestionAnswer = {handleQuestionAnswer}
                    />
            }
            {stateQuiz === "end" && <Results />}
            {questions.length}
        </>
    )
}

export default Quizjavv