import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Cell,
} from "react-mdl";
import projectsData from "./projectsData";

export default function ProjectCard({ card }) {
  const { background, name, github, liveDemo } = card;
  return (
    <div>
      <Cell col={3}>
        <Card shadow={5} style={{ width: "300px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: `${background}`,
            }}
          >
            {name}
          </CardTitle>
          <CardText>
            clothing e-commerce react app (react ,redux, firebase)
          </CardText>
          <CardActions
            border
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a href={`${github}`} target="_blank">
              {" "}
              <Button colored>Github</Button>
            </a>
            <a href={`${liveDemo}`} target="_blank">
              {" "}
              <Button colored>Live Demo</Button>
            </a>
          </CardActions>
        </Card>
      </Cell>
    </div>
  );
}