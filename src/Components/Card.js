import React from "react";

import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getPokeIdFromURL } from "../Mixins/getPokemonID";

function CardDetail(props) {
  const history = useHistory();

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://pokeres.bastionbot.org/images/pokemon/${getPokeIdFromURL(
          props.url
        )}.png`}
      />
      <Card.Body>
        <Card.Title className="mb-3 text-center">{props.name}</Card.Title>
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            onClick={() =>
              history.push("/detail/" + getPokeIdFromURL(props.url))
            }
          >
            View Detail
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardDetail;
