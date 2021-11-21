import React from "react"
import imagesIcon from '../../assets/images/iconoText.png'
export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark sm">
            <a className="navbar-brand" href="#">
                <img src={imagesIcon} alt="" width="30" height="24" className=" m-1 d-inline-block align-text-top" />
                <h6 className="floatrigthImg ">Validador de Texto</h6>
            </a>
        </nav>
    )

}