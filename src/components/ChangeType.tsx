import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function flipType(): void {
        if (type === "multiple_choice_question") {
            setType("short_answer_question");
        } else {
            setType("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <div>
                {type === "multiple_choice_question" ?
                    <span>Multiple Choice</span>
                :   <span>Short Answer</span>}
            </div>
        </div>
    );
}
