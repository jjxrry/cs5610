import { Modules } from "../modules";
import { CourseStatus } from "./Status";
import { ProtectedControls } from "../modules/ProtectedControls";

export const Home = () => {
    return (
        <div className="d-flex" id="wd-home">
            <div className="flex-fill">
                <Modules />
            </div>
            <div className="d-none d-md-block">
                <ProtectedControls>
                    <CourseStatus />
                </ProtectedControls>
            </div>
        </div>
    );
}
