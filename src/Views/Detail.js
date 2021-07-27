import React from "react";
import { useParams } from "react-router-dom";

// HTTP Request Related
import httpRequest from "../Http/request";
import apiEndpoints from "../Http/api";

function Detail() {
  let { id } = useParams();
  let content = null;

  const response = httpRequest.Get(
    apiEndpoints.pokemon.getEndpointList + "/" + id
  );

  if (response.data) {
    content = (
      <div className="container text-center mt-3">
        <h3> {response.data?.name} </h3>
        <img
          className="mt-2"
          src={`https://pokeres.bastionbot.org/images/pokemon/${response.data?.id}.png`}
          alt={response.data?.name}
          width="200"
        />
      </div>
    );
  }

  return content;
}

export default Detail;
