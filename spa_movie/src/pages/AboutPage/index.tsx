import React from "react";
import routeMain from "./routes";
import cinema from "../../assets/cinema.jpg";
import "./styles.scss";

const AboutPage = () => (
     <div className="aboutPage">
          <img className="aboutPage__img" src={cinema} alt="cinema" />
          <div className="about">
               <h1 className="about__title">MOVIESinfo</h1>
               <p className="about__text">
                    MOVIESinfo is a community built movie and tv database. Every
                    piece of data has been added by our amazing community dating
                    back to 2008. MOVIESinfo strong international focus and
                    breadth of data is largely unmatched and something we're
                    incredibly proud of. Put simply, we live and breathe
                    community and that's precisely what makes us different.
                    MOVIESinfo product, service, attitude and support are truly
                    top notch. We love how they support their community and the
                    passion with which they have built an amazing asset that our
                    users can enjoy!
               </p>
          </div>
     </div>
);

export { routeMain };

export default AboutPage;
