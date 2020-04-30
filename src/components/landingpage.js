import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../App.css";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          // margin: "auto",
          // display: "block",
          // scrollBehavior: "smooth",
          textAlign: "center",
        }}
      >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              style={{ height: "350px", width: "280px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr9ZfG08qdPvwtMRI_TyQI4UuPXeUSMLl5LkszmhqmYAn5-dPy&usqp=CAU"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>

              <div className="social-links">
                {/* Github */}
                <a
                  href="https://github.com/Muhammed9955"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="github icon" aria-hidden="true" />
                </a>

                {/* Angelist */}
                <a
                  href="https://angel.co/u/muhammed-khaled-5"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="angellist icon" aria-hidden="true"></i>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/mohamed.khaled.524"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="facebook icon" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
