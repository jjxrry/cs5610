import { Link, useLocation, useParams } from "react-router-dom";
export const CoursesNavigation = () => {
    const { cid } = useParams()
    const { pathname } = useLocation()
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"]
    const getPath = (link: string) => {
        return `/kanbas/courses/${cid}/${link.toLowerCase()}`
    }
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link to={getPath(link)} key={link} className={`list-group-item text-danger border border-0
                ${pathname.includes(link.toLowerCase()) ? "active text-black" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
