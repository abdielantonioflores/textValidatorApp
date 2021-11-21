import React from "react";
import './modal-response.css'
export default function ModalResponse(params) {
    const closeModal = () => {
        params.setStatusModal(params, "close")
    }
    return (
        // modal-window modal-window-target
        <div className="row">
            <div id="open-modal" className={params.modal.css}>
                <div>
                    <i title="Close" className="modal-close ion-close-circled" onClick={() => { closeModal() }}></i>
                    <div>{params.modal.message}</div>

                </div>
            </div>
        </div>

    )
}
