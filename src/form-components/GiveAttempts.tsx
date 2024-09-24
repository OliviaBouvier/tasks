import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [newAttempts, setNewAttempts] = useState<string>("");

    function useAttempts(): void {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Add Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={newAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNewAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button onClick={useAttempts} disabled={attempts < 1}>
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + (parseInt(newAttempts) || 0));
                    setNewAttempts("");
                }}
            >
                gain
            </Button>
            <span>Attempts Available: {attempts}</span>
        </div>
    );
}
