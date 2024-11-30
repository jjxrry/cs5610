import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { ProtectedControls } from "./ProtectedControls"
import { ProtectedStudentControls } from "./ProtectedStudentControls"

export const TakeQuiz = () => {
    const { cid, qid } = useParams()
    // fetch the quiz based on qid

    // put all the quizDetails.questions object into a map
    // index them and render modal based on index

    // 

    return (
        <div>
            Take Quiz Title
            <ProtectedStudentControls>
                <Link to={`/kanbas/courses/${cid}/quizzes/`}>
                    Back to Quizzes
                </Link>
            </ProtectedStudentControls>

            <br />

            <ProtectedControls>
                <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`}>
                    Back to Editor
                </Link>
                <br />
                HI TEACHER
                <br />
                <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`}
                    state={{ startOn: "questions" }}>
                    Edit Quiz
                </Link>

            </ProtectedControls>

            {/* modal to render quizDetails */}

            {/* next question button to bump up the next question index */}

            {/* button to post attempt */}

            {/* questions list with each anchor to set onclick the value of its index to display question on modal */}
        </div>
    )
}
