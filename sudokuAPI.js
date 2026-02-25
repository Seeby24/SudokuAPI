/* const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const leereZahlen = [0, 0, 0, 0, 0, 0, 0, 0, 0]

let b1 =  [...leereZahlen];
let b2 =  [...leereZahlen];
let b3 =  [...leereZahlen];
let b4 =  [...leereZahlen];
let b5 =  [...leereZahlen];
let b6 =  [...leereZahlen];
let b7 =  [...leereZahlen];
let b8 =  [...leereZahlen];
let b9 =  [...leereZahlen];


function shuffle() {
    const mix = [...zahlen]
    for (let i = mix.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [mix[i], mix[j]] = [mix[j], mix[i]];
    }
    return mix
}

function checkHlines(b1, b2, b3) {
    // Zeilen erstellen
    const b1R1 = [b1[0], b1[1], b1[2]];
    const b1R2 = [b1[3], b1[4], b1[5]];
    const b1R3 = [b1[6], b1[7], b1[8]];

    const b2R1 = [b2[0], b2[1], b2[2]];
    const b2R2 = [b2[3], b2[4], b2[5]];
    const b2R3 = [b2[6], b2[7], b2[8]];

    const b3R1 = [b3[0], b3[1], b3[2]];
    const b3R2 = [b3[3], b3[4], b3[5]];
    const b3R3 = [b3[6], b3[7], b3[8]];


    function arrayContainSame(arr1, arr2) {
        return arr1.some(num => arr2.includes(num));
    }


    if (
        arrayContainSame(b1R1, b2R1) || arrayContainSame(b1R1, b3R1) || arrayContainSame(b2R1, b3R1) ||
        arrayContainSame(b1R2, b2R2) || arrayContainSame(b1R2, b3R2) || arrayContainSame(b2R2, b3R2) ||
        arrayContainSame(b1R3, b2R3) || arrayContainSame(b1R3, b3R3) || arrayContainSame(b2R3, b3R3)
    ) {
        return false
    }
    return true
}

function checkVlines(b1, b2, b3) {

    // 0,3,6
    // 1,4,7
    // 2,5,8
    const b1V1 = [b1[0], b1[3], b1[6]];
    const b1V2 = [b1[1], b1[4], b1[7]];
    const b1V3 = [b1[2], b1[5], b1[8]];

    const b2V1 = [b2[0], b2[3], b2[6]];
    const b2V2 = [b2[1], b2[4], b2[7]];
    const b2V3 = [b2[2], b2[5], b2[8]];

    const b3V1 = [b3[0], b3[3], b3[6]];
    const b3V2 = [b3[1], b3[4], b3[7]];
    const b3V3 = [b3[2], b3[5], b3[8]];


    function arrayContainSame(arr1, arr2) {
        return arr1.some(num => arr2.includes(num));
    }

    if (
        arrayContainSame(b1V1, b2V1) || arrayContainSame(b1V1, b3V1) || arrayContainSame(b2V1, b3V1) ||
        arrayContainSame(b1V2, b2V2) || arrayContainSame(b1V2, b3V2) || arrayContainSame(b2V2, b3V2) ||
        arrayContainSame(b1V3, b2V3) || arrayContainSame(b1V3, b3V3) || arrayContainSame(b2V3, b3V3)
    ) {
        return false;
    }
    return true
}

function creatField(b1, b2, b3) {
    // Line 1
    function checkLOne(b1, b2, b3) {
        b1 = shuffle();
        b2 = shuffle();
        b3 = shuffle();
        checkVlines(b1, b2, b3)
        while (!checkVlines(b1, b2, b3)) {
            b2 = shuffle();
            b3 = shuffle();
            checkVlines(b1, b2, b3)
        }
        console.log(b1)
        console.log(b2)
        console.log(b3)
    }
    checkLOne(b1, b2, b3)
    // Line 2
    b3 = shuffle();
    b6 = shuffle();
    b9 = shuffle();
    checkHlines(b3, b6, b9)
    while (!checkHlines(b3, b6, b9)) {
        b6 = shuffle();
        b9 = shuffle();
        checkHlines(b3, b6, b9)
    }
    console.log(b1,b2,b3,b6,b9)

}

creatField(b1, b2, b3)

*/

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
