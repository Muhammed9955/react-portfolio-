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
              I'm full stack web developer (specialized in MERN STACK) who
              decide to change his career form civil engineer to be web
              developer because I love building things, AI, Robotics and
              programming in general.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent icon="phone">
                    (+20) 1556252658 (whatsApp)
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="email">
                    muhammed.webdeveloper@gmail.com
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
