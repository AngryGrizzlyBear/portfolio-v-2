import React from "react";
import { Card, CardText, CardBody } from "reactstrap";

function Paragraph({ description }) {
  return (
    <div className="col-md-5 m1">
      <Card>
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function Information(props) {
  if (props.paragraph.context) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{props.paragraph.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <Paragraph description={props.paragraph.context} />
        </div>
      </div>
    );
  }
  return null;
}

export default Information;
