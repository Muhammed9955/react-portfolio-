import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import { Tabs, Tab, Grid, Cell } from "react-mdl";
import {
  reactProjects,
  mernStackProjects,
  fireBaseProjects,
} from "./projectsData";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid>
            {reactProjects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            {mernStackProjects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Grid>
            {fireBaseProjects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>MERN Stack</Tab>
          <Tab>FireBase</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
