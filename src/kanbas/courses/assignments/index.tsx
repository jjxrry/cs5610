import { AssignmentControls } from "./AssignmentControls";
import { FaSearch } from 'react-icons/fa';

export const Assignments = () => {
    return (
      <div id="wd-assignments">
        <div className="assignment-controls">
            <div className="assignment-search">
                {/* move this inside search bar */}
                <FaSearch className="search-icon" />
                <input id="wd-search-assignment" placeholder="Search..." />
            </div>
            <AssignmentControls />
        </div>
        
        <div className="assignment-tile-card">
            <h3 id="wd-assignments-title">
                ASSIGNMENTS 40% of Total <button>+</button>
            </h3>
        </div>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                href="#/kanbas/courses/1234/assignments/123">
                A1 - ENV + HTML
            </a>
            <br />
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                href="#/kanbas/courses/1234/assignments/124">
                A2 - CSS + BOOTSTRAP
            </a>
            <br />
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
                href="#/kanbas/courses/1234/assignments/125">
                A3 - JAVASCRIPT + REACT
            </a>
            <br />
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
          </li>
        </ul>
      </div>
  );}
  