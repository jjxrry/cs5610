import { FaPlus } from "react-icons/fa6";
export const AssignmentModuleControls = () => {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
        </button>
        <button id="wd-collapse-all" className="btn btn-lg me-1 float-end" style={{ backgroundColor: '#E0E0E0'}}>
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
        </button>
    </div>
);}
