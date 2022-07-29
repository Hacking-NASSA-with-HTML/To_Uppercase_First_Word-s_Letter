// console.log('Hi, Overlord!!!')

function capitalizeFirstLetterOfTheWord(string) {
    const arrayFromString = string.split('')
    arrayFromString[0] = arrayFromString[0].toUpperCase()
    return arrayFromString.join('')
}


console.log(capitalizeFirstLetterOfTheWord('victory'))