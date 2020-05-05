import React from "react";
import {
  Card,
  CardText,
  Button,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Paragraph({ description, name }) {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function Information(props) {
  if (props.paragraph.context) {
    return (
      <div className="container">
        <div className="row">
          <Paragraph description={props.paragraph.context} name={props.paragraph.name} />
        </div>
      </div>
    );
  }
  return null;
}

export default Information;
