let probailities = [];
let diceSides = 6;
let straight3Outcomes = 0;
let straight4Outcomes = 0;
let straight5Outcomes = 0;
let straight6Outcomes = 0;
let twoOfaKindOutcomes = 0;
let twoPairs = 0;
let fullHouse = 0;

function checkForStraights(diceArray) {

    if ((diceArray.indexOf(1) > -1) && (diceArray.indexOf(2) > -1) && (diceArray.indexOf(3) > -1)) {
        straight3Outcomes++;
        if (diceArray.indexOf(4) > -1) {
            straight4Outcomes++;
            if (diceArray.indexOf(5) > -1) {
                straight5Outcomes++;
                if (diceArray.indexOf(6) > -1) {
                    straight6Outcomes++;
                }
            }
        }
    }

    if ((diceArray.indexOf(2) > -1) && (diceArray.indexOf(3) > -1) && (diceArray.indexOf(4) > -1)) {
        straight3Outcomes++;
        if (diceArray.indexOf(5) > -1) {
            straight4Outcomes++;
            if (diceArray.indexOf(6) > -1) {
                straight5Outcomes++;
            }
        }
    }

    if ((diceArray.indexOf(3) > -1) && (diceArray.indexOf(4) > -1) && (diceArray.indexOf(5) > -1)) {
        straight3Outcomes++;
        if (diceArray.indexOf(6) > -1) {
            straight4Outcomes++;
        }
    }

    if ((diceArray.indexOf(4) > -1) && (diceArray.indexOf(5) > -1) && (diceArray.indexOf(6) > -1)) {
        straight3Outcomes++;
    }
}

function checkFor2ofAKind(diceArray) {

    if ((diceArray[0] === diceArray[1]) ||
        (diceArray[0] === diceArray[2]) ||
        (diceArray[0] === diceArray[3]) ||
        (diceArray[0] === diceArray[4]) ||
        (diceArray[0] === diceArray[5]) ||

        (diceArray[1] === diceArray[2]) ||
        (diceArray[1] === diceArray[3]) ||
        (diceArray[1] === diceArray[4]) ||
        (diceArray[1] === diceArray[5]) ||

        (diceArray[2] === diceArray[3]) ||
        (diceArray[2] === diceArray[4]) ||
        (diceArray[2] === diceArray[5]) ||

        (diceArray[3] === diceArray[4]) ||
        (diceArray[3] === diceArray[5]) ||

        (diceArray[4] === diceArray[5])) {

            twoOfaKindOutcomes++;
    }
}

function checkFor2Pairs(diceArray) {

    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;

    for (let i = 0; i < diceArray.length; i++) {

        if (diceArray[i] === 1) {
            ones++
        }

        if (diceArray[i] === 2) {
            twos++
        }

        if (diceArray[i] === 3) {
            threes++
        }

        if (diceArray[i] === 4) {
            fours++
        }

        if (diceArray[i] === 5) {
            fives++
        }

        if (diceArray[i] === 6) {
            sixes++
        }

    }

    if ((ones >= 2 && twos >= 2) ||
        (ones >= 2 && threes >= 2) ||
        (ones >= 2 && fours >= 2) ||
        (ones >= 2 && fives >= 2) ||
        (ones >= 2 && sixes >= 2) ||

        (twos >= 2 && threes >= 2) ||
        (twos >= 2 && fours >= 2) ||
        (twos >= 2 && fives >= 2) ||
        (twos >= 2 && sixes >= 2) ||

        (threes >= 2 && fours >= 2) ||
        (threes >= 2 && fives >= 2) ||
        (threes >= 2 && sixes >= 2) ||

        (fours >= 2 && fives >= 2) ||
        (fours >= 2 && sixes >= 2) ||

        (fives >= 2 && sixes >= 2)){

            twoPairs++
    }
}

function checkForFullHouse(diceArray) {
    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;

    for (let i = 0; i < diceArray.length; i++) {

        if (diceArray[i] === 1) {
            ones++
        }

        if (diceArray[i] === 2) {
            twos++
        }

        if (diceArray[i] === 3) {
            threes++
        }

        if (diceArray[i] === 4) {
            fours++
        }

        if (diceArray[i] === 5) {
            fives++
        }

        if (diceArray[i] === 6) {
            sixes++
        }

    }

    if ((ones >= 2 && twos >= 2) ||
        (ones >= 2 && threes >= 2) ||
        (ones >= 2 && fours >= 2) ||
        (ones >= 2 && fives >= 2) ||
        (ones >= 2 && sixes >= 2) ||

        (twos >= 2 && threes >= 2) ||
        (twos >= 2 && fours >= 2) ||
        (twos >= 2 && fives >= 2) ||
        (twos >= 2 && sixes >= 2) ||

        (threes >= 2 && fours >= 2) ||
        (threes >= 2 && fives >= 2) ||
        (threes >= 2 && sixes >= 2) ||

        (fours >= 2 && fives >= 2) ||
        (fours >= 2 && sixes >= 2) ||

        (fives >= 2 && sixes >= 2)){

            fullHouse++;
    }
}

// roll all possible combinations of 6 d6

for (a = 1; a <= diceSides; a++) {
  for (b = 1; b <= diceSides; b++) {
    for (c = 1; c <= diceSides; c++) {
      for (d = 1; d <= diceSides; d++) {
        for (e = 1; e <= diceSides; e++) {
          for (f = 1; f <= diceSides; f++) {

            // calculate probabilities for each roll

            let diceArray = [a, b, c, d, e, f];

            checkForStraights(diceArray);
            checkFor2ofAKind(diceArray);
            checkFor2Pairs(diceArray);
            checkForFullHouse(diceArray);

            probailities.push(diceArray);

          }
        }
      }
    }
  }
}

let possibleOutcomes = probailities.length;

console.log("3 in a Row");
console.log(straight3Outcomes/possibleOutcomes);

console.log("4 in a Row");
console.log(straight4Outcomes/possibleOutcomes);

console.log("5 in a Row");
console.log(straight5Outcomes/possibleOutcomes);

console.log("6 in a Row");
console.log(straight6Outcomes/possibleOutcomes);

console.log("1 Pair");
console.log(twoOfaKindOutcomes/possibleOutcomes);

console.log("2 Pairs");
console.log(twoPairs/possibleOutcomes);

