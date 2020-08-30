import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Cell,
} from "react-mdl";

const getTitleColor = (isMern, isUx) => {
  if (isMern) {
    return "#000";
  } else if (isUx) {
    return "#000";
  } else {
    return "#fff";
  }
};

export default function ProjectCard({ card, isMern, isUx }) {
  const { background, name, github, liveDemo, des, behance } = card;
  return (
    <div>
      <Cell col={3}>
        <Card shadow={5} style={{ width: "300px", margin: "auto" }}>
          <CardTitle
            style={{
              color: getTitleColor(isMern, isUx),
              height: "176px",
              background: `${background}`,
              boxShadow: `0px 5px 10px rgba(0, 0, 000, .3)`,
              borderBottomLeftRadius: "2rem",
              borderBottomRightRadius: "2rem",
            }}
          >
            {name}
          </CardTitle>
          <CardText> {`${des}`} </CardText>
          <CardActions
            border
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a href={`${isUx ? behance : github}`} target="_blank">
              {" "}
              <Button colored> {isUx ? `Behance` : `Github`} </Button>
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
