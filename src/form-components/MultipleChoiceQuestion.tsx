import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Select an option</Form.Label>
                <Form.Select
                    value={answer}
                    onChange={(event) => {
                        setAnswer(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer && <div>✔️</div>}
            {answer !== expectedAnswer && <div>❌</div>}
        </div>
    );
}
