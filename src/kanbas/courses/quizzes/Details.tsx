import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import * as quizClient from "./client"
import * as userClient from "../../account/client"

export const QuizDetails = () => {
    const { qid, cid } = useParams()
    const [role, setRole] = useState("")
    const [id, setId] = useState("")
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
                    <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/take`}>
                        Start Quiz
                    </Link>
                )}
            </div>

            <hr />
            <br />

            <div>
                <div>
                    <h3>Details</h3>
                    <p><strong>Quiz Type:</strong> {quizDetails.quizType}</p>
                    <p><strong>Points:</strong> {quizDetails.totalPoints}</p>
                    <p><strong>Assignment Group:</strong> {quizDetails.assignmentGroup}</p>
                    <p><strong>Shuffle Answers:</strong> {quizDetails.shuffleAnswers ? "Yes" : "No"}</p>
                    <p><strong>Time Limit:</strong> {quizDetails.timeLimit} Minutes</p>
                    <p><strong>Multiple Attempts:</strong> {quizDetails.multipleAttempts ? "Yes" : "No"}</p>
                    {quizDetails.multipleAttempts && (
                        <p><strong>How Many Attempts:</strong> {quizDetails.numAttempts}</p>
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

