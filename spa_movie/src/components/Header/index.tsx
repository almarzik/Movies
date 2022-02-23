import React from "react";

import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeFilmsPage } from "pages/FilmsPage";
import { routeMain as routeAboutPage } from "pages/AboutPage";
import { routeMain as routeSearchPage } from "pages/SearchPage";

import { NavLink } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./styles.scss";

const Header = () => {
     return (
          <header className="header">
               <NavLink to={routeMainPage()}>
                    <img src={Logo} alt={Logo} />
               </NavLink>
               <nav>
                    <NavLink to={routeMainPage()} activeClassName={"active"}>
                         Главная
                    </NavLink>
                    <NavLink to={routeFilmsPage()} activeClassName={"active"}>
                         Фильмы по категории
                    </NavLink>
                    <NavLink to={routeAboutPage()} activeClassName={"active"}>
                         О нас
                    </NavLink>
                    <NavLink to={routeSearchPage()} activeClassName={"active"}>
                         Поиск
                    </NavLink>
               </nav>
          </header>
     );
};

export default Header;
