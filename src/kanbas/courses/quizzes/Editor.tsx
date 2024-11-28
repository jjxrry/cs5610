import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as userClient from "../../account/client"
import * as quizClient from "./client"

export const QuizEditor = () => {
    const { cid, qid } = useParams()
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState("details")
    const [questionType, setQuestionType] = useState("multiple-choice")
    const [questionText, setQuestionText] = useState("")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [role, setRole] = useState("")
    const [id, setId] = useState("")

    //add state for all of the quiz object fields
    const [quizDetails, setQuizDetails] = useState({
        title: "New Quiz",
        course: cid as string,
        createdBy: id as string,
        description: "New Description",
        totalPoints: 0, // need to sum all of questions.values
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

    const formatDate = (date: any) => {
        const d = new Date(date)
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const year = d.getFullYear()
        return `${year}-${month}-${day}`
    }

    // useEffect to fetch the quiz details if qid !== new
    useEffect(() => {
        const fetchUserData = async () => {
            const user = await userClient.profile()
            setRole(user.role)
            // console.log("ID: ", user._id)
            setId(user._id)

            //fetch quiz details
            if (qid !== "new") {
                const quiz = await quizClient.fetchQuizById(cid as string, qid as string);
                console.log("fetched quiz: ", quiz)
                setQuizDetails({
                    ...quiz,
                    dueDate: formatDate(quiz.dueDate),
                    availableFrom: formatDate(quiz.availableFrom),
                    availableUntil: formatDate(quiz.availableUntil),
                });
            }
        }
        fetchUserData()
    }, [cid, qid])

    useEffect(() => {
        console.log("Updated quiz details: ", quizDetails.questions);
    }, [quizDetails.questions])

    const handleAddQuestion = () => {
        const newQuestion = {
            type: questionType,
            text: questionText,
            options: [],
            correctAnswer: correctAnswer,
            points: 1
        }

        if (questionType === "multiple-choice") {
            //@ts-expect-error its fine, we can make an interface if this gives issues
            newQuestion.options = [1, 2, 3, 4].map((num) => ({ text: `Option ${num}` }))
        } else if (questionType === "true-false") {
            //@ts-expect-error its fine
            newQuestion.options = [{ text: "True" }, { text: "False" }]
        }

        //@ts-expect-error its fine
        setQuizDetails((prevDetails) => ({
            ...prevDetails,
            questions: [...prevDetails.questions, newQuestion],
        }))

        setQuestionText("")
        setCorrectAnswer("")
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setQuizDetails((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target
        setQuizDetails(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    const handleSave = async (publish = false) => {
        const quizData = {
            ...quizDetails,
            createdBy: id,
            published: publish,
            course: cid,
        }

        if (qid === "new") {
            await quizClient.createQuiz(cid as string, quizData)
        } else {
            await quizClient.updateQuiz(cid as string, qid as string, quizData)
        }

        //doesnt work??
        navigate(`/kanbas/courses/${cid}/quizzes`)

    }


    return (
        <div className="container">
            <h3>Quiz Editor</h3>
            <Link to={`/kanbas/courses/${cid}/quizzes/${qid}`}>
                Back To Details
            </Link>

            <div className="mb-4 mt-4">
                <button
                    className={`btn ${activeTab === "details" ? "btn-primary" : "btn-secondary"} me-2`}
                    onClick={() => setActiveTab("details")}
                >
                    Details
                </button>
                <button
                    className={`btn ${activeTab === "questions" ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => setActiveTab("questions")}
                >
                    Questions
                </button>
            </div>

            {activeTab === "details" ? (
                <div className="mt-4">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            className="form-control"
                            value={quizDetails.title}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            value={quizDetails.description}
                            onChange={handleInputChange}
                            rows={4}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quizType" className="form-label">Quiz Type</label>
                        <select
                            id="quizType"
                            name="quizType"
                            className="form-select"
                            value={quizDetails.quizType}
                            onChange={handleInputChange}
                        >
                            <option value="Graded Quiz">Graded Quiz</option>
                            <option value="Practice Quiz">Practice Quiz</option>
                            <option value="Graded Survey">Graded Survey</option>
                            <option value="Ungraded Survey">Ungraded Survey</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
                        <select
                            id="assignmentGroup"
                            name="assignmentGroup"
                            className="form-select"
                            value={quizDetails.assignmentGroup}
                            onChange={handleInputChange}
                        >
                            <option value="Quizzes">Quizzes</option>
                            <option value="Exams">Exams</option>
                            <option value="Assignments">Assignments</option>
                            <option value="Project">Project</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="shuffleAnswers"
                                name="shuffleAnswers"
                                checked={quizDetails.shuffleAnswers}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="shuffleAnswers">
                                Shuffle Answers
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="timeLimit" className="form-label">Time Limit (minutes)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="timeLimit"
                            name="timeLimit"
                            value={quizDetails.timeLimit}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="multipleAttempts"
                                name="multipleAttempts"
                                checked={quizDetails.multipleAttempts}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="multipleAttempts">
                                Allow Multiple Attempts
                            </label>
                        </div>
                    </div>

                    {quizDetails.multipleAttempts && (
                        <div className="mb-3">
                            <label htmlFor="numAttempts" className="form-label">
                                How Many Attempts
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="numAttempts"
                                name="numAttempts"
                                value={quizDetails.numAttempts}
                                onChange={handleInputChange}
                                min="1"
                            />
                        </div>
                    )}

                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="showCorrectAnswers"
                                name="showCorrectAnswers"
                                checked={quizDetails.showCorrectAnswers}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="showCorrectAnswers">
                                Show Correct Answers
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="accessCode" className="form-label">Access Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="accessCode"
                            name="accessCode"
                            value={quizDetails.accessCode}
                            onChange={handleInputChange}
                            placeholder="Leave blank for no access code"
                        />
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="oneQuestionAtATime"
                                name="oneQuestionAtATime"
                                checked={quizDetails.oneQuestionAtATime}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="oneQuestionAtATime">
                                One Question at a Time
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="webcamRequired"
                                name="webcamRequired"
                                checked={quizDetails.webcamRequired}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="webcamRequired">
                                Webcam Required
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="lockQuestionsAfterAnswering"
                                name="lockQuestionsAfterAnswering"
                                checked={quizDetails.lockQuestionsAfterAnswering}
                                onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label" htmlFor="lockQuestionsAfterAnswering">
                                Lock Questions After Answering
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dueDate" className="form-label">Due Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dueDate"
                            name="dueDate"
                            value={quizDetails.dueDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="availableFrom" className="form-label">Available From</label>
                        <input
                            type="date"
                            className="form-control"
                            id="availableFrom"
                            name="availableFrom"
                            value={quizDetails.availableFrom}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="availableUntil" className="form-label">Available Until</label>
                        <input
                            type="date"
                            className="form-control"
                            id="availableUntil"
                            name="availableUntil"
                            value={quizDetails.availableUntil}
                            onChange={handleInputChange}
                        />
                    </div>

                </div>
            ) : (
                <div className="mt-4">
                    <h4>Manage Questions</h4>
                    <div className="mb-3">
                        <label htmlFor="question-type" className="form-label">Question Type</label>
                        <select
                            id="question-type"
                            className="form-select"
                            value={questionType}
                            onChange={(e) => setQuestionType(e.target.value)}
                        >
                            <option value="multiple-choice">Multiple Choice</option>
                            <option value="true-false">True/False</option>
                            <option value="short-answer">Short Answer</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="question-text" className="form-label">Question Text</label>
                        <textarea
                            id="question-text"
                            className="form-control"
                            placeholder="Enter the question"
                            rows={3}
                        />
                    </div>

                    {questionType === "multiple-choice" && (
                        <div className="mb-3">
                            <h5>Options</h5>
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder={`Option ${num}`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {questionType === "true-false" && (
                        <div className="mb-3">
                            <h5>Answer</h5>
                            <select id="true-false-answer" className="form-select">
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    )}

                    <div className="mb-3">
                        <label htmlFor="correct-answer" className="form-label">Correct Answer</label>
                        {questionType === "multiple-choice" && (
                            <select
                                id="correct-answer"
                                className="form-select"
                                value={correctAnswer}
                                onChange={(e) => setCorrectAnswer(e.target.value)}
                            >
                                {[1, 2, 3, 4].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        )}

                        {questionType === "true-false" && (
                            <select
                                id="correct-answer"
                                className="form-select"
                                value={correctAnswer}
                                onChange={(e) => setCorrectAnswer(e.target.value)}
                            >
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        )}

                        {questionType === "short-answer" && (
                            <input
                                type="text"
                                id="correct-answer"
                                className="form-control"
                                placeholder="Enter correct answer"
                                value={correctAnswer}
                                onChange={(e) => setCorrectAnswer(e.target.value)}
                            />
                        )}
                    </div>

                    <button onClick={handleAddQuestion} className="btn btn-primary">Add Question</button>
                </div>
            )}

            <hr />

            <div className="d-flex justify-content-end mt-4">
                <Link to={`/kanbas/courses/${cid}/quizzes`} className="btn btn-secondary me-2">
                    Cancel
                </Link>
                <button
                    className="btn btn-primary me-2"
                    onClick={() => handleSave(false)}
                >
                    Save
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => handleSave(true)}
                >
                    Save & Publish
                </button>
            </div>
        </div>
    )

}
