let probailities = [];
let diceSides = 6;
let straight3Outcomes = 0;
let straight4Outcomes = 0;
let straight5Outcomes = 0;
let straight6Outcomes = 0;
let twoOfaKindOutcomes = 0;
let twoPairs = 0;
let fullHouse = 0;
let onlyEvens = 0;
let threeStars1Swirl = 0;
let fourStars1Swirl = 0;
let fiveStars1Swirl = 0;

// key for unique game dice
// 1:   1 swirl
// 2:   1 money
// 3:   1 square
// 4:   1 square
// 5:   1 star
// 6:   2 stars

let threeStars = 0;
let fourStars = 0;
let fiveStars = 0;
let sixStars = 0;
let sevenStars = 0;
let eightStars = 0;
let nineStars = 0;

let oneOfEach = 0;
let uniquePairs = 0;
let twoSwirlsTwoSquares = 0;
let twoStarTwoSquares = 0;
let threeStarTwoSquares = 0;
let oneTwoThree = 0;

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

    if ((ones >= 2 && twos >= 3)    || (ones >= 3 && twos >= 2)    ||
        (ones >= 2 && threes >= 3)  || (ones >= 3 && threes >= 2)  ||
        (ones >= 2 && fours >= 3)   || (ones >= 3 && fours >= 2)   ||
        (ones >= 2 && fives >= 3)   || (ones >= 3 && fives >= 2)   ||
        (ones >= 2 && sixes >= 3)   || (ones >= 3 && sixes >= 2)   ||

        (twos >= 2 && threes >= 3)  || (twos >= 3 && threes >= 2)  ||
        (twos >= 2 && fours >= 3)   || (twos >= 3 && fours >= 2)   ||
        (twos >= 2 && fives >= 3)   || (twos >= 3 && fives >= 2)   ||
        (twos >= 2 && sixes >= 3)   || (twos >= 3 && sixes >= 2)   ||

        (threes >= 2 && fours >= 3) || (threes >= 3 && fours >= 2) ||
        (threes >= 2 && fives >= 3) || (threes >= 3 && fives >= 2) ||
        (threes >= 2 && sixes >= 3) || (threes >= 3 && sixes >= 2) ||

        (fours >= 2 && fives >= 3)  || (fours >= 3 && fives >= 2)  ||
        (fours >= 2 && sixes >= 3)  || (fours >= 3 && sixes >= 2)  ||

        (fives >= 2 && sixes >= 3)  || (fives >= 3 && sixes >= 3)) {

            fullHouse++;
    }
}

function checkForOnlyEvens(diceArray) {

    if ((diceArray.indexOf(1) == -1) &&
        (diceArray.indexOf(3) == -1) &&
        (diceArray.indexOf(5) == -1)) {

            onlyEvens++;
    }
}

function checkForStars(diceArray) {
    var stars = 0;

    for (let i = 0; i < diceArray.length; i++) {
        if (diceArray[i] === 5) stars++;
        if (diceArray[i] === 6) stars = stars + 2;
    }

    if (stars >= 3) threeStars ++;
    if (stars >= 4) fourStars ++;
    if (stars >= 5) fiveStars ++;
    if (stars >= 6) sixStars ++;
    if (stars >= 7) sevenStars ++;
    if (stars >= 8) eightStars ++;
    if (stars >= 9) nineStars ++;
}

function checkForMixedConditions(diceArray) {

    // key for unique game dice
    // 1:   1 swirl
    // 2:   1 money
    // 3:   1 square
    // 4:   1 square
    // 5:   1 star
    // 6:   2 stars
    var stars = 0;
    var swirls = 0;
    var squares = 0;

    for (let i = 0; i < diceArray.length; i++) {
        if (diceArray[i] === 1) swirls++;
        if (diceArray[i] === 3) squares++;
        if (diceArray[i] === 4) squares++;
        if (diceArray[i] === 5) stars++;
        if (diceArray[i] === 6) stars = stars + 2;
    }

    if ((stars >= 2 && swirls >= 2) ||
        (stars >= 2 && squares >= 2) ||
        (squares >= 2 && swirls >= 2)) {

            uniquePairs++;
    }

    if (stars >= 3 && swirls >= 1) threeStars1Swirl++;
    if (stars >= 4 && swirls >= 1) fourStars1Swirl++;
    if (stars === 5 && swirls === 1) fiveStars1Swirl++;


    if (squares >= 2 && swirls >= 2) twoSwirlsTwoSquares++;
    if (squares >= 2 && stars >= 2) twoStarTwoSquares++;
    if (squares >= 3 && stars >= 2) threeStarTwoSquares++;
    if (swirls >= 1 && squares >= 2 && stars >= 3) oneTwoThree++;
    if (swirls >= 1 && squares >= 1 && stars >= 1) oneOfEach++;
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
            checkForOnlyEvens(diceArray);
            checkForStars(diceArray);
            checkForMixedConditions(diceArray);

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

console.log("Full House");
console.log(fullHouse/possibleOutcomes);

console.log("Only Evens");
console.log(onlyEvens/possibleOutcomes);

console.log("Only Odds");
console.log(onlyEvens/possibleOutcomes);

console.log("Only Evens OR Odds");
console.log(onlyEvens*2/possibleOutcomes);

console.log("3 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(threeStars/possibleOutcomes);

console.log("4 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(fourStars/possibleOutcomes);

console.log("5 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(fiveStars/possibleOutcomes);

console.log("6 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(sixStars/possibleOutcomes);

console.log("7 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(sevenStars/possibleOutcomes);

console.log("8 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(eightStars/possibleOutcomes);

console.log("9 or More Stars");
console.log("(with 1/6 sides 1 star and 1/6 sides 2 stars on one face.)");
console.log(nineStars/possibleOutcomes);

console.log("One or more of Each (Swirl/Square/Star)");
console.log(oneOfEach/possibleOutcomes);

console.log("Pairs");
console.log("at least 2 of Swirl/Square/Star");
console.log(uniquePairs/possibleOutcomes);

console.log("3 Stars and 1 Swirl");
console.log(threeStars1Swirl/possibleOutcomes);

console.log("4 Stars and 1 Swirl");
console.log(fourStars1Swirl/possibleOutcomes);

console.log("5 Stars and 1 Swirl");
console.log(fiveStars1Swirl/possibleOutcomes);

console.log("2 Swirls and 2 Squares");
console.log(twoSwirlsTwoSquares/possibleOutcomes);

console.log("2 Stars and 2 Squares");
console.log(twoStarTwoSquares/possibleOutcomes);

console.log("3 Stars and 2 Squares");
console.log(threeStarTwoSquares/possibleOutcomes);

console.log("1 spiral / 2 Square / 3 Star");
console.log(oneTwoThree/possibleOutcomes);







