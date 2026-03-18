import { useState } from "react";
import "./field.css";

export default function Field() {
    const [values, setValues] = useState(Array(81).fill(""));

    function clear() {
        setValues(Array(81).fill(""));
    }

    const handleInput = (e, index) => {
        const value = e.target.value;

        if (!/^[1-9]?$/.test(value)) {
            return;
        }

        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
    };

    return (
        <>
            <button onClick={clear}>Reseten</button>

            <div className="board">
                {values.map((val, i) => (
                    <input
                        key={i}
                        className="box"
                        maxLength={1}
                        inputMode="numeric"
                        value={val}
                        onChange={(e) => handleInput(e, i)}
                    />
                ))}
            </div>
        </>
    );
}