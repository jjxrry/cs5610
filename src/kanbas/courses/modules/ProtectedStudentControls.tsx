import { useSelector } from "react-redux";

export const ProtectedStudentControls = ({ children }: { children: any }) => {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "STUDENT") {
        return children;
    } else {
        return
    }
}

