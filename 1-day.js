// TODO: Function which returns a random number in the given range

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {

    return rangeStart + Math.floor(Math.random() * (rangeEnd - rangeStart));
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
