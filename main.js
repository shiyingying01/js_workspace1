function createMultiplyTable(start, end) {
    if(!checkInput(start, end)){
        return null
    }
    var multilyTable = createTableWithoutInputCheck(start, end);
    return multilyTable;

}

function checkInput(start, end) {
    if((start-end) > 0){
        return false
    }else if(start <1 || end >1000){
        return false;
    }
    return true
}

function createTableWithoutInputCheck(start, end) {
    var result1='';
    for(let i = start; i < end + 1; i++){
        for(let j = start; j <= i; j++){
            result1+=j + "*" + i + "=" + i * j+' ';
        }
        result1=result1.substring(0,result1.length-1)+ "\r\n";
    }
    return result1.substring(0,result1.lastIndexOf('\r\n'));
}


module.exports = createMultiplyTable;