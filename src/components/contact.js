import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Muhammed Khaled</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr9ZfG08qdPvwtMRI_TyQI4UuPXeUSMLl5LkszmhqmYAn5-dPy&usqp=CAU"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I'm fullstack web developer (specialized in MERN STACK) who decide
              to change his career form civil engineer to be web developer
              because I love programming, AI, Robotics.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="phone icon" aria-hidden="true" />
                    (+20) 1100214520
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="whatsapp icon" aria-hidden="true"></i>
                    (+20) 1556252658{" "}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="envelope icon"></i>
                    github.com/Muhammed9955
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
