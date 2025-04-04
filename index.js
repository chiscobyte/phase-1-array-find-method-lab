// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

const superbowlWin = function(record) {
    let answer
    if(record.result === "W"){
        answer = record.year
    }else{
        answer = 'undefined'
    }
    return answer
}


console.log(record.find(superbowlWin).year)