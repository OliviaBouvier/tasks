import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🐿️" | "💕" | "🍀" | "🎃" | "🎅";

    const [holiday, setHoliday] = useState<Holiday>("🐿️");

    function byAlphabet(): void {
        if (holiday === "🎅") {
            setHoliday("🐿️");
        }
        if (holiday === "🐿️") {
            setHoliday("🎃");
        }
        if (holiday === "🎃") {
            setHoliday("🍀");
        }
        if (holiday === "🍀") {
            setHoliday("💕");
        }
        if (holiday === "💕") {
            setHoliday("🎅");
        }
    }

    function byChronology(): void {
        if (holiday === "🐿️") {
            setHoliday("💕");
        }
        if (holiday === "💕") {
            setHoliday("🍀");
        }
        if (holiday === "🍀") {
            setHoliday("🎃");
        }
        if (holiday === "🎃") {
            setHoliday("🎅");
        }
        if (holiday === "🎅") {
            setHoliday("🐿️");
        }
    }

    return (
        <div>
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            <Button onClick={byChronology}>Advance by Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
