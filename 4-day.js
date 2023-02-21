// TODO: Write a function which accepts two valid dates and returns the difference between them as number of days

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    return Math.abs(Math.floor((Date.parse(dateText1) - Date.parse(dateText2))/DAY_IN_MILLISECONDS))
}
