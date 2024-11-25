import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";

// @ts-expect-error its fine
export const QuizModuleControls = ({ cid }) => {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <button id="wd-collapse-all" className="btn btn-lg me-1 float-end" style={{ backgroundColor: '#E0E0E0' }}>
                <IoEllipsisVertical className="fs-4" />
            </button>
            <Link to={`/kanbas/courses/${cid}/quizzes/new`} id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </Link>
        </div>
    );
}
