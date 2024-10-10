import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../database/"

export const AssignmentEditor = () => {
    const { aid } = useParams()
    const assignments = db.assignments
    const filteredAssignment = assignments.filter((assignment: any) => assignment._id === aid)

    console.log("filtered", filteredAssignment)
    return (
        <div id="wd-assignments-editor" className="container">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input id="wd-name" className="form-control" value={`${filteredAssignment[0].title}`} />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea id="wd-description" className="form-control" rows={12}>
                    {`The assignment is available online.\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe Landing page should include the folloiwng:\n    - Your full name and section\n    - Links to each of the lab assignments\n    - Link to the Kanbas application\n    - Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-md-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-8">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-md-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-8">
                    <select id="wd-group" className="form-select">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="PROJECTS">PROJECTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-md-end">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                </div>
                <div className="col-md-8">
                    <select id="wd-display-grade-as" className="form-select">
                        <option selected value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="row mb-3">
                        <div className="col-md-4 text-md-end">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        </div>
                        <div className="col-md-8">
                            <div className="border p-3">
                                <select id="wd-submission-type" className="form-select">
                                    <option selected value="Online">Online</option>
                                    <option value="In-Person">In-Person</option>
                                </select>

                                <label className="form-label mt-3"><b>Online Entry Options</b></label>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                                    <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="row mb-3">
                        <div className="col-md-4 text-md-end">
                            Assign
                        </div>
                        <div className="col-md-8">
                            <div className="border p-3">
                                <div className="row mb-3">
                                    <div>
                                        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                                    </div>
                                    <div>
                                        <input id="wd-assign-to" className="form-control" value="Everyone" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div>
                                        <label htmlFor="wd-due-date" className="form-label">Due</label>
                                    </div>
                                    <div>
                                        <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-1">
                                        <div>
                                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                            <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                                            <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="d-flex justify-content-end">
                <Link to={`/kanbas/courses/${filteredAssignment[0].course}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <Link to={`/kanbas/courses/${filteredAssignment[0].course}/assignments`} className="btn btn-danger">Save</Link>
            </div>
        </div>
    );
}

