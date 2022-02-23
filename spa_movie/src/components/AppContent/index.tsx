import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import FilmsDetails, {
     routeMain as routeFilmsDetails,
} from "pages/FilmsDetails";
import AboutPage, { routeMain as routeAboutPage } from "pages/AboutPage";
import FilmsPage, { routeMain as routeFilmsPage } from "pages/FilmsPage";
import SearchPage, { routeMain as routeSearchPage } from "pages/SearchPage";

import "./styles.scss";

const AppContent = () => {
     return (
          <div className="mainWrapper">
               <div className="wrapper">
                    <Header />
                    <main>
                         <Switch>
                              <Route
                                   exact
                                   path={routeMainPage()}
                                   component={MainPage}
                              />
                              <Route
                                   exact
                                   path={routeAboutPage()}
                                   component={AboutPage}
                              />
                              <Route
                                   exact
                                   path={routeFilmsPage()}
                                   component={FilmsPage}
                              />
                              <Route
                                   exact
                                   path={routeSearchPage()}
                                   component={SearchPage}
                              />
                              <Route
                                   exact
                                   path={routeFilmsDetails()}
                                   component={FilmsDetails}
                              />
                              <Redirect
                                   to={{
                                        pathname: routeMainPage(),
                                   }}
                              />
                         </Switch>
                    </main>
               </div>
               <Footer />
          </div>
     );
};

export default AppContent;
