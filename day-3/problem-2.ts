import { readFileSync } from 'fs'

const priorities = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
} as const

let data = readFileSync('day-3/data.txt', 'utf8')
const sacks = data.split('\n').filter(line => line.length > 0)

const groups: [string, string, string][] = []
let currentGroup: string[] = []

for (const sack of sacks) {
    currentGroup.push(sack)
    if (currentGroup.length === 3) {
        groups.push(currentGroup as [string, string, string])
        currentGroup = []
    }
}
groups.push(currentGroup as [string, string, string])

let totalPoints = 0

groups.forEach(group => {
    let [sack1, sack2, sack3] = group
    if (!sack1 || !sack2 || !sack3) return
    let sack1Items = new Set(sack1)
    let sack2Items = new Set(sack2)

    for (const item of sack3) {
        if (sack1Items.has(item) && sack2Items.has(item)) {
            totalPoints += priorities[item]
            return
        }
    }
})

console.log(totalPoints)
