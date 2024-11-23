import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const AccountNavigation = () => {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation()
    const active = (path: string) => (pathname.includes(path) ? "active" : "");
    // if (currentUser) {
    //     console.log("CURRENTUSER ROLE", currentUser.role)
    // }
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-3">
            {links.map((link) => (
                <Link key={link} to={`/kanbas/account/${link}`} className={`list-group-item border border-0 ${active(link)}`}> {link} </Link>
            ))}
            {currentUser && currentUser.role === "ADMIN" && (
                <Link to={`/kanbas/account/users`} className={`list-group-item border border-0 ${active("users")}`}> Users </Link>)}
        </div>
    );
}

