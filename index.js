// Code your solution in this file!
function returnFirstTwoDrivers (array) {
    return array.slice(0,2)
}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier (num) {
    return function multipy(fare) {
      return num * fare
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, callback) {
    return callback(array)

}
