export const DeleteConfirmationModal = ({ dialogTitle, confirmDelete, cancelDelete }:
    { dialogTitle: string; confirmDelete: () => void; cancelDelete: () => void; }) => {
    return (
        <div id="wd-delete-confirmation-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this assignment?
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={cancelDelete}>
                            Cancel
                        </button>
                        <button className="btn btn-danger" data-bs-dismiss="modal" onClick={confirmDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
