export const AssignmentEditor = () => {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" rows={12} cols={35}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        
        <table>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
            </td>
            <td>
                <input id="wd-points" value={100} />
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" name="groups" >
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="PROJECTS">PROJECTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as" name="display-grade-as" >
                    <option selected value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type" name="wd-submission-type" >
                    <option selected value="Online">Online</option>
                    <option value="In-Person">In-Person</option>
                </select>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label>Online Entry Options</label>
            </td>
            <td>
                <input type="checkbox" name="online-entry" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="online-entry" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="online-entry" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="online-entry" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="online-entry" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
                <div>
                    <input id="wd-assign-to" value={"Everyone"} />
                </div>
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
                <input type="date"
                    id="wd-due-date"
                    value="2024-05-13"
                />
            </td>
        </tr>
        <br />
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
                <input type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                />
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
                <input type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                />
            </td>
        </tr>
        </table>
        <hr />
        <button>Cancel</button>
        <button>Save</button>
      </div>
    );
}

