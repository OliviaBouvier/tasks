import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftValue, setLeftValue] = useState<number>(2);
    const [rightValue, setRightValue] = useState<number>(3);

    function rollLeft(): void {
        setLeftValue(d6);
    }

    function rollRight(): void {
        setRightValue(d6);
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{leftValue}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{rightValue}</span>
            {leftValue === 1 && rightValue === 1 && <div>You Lose!</div>}
            {(leftValue !== 1 || rightValue !== 1) &&
                leftValue === rightValue && <div>You Win!</div>}
        </div>
    );
}
