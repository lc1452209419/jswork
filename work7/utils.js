//
function bubbleSort(str){
    let arr = str.split(',')
    for(let i = 0;i < arr.lenth-1;i++){
    for(let j = 0;j < arr.lenth-i-1;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
}
    }
}
return arr
}
function insertSort(str){
    let arr = str.split(',')
    for(let i = 1;i < arr.lenth;i++){
        for(let j = i;j > 0;j--){
            if(srr[j - 1] > arr[j]){
                [arr[j - 1],arr[j]] = [arr[j],arr[j - 1]]
            }
        }
    }
    return arr
}