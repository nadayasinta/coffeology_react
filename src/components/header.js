import React from "react";
import logo from "../assets/images/logo1.jpg";

function Header(props) {
    return (
        <div className="container-fluid header px-0">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={logo} className="logoIcon w-50" />
                </div>
            </div>
        </div>
    );
}

export default Header;