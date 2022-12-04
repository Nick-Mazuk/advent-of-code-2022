import { readFileSync } from 'fs'

let data = readFileSync('day-1/data.txt', 'utf8')
let calories = data.split('\n')

let maxCalories = 0
let currentCalories = 0

for (const calorie of calories) {
    if (calorie == '') {
        maxCalories = Math.max(maxCalories, currentCalories)
        currentCalories = 0
        continue
    }
    currentCalories += parseInt(calorie)
}

console.log(maxCalories)
