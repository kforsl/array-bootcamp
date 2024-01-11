
// 1. Gör en array som innehåller 5 st olika frukter av datatypen string.
let fruits = ['Apple', 'Pear', 'Melon', 'Kiwi', 'Pineapple']

// 2 gör en array som innehåller 3 olika datatyper, ex. string, number, array.

let badArray = ['Här är en sträng', 6, ['Hund', 'Katt', 'Hamster', 'Gris']]

// 3 console.log() hur många objekt arrayen ovan innehåller.
console.log('Önving 3')

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length)

// 4 I arrayen ovan, hämta cat.
console.log('Önving 4')

console.log(animals[0])

// 5 I arrayen ovan, hämta funky chihuahua.
console.log('Önving 5')

console.log(animals[3])

// 6 I arrayen ovan, byt ut hamster mot tiger.
console.log('Önving 6')

console.log(animals[1])
animals[1] = 'tiger'
console.log(animals[1])

// 7 Lägg ihop ovanstående arrayer.
console.log('Önving 7')

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = a.concat(b)

console.log(c)

//8 Merga ner array b på index 3 array a.
console.log('Önving 8')

let d = [1, 2, 3, 7, 8, 9];
let e = [4, 5, 6];

let f = a.concat(b).sort()

console.log(c)

//9 Klona ovanstående array.
console.log('Önving 9')

let abc = ['a', 'b', 'c'];

let clone = abc.slice()

console.log(clone)

// 10 Lägg till en frukt i slutet av arrayen ovan.
console.log('Önving 10')

fruits.push('melon')
console.log(fruits)

// 11  Lägg till en frukt i början av arrayen ovan.

console.log('Önving 11')

fruits.unshift('melon')
console.log(fruits)

// 12 I arrayen ovan, ta bort sista frukten i arrayen.

console.log('Önving 12')

fruits.pop()
console.log(fruits)

// 13 I arrayen ovan, ta bort första frukten i arrayen.
console.log('Önving 13')

fruits.shift()
console.log(fruits)

// 14 Sätt in en frukt i arrayen ovan på index 1.
console.log('Önving 14')

fruits.splice(1, 0, 'Pineapple')
console.log(fruits[1])

// 15 Sätt in tre frukter i arrayen ovan på index 2.

console.log('Önving 15')

fruits.splice(2, 0, 'Pineapple')
console.log(fruits[2])

// 16 I arrayen ovan, ta bort Christoffer och Johan.

console.log('Önving 16')

let names = ['David', 'Christoffer', 'Johan', 'Maja']
names.splice(1, 2)
console.log(names)

// 17 Spegelvänd på arrayen ovan.

console.log('Önving 17')

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numsReversed = nums.toReversed();
console.log(numsReversed);

let str = 'Supercalifragilisticexpialidocious';

// 18  Kika om strängen ovan innehåller bokstaven n.

console.log('Önving 18')

console.log(str.includes('n'))

// 19 Kika om strängen ovan innehåller bokstaven x.
console.log('Önving 19')

console.log(str.includes('x'))

// 20 I ovanstående array, hitta vilket position första förekomsten av p har.
console.log('Önving 20')

console.log(str.indexOf('p'))

// 21 I strängen ovan, plocka fram de 5 första tecknena.
console.log('Önving 21')
console.log(str.substring(0, 5))

// 22 I strängen ovan, plocka fram de 7 sista tecknena.
console.log('Önving 22')
console.log(str.substr(str.length - 7))

// 23 I arrayen ovan, filtera fram alla nummer över 5.
console.log('Önving 23')
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

let numArrayOverFive = numArray.filter(overFive)

console.log(numArray)
console.log(numArrayOverFive)

function overFive(num) {
    return num > 5;
}

// 24 I arrayen ovan, filtera fram alla nummer under 5.
console.log('Önving 24')
let numArrayUnderFive = numArray.filter(underFive)
console.log(numArrayUnderFive)

function underFive(num) {
    return num < 5;
}

let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]

// 25 Skriv ut alla namn som är 18 år eller över från arrayen ovan.
console.log('Önving 25 och 26')

for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        console.log(persons[i].name + ' är 18 år eller äldre')
    }
    // 26 Skriv ut alla namn som är under 18 år från arrayen ovan.
    else {
        console.log(persons[i].name + ' är inte 18 år')
    }
}

// 27 Sortera ovanstående array alfabetisk.
console.log('Önving 27')

let arr = ['beta', 'alfa', 'gamma'];
let sortedArr = arr.sort()
console.log(arr)

// 28 Sortera ovanstående array numeriskt.
console.log('Önving 28')

let sortNums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
let sortedNums = nums.sort()
console.log(sortedNums)

// 29 I person-arrayen ovan, sortera objekten efter ålder, yngst först.
console.log('Önving 29')

let pesonsSortetYoung = persons.sort((a, b) => a.age - b.age).slice()
console.log(pesonsSortetYoung)

// 30 I person-arrayen ovan, sortera objekten efter ålder, äldst först.
console.log('Önving 30')

let pesonsSortetOld = persons.sort((a, b) => b.age - a.age).slice()
console.log(pesonsSortetOld)

// 31 I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn
console.log('Önving 31')

persons.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
})

console.log(persons)

// 32 I person-arrayen ovan, gör om alla namn till versaler.
console.log('Önving 32')

let upperCase = persons.map(persons => persons.name.toUpperCase());

console.log(upperCase)

// 33 I person-arrayen ovan, spegelvänd alla namn.
console.log('Önving 33')

let mirror = persons.map(persons => persons.name.split('').reverse().join(''));

console.log(mirror)

// 34 Loopa ut följande array med en forEach()-loop. console.log() varje ord.
console.log('Önving 34')

console.log('forEach')
fruits.forEach(fruits => console.log(fruits));

// 35 Loopa ut följande array med en for of-loop. console.log() varje ord.
console.log('Önving 35')

console.log('for of Loop')
for (const iterator of fruits) {
    console.log(iterator)
}

// 36 Loopa ut följande array med en for-loop. console.log() varje ord.
console.log('Önving 36')

console.log('for Loop')
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// 37 Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: 0 - apelsin 1 - päron...
console.log('Önving 37')

console.log('for Loop med nummer ')
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`)
}


















































