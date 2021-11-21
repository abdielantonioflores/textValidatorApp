import React from "react";

export default function CardInfoIcon(props) {
    return (
        <div className="col-md-12  mt-2" style={{display:props.displaycardIcon}}>
            <div className="card text-center">
                <div className="card-body  ">
                    <i className={props.info.icon}> </i>
                    <p className="card-text">{props.info.textInfo}</p>
                </div>
            </div>
        </div>
    )
}