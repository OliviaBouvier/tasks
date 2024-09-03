import React from "react";
import "./App.css";
import jammy from "./assets/jammy.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World! UD CISC275 with React Hooks and TypeScript Olivia
            </header>
            <Container>
                <Row>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <h1>Names of my cats</h1>
                        <ul>
                            <li>Toesty</li>
                            <li>Jammy</li>
                            <li>Charles</li>
                            <li>Liza</li>
                            <li>Lumi</li>
                            <li>Westley</li>
                            <li>Inigo</li>
                            <li>Pablo</li>
                        </ul>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "100px",
                                width: "500px",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload.
                        </p>
                        <img
                            src={jammy}
                            alt="A picture of my cat, Jammy."
                            width="350"
                            height="450"
                        />
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
