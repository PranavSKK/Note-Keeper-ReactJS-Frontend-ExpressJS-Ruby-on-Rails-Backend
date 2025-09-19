import React from "react";
import { FaRegCopyright } from "react-icons/fa";

function Footer(){
    const year = new Date().getFullYear()

    return <div className="footer">
            <p>Copyright{<FaRegCopyright />}{year}</p>
           </div>
};

export default Footer;