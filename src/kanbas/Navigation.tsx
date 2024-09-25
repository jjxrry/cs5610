import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export const KanbasNavigation = () => {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 115 }}
        className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
        <a  href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
            className="list-group-item bg-black border-0 mt-4 text-center">
            <img src="/images/neu-logo.png" alt="northeastern logo" width="75px"/>
        </a><br/>
        <Link to="/kanbas/account" id="wd-account-link" className="list-group-item text-center border-0 bg-black text-white">
            <FaRegCircleUser className="fs-1 text text-white" /><br />
            Account
        </Link><br/>
        <Link to="/kanbas/dashboard" id="wd-dashboard-link" className="list-group-item text-center border-0bg-white text-danger">
            <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard
        </Link><br/>
        <Link to="/kanbas/courses" id="wd-course-link" className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
            Courses
        </Link><br/>
        <Link to="/kanbas/calendar" id="wd-calendar-link" className="list-group-item text-white
                   bg-black text-center border-0">
        <IoCalendarOutline className="fs-1 text-danger" /><br />
            Calendar
        </Link><br/>
        <Link to="/kanbas/inbox" id="wd-inbox-link" className="list-group-item text-white bg-black text-center border-0">
        <FaInbox className="fs-1 text-danger" /><br />
            Inbox
        </Link><br/>
        <Link to="/labs" id="wd-labs-link" className="list-group-item text-white
                   bg-black text-center border-0">
        <LiaCogSolid className="fs-1 text-danger" /><br />
            Labs
        </Link><br/>
    </div>
);}
