import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom"

export const KanbasNavigation = () => {
    const { pathname } = useLocation()
    const links = [
        { label: "Dashboard", path: "/kanbas/dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/kanbas/dashboard", icon: LiaBookSolid },
        { label: "Calendar", path: "/kanbas/calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/kanbas/inbox", icon: FaInbox },
        { label: "Labs", path: "/labs", icon: LiaCogSolid },
    ]
    return (
        <div id="wd-kanbas-navigation" style={{ width: 115 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
                className="list-group-item bg-black border-0 mt-4 text-center">
                <img src="/images/neu-logo.png" alt="northeastern logo" width="75px" />
            </a><br />
            <Link to="/kanbas/account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                {/* this ternary from the homework is wrong, we shouldn't even need it because the default makes the icon invisible when active'*/}
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-danger"}`} />
                <br />
                Account
            </Link>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label.toLowerCase()) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger" })}
                    <br />
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
