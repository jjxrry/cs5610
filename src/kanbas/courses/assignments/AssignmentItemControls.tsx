import { IoEllipsisVertical } from "react-icons/io5";
import { GreenCheckmark } from "../modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa6";

export const AssignmentItemControls = ({ assignmentId, onDeleteClick }: { assignmentId: string, onDeleteClick: (id: string) => void }
) => {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => onDeleteClick(assignmentId)} data-bs-toggle="modal" data-bs-target="#wd-delete-confirmation-dialog" />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4 ms-4" />
        </div>
    );
}
