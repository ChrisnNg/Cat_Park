import React from "react";
import "./About.css";
import "../../public/three_cats.png";

import chrispfp from "../../public/chrispfp.jpg";
import anthonypfp from "../../public/anthonypfp.png";
import thomaspfp from "../../public/thomaspfp.png";
import three_cats from "../../public/three_cats.png";

import ig_icon from "../../public/insta-icon.png";
import fb_icon from "../../public/fb-icon.png";
import li_icon from "../../public/linked-icon.png";
import Image from "react-bootstrap/Image";

const AboutPage = () => {
  return (
    <section id="aboutUs">
      <header className="text-center">
        <div className="three_cats container">
          <Image fluid src={three_cats} alt="three_cats" />
        </div>

        <h1 className="aboutUsTitle">About Us!</h1>
        <div>
          <p>
            Designed to help you find the closest free parking area available{" "}
          </p>
          <p>
            Uses a open data from the Vancouver Police Department's crime API to
            draw a heat map over Vancouver for vehicular crimes commited in the
            area.
          </p>
          <section className="project">
            <p>Created as Lighthouse Labs final project</p>
            <p>
              <b>Languages:</b>
            </p>
            <p>ReactJS</p>
            <p>Golang</p>
            <p>
              <b>Frameworks:</b>
            </p>
            <p>React Bootstrap</p>
            <p>Material-ui</p>
            <p>Axios</p>
            <p>
              <b>Database:</b>
            </p>
            <p>
              Postgres with <i>PostGIS</i>
            </p>
          </section>

          <p> Hosted on Heroku & Netlify </p>
        </div>
      </header>
      <div>
        <p className="text-center">
          Follow us on social media to get our latest updates!
        </p>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-sm">
            {" "}
            <div>
              <img className="pfp" src={chrispfp} alt="chris-pfp" />
            </div>
            <b>Christopher Ng</b>
            <div className="socialMediaIcons">
              <a href="https://www.facebook.com/christopher.ng.5203?ref=bookmarks">
                <img src={fb_icon} alt="Chris-fb" />
              </a>
              <a href="https://www.linkedin.com/in/christopherkyleng/">
                <img src={li_icon} alt="Chris-linkedin" />
              </a>
              <a href="https://www.instagram.com/cristopherng/">
                <img src={ig_icon} alt="Chris-ig" />
              </a>
            </div>
          </div>
          <div className="col-sm">
            {" "}
            <div>
              <img className="pfp" src={anthonypfp} alt="anthony-pfp" />
            </div>
            <b>Anthony Zhu</b>
            <div className="socialMediaIcons">
              <a href="https://www.facebook.com/xoxobbq">
                <img src={fb_icon} alt="Anthony-fb" />
              </a>
              <a href="https://www.linkedin.com/in/anthony-zhu-3abb9b183/">
                <img src={li_icon} alt="Anthony-linkedin" />
              </a>
              <a href="https://www.instagram.com/zhudriven/">
                <img src={ig_icon} alt="Anthony-ig" />
              </a>
            </div>
          </div>
          <div className="col-sm">
            {" "}
            <div>
              <img className="pfp" src={thomaspfp} alt="thomas-pfp" />
            </div>
            <b>Thomas Bogdanov</b>
            <div className="socialMediaIcons">
              <a href="https://www.facebook.com/thomas.bogdanov">
                <img src={fb_icon} alt="Thomas-fb" />
              </a>
              <a href="https://www.linkedin.com/in/thomas-bogdanov-a98004147/">
                <img src={li_icon} alt="Thomas-linkedin" />
              </a>
              <a href="https://www.instagram.com/bulletsafety/">
                <img src={ig_icon} alt="Thomas-ig" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
