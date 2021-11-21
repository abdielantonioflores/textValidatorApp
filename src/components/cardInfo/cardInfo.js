import React from "react"
import Input from '../input/input'
export default function CardInfo(params) {
    return (
        <div className="card">
            <div className="card-body ">
                <h5 className="card-title text-center">{params.headerInfo.Title}</h5>
               
                <Input  validator={params.validator}/>
                <p className="card-text text-center mt-2">{params.headerInfo.descripcion}</p>
            </div>
        </div>
    )
}