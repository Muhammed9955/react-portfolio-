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
              style={{
                height: "300px",
                width: "300px",
                borderRadius: "500px",
                // border: "3px solid #BADA55",
                padding: "0px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr9ZfG08qdPvwtMRI_TyQI4UuPXeUSMLl5LkszmhqmYAn5-dPy&usqp=CAU"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text" style={{ borderRadius: "60px" }}>
              <h1 style={{ fontSize: "3rem", padding: "1rem" }}>
                Full Stack Web Developer & UI/UX Designer
              </h1>

              <hr />

              <p>
                HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB |
                Material UI | Semantic UI
              </p>

              <div
                className="social-links"
                style={{ fontSize: ".65rem", padding: ".8rem" }}
              >
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
                <a
                  href="https://www.behance.net/muhammedkhaled4"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="behance icon" aria-hidden="true"></i>
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
