const kanjiList = {
    0: "ゼロ",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
    8: "八",
    9: "九",
    10: "十",
    100: "百",
    1000: "千",
    10000: "万",
};

let result;
let question;

function checkAnswer() {
    console.log("checkAnswer()");
    const a = document.getElementById("answer").value;
    const q = question;
    const k = solveAnswer(q);

    if (a === k) {
        // Do something on correct
        result = "Correct!";
    } else {
        // Do something on incorrect
        result = "Inorrect!";
    }
    document.getElementById("result").innerText = result;
}

function newQuestion() {
    console.log("newQuestion()");
    // Generate a new number and display it to the screen.
    const number = Math.floor(Math.random() * 1001);
    // const number = 852;
    document.getElementById("answer").value = "";
    question = number;
    result = "";

    
    document.getElementById("question").innerText = question;
    document.getElementById("result").innerText = result;
}



function solveAnswer(number) {
    
    console.log("solveAnswer()");
    // If there is a specific entry in the kanji list, return early with that kanji
    if (number in kanjiList) {
        if (number >= 10000) {
            return "一" + kanjiList[number];
        } else {
            return kanjiList[number];
        }
    }

    let quotient, remainder;
    let string = "";
    const units = [1000, 100, 10];
    units.forEach((e) => {
        quotient = Math.floor(number / e);
        remainder = number % e;
        if (quotient > 0) {
            if (quotient == 1) {
                string += kanjiList[e];
            } else {
                string += kanjiList[quotient] + kanjiList[e];
            }
        }
        number = remainder;
    });

    // Add the final number unless it is a 0
    if (number == 0) {
        string += "";
    } else {
        string += kanjiList[number];
    }
    return string;
}

window.onload = () => {
    result = "";
    question = document.getElementById("question").innerText;
    newQuestion();
}