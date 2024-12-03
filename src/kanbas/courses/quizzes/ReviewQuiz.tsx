import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { ProtectedControls } from "./ProtectedControls"
import { ProtectedStudentControls } from "./ProtectedStudentControls"
import { useEffect, useState } from "react"
import * as quizClient from "./client"
import * as userClient from "../../account/client"

export const ReviewQuiz = () => {
    const { cid, qid } = useParams()
    // const navigate = useNavigate()
    // const [id, setId] = useState("")
    const [quizDetails, setQuizDetails] = useState(null)
    const [attemptDetails, setAttemptDetails] = useState(null)
    const [questions, setQuestions] = useState([])
    const [userAnswers, setUserAnswers] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    // const [prevScores, setPrevScores] = useState([])
    const [existingAttempt, setExistingAttempt] = useState(false)
    const [highScore, setHighScore] = useState(0)

    //fetch user Id and initial quiz
    useEffect(() => {
        const fetchInitialData = async () => {
            const user = await userClient.profile();
            // setId(user._id);
            const quiz = await quizClient.fetchQuizById(cid as string, qid as string);
            setQuizDetails(quiz);

            let attempt
            try {
                attempt = await quizClient.getAttemptByUserId(cid as string, qid as string, user._id as string)
                // console.log("ATTEMPT FETCH: ", attempt)
                if (attempt) {
                    setAttemptDetails(attempt)
                }
            } catch (error) {
                console.log("No attempts yet: ", error)
            }

            //if there quizDetails.scores.length > 0, then we set existingAttempt to true
            if (attempt?.scores && attempt?.scores.length > 0) {
                setExistingAttempt(true)
                //@ts-expect-error its fine
                const bestScore = Math.max(...attempt.scores.map(scoreObj => scoreObj.score))
                setHighScore(bestScore)
            }

            //@ts-expect-error its fine
            setUserAnswers(new Array(quiz?.questions?.length || 0).fill({
                selectedAnswer: "",
                isCorrect: false,
                points: 0
            }))
            setQuestions(quiz?.questions || [])
            // setPrevScores(quiz?.scores || [])
        };
        fetchInitialData()
    }, [cid, qid]);

    // comment out when deployed then check for bugs
    useEffect(() => {
        if (quizDetails) {
            console.log("QUIZ FETCHED: ", quizDetails)
            //@ts-expect-error its fine
            console.log("QUESTIONS: ", quizDetails.questions)
            // console.log("USER ANSWER UPDATE: ", userAnswers)
        }
        //@ts-expect-error its fine
    }, [quizDetails, quizDetails?.questions, userAnswers])

    // handle answer select
    const handleAnswerSelect = (answer: string) => {
        setUserAnswers((prev) => {
            const updatedAnswers = [...prev]
            //@ts-expect-error its fine
            updatedAnswers[questionIndex] = {
                //@ts-expect-error its fine
                ...updatedAnswers[questionIndex],
                selectedAnswer: answer,
            }
            return updatedAnswers
        })

    }

    // handle question nav
    const handleNextQuestion = () => {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (questionIndex - 1 >= 0) {
            setQuestionIndex(questionIndex - 1)
        }

    }

    // Render question types
    const renderQuestion = () => {
        if (!questions[questionIndex]) return null;

        const currentQuestion = questions[questionIndex];
        const { type, text, options } = currentQuestion;
        // @ts-expect-error its fine
        const currentAnswer = userAnswers[questionIndex]?.selectedAnswer || "";
        const questionOptions = Array.isArray(options) ? options : [];

        // @ts-expect-error its fine
        const previousAnswer = attemptDetails?.answers[questionIndex] || null;

        // @ts-expect-error its fine
        const renderPreviousAnswer = (optionText) => {
            if (!previousAnswer) return null;

            if (previousAnswer.selectedAnswer === optionText) {
                return (
                    <span className="ms-2">
                        (Previous answer - {previousAnswer.isCorrect ?
                            <span className="text-success">Correct</span> :
                            <span className="text-danger">Incorrect</span>})
                    </span>
                );
            }
            return null;
        };

        switch (type) {
            case "multiple-choice":
                return (
                    <div className="space-y-4">
                        <p className="font-medium text-lg ps-2 mt-2">{text}</p>
                        <div className="space-y-2 ps-2">
                            {questionOptions.map((option, index) => (
                                <div key={index}>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            value={(option as any).text}
                                            checked={currentAnswer === (option as any).text}
                                            onChange={() => handleAnswerSelect((option as any).text)}
                                            className="form-radio"
                                            disabled
                                        />
                                        {/* @ts-expect-error its fine */}
                                        <span>{option.text}</span>
                                        {/* @ts-expect-error its fine */}
                                        {renderPreviousAnswer(option.text)}
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "true-false":
                return (
                    <div className="space-y-4">
                        <p className="font-medium text-lg ps-2 mt-2">{text}</p>
                        <div className="space-y-2 ps-2">
                            {[
                                { value: "True", label: "True" },
                                { value: "False", label: "False" }
                            ].map((option) => (
                                <div key={option.value}>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            value={option.value}
                                            checked={currentAnswer === option.value}
                                            onChange={() => handleAnswerSelect(option.value)}
                                            className="form-radio"
                                            disabled
                                        />
                                        <span>{option.label}</span>
                                        {renderPreviousAnswer(option.value)}
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "short-answer":
                return (
                    <div className="space-y-4 ps-2">
                        <p className="font-medium text-lg mt-2">{text}</p>
                        <input
                            type="text"
                            value={currentAnswer}
                            onChange={(e) => handleAnswerSelect(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Type your answer here..."
                            disabled
                        />
                        {previousAnswer && (
                            <div className="mt-3 text-muted">
                                <p>Previous answer: {previousAnswer.selectedAnswer}</p>
                                <p>Result: {previousAnswer.isCorrect ?
                                    <span className="text-success">Correct</span> :
                                    <span className="text-danger">Incorrect</span>}
                                </p>
                            </div>
                        )}
                    </div>
                );

            default:
                return <div>no question</div>;
        }
    };
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold">Review Latest Attempt</h3>

            <ProtectedStudentControls>
                <Link to={`/kanbas/courses/${cid}/quizzes/`}
                    className="mb-2 rounded btn btn-secondary text-decoration-none custom-link"
                >
                    Back to Quizzes
                </Link>
            </ProtectedStudentControls>

            <ProtectedControls>
                <div>
                    <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`}
                        className="rounded btn btn-secondary text-decoration-none custom-link"
                    >
                        Back to Editor
                    </Link>
                    <br />
                    <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`}
                        className="ms-2 rounded btn btn-secondary text-decoration-none custom-link"
                        state={{ startOn: "questions" }}>
                        Edit Quiz
                    </Link>
                </div>
            </ProtectedControls>

            <div className="d-flex flex-row gap-3">
                {existingAttempt && highScore !== 0 && (
                    <p>Best Previous Score: {highScore}</p>

                )}

            </div>
            {questions.length > 0 && (
                <div className="">
                    <div className="d-flex flex-row gap-2 bg-light"
                        style={{ border: '1px solid black', padding: '0.5rem' }}>
                        <h4 className="text-xl font-semibold">Question {questionIndex + 1} of {questions.length}</h4>
                    </div>


                    <div style={{ border: '1px solid black', padding: '0.5rem' }}
                        className="pl-4">
                        {renderQuestion()}
                    </div>

                    <br />

                    <div className="flex space-x-4 mt-2">
                        {questionIndex > 0 && (
                            <button
                                onClick={handlePreviousQuestion}
                                className="px-4 py-2 rounded me-2"
                            >
                                Previous Question
                            </button>
                        )}
                        {questionIndex < questions.length - 1 && (
                            <button
                                onClick={handleNextQuestion}
                                className="px-4 py-2 rounded"
                            >
                                Next Question
                            </button>
                        )}
                    </div>
                    <hr />
                </div>
            )}
        </div>
    )
}
