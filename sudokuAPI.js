/* Sehr unefiziente Variante 
const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const leereZahlen = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let b1 = [...leereZahlen];
let b2 = [...leereZahlen];
let b3 = [...leereZahlen];
let b4 = [...leereZahlen];
let b5 = [...leereZahlen];
let b6 = [...leereZahlen];
let b7 = [...leereZahlen];
let b8 = [...leereZahlen];
let b9 = [...leereZahlen];

function shuffle() {
    const mix = [...zahlen];
    for (let i = mix.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mix[i], mix[j]] = [mix[j], mix[i]];
    }
    return mix;
}

function arrayContainSame(arr1, arr2) {
    return arr1.some(num => arr2.includes(num));
}

function checkHlines(b1, b2, b3) {
    const b1R1 = [b1[0], b1[1], b1[2]];
    const b1R2 = [b1[3], b1[4], b1[5]];
    const b1R3 = [b1[6], b1[7], b1[8]];

    const b2R1 = [b2[0], b2[1], b2[2]];
    const b2R2 = [b2[3], b2[4], b2[5]];
    const b2R3 = [b2[6], b2[7], b2[8]];

    const b3R1 = [b3[0], b3[1], b3[2]];
    const b3R2 = [b3[3], b3[4], b3[5]];
    const b3R3 = [b3[6], b3[7], b3[8]];

    if (
        arrayContainSame(b1R1, b2R1) || arrayContainSame(b1R1, b3R1) || arrayContainSame(b2R1, b3R1) ||
        arrayContainSame(b1R2, b2R2) || arrayContainSame(b1R2, b3R2) || arrayContainSame(b2R2, b3R2) ||
        arrayContainSame(b1R3, b2R3) || arrayContainSame(b1R3, b3R3) || arrayContainSame(b2R3, b3R3)
    ) {
        return false;
    }
    return true;
}

function checkVlines(b1, b2, b3) {
    const b1V1 = [b1[0], b1[3], b1[6]];
    const b1V2 = [b1[1], b1[4], b1[7]];
    const b1V3 = [b1[2], b1[5], b1[8]];

    const b2V1 = [b2[0], b2[3], b2[6]];
    const b2V2 = [b2[1], b2[4], b2[7]];
    const b2V3 = [b2[2], b2[5], b2[8]];

    const b3V1 = [b3[0], b3[3], b3[6]];
    const b3V2 = [b3[1], b3[4], b3[7]];
    const b3V3 = [b3[2], b3[5], b3[8]];

    if (
        arrayContainSame(b1V1, b2V1) || arrayContainSame(b1V1, b3V1) || arrayContainSame(b2V1, b3V1) ||
        arrayContainSame(b1V2, b2V2) || arrayContainSame(b1V2, b3V2) || arrayContainSame(b2V2, b3V2) ||
        arrayContainSame(b1V3, b2V3) || arrayContainSame(b1V3, b3V3) || arrayContainSame(b2V3, b3V3)
    ) {
        return false;
    }
    return true;
}

function createField() {
    let b1Field = shuffle();
    let b2Field = shuffle();
    let b3Field = shuffle();

    while (!checkVlines(b1Field, b2Field, b3Field)) {
        b2Field = shuffle();
        b3Field = shuffle();
    }

    while (!checkHlines(b1Field, b2Field, b3Field)) {
        b1Field = shuffle();
        b2Field = shuffle();
        b3Field = shuffle();
    }
    

    console.log("b1:", b1Field);
    console.log("b2:", b2Field);
    console.log("b3:", b3Field);
}

createField();

*/
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
    let r2;
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

}

console.log(Hline1)