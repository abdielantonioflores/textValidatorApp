import React from "react";
import './responseView.css'
export default function ResponseView(props) {
    // console.log(props.responseApi)
    const deletHistory = () => {
        props.deleteHistory()
    }
    const renderView = () => {


        Object.prototype.prettyPrint = function () {
            var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
            var replacer = function (match, pIndent, pKey, pVal, pEnd) {
                var key = '<span class="json-key" style="color: brown">',
                    val = '<span class="json-value" style="color: navy">',
                    str = '<span class="json-string" style="color: olive">',
                    r = pIndent || '';
                if (pKey)
                    r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
                if (pVal)
                    r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
                return r + (pEnd || '');
            };

            return JSON.stringify(this, null, 3)
                .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
                .replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(jsonLine, replacer);
        }


        var objectRender = props.responseApi


        document.getElementById('acct').innerHTML = objectRender.prettyPrint();
    }

    return (
        <div className="col-md-8 mt-3" style={{ display: props.displayResponseView }}>
            <div className="btn-group text-center" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-dark btn-sm" onClick={() => {
                    renderView()
                }}>Actualizar Historial </button>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => {
                    deletHistory()
                }}>Borrar Historial </button>
            </div>

            <div className="accordion mt-2" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={() => {
                            renderView()
                        }} >
                            Respuestas
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <pre><code id="acct"></code></pre>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}