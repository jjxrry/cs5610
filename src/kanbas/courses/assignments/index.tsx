import { BsGripVertical } from "react-icons/bs";
import { ModuleControlButtons } from "../modules/ModuleControlButtons";
import { AssignmentControls } from "./AssignmentControls";
import { FaSearch } from 'react-icons/fa';
import { SlBookOpen } from "react-icons/sl";


export const Assignments = () => {
    return (
      <div id="wd-assignments">
        <div className="assignment-controls">
            <div className="assignment-search">
                {/* move this inside search bar */}
                <FaSearch className="search-icon" />
                <input id="wd-search-assignment" placeholder="Search..." />
            </div>
            <AssignmentControls /><br /><br /><br /><br />
        </div>

        <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                <div id="wd-assignments-title" className="p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3"/>
                    ASSIGNMENTS 40% of Total <button>+</button>
                    {/* turn this into Plus + Three dots */}
                    <ModuleControlButtons />
                </div>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>
                <SlBookOpen className="me-4 ms-2 fs-3"/>
                {/* Add Book Icon */}
                <a className="wd-assignment-link text-decoration-none text-black fs-5"
                    href="#/kanbas/courses/1234/assignments/123">
                    A1
                </a>
                {/* add Checkmark + Three dots */}
                <br />
                Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <br/> <b>Due</b> May 13 at 11:59pm | 100pts
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>
                <SlBookOpen className="me-4 ms-2 fs-3"/>
                {/* Add Book Icon */}
                <a className="wd-assignment-link text-decoration-none text-black fs-5"
                    href="#/kanbas/courses/1234/assignments/124">
                    A2
                </a>
                {/* add Checkmark + Three dots */}
                <br />
                Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <br/> <b>Due</b> May 20 at 11:59pm | 100pts
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3"/>
                <SlBookOpen className="me-4 ms-2 fs-3"/>
                {/* Add Book Icon */}
                <a className="wd-assignment-link text-decoration-none text-black fs-5"
                    href="#/kanbas/courses/1234/assignments/125">
                    A3
                </a>
                {/* add Checkmark + Three dots */}
                <br />
                Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <br/> <b>Due</b> May 27 at 11:59pm | 100pts
            </li>
            </li>
        </ul>
      </div>
  );}
  