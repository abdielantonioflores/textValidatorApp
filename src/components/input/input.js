import React from "react";

export default function Input(params) {
    
    const sendText = () => {
        var text = document.getElementById("textValid").value;
        params.validator(text)
    }

    return (
        <div className="row  d-flex justify-content-center">
            <div className="col-md-6">
                <div className="input-group">
                    <input type="text" id="textValid" className="form-control" aria-label="Text input with segmented dropdown button" placeholder="Ingrese texto a validar" />
                    <button type="button" className="btn btn-outline-secondary" onClick={() => { sendText() }}>Validar</button>
                </div>
            </div>
        </div>
    )
}