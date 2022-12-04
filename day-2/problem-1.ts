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
type OutcomeMap = {
    [key in Item]: {
        [key in Item]: number
    }
}

const outcomeMap: OutcomeMap = {
    rock: {
        rock: OutcomePoints.DRAW + ItemPoints.ROCK,
        paper: OutcomePoints.WIN + ItemPoints.PAPER,
        scissors: OutcomePoints.LOSE + ItemPoints.SCISSORS,
    },
    paper: {
        rock: OutcomePoints.LOSE + ItemPoints.ROCK,
        paper: OutcomePoints.DRAW + ItemPoints.PAPER,
        scissors: OutcomePoints.WIN + ItemPoints.SCISSORS,
    },
    scissors: {
        rock: OutcomePoints.WIN + ItemPoints.ROCK,
        paper: OutcomePoints.LOSE + ItemPoints.PAPER,
        scissors: OutcomePoints.DRAW + ItemPoints.SCISSORS,
    },
}

const opponentItemMap: Record<OpponentItem, Item> = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
}

const playerItemMap: Record<PlayerItem, Item> = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors',
}

let data = readFileSync('day-2/data.txt', 'utf8')
let rounds = data
    .split('\n')
    .filter(line => line.length > 0)
    .map(line => line.split(' ')) as [OpponentItem, PlayerItem][]

let totalPoints = 0

for (const round of rounds) {
    const [opponentItemChar, playerItemChar] = round
    let opponentItem = opponentItemMap[opponentItemChar]
    let playerItem = playerItemMap[playerItemChar]
    totalPoints += outcomeMap[opponentItem][playerItem]
}

console.log(totalPoints)
