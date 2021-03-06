import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import { Tabs, Tab, Grid, Cell } from "react-mdl";
import {
  reactProjects,
  mernStackProjects,
  fireBaseProjects,
  UX_projects,
  graphql_projects,
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
            {UX_projects.map((card) => (
              <ProjectCard key={card.id} card={card} isUx={true} />
            ))}
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Grid>
            {reactProjects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Grid>
            {mernStackProjects.map((card) => (
              <ProjectCard key={card.id} card={card} isMern={true} />
            ))}
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Grid>
            {fireBaseProjects.map((card) => (
              <ProjectCard key={card.id} card={card} />
            ))}
          </Grid>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          <Grid>
            {graphql_projects.map((card) => (
              <ProjectCard key={card.id} card={card} titleColor="black" />
            ))}
          </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div style={{ marginLeft: "4rem" }}>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>UI/UX</Tab>
            <Tab>React</Tab>
            <Tab>MERN Stack</Tab>
            <Tab>FireBase</Tab>
            <Tab>GraphQL</Tab>
          </Tabs>
        </div>

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
