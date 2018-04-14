# Dice Probabilities

## To Run
1. Git clone `git@github.com:nathantbaker/dice-probabilities.git`
2. Open `index.html` in Chrome.
3. Press `command` + `option` + `J` to open the Javascript console and see the results of the calculations.

## Results

### Rolling 6 Dice Once

| Condition     | Probability         |
|:--------------|:--------------------|
| 3 in a Row    | 0.9722222222222222  |
| 4 in a Row    | 0.37808641975308643 |
| 5 in a Row    | 0.10802469135802469 |
| 1 Pair        | 0.9845679012345679  |
| 2 Pairs       | 0.5561985596707819  |

Here are the cumulative probabilies of the various conditions when rolling 6 standard d6 dice.

The probabilies are cumulative and not binomial. That means the probability for rolling 3 in a row includes 4 in a row, etc, and it isn't just the condition excluding other things.