import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizInProgress, setQuizInProgress] = useState<boolean>(false);

    function mulligan() {
        setAttempts(attempts + 1);
    }

    function flipQuizState() {
        if (!quizInProgress) {
            setAttempts(attempts - 1);
        }
        setQuizInProgress(!quizInProgress);
    }

    return (
        <div>
            <Button
                onClick={flipQuizState}
                disabled={quizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={mulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
            <Button onClick={flipQuizState} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <div>{attempts} attempts remaining</div>
        </div>
    );
}
