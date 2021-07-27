import { useHistory } from "react-router-dom";
import { useState } from "react";

import { InputGroup, FormControl, Button, Row, Col } from "react-bootstrap";

function Search() {
  let [searchVal, setSearchVal] = useState("");
  const history = useHistory();

  return (
    <Row>
      <Col xs={4} sm={4} md={4} lg={4}></Col>
      <Col xs={4} sm={4} md={4} lg={4}>
        <InputGroup className="mb-3 search-section_input">
          <FormControl
            placeholder="Search for pokemon"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => history.push("/detail/" + searchVal)}
            type="Button"
          >
            Search
          </Button>
        </InputGroup>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4}></Col>
    </Row>
  );
}

export default Search;
