import { Link } from "react-router-dom";
export const KanbasNavigation = () => {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
      <Link to="/kanbas/account" id="wd-account-link">Account</Link><br/>
      <Link to="/kanbas/dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/kanbas/courses" id="wd-course-link">Courses</Link><br/>
      <Link to="/kanbas/calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="/kanbas/inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="/labs" id="wd-labs-link">Labs</Link><br/>
    </div>
);}
