import { readFileSync } from 'fs'

enum OutcomePoints {
    LOSE = 0,
    DRAW = 3,
    WIN = 6,
}
enum ItemPoints {
    ROCK = 1,
    PAPER = 2,
    SCISSORS = 3,
}
type Item = 'rock' | 'paper' | 'scissors'
type OpponentItem = 'A' | 'B' | 'C'
type PlayerItem = 'X' | 'Y' | 'Z'
type Outcome = 'win' | 'lose' | 'draw'
type OutcomeMap = {
    [key in Item]: {
        [key in Outcome]: number
    }
}

const outcomeMap: OutcomeMap = {
    rock: {
        win: OutcomePoints.WIN + ItemPoints.PAPER,
        draw: OutcomePoints.DRAW + ItemPoints.ROCK,
        lose: OutcomePoints.LOSE + ItemPoints.SCISSORS,
    },
    paper: {
        win: OutcomePoints.WIN + ItemPoints.SCISSORS,
        draw: OutcomePoints.DRAW + ItemPoints.PAPER,
        lose: OutcomePoints.LOSE + ItemPoints.ROCK,
    },
    scissors: {
        win: OutcomePoints.WIN + ItemPoints.ROCK,
        draw: OutcomePoints.DRAW + ItemPoints.SCISSORS,
        lose: OutcomePoints.LOSE + ItemPoints.PAPER,
    },
}

const opponentItemMap: Record<OpponentItem, Item> = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
}

const playerOutcomeMap: Record<PlayerItem, Outcome> = {
    X: 'lose',
    Y: 'draw',
    Z: 'win',
}

let data = readFileSync('day-2/data.txt', 'utf8')
let rounds = data
    .split('\n')
    .filter(line => line.length > 0)
    .map(line => line.split(' ')) as [OpponentItem, PlayerItem][]

let totalPoints = 0

for (const round of rounds) {
    const [opponentItemChar, playerOutcomeChar] = round
    let opponentItem = opponentItemMap[opponentItemChar]
    let playerOutcome = playerOutcomeMap[playerOutcomeChar]
    totalPoints += outcomeMap[opponentItem][playerOutcome]
}

console.log(totalPoints)
