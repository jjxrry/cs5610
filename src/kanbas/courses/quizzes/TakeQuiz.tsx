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
    const [questions, setQuestions] = useState([])
    const [userAnswers, setUserAnswers] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [attemptCount, setAttemptCount] = useState(0)
    const [startTime, setStartTime] = useState("")
    // const [endTime, setEndTime] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(null)
    const [quizStarted, setQuizStarted] = useState(false)
    // const [totalPoints, setTotalPoints] = useState(0)
    const [scoringIndex, setScoringIndex] = useState(0)
    const [prevScores, setPrevScores] = useState([])
    // const [scoreObject, setScoreObject] = useState({})

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
            //@ts-expect-error its fine
            setUserAnswers(new Array(quiz?.questions?.length || 0).fill({
                selectedAnswer: "",
                isCorrect: false,
                points: 0
            }));
            setQuestions(quiz?.questions || [])
            setPrevScores(quiz?.scores || [])
            const startStamp = new Date().getTime()
            setStartTime(formatDate(startStamp))
            console.log("Start Time INITIAL STATE: ", startTime)
            setQuizStarted(true)
        };
        fetchInitialData();
    }, [cid, qid]);

    useEffect(() => {
        if (quizDetails) {
            console.log("QUIZ FETCHED: ", quizDetails)
            //@ts-expect-error its fine
            console.log("QUESTIONS: ", quizDetails.questions)
            console.log("USER ANSWER UPDATE: ", userAnswers)
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

    // const handleAttemptScoring = () => {
    //     while (scoringIndex > questions.length) {
    //         //@ts-expect-error its fine
    //         if (userAnswers[scoringIndex].selectedAnswer === questions[scoringIndex].correctAnswer) {
    //             //@ts-expect-error its fine
    //             setTotalPoints(totalPoints + questions[scoringIndex].points)
    //             setScoringIndex(scoringIndex + 1)
    //             console.log("ATTEMPT SCORE IS: ", totalPoints)
    //         }
    //     }
    //
    //     return totalPoints
    // }

    const calculateScore = () => {
        let points = 0
        questions.forEach((question, index) => {
            //@ts-expect-error its fine
            if (userAnswers[index]?.selectedAnswer === question.correctAnswer) {
                //@ts-expect-error its fine
                points += question.points
            }
        })
        return points
    }

    // handle submit attempt
    const handleQuizSubmission = async () => {
        // handle timers
        setQuizStarted(false)
        const endTimeCreation = new Date()
        const formattedEndTime = formatDate(endTimeCreation)

        // handle score calculation and object formatting
        const calcScore = calculateScore()
        const scoreObject = {
            score: calcScore,
            endTime: formattedEndTime,
        }

        const attempt = {
            user: id as string,
            quizId: qid as string,
            courseId: cid as string,
            attemptNumber: attemptCount + 1,
            answers: userAnswers,
            //@ts-expect-error its fine
            totalPoints: quizDetails?.totalPoints,
            scores: [...prevScores, scoreObject],
            startTime: startTime,
            endTime: formattedEndTime,
        }

        await quizClient.createAttempt(cid as string, qid as string, attempt)
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
                        <p className="font-medium text-lg">{text}</p>
                        <div className="space-y-2">
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
                        <p className="font-medium text-lg">{text}</p>
                        <div className="space-y-2">
                            {[
                                { value: "true", label: "True" },
                                { value: "false", label: "False" }
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
                                        <span>{option.label}</span>
                                    </label>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "short-answer":
                return (
                    <div className="space-y-4">
                        <p className="font-medium text-lg">{text}</p>
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
            <h3 className="text-2xl font-bold mb-4">Take Quiz</h3>

            <ProtectedStudentControls>
                <Link to={`/kanbas/courses/${cid}/quizzes/`} className="text-blue-600 hover:underline">
                    Back to Quizzes
                </Link>
            </ProtectedStudentControls>

            <ProtectedControls>
                <div className="space-y-2 my-4">
                    <h5 className="font-bold mt-4 rounded bg-danger text-white p-2 w-50">❕ This is a preview of the published version of the quiz</h5>
                    <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`} className="text-blue-600 hover:underline block">
                        Back to Editor
                    </Link>
                    <br />
                    <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`} className="text-blue-600 hover:underline block"
                        state={{ startOn: "questions" }}>
                        Edit Quiz
                    </Link>
                </div>
            </ProtectedControls>

            {questions.length > 0 && (
                <div className="">
                    <div className="mb-4">
                        <h4 className="text-xl font-semibold">Question {questionIndex + 1} of {questions.length}</h4>
                    </div>

                    <hr className="my-4" />

                    <div className="mb-6">
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
