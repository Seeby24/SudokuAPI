const { json } = require("body-parser");
const express = require("express")
const cors = require("cors");
const app = express();
const port = 6767;
app.use(cors());


let sol = []

app.get("/SudokuAPI/solution", (req, res) => {
    res.json(sol)
})

app.get("/SudokuAPI/easy", (req, res) => {
    reset();
    mixField();
    sol = [b1, b2, b3, b4, b5, b6, b7, b8, b9].map(block => [...block]);
    removeCells(10)
    const sudoku = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    res.json(sudoku)
})

app.get("/SudokuAPI/medium", (req, res) => {
    reset();
    mixField();
    sol = [b1, b2, b3, b4, b5, b6, b7, b8, b9].map(block => [...block]);
    removeCells(20)
    const sudoku = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    res.json(sudoku)
})
app.get("/SudokuAPI/hard", (req, res) => {
    reset();
    mixField();
    sol = [b1, b2, b3, b4, b5, b6, b7, b8, b9].map(block => [...block]);
    removeCells(30)
    const sudoku = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    res.json(sudoku)
})

app.get("/SudokuAPI/impossible", (req, res) => {
    reset();
    mixField();
    sol = [b1, b2, b3, b4, b5, b6, b7, b8, b9].map(block => [...block]);
    removeCells(50)
    const sudoku = [b1, b2, b3, b4, b5, b6, b7, b8, b9]
    res.json(sudoku)
})

app.listen(port, () => {
    console.log(`Backend ist auf http://localhost:${port}`);
});


let b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
let b3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];

let b4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
let b5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
let b6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];

let b7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
let b8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
let b9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];


function swapHLines() {
    const blockRows = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ];

    let r1 = Math.floor(Math.random() * 3);
    let r2 = Math.floor(Math.random() * 3);

    while (r2 === r1) {
        r2 = Math.floor(Math.random() * 3);
    }

    [blockRows[r1][0], blockRows[r2][0]] = [blockRows[r2][0], blockRows[r1][0]];
    [blockRows[r1][1], blockRows[r2][1]] = [blockRows[r2][1], blockRows[r1][1]];
    [blockRows[r1][2], blockRows[r2][2]] = [blockRows[r2][2], blockRows[r1][2]];

    [b1, b2, b3, b4, b5, b6, b7, b8, b9] = [
        blockRows[0][0], blockRows[0][1], blockRows[0][2],
        blockRows[1][0], blockRows[1][1], blockRows[1][2],
        blockRows[2][0], blockRows[2][1], blockRows[2][2]
    ];
    return blockRows;

}

function swapRowsInBlock(blocks) {

    let r1 = Math.floor(Math.random() * 3);
    let r2 = Math.floor(Math.random() * 3);

    while (r2 === r1) {
        r2 = Math.floor(Math.random() * 3);
    }

    blocks.forEach(block => {
        for (let i = 0; i < 3; i++) {
            let IDr1 = r1 * 3 + i;
            let IDr2 = r2 * 3 + i;

            [block[IDr1], block[IDr2]] = [block[IDr2], block[IDr1]];
        }
    });

}

function swapVLines() {
    const blockCols = [
        [b1, b4, b7],
        [b2, b5, b8],
        [b3, b6, b9]
    ];

    let c1 = Math.floor(Math.random() * 3);
    let c2 = Math.floor(Math.random() * 3);
    while (c2 === c1) {
        c2 = Math.floor(Math.random() * 3);
    }

    [blockCols[c1], blockCols[c2]] = [blockCols[c2], blockCols[c1]]

    [b1, b2, b3, b4, b5, b6, b7, b8, b9] = [
            blockCols[0][0], blockCols[1][0], blockCols[2][0],
            blockCols[0][1], blockCols[1][1], blockCols[2][1],
            blockCols[0][2], blockCols[1][2], blockCols[2][2]
        ];
    return blockCols
}

function swapColInBlock(blocks) {
    let c1 = Math.floor(Math.random() * 3);
    let c2 = Math.floor(Math.random() * 3);

    while (c1 === c2) {
        c2 = Math.floor(Math.random() * 3);
    }

    blocks.forEach(block => {
        for (let i = 0; i < 3; i++) {

            let IDc1 = c1 + i * 3;
            let IDc2 = c2 + i * 3;

            [block[IDc1], block[IDc2]] = [block[IDc2], block[IDc1]];
        }
    });
}

function shuffleNumbers() {
    let map = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 0.5);

    function replace(block) {
        for (let i = 0; i < block.length; i++) {
            block[i] = map[block[i] - 1];
        }
    }

    [b1, b2, b3, b4, b5, b6, b7, b8, b9].forEach(replace);
}


function mixField() {
    swapHLines();
    swapVLines();

    swapRowsInBlock([b1, b2, b3]);
    swapRowsInBlock([b4, b5, b6]);
    swapRowsInBlock([b7, b8, b9]);

    swapColInBlock([b1, b4, b7]);
    swapColInBlock([b2, b5, b8]);
    swapColInBlock([b3, b6, b9]);

    shuffleNumbers();
}

function reset() {
    b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    b2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
    b3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];
    b4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
    b5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
    b6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];
    b7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
    b8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
    b9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];
}

function removeCells(count) {
    const positions = [];


    for (let b = 0; b < 9; b++)
        for (let i = 0; i < 9; i++)
            positions.push([b, i]);


    positions.sort(() => Math.random() - 0.5);


    const blocks = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
    for (let k = 0; k < count; k++) {
        const [b, i] = positions[k];
        blocks[b][i] = null;
    }
}





