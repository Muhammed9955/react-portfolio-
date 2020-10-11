import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  Cell,
} from "react-mdl";

export default function ProjectCard({ card, isMern, isUx, titleColor }) {
  const getTitleColor = () => {
    if (isMern) {
      return "#000";
    }
    if (titleColor) {
      return "#000";
    } else if (isUx && card.name === "MyMeubel") {
      return "#000";
    } else {
      return "#fff";
    }
  };
  const { background, name, github, liveDemo, des, behance } = card;
  return (
    <div>
      <Cell col={3}>
        <Card shadow={5} style={{ width: "300px", margin: "auto" }}>
          <CardTitle
            style={{
              color: getTitleColor(),
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
