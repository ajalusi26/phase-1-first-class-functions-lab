// Code your solution in this file!
const returnFirstTwoDrivers = (drivers)  => { 
    let newDrivers = drivers.slice(0,2)
    return newDrivers;

}
const returnLastTwoDrivers = (drivers) => {
    let newDrivers = drivers.slice(-2)
    return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(){
    return function multiply(x){
        return x * x;
    }
}

function fareDoubler(x) {
    return x*2
}

function fareTripler(x){
    return x*3
}
function selectDifferentDrivers(drivers, func){
    return func(drivers)
}