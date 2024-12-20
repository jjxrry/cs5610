import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as client from "./client"

export const AssignmentEditor = () => {
    const { aid, cid } = useParams()
    const navigate = useNavigate()

    const [assignment, setAssignment] = useState({
        title: "Title",
        course: "",
        description: "Description",
        points: 100,
        assignTo: "Everyone",
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20",
        assignmentGroup: "ASSIGNMENTS",
        displayGradeAs: "Percentage",
        submissionType: "Online",
        mediaOptions: {
            textEntry: false,
            websiteUrl: false,
            mediaRecordings: false,
            studentAnnotation: false,
            fileUpload: false
        }
    })

    const formatDate = (date: any) => {
        const d = new Date(date)
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        const year = d.getFullYear()
        return `${year}-${month}-${day}`
    }

    useEffect(() => {
        const loadAssignment = async () => {
            if (aid && aid !== "new") {
                const curr = await client.fetchAssignmentById(cid as string, aid as string);
                console.log("CONSOLE FOR CURR: ", curr)
                setAssignment({
                    ...curr,
                    title: curr.title,
                    description: curr.description,
                    points: curr.points,
                    dueDate: formatDate(curr.dueDate),
                    assignTo: curr.assignTo,
                    availableFrom: formatDate(curr.availableFrom),
                    availableUntil: formatDate(curr.availableUntil),
                    submissionType: curr.submissionType,
                    assignmentGroup: curr.assignmentGroup,
                    displayGradeAs: curr.displayGradeAs,
                    mediaOptions: {
                        textEntry: curr.mediaOptions?.textEntry || false,
                        websiteUrl: curr.mediaOptions?.websiteUrl || false,
                        mediaRecordings: curr.mediaOptions?.mediaRecordings || false,
                        studentAnnotation: curr.mediaOptions?.studentAnnotation || false,
                        fileUpload: curr.mediaOptions?.fileUpload || false,
                    },
                });
                console.log("SET ASSIGN: ", assignment)
            }
        };

        loadAssignment();
    }, [aid, cid])

    useEffect(() => {
        console.log("Updated Assignment: ", assignment);
    }, [assignment]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setAssignment((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleCheckboxChange = (e: any) => {
        const { name, checked } = e.target;
        const [key, subKey] = name.split('.');
        if (subKey) {
            setAssignment((prev) => ({
                ...prev,
                [key]: {
                    // @ts-expect-error its fine
                    ...prev[key],
                    [subKey]: checked
                }
            }));
        } else {
            setAssignment((prev) => ({
                ...prev,
                [name]: checked
            }));
        }
    };

    const handleSave = async () => {
        if (aid === "new") {
            const newAssignment = {
                ...assignment,
                _id: new Date().getTime().toString(),
                course: cid || "default-id"
            };
            await client.createAssignment(cid as string, newAssignment)
        } else {
            const updatedAssignment = {
                ...assignment,
                _id: aid,
                course: cid || assignment.course
            };
            await client.updateAssignment(cid as string, aid as string, updatedAssignment)
        }

        navigate(`/kanbas/courses/${cid}/assignments`);
    }

    return (
        <div id="wd-assignments-editor" className="container">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input
                    id="wd-name"
                    className="form-control"
                    name="title"
                    value={assignment.title}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea
                    id="wd-description"
                    className="form-control"
                    name="description"
                    value={assignment.description}
                    onChange={handleInputChange}
                    rows={12} />
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-md-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-8">
                    <input
                        id="wd-points"
                        className="form-control"
                        name="points"
                        value={assignment.points}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-4 text-md-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-md-8">
                    <select id="wd-group" className="form-select" name="assignmentGroup" value={assignment.assignmentGroup} onChange={handleInputChange}>
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
                    <select id="wd-display-grade-as" className="form-select" name="displayGradeAs" value={assignment.displayGradeAs} onChange={handleInputChange}>
                        <option selected value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="row mb-3">
                        <div className="col-md-4 text-md-end">
                            <label htmlFor="wd-submission-type" className="form-label"> Submission Type </label>
                        </div>
                        <div className="col-md-8">
                            <div className="border p-3">
                                <select id="wd-submission-type" className="form-select" name="submissionType" value={assignment.submissionType} onChange={handleInputChange}>
                                    <option selected value="Online">Online</option>
                                    <option value="In-Person">In-Person</option>
                                </select>

                                <label className="form-label mt-3"><b>Online Entry Options</b></label>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-text-entry" className="form-check-input" name="mediaOptions.textEntry" checked={assignment.mediaOptions.textEntry} onChange={handleCheckboxChange} />
                                    <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-website-url" className="form-check-input" name="mediaOptions.websiteUrl" checked={assignment.mediaOptions.websiteUrl} onChange={handleCheckboxChange} />
                                    <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-media-recordings" className="form-check-input" name="mediaOptions.mediaRecordings" checked={assignment.mediaOptions.mediaRecordings} onChange={handleCheckboxChange} />
                                    <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-student-annotation" className="form-check-input" name="mediaOptions.studentAnnotation" checked={assignment.mediaOptions.studentAnnotation} onChange={handleCheckboxChange} />
                                    <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" id="wd-file-upload" className="form-check-input" name="mediaOptions.fileUpload" checked={assignment.mediaOptions.fileUpload} onChange={handleCheckboxChange} />
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
                                        <input id="wd-assign-to" className="form-control" name="assignTo" value={assignment.assignTo} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div>
                                        <label htmlFor="wd-due-date" className="form-label">Due</label>
                                    </div>
                                    <div>
                                        <input type="date" id="wd-due-date" className="form-control" name="dueDate" value={assignment.dueDate} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-1">
                                        <div>
                                            <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                            <input type="date" id="wd-available-from" className="form-control" name="availableFrom" value={assignment.availableFrom} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <label htmlFor="wd-available-until" className="form-label">Until</label>
                                            <input type="date" id="wd-available-until" className="form-control" name="availableUntil" value={assignment.availableUntil} onChange={handleInputChange} />
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
                <Link to={`/kanbas/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
                <button className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

