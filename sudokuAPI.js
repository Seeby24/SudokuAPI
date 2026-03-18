
let b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b2 = [4, 5, 6, 7, 8, 9, 1, 2, 3];
let b3 = [7, 8, 9, 1, 2, 3, 4, 5, 6];

let b4 = [2, 3, 4, 5, 6, 7, 8, 9, 1];
let b5 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
let b6 = [8, 9, 1, 2, 3, 4, 5, 6, 7];

let b7 = [3, 4, 5, 6, 7, 8, 9, 1, 2];
let b8 = [6, 7, 8, 9, 1, 2, 3, 4, 5];
let b9 = [9, 1, 2, 3, 4, 5, 6, 7, 8];

// Erste Blockreihe
const Hline1 = [b1[0], b1[1], b1[2], b2[0], b2[1], b2[2], b3[0], b3[1], b3[2]];
const Hline2 = [b1[3], b1[4], b1[5], b2[3], b2[4], b2[5], b3[3], b3[4], b3[5]];
const Hline3 = [b1[6], b1[7], b1[8], b2[6], b2[7], b2[8], b3[6], b3[7], b3[8]];

// Zweite Blockreihe
const Hline4 = [b4[0], b4[1], b4[2], b5[0], b5[1], b5[2], b6[0], b6[1], b6[2]];
const Hline5 = [b4[3], b4[4], b4[5], b5[3], b5[4], b5[5], b6[3], b6[4], b6[5]];
const Hline6 = [b4[6], b4[7], b4[8], b5[6], b5[7], b5[8], b6[6], b6[7], b6[8]];

// Dritte Blockreihe
const Hline7 = [b7[0], b7[1], b7[2], b8[0], b8[1], b8[2], b9[0], b9[1], b9[2]];
const Hline8 = [b7[3], b7[4], b7[5], b8[3], b8[4], b8[5], b9[3], b9[4], b9[5]];
const Hline9 = [b7[6], b7[7], b7[8], b8[6], b8[7], b8[8], b9[6], b9[7], b9[8]];

// Erste vertikale Blockreihe
const Vline1 = [b1[0], b1[3], b1[6], b4[0], b4[3], b4[6], b7[0], b7[3], b7[6]];
const Vline2 = [b1[1], b1[4], b1[7], b4[1], b4[4], b4[7], b7[1], b7[4], b7[7]];
const Vline3 = [b1[2], b1[5], b1[8], b4[2], b4[5], b4[8], b7[2], b7[5], b7[8]];

// Zweite vertikale Blockreihe
const Vline4 = [b2[0], b2[3], b2[6], b5[0], b5[3], b5[6], b8[0], b8[3], b8[6]];
const Vline5 = [b2[1], b2[4], b2[7], b5[1], b5[4], b5[7], b8[1], b8[4], b8[7]];
const Vline6 = [b2[2], b2[5], b2[8], b5[2], b5[5], b5[8], b8[2], b8[5], b8[8]];

// Dritte vertikale Blockreihe
const Vline7 = [b3[0], b3[3], b3[6], b6[0], b6[3], b6[6], b9[0], b9[3], b9[6]];
const Vline8 = [b3[1], b3[4], b3[7], b6[1], b6[4], b6[7], b9[1], b9[4], b9[7]];
const Vline9 = [b3[2], b3[5], b3[8], b6[2], b6[5], b6[8], b9[2], b9[5], b9[8]];

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
            let IDc1 = i * 3 + c1;
            let IDc2 = i * 3 + c2;

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

function mixFIeld() {
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

mixFIeld()

let Sudoku = [
    [b1],[b2],[b3],[b4],[b5],[b6],[b7],[b8],[b9]
]

console.log(Sudoku)



