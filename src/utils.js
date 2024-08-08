// Your code goes here
export function currentAgeForBirthYear(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - year;

}