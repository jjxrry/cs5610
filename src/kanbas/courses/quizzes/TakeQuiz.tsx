import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"
import { ProtectedControls } from "./ProtectedControls"
import { ProtectedStudentControls } from "./ProtectedStudentControls"
import { useEffect, useState } from "react"
import * as quizClient from "./client"
import * as userClient from "../../account/client"

export const TakeQuiz = () => {
    const { cid, qid } = useParams()
    const navigate = useNavigate()
    const [id, setId] = useState("")
    const [quizDetails, setQuizDetails] = useState(null)
    const [attemptDetails, setAttemptDetails] = useState(null)
    const [questions, setQuestions] = useState([])
    const [userAnswers, setUserAnswers] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    // const [attemptCount, setAttemptCount] = useState(0)
    const [startTime, setStartTime] = useState("")
    // const [timeRemaining, setTimeRemaining] = useState(null)
    // const [quizStarted, setQuizStarted] = useState(false)
    // const [prevScores, setPrevScores] = useState([])
    const [existingAttempt, setExistingAttempt] = useState(false)
    const [highScore, setHighScore] = useState(0)
    const [attempts, setAttempts] = useState(0)

    const formatDate = (date: any) => {
        const d = new Date(date)
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const year = d.getFullYear()
        return `${year}-${month}-${day}`
    }

    //fetch user Id and initial quiz
    useEffect(() => {
        const fetchInitialData = async () => {
            const user = await userClient.profile();
            setId(user._id);
            const quiz = await quizClient.fetchQuizById(cid as string, qid as string);
            setQuizDetails(quiz);

            let attempt
            try {
                attempt = await quizClient.getAttemptByUserId(cid as string, qid as string, user._id as string)
                // console.log("ATTEMPT FETCH: ", attempt)
                if (attempt) {
                    setAttemptDetails(attempt)
                    setAttempts(attempt.scores.length)
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
            const startStamp = new Date().getTime()
            setStartTime(formatDate(startStamp))
            // console.log("Start Time INITIAL STATE: ", startTime)
            // setQuizStarted(true)
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

    const calculateScore = () => {
        let points = 0
        for (let i = 0; i < userAnswers.length; i++) {
            // console.log(`SELECTED ANSWER for QUESTION ${i + 1}: `, userAnswers[i].selectedAnswer)
            // console.log(`CORRECT ANSWER for ${i + 1}: `, questions[i].correctAnswer)
            //@ts-expect-error its fine
            if (userAnswers[i]?.selectedAnswer === questions[i].correctAnswer) {
                //@ts-expect-error its fine
                points += questions[i].points
                //@ts-expect-error its fine
                userAnswers[i].isCorrect = true
            }
        }
        return points
    }

    // handle submit attempt
    const handleQuizSubmission = async () => {
        // handle timers
        // setQuizStarted(false)
        const endTimeCreation = new Date()
        const formattedEndTime = formatDate(endTimeCreation)

        // handle score calculation and object formatting
        const calcScore = calculateScore()
        // console.log("calcScore: ", calcScore)
        const scoreObject = {
            score: calcScore,
            endTime: formattedEndTime,
        }

        const attempt = {
            user: id as string,
            quizId: qid as string,
            courseId: cid as string,
            //@ts-expect-error its fine
            attemptNumber: quizDetails?.attemptNumber + 1 || 1,
            answers: userAnswers,
            //@ts-expect-error its fine
            totalPoints: quizDetails?.totalPoints,
            //@ts-expect-error its fine
            scores: [...(attemptDetails?.scores || []), scoreObject],
            startTime: startTime,
            endTime: formattedEndTime,
        }

        if (!existingAttempt) {
            await quizClient.createAttempt(cid as string, qid as string, attempt)
        } else {
            console.log("EXISTING ATTEMPT ID: ", attemptDetails)
            // this is firing, we need to fix what is updated
            //@ts-expect-error its fine
            await quizClient.updateAttempt(cid as string, qid as string, attemptDetails._id, attempt)
        }
        navigate(`/kanbas/courses/${cid}/quizzes`)
    }

    // Render question types
    const renderQuestion = () => {
        if (!questions[questionIndex]) return null;

        const currentQuestion = questions[questionIndex];
        const { type, text, options } = currentQuestion;
        //@ts-expect-error its fine
        const currentAnswer = userAnswers[questionIndex]?.selectedAnswer || "";
        // console.log("RENDER QUESTION: ", currentQuestion)
        // console.log("OPTIONS: ", options)
        const questionOptions = Array.isArray(options) ? options : []

        switch (type) {
            case "multiple-choice":
                return (
                    <div className="space-y-4">
                        <p className="font-medium text-lg ps-2 mt-2"> {text}</p>
                        <div className="space-y-2 ps-2">
                            {questionOptions.map((option, index: number) => (
                                <div>
                                    <label key={index} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            //@ts-expect-error its fine
                                            value={option.text}
                                            //@ts-expect-error its fine
                                            checked={currentAnswer === option.text}
                                            //@ts-expect-error its fine
                                            onChange={() => handleAnswerSelect(option.text)}
                                            className="form-radio"
                                        />
                                        {/* @ts-expect-error its fine */}
                                        <span> {option.text}</span>
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case "true-false":
                return (
                    <div className="space-y-4">
                        <p className="font-medium text-lg ps-2 mt-2"> {text}</p>
                        <div className="space-y-2 ps-2">
                            {[
                                { value: "True", label: "True" },
                                { value: "False", label: "False" }
                            ].map((option) => (
                                <div>
                                    <label key={option.value} className="flex items-center space-x-2">
                                        <input
                                            type="radio"
                                            name={`question-${questionIndex}`}
                                            value={option.value}
                                            checked={currentAnswer === option.value}
                                            onChange={() => handleAnswerSelect(option.value)}
                                            className="form-radio"
                                        />
                                        <span> {option.label}</span>
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
                        <p className="font-medium text-lg mt-2"> {text}</p>
                        <input
                            type="text"
                            value={currentAnswer}
                            onChange={(e) => handleAnswerSelect(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Type your answer here..."
                        />
                    </div>
                );
            default:
                return (
                    <div>no question</div>
                )
        }
    }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold">Take Quiz</h3>

            <ProtectedStudentControls>
                <Link to={`/kanbas/courses/${cid}/quizzes/`}
                    className="mb-2 rounded btn btn-secondary text-decoration-none custom-link"
                >
                    Back to Quizzes
                </Link>
            </ProtectedStudentControls>

            <ProtectedControls>
                <div>
                    <h5 className="font-bold rounded bg-danger text-white p-2 w-50">❕ This is a preview of the published version of the quiz</h5>
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
                {/* @ts-expect-error its fine */}
                <p>Attempts Remaining: {quizDetails?.numAttempts - attempts}</p>
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
                    <div className="mt-6">
                        <button
                            onClick={handleQuizSubmission}
                            className="px-4 py-2 text-black rounded"
                        >
                            Submit Quiz
                        </button>
                    </div>

                    <hr className="my-6" />

                    {/* <div> */}
                    {/*     <h5 className="font-semibold mb-2">Questions:</h5> */}
                    {/*     <div className="flex flex-wrap gap-2"> */}
                    {/*         {questions.map((_, index) => ( */}
                    {/*             <button */}
                    {/*                 key={index} */}
                    {/*                 onClick={() => setQuestionIndex(index)} */}
                    {/*                 className={`w-8 h-8 rounded flex items-center justify-center */}
                    {/*                     ${questionIndex === index */}
                    {/*                         ? 'bg-blue-600 text-white' */}
                    {/*                         : 'bg-gray-200 hover:bg-gray-300'}`} */}
                    {/*             > */}
                    {/*                 {index + 1} */}
                    {/*             </button> */}
                    {/*         ))} */}
                    {/*     </div> */}
                    {/* </div> */}
                </div>
            )}
        </div>
    )
}
