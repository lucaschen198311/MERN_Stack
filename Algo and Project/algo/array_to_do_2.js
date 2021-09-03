/*
Reverse
*/

function reverseArray(arr){
    if(!arr || arr.length<2) return arr;
    let point1=0;
    let point2 = arr.length-1;
    while(point1<point2){
        [arr[point1], arr[point2]] = [arr[point2], arr[point1]];
        point1++;
        point2--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]))

/*
Rotate
*/

function rightRotateArray(arr, shiftBy){
    if(!arr || arr.length<2 || shiftBy % arr.length==0) return arr;
    let shift = shiftBy % arr.length;
    let stack=[];
    for(let i=0;i<shift;i++){
        stack[i]=arr[arr.length-shift+i];
    }
    for(let i=arr.length-shift-1;i>=0;i--){
        arr[i+shift] = arr[i]; 
    }
    for(let i=0; i<stack.length;i++){
        arr[i]= stack[i];
    }
    return arr;
}
console.log(rightRotateArray([1,2,3], 5));


function leftRotateArray(arr, shiftBy){
    if(!arr || arr.length<2 || shiftBy % arr.length==0) return arr;
    let shift = shiftBy % arr.length;
    let stack=[];
    for(let i=0;i<shift;i++){
        stack[i]=arr[i];
    }
    for(let i=shift;i<arr.length;i++){
        arr[i-shift] = arr[i]; 
    }
    for(let i=0; i<stack.length;i++){
        arr[arr.length-shift+i]= stack[i];
    }
    return arr;
}
console.log(leftRotateArray([1,2,3,4,5,6], 5));

/*
Filter Range
*/

function filterRangeArray(arr, min, max){
    if(!arr || arr.length<1 || min>max) return arr;
    let stack=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=min && arr[i]<=max){
            stack[stack.length] = arr[i];
        }
    }
    return stack;
}
console.log(filterRangeArray([1,2,4,4,5], 1, 3))

/*
Concat
*/

function concatArray(arr1,arr2){
    if(!arr1 || !arr2) return;
    if(arr1.length==0) return arr2;
    if(arr2.length==0) return arr1;
    for(let i=0;i<arr2.length;i++){
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}

console.log(concatArray([3,4],[1,2]))