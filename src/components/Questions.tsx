import { questions } from "@/data/questions"
import { shuffleAnswers } from "@/utils/utils";

interface QuestionsProps {
    handleTerminar: () => void;
    handleNextCurrentQuestion: () => void;
    handlePrevCurrentQuestion: () => void;
    currentQuestion: number;
    handleQuestionAnswer: (currentQuestion: number) => void;
}

const Questions = ({
    handleTerminar,
    handleNextCurrentQuestion,
    handlePrevCurrentQuestion,
    currentQuestion,
    handleQuestionAnswer
}: QuestionsProps) => {
    const questionTest = questions[currentQuestion] // obtenemos la pregunta
    const shuffledAnswers = shuffleAnswers([0, 1, 2, 3]) // Barajamos las respuestas
    return (
        <section>
            <h3>{questionTest.text_question}</h3>
            <article className="answers">
                {
                    shuffledAnswers.map((iQuestion, index) =>
                        <div
                            key={questionTest.answers[iQuestion].id_answer} 
                            onClick={() => handleQuestionAnswer(iQuestion)}
                            >
                            <p>{`${String.fromCodePoint(97 + index)}.- ${questionTest.answers[iQuestion].text_answer}`}</p>
                        </div>)
                }
            </article>
            <article className="buttons">
                <button
                    onClick={handlePrevCurrentQuestion}
                    disabled={!(currentQuestion > 0)}
                >Anterior</button>
                <button
                    onClick={handleNextCurrentQuestion}
                    disabled={!(currentQuestion < questions.length - 1)}
                >Siguiente</button>
                <button onClick={handleTerminar}>Terminar</button>
            </article>
        </section>
    )
}

export default Questions