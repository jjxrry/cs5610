import { BsGripVertical } from "react-icons/bs";
import { AssignmentModuleControls } from "./AssignmentControls";
import { FaSearch } from 'react-icons/fa';
import { SlBookOpen } from "react-icons/sl";
import { AssignmentTitleControls } from "./AssignmentTitleControls";
import { AssignmentItemControls } from "./AssignmentItemControls";


export const Assignments = () => {
    return (
      <div id="wd-assignments">
        <div className="assignment-controls d-flex align-items-center justify-content-between">
            <div className="assignment-search d-flex align-items-center">
                <FaSearch className="search-icon me-2" />
                <input id="wd-search-assignment" placeholder="Search..." className="assignment-searchbar" />
            </div>
            <AssignmentModuleControls />
        </div>

        <br /> <br />

        <ul id="wd-assignment-list" className="list-group rounded-0">
            <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                <div id="wd-assignments-title" className="p-3 ps-2 d-flex justify-content-between align-items-center"
                style={{ backgroundColor: '#E0E0E0', height: "12vh" }}>

                    <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <span className="fw-bold">ASSIGNMENTS</span>
                    </div>

                    <div>
                        <span className="me-3 px-3 py-2 text-dark rounded-pill"
                        style={{ border: "1px solid #484848" }}
                        >40% of Total</span>
                        <AssignmentTitleControls/>
                    </div>
                </div>

                <li className="wd-assignment-list-item list-group-item p-0 ps-1 py-3">
                    <div className="row w-100 p-0">
                        <div className="col-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <SlBookOpen className="me-4 ms-2 fs-3" style={{ color: 'green' }}/>
                        </div>

                        <div className="col-7 d-flex flex-column align-items-left">
                            <a className="wd-assignment-link text-decoration-none text-black fs-5 fw-bold"
                                href="#/kanbas/courses/1234/assignments/123">
                                A1
                            </a>
                            <span>
                                <span style={{ color: "#D80000" }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00 am | <br /> <b>Due</b> May 13 at 11:59 pm | 100 pts
                            </span>
                        </div>

                        <div className="col-4 d-flex align-items-center justify-content-end assignment-item-controls">
                            <AssignmentItemControls />
                        </div>
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-0 ps-1 py-3">
                    <div className="row w-100 p-0">
                        <div className="col-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <SlBookOpen className="me-4 ms-2 fs-3" style={{ color: 'green' }}/>
                        </div>

                        <div className="col-7 d-flex flex-column align-items-left">
                            <a className="wd-assignment-link text-decoration-none text-black fs-5 fw-bold"
                                href="#/kanbas/courses/1234/assignments/123">
                                A2
                            </a>
                            <span>
                                <span style={{ color: "#D80000" }}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00 am | <br /> <b>Due</b> May 20 at 11:59 pm | 100 pts
                            </span>
                        </div>

                        <div className="col-4 d-flex align-items-center justify-content-end assignment-item-controls">
                            <AssignmentItemControls />
                        </div>
                    </div>
                </li>
                <li className="wd-assignment-list-item list-group-item p-0 ps-1 py-3">
                    <div className="row w-100 p-0">
                        <div className="col-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3"/>
                            <SlBookOpen className="me-4 ms-2 fs-3" style={{ color: 'green' }}/>
                        </div>

                        <div className="col-7 d-flex flex-column align-items-left">
                            <a className="wd-assignment-link text-decoration-none text-black fs-5 fw-bold"
                                href="#/kanbas/courses/1234/assignments/123">
                                A3
                            </a>
                            <span>
                                <span style={{ color: "#D80000" }}>Multiple Modules</span> | <b>Not available until</b>  May 20 at 12:00 am | <br /> <b>Due</b> May 27 at 11:59 pm | 100 pts
                            </span>
                        </div>

                        <div className="col-4 d-flex align-items-center justify-content-end assignment-item-controls">
                            <AssignmentItemControls />
                        </div>
                    </div>
                </li>
            </li>
        </ul>
      </div>
  );}
  