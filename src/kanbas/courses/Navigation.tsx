import { Link, useLocation } from "react-router-dom";
export const CoursesNavigation = () => {
    const { pathname } = useLocation()
    const links = [
        { label: "Home", path: "/kanbas/courses/:cid/home" },
        { label: "Modules", path: "/kanbas/courses/:cid/modules" },
        { label: "Piazza", path: "/kanbas/courses/:cid/piazza" },
        { label: "Zoom", path: "/kanbas/courses/:cid/zoom" },
        { label: "Assignments", path: "/kanbas/courses/:cid/assignments" },
        { label: "Quizzes", path: "/kanbas/courses/:cid/quizzes" },
        { label: "Grades", path: "/kanbas/courses/:cid/grades" },
        { label: "People", path: "/kanbas/courses/:cid/people" },
    ]
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link to={link.path} key={link.path} className={`list-group-item text-danger border border-0
                ${pathname.includes(link.label.toLowerCase()) ? "active text-black" : "text-danger"}`}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
