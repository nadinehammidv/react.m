import React from "react";
import { product } from "./product";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image } from "./Image";
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="Image" />
        <Card.Body>
          <Card.Title>"./product" </Card.Title>
          <Card.Text>best msi .</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}


export default App;
 