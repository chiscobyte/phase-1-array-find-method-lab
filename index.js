
function superbowlWin(record){
    let determiner = (record.find(item => item.result === "W"))
    if(determiner !== undefined){
    return determiner.year;
    }
    return determiner
   }