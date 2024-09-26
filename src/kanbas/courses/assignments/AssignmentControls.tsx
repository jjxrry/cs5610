import { FaPlus } from "react-icons/fa6";
export const AssignmentControls = () => {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
        </button>
        <button id="wd-collapse-all" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Collapse All
        </button>
    </div>
);}
