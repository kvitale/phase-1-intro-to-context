// Function to populate firstname field of the 0th element
let testEmployee = function createEmployeeRecord(){
    
}

function createEmployeeRecord(employee){
    return {

        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
   return  employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event){
    let [date, hour] = event.split(' ')
    let eventObj = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date 
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(event){
    let [date, hour] = event.split(' ')
    let eventObj = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date 
    }
    employee.timeOutEvents.push(eventObj)
    return this
}

// function createTimeOutEvent(employee, event){
//     let [date, hour] = event.split(' ')
//     let eventObj = {
//         type: 'TimeOut',
//         hour: parseInt(hour, 10),
//         date 
//     }
//     employee.timeOutEvents.push(eventObj)
//     return this
// }

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date){
    const hours = hoursWorkedOnDate.call(this, date)
    return this.payPerHour * hours
}

function calculatePayroll(employeeRecords){
    const record = employeeRecords.map(employee => allWagesFor.call(employee))

     return record.reduce((currentValue, total) => currentValue + total)
}

function findEmployeeByFirstName(employees, firstNameString){
    return employees.find(emp => emp.firstName === firstNameString)


}
