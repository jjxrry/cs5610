import { FaUserCircle } from "react-icons/fa";

export const PeopleTable = () => {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>{" "}
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">001994562S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-09-04</td>
            <td className="wd-total-activity">15:51:12</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Sam</span>{" "}
              <span className="wd-last-name">Altman</span>
            </td>
            <td className="wd-login-id">001662591S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-01</td>
            <td className="wd-total-activity">22:05:01</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Ilya</span>{" "}
              <span className="wd-last-name">Sutskever</span>
            </td>
            <td className="wd-login-id">001277561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-09-22</td>
            <td className="wd-total-activity">09:41:52</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tim</span>{" "}
              <span className="wd-last-name">Cook</span>
            </td>
            <td className="wd-login-id">001008961S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2024-10-12</td>
            <td className="wd-total-activity">23:43:07</td>
          </tr>
          {/* Add at least 3 more users such as Bruce Wayne, Steve Rogers, and Natasha Romanoff */}
        </tbody>
      </table>
    </div>
);}
