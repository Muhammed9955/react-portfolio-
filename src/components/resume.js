import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr9ZfG08qdPvwtMRI_TyQI4UuPXeUSMLl5LkszmhqmYAn5-dPy&usqp=CAU"
                alt="avatar"
                style={{
                  height: "250px",
                  width: "250px",
                }}
              />
            </div>

            <h2 style={{ paddingTop: "2em", color: "#333333	" }}>
              Muahmmed Khaled{" "}
            </h2>
            <h4>Full Stack Web Developer </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I'm full stack web developer (specialized in MERN STACK) & UI/UX
              designer who decide to change his career form civil engineer to be
              web developer because I love building things, AI, Robotics and
              programming in general.
            </p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>ALexandria , Egypt</p>
            <p>Aswan , Egypt</p>
            <h5>Phone</h5>
            <p> (+20) 1556252658 </p>
            <h5>Email</h5>
            <p>Muhammed.webdeveloper@gmail.com</p>
            {/* <h5>Web</h5>
            <p>mywebsite.com</p> */}
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2019}
              schoolName="AAST"
              schoolDescription="I have civil enginring Bachelor degree from Arab Academy for Science Technology & Maritime Transport University"
            />

            <Education
              startYear={`June-2019`}
              endYear={`June-2020`}
              schoolName="Self study "
              schoolDescription="I have been learning full stack web development for about 10 months from Udemy courses, Youtube and some practice"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={`may-2020`}
              endYear={`still working`}
              jobName="Full stack developer:"
              jobDescription=" I am full stack developer in senseGrass.com , SenseGrass offers 360 farming solutions based on cutting edge technology like Nano-Satellite Mapping, Rover Bots and AI-based mobile & web application that makes farming super-efficient & easy, Techs used are MERN stack , Redux , Material UI , Semantic UI, AWS Services.  "
            />
            <Experience
              jobName="FrontEnd skils:"
              jobDescription=" Javascript ES6, html, css, sass, React, Redux, Redux-saga, contextApi, bootstrap, sementic ui, matrial ui,styled-components, React-Hooks,GraphQL-Apollo,
              React-performance,testing mobile-support, progressive-web-app, 
              Testing,Jest,Enzyme,mocks, webpack."
            />

            <Experience
              jobName="BackEnd skils :"
              jobDescription=" NodeJs, express, MVC, SQL(sequelize), NoSql(mongodb) , sending Emails, JWT for Auth, Validation (Express-validator), File upload and download, pagination, REST APIs, GraphQL APIs, prisma, grapql -yoga, testing. "
            />
            <Experience jobName="UI/UX:" jobDescription="I have been learning UI/UX design from Udemy courses, Youtube and some practice using Adobe xd " />
            {/* <Experience
              jobName="DevOpes & Advanced skils :"
              jobDescription=" Typescript, Doker, CI/CD, Redis, code analysis, performance, Testing, security."
            /> */}
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={85} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={65} />
            <Skills skill="Adobe xd" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
