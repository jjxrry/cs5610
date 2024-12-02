import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import * as quizClient from "./client"
import * as userClient from "../../account/client"

export const QuizDetails = () => {
    const { qid, cid } = useParams()
    const [role, setRole] = useState("")
    const [id, setId] = useState("")
    const [attempts, setAttempts] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [existingAttempt, setExistingAttempt] = useState(false)
    //fetch existing data if exists, if qid !== "new"
    const [quizDetails, setQuizDetails] = useState({
        title: "New Quiz",
        course: cid as string,
        createdBy: id as string,
        description: "New Description",
        totalPoints: 0,
        questions: [],
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        numAttempts: 1,
        showCorrectAnswers: false,
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: "2025-01-01",
        availableFrom: "2025-01-01",
        availableUntil: "2025-01-01",
        published: false,
    })

    useEffect(() => {
        const fetchUserRoleAndQuiz = async () => {
            const user = await userClient.profile()
            setRole(user.role)
            // console.log("ROLE: ", user.role)
            setId(user._id)
            if (qid !== "new") {
                const fetchedQuiz = await quizClient.fetchQuizById(cid as string, qid as string)
                // console.log("DETAILS FETCHED QUIZ: ", fetchedQuiz)
                setQuizDetails(fetchedQuiz)
            }
            let attempt
            try {
                attempt = await quizClient.getAttemptByUserId(cid as string, qid as string, user._id as string)
                console.log("fetch params: ", cid, qid, user._id)
                console.log("ATTEMPT FETCH: ", attempt)
                if (attempt) {
                    setAttempts(attempt.scores.length)
                }
            } catch (error) {
                console.log("No attempts yet: ", error)
            }

            if (attempt?.scores && attempt?.scores.length > 0) {
                setExistingAttempt(true)
                //@ts-expect-error its fine
                const bestScore = Math.max(...attempt.scores.map(scoreObj => scoreObj.score))
                setHighScore(bestScore)
            }


        }
        fetchUserRoleAndQuiz()
    }, [cid, qid])

    const formatDate = (date: string) => {
        const d = new Date(date)
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const year = d.getFullYear()
        return `${year}-${month}-${day}`
    }

    // this is wrong
    const attemptsRemaining = quizDetails?.numAttempts - attempts

    return (
        <div>
            <h3>Quiz Details</h3>
            <div>
                {role === "FACULTY" ? (
                    <div className="d-flex justify-content-around"
                        style={{ "width": "6vw" }}>
                        <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/take`}>
                            Preview
                        </Link>
                        <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`}>
                            Edit
                        </Link>
                    </div>
                ) : (
                    attemptsRemaining > 0 ? (
                        <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/take`}>
                            Start Quiz
                        </Link>
                    ) : (
                        <Link to="#" onClick={() => alert("No attempts remaining")}>
                            Start Quiz
                        </Link>
                    )
                )}
            </div>

            <hr />
            <br />

            <div>
                <div>
                    <h3>Details</h3>
                    <p><strong>Quiz Type:</strong> {quizDetails.quizType}</p>
                    <p><strong>Points:</strong> {quizDetails.totalPoints}</p>
                    {existingAttempt && (
                        <p><strong>Best Score:</strong> {highScore}</p>
                    )}
                    <p><strong>Assignment Group:</strong> {quizDetails.assignmentGroup}</p>
                    <p><strong>Shuffle Answers:</strong> {quizDetails.shuffleAnswers ? "Yes" : "No"}</p>
                    <p><strong>Time Limit:</strong> {quizDetails.timeLimit} Minutes</p>
                    <p><strong>Multiple Attempts:</strong> {quizDetails.multipleAttempts ? "Yes" : "No"}</p>

                    {quizDetails.multipleAttempts && (
                        <>
                            <p><strong>How Many Attempts:</strong> {quizDetails.numAttempts}</p>
                            <p><strong>Attempts Remaining:</strong> {attemptsRemaining}</p>
                        </>
                    )}
                    <p><strong>Show Correct Answers:</strong> {quizDetails.showCorrectAnswers ? "Yes" : "No"}</p>
                    <p><strong>Access Code:</strong> {quizDetails.accessCode || "None"}</p>
                    <p><strong>One Question at a Time:</strong> {quizDetails.oneQuestionAtATime ? "Yes" : "No"}</p>
                    <p><strong>Webcam Required:</strong> {quizDetails.webcamRequired ? "Yes" : "No"}</p>
                    <p><strong>Lock Questions After Answering:</strong> {quizDetails.lockQuestionsAfterAnswering ? "Yes" : "No"}</p>
                </div>
                <hr />
                <div>
                    <h3>Due Dates</h3>
                    <p><strong>Due Date:</strong> {formatDate(quizDetails.dueDate)}</p>
                    <p><strong>Available From:</strong> {formatDate(quizDetails.availableFrom)}</p>
                    <p><strong>Available Until:</strong> {formatDate(quizDetails.availableUntil)}</p>
                </div>
            </div>
        </div>
    )
}

