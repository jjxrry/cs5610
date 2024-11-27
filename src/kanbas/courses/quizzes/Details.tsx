import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import * as quizClient from "./client"
import * as userClient from "../../account/client"

export const QuizDetails = () => {
    const { qid, cid } = useParams()
    const [role, setRole] = useState("")

    useEffect(() => {
        const fetchUserRole = async () => {
            const user = await userClient.profile()
            console.log(user.role)
            setRole(user.role)
        }
        fetchUserRole()
    }, [])


    //fetch existing data if exists, if qid !== "new"
    const [details, setDetails] = useState({})

    const defaultQuizDetails = {
        title: "",
        description: "",
        totalPoints: 0,
        questions: [],
        quizType: "Graded Quiz",
        assignmentGroup: "Quizzes",
        shuffleAnswers: true,
        timeLimit: 20,
        multipleAttempts: false,
        showCorrectAnswers: false,
        accessCode: "",
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        dueDate: "",
        availableFrom: "",
        availableUntil: "",
        published: false
    };

    useEffect(() => {
        if (qid !== "new") {
            const fetchDetails = async () => {
                try {
                    const quizData = await quizClient.fetchQuizById(qid as string);
                    setDetails(quizData);
                } catch (error) {
                    console.error("Error fetching quiz details:", error);
                }
            };
            fetchDetails();
        }
    }, [qid, cid])

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
                    <p>{}</p>
                </div>
                <hr />
                <div>
                    <p>pDue Dates</p>
                </div>
            </div>
        </div>
    )
}


//         title: { type: String, required: true, trim: true },
//         course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel", required: true },
//         createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
//         description: { type: String, required: true, trim: true },
//         totalPoints: {
//             type: Number,
//             required: true,
//             default: 0,
//             set: function() {
//                 return this.questions.reduce((sum, question) => sum + question.points, 0);
//             }
//         },
//         questions: { type: [questionSchema], required: true },
//         quizType: {
//             type: String,
//             enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
//             default: "Graded Quiz"
//         },
//         assignmentGroup: {
//             type: String,
//             enum: ["Quizzes", "Exams", "Assignments", "Project"],
//             default: "Quizzes"
//         },
//         shuffleAnswers: { type: Boolean, default: true },
//         timeLimit: { type: Number, default: 20 },
//         multipleAttempts: { type: Boolean, default: false },
//         showCorrectAnswers: { type: Boolean, default: false },
//         accessCode: { type: String, default: "" },
//         oneQuestionAtATime: { type: Boolean, default: true },
//         webcamRequired: { type: Boolean, default: false },
//         lockQuestionsAfterAnswering: { type: Boolean, default: false },
//         dueDate: { type: Date, required: true },
//         availableFrom: { type: Date, required: true },
//         availableUntil: { type: Date, required: true },
//         published: { type: Boolean, required: true, default: false }
//     },
//     { collection: "quizzes", timestamps: true }
// );
//
// export default quizSchema;
//

