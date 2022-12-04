import { readFileSync } from 'fs'

let data = readFileSync('day-1/data.txt', 'utf8')
let calories = data.split('\n')

let elves: number[] = []
let currentCalories = 0

for (const calorie of calories) {
    if (calorie == '') {
        elves.push(currentCalories)
        currentCalories = 0
        continue
    }
    currentCalories += parseInt(calorie)
}

elves.sort((a, b) => b - a)

console.log(elves[0] + elves[1] + elves[2])
