import { useParams } from "react-router"
import { ProtectedControls } from "./ProtectedControls"
import { QuizModuleControls } from "./QuizModuleControls"
import { FaSearch } from "react-icons/fa"
import { BsGripVertical } from "react-icons/bs"

export const Quizzes = () => {

    const { cid } = useParams()

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

                        {/* <div> */}
                        {/*     <span className="me-3 px-3 py-2 text-dark rounded-pill" */}
                        {/*         style={{ border: "1px solid #484848" }} */}
                        {/*     >40% of Total</span> */}
                        {/*     <ProtectedControls> */}
                        {/*         <AssignmentTitleControls /> */}
                        {/*     </ProtectedControls> */}
                        {/* </div> */}
                    </div>

                    {/* {assignments */}
                    {/*     .filter((assignment: any) => assignment.course === cid) */}
                    {/*     .map((assignment: any) => ( */}
                    {/*         <li className="wd-assignment-list-item list-group-item p-0 ps-1 py-3"> */}
                    {/*             <div className="row w-100 p-0"> */}
                    {/**/}
                    {/*                 <div className="col-1 d-flex align-items-center"> */}
                    {/*                     <BsGripVertical className="me-2 fs-3" /> */}
                    {/*                     <SlBookOpen className="me-4 ms-2 fs-3" style={{ color: 'green' }} /> */}
                    {/*                 </div> */}
                    {/**/}
                    {/*                 <div className="col-7 d-flex flex-column align-items-left"> */}
                    {/*                     <a className="wd-assignment-link text-decoration-none text-black fs-5 fw-bold" */}
                    {/*                         href={`#/kanbas/courses/${cid}/assignments/${assignment._id}`}> */}
                    {/*                         {assignment.title} */}
                    {/*                     </a> */}
                    {/*                     <span> */}
                    {/*                         <span style={{ color: "#D80000" }}>Multiple Modules</span> | <b>Not available until</b> {new Date(assignment.availableFrom).toLocaleDateString("en-US", { */}
                    {/*                             year: "numeric", */}
                    {/*                             month: "long", */}
                    {/*                             day: "numeric" */}
                    {/*                         })} | <br /> <b>Due</b> {new Date(assignment.availableUntil).toLocaleDateString("en-US", { */}
                    {/*                             year: "numeric", */}
                    {/*                             month: "long", */}
                    {/*                             day: "numeric" */}
                    {/*                         })} | {assignment.points} Points */}
                    {/*                     </span> */}
                    {/*                 </div> */}
                    {/**/}
                    {/*                 <div className="col-4 d-flex align-items-center justify-content-end assignment-item-controls"> */}
                    {/*                     <ProtectedControls> */}
                    {/*                         <AssignmentItemControls assignmentId={assignment._id} onDeleteClick={handleDeleteClick} /> */}
                    {/*                     </ProtectedControls> */}
                    {/*                 </div> */}
                    {/*             </div> */}
                    {/*         </li> */}
                    {/**/}
                    {/*     )) */}
                    {/* } */}
                </li>
            </ul>
        </div>
    )
}

