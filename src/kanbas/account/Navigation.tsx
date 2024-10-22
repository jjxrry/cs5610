import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const AccountNavigation = () => {
    const { currentUser } = useSelector((state: any) => state.accountReducer)
    const links = currentUser ?
        [{ to: "/kanbas/account/profile", label: "Profile" }]
        : [
            { to: "/kanbas/account/signin", label: "Sign In" },
            { to: "/kanbas/account/signup", label: "Sign Up" },
        ]
    const { pathname } = useLocation()

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-3">
            {links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className={`list-group-item ${pathname === link.to ? 'active' : ''} border border-0`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
