import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateStudent(): void {
        setIsStudent(!isStudent);
    }

    function updateMode(): void {
        setMode(!mode);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="mode-switch"
                label="Switch Mode"
                checked={mode}
                onChange={updateMode}
            />
            {mode && (
                <Form.Group>
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control value={name} onChange={updateName} />
                </Form.Group>
            )}
            {mode && (
                <Form.Check
                    type="checkbox"
                    id="is-student"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            )}
            {!mode && !isStudent && <div>{name} is not a student.</div>}
            {!mode && isStudent && <div>{name} is a student.</div>}
        </div>
    );
}
