import { useState } from "react"
import { useParams } from "react-router";

export const QuizEditor = () => {
    const { qid } = useParams()
    console.log(qid)

    const [activeTab, setActiveTab] = useState("details");
    const [questionType, setQuestionType] = useState("multiple-choice");
    //add state for all of the quiz object fields
    const [quizDetails, setQuizDetails] = useState({})

    // useEffect to fetch the quiz details if qid !== new


    return (
        <div>
            <h3>Quiz Editor</h3>

            <div className="mb-4">
                <button
                    onClick={() => setActiveTab("details")}
                    style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: activeTab === "details" ? "#ddd" : "#fff",
                        border: "1px solid #ccc",
                    }}
                >
                    Details
                </button>
                <button
                    onClick={() => setActiveTab("questions")}
                    style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: activeTab === "questions" ? "#ddd" : "#fff",
                        border: "1px solid #ccc",
                    }}
                >
                    Questions
                </button>
            </div>

            {activeTab === "details" ? (
                <div>
                    <div>
                        <label htmlFor="quiz-title">Title</label>
                        <input id="quiz-title" type="text" placeholder="Enter quiz title" />
                    </div>
                    <div>
                        <label htmlFor="quiz-details">Details</label>
                        <textarea id="quiz-details" placeholder="Enter quiz details" />
                    </div>
                    <div>
                        <label htmlFor="quiz-due-dates">Due Dates</label>
                        <input id="quiz-due-dates" type="date" />
                    </div>
                    <button>Save Fields</button>
                </div>
            ) : (
                <div>
                    <h4>Manage Questions</h4>
                    <div>
                        <label htmlFor="question-type">Question Type</label>
                        <select
                            id="question-type"
                            value={questionType}
                            onChange={(e) => setQuestionType(e.target.value)}
                        >
                            <option value="multiple-choice">Multiple Choice</option>
                            <option value="true-false">True/False</option>
                            <option value="short-answer">Short Answer</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="question-text">Question Text</label>
                        <textarea id="question-text" placeholder="Enter the question" />
                    </div>

                    {/* Conditional Rendering Based on Question Type */}
                    {questionType === "multiple-choice" && (
                        <div>
                            <h5>Options</h5>
                            <div>
                                <input type="text" placeholder="Option 1" />
                            </div>
                            <div>
                                <input type="text" placeholder="Option 2" />
                            </div>
                            <div>
                                <input type="text" placeholder="Option 3" />
                            </div>
                            <div>
                                <input type="text" placeholder="Option 4" />
                            </div>
                        </div>
                    )}

                    {questionType === "true-false" && (
                        <div>
                            <h5>Answer</h5>
                            <select id="true-false-answer">
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    )}

                    {questionType === "short-answer" && (
                        <div>
                            <h5>Answer</h5>
                            <input type="text" placeholder="Enter the short answer" />
                        </div>
                    )}

                    <button>Add Question</button>
                </div>
            )}
        </div>
    )
}
