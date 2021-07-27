// import components
import Card from "../Components/Card.js";

// HTTP Request Related
import httpRequest from "../Http/request";
import apiEndpoints from "../Http/api";

// React Bootstrap
import { Row, Col, Container } from "react-bootstrap";

function List() {
  let content = null;
  let items = httpRequest.Get(apiEndpoints.pokemon.getEndpointList);

  if (items.data) {
    {
      content = items.data.results.map((item, key) => (
        <Col key={key} xs={4} sm={4} md={4} lg={4} className="no-gutters my-2">
          <Card name={item?.name} url={item?.url} />
        </Col>
      ));
    }
  }

  return (
    <Container>
      <Row>{content}</Row>
    </Container>
  );
}

export default List;
