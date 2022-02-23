import React from "react";

import Logo from "../../assets/logo.png";
import "./styles.scss";

const Footer = () => {
     return (
          <footer className="footer">
               <div className="footer__wrapper">
                    <img src={Logo} alt={Logo} />
                    <p>Дипломный проект</p>
                    <div className="madeBy">
                         <span>Made by</span>
                         <p>Марциновский Алексей</p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
