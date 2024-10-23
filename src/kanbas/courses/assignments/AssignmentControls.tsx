import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const AssignmentModuleControls = ({ cid }) => {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Link to={`/kanbas/courses/${cid}/assignments/new`} id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Link>
            <button id="wd-collapse-all" className="btn btn-lg me-1 float-end" style={{ backgroundColor: '#E0E0E0' }}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
        </div>
    );
}
