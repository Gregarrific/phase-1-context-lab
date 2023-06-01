/* Your Code Here */
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(array) {
    return array.map(x => createEmployeeRecord(x));
}
function createTimeInEvent(time) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.slice(-4)),
        date: time.slice(0, 10),
    });
    return this;
}
function createTimeOutEvent(time) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time.slice(-4)),
        date: time.slice(0, 10),
    });
    return this;
}
function hoursWorkedOnDate(date) {
    let timeIn, timeOut, hoursWorked;
    this.timeInEvents.forEach(record => {
        if(record.date === date) {
            timeIn = record.hour;
        }
    });
    this.timeOutEvents.forEach(record => {
        if(record.date === date) {
            timeOut = record.hour;
        }
    });
    return hoursWorked = (timeOut - timeIn) / 100;
}
function wagesEarnedOnDate(date) {
    let payAmount;
    return payAmount = hoursWorkedOnDate.call(this, date) * this.payPerHour; 
}
function calculatePayroll(employeeArray) {
    let totalPayroll = 0;
    employeeArray.forEach(employee => {
        totalPayroll = totalPayroll + allWagesFor.call(employee);
    });
    console.log(totalPayroll);
    return totalPayroll;
}
function findEmployeeByFirstName(srcArray, firstName) {
    let employeeList = createEmployeeRecords(srcArray);
    return srcArray.find(items => items.firstName === firstName);
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}