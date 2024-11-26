import { Link, useParams } from "react-router-dom"

export const QuizDetails = () => {
    const { qid, cid } = useParams()

    //fetch existing data if exists, if qid !== "new"


    return (
        <div>
            <h3>Quiz Details</h3>
            <div>
                <button>
                    Preview
                </button>
                <Link to={`/kanbas/courses/${cid}/quizzes/${qid}/editor`}>
                    Edit
                </Link>
            </div>

            <hr />
            <br />

            <div>
                <div>
                    <h3>Details</h3>
                    <p>Quiz Name</p>
                </div>
                <hr />
                <div>
                    <p>Details</p>
                </div>
                <hr />
                <div>
                    <p>pDue Dates</p>
                </div>
            </div>
        </div>
    )
}
