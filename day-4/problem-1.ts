import { readFileSync } from 'fs'

let data = readFileSync('day-4/data.txt', 'utf8')

const doPairsOverlap = (elf1: [number, number], elf2: [number, number]) => {
    return (elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) || (elf1[0] <= elf2[0] && elf1[1] >= elf2[1])
}

const pairs = data
    .split('\n')
    .filter(line => line.length > 0)
    .map(line => line.split(',').map(elf => elf.split('-').map(item => parseInt(item)))) as [
    [number, number],
    [number, number]
][]

let totalOverlappingPairs = 0

for (const pair of pairs) {
    let [elf1, elf2] = pair
    if (doPairsOverlap(elf1, elf2)) {
        totalOverlappingPairs++
    }
}

console.log(totalOverlappingPairs)
