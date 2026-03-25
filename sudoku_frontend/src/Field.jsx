import {useState} from "react";
import "./field.css";

export default function Field() {
    const [values, setValues] = useState(Array(81).fill(""));
    const [given, setGiven] = useState(Array(81).fill(false));

    function clear() {
        setValues(Array(81).fill(""));
    }

    async function generate(dif) {
        try {
            const response = await fetch("http://localhost:6767/SudokuAPI/" + dif, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(
                    `HTTP-Fehler! Status: ${response.status}`);
            }
            //request was ok, parse json
            const data = await response.json();
            console.log(data)
            const flat = [];
            for (let br = 0; br < 3; br++) {        // Blockreihe (0,1,2)
                for (let row = 0; row < 3; row++) { // Zeile innerhalb des Blocks (0,1,2)
                    for (let b = 0; b < 3; b++) {   // Block innerhalb der Reihe (0,1,2)
                        flat.push(...data[br * 3 + b].slice(row * 3, row * 3 + 3));
                    }
                }
            }

            setValues(flat.map(v => (v === 0 || v === null) ? "" : String(v)));
            setGiven(flat.map(v => v !== 0 && v !== null));

        } catch (error) {
            console.error('Fehler beim Senden der Anfrage:', error);
        }
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
        <div className="wrapper">

            <div className="controls-top">
                <button onClick={clear}>Reseten</button>
                <button>Überprüfen</button>
            </div>

            <div className="controls-dif">
                <button onClick={() => generate("easy")}>Sudoku einfach</button>
                <button onClick={() => generate("medium")}>Sudoku mittel</button>
                <button onClick={() => generate("hard")}>Sudoku schwer</button>
                <button onClick={() => generate("impossible")}>Sudoku unmöglich</button>
            </div>

            <div className="board">
                {values.map((val, i) => (
                    <input
                        key={i}
                        className="box"
                        maxLength={1}
                        inputMode="numeric"
                        value={val}
                        onChange={(e) => handleInput(e, i)}
                        readOnly={given[i]}
                    />
                ))}
            </div>

        </div>
    );
}