import { useParams } from "react-router"
import { ProtectedControls } from "./ProtectedControls"
import { QuizModuleControls } from "./QuizModuleControls"
import { FaSearch } from "react-icons/fa"
import { BsGripVertical } from "react-icons/bs"
import * as userClient from "../../account/client"
import { useEffect, useState } from "react"
import * as quizClient from "./client"
import { SlBookOpen } from "react-icons/sl"

export const Quizzes = () => {
    const { cid } = useParams()
    const [quizzes, setQuizzes] = useState<any[]>([])
    const [role, setRole] = useState("")

    useEffect(() => {
        const fetchUserRoleAndQuizzes = async () => {
            const user = await userClient.profile()
            setRole(user.role)

            if (user.role === "FACULTY") {
                const fetchedQuizzes = await quizClient.fetchAllQuizzes(cid as string)
                // console.log("FETCHED: ", fetchedQuizzes)
                // console.log("POINTS: ", fetchedQuizzes[0].totalPoints)
                setQuizzes(fetchedQuizzes)
            } else if (user.role === "STUDENT") {
                const fetchedQuizzes = await quizClient.fetchAllPublishedQuizzes(cid as string)
                // console.log("FETCHED PUBLISHED: ", fetchedQuizzes)
                setQuizzes(fetchedQuizzes)
            }
        }

        fetchUserRoleAndQuizzes();
    }, [cid])

    const handleDeleteQuiz = async (quizId: string) => {
        await quizClient.deleteQuiz(cid as string, quizId).then(() => {
            setQuizzes((prevQuizzes) => prevQuizzes.filter((quiz) => quiz._id !== quizId))
        })
    }

    const togglePublish = async (quizId: string, published: boolean) => {
        if (!published) {
            await quizClient.publishQuiz(cid as string, quizId)
            console.log("Publishing")
        } else {
            await quizClient.unpublishQuiz(cid as string, quizId)
            console.log("UNPublishing")
        }

        setQuizzes((prev) =>
            prev.map((quiz) =>
                quiz._id === quizId ? { ...quiz, published: !published } : quiz
            )
        )
    }


    return (
        <div id="wd-quizzes">
            <div className="assignment-controls d-flex align-items-center justify-content-between mb-4">
                <div className="assignment-search d-flex align-items-center">
                    <FaSearch className="search-icon me-2" />
                    <input id="wd-search-assignment" placeholder="Search..." className="assignment-searchbar" />
                </div>

                <ProtectedControls>
                    <QuizModuleControls cid={cid} />
                </ProtectedControls>
            </div>

            <hr />
            <br />

            <ul id="wd-quiz-list" className="list-group rounded-0">
                <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                    <div id="wd-quiz-title" className="p-3 ps-2 d-flex justify-content-between align-items-center"
                        style={{ backgroundColor: '#E0E0E0', height: "12vh" }}>

                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <span className="fw-bold">QUIZZES</span>
                        </div>
                    </div>

                    {quizzes.length === 0 ? (
                        <div>No quizzes available. Click the +Quiz button to create one.</div>
                    ) : (
                        quizzes.map((quiz) => (
                            <li key={quiz._id} className="wd-quiz-list-item list-group-item p-0 ps-1 py-3">
                                <div className="row w-100 p-0">
                                    <div className="col-1 d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3" />
                                        <SlBookOpen className="me-4 ms-2 fs-3" style={{ color: 'green' }} />
                                    </div>

                                    <div className="col-7 d-flex flex-column align-items-left">
                                        <a
                                            className="wd-quiz-link text-decoration-none text-black fs-5 fw-bold"
                                            href={`#/kanbas/courses/${cid}/quizzes/${quiz._id}`}
                                        >
                                            {quiz.title}
                                        </a>
                                        <span>
                                            {/* need to add if available check */}
                                            <b>Due</b> {new Date(quiz.dueDate).toLocaleDateString("en-US", {
                                                year: "numeric", month: "long", day: "numeric"
                                            })} | <b>Points</b> {quiz.totalPoints} Points | <b>Questions</b> {quiz.questions.length}
                                        </span>
                                    </div>

                                    <ProtectedControls>
                                        <div className="col-4 d-flex align-items-center justify-content-end">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleDeleteQuiz(quiz._id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="btn btn-secondary ms-2"
                                                onClick={() => togglePublish(quiz._id, quiz.published)}
                                            >
                                                {quiz.published ? "Unpublish" : "Publish"}
                                            </button>
                                        </div>
                                    </ProtectedControls>
                                </div>
                            </li>
                        ))
                    )}
                </li>
            </ul>
        </div>
    )
}

