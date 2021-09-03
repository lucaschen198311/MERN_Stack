//Arrays To Do 1

/*
Push Front
Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
*/

function insertFrontArray(val,arr){
    if(!arr) return;
    if(arr.length==0){
        arr[0]=val;
        return arr;
    }
    for(let i=arr.length-1;i>=0;i--){
        arr[i+1] = arr[i];
    }
    arr[0] = val;
    return arr;
}

console.log(insertFrontArray(3,[1,2,3,4,5]))

/*
Pop Front
Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
*/

function removeFrontArray(arr){
    if(!arr || arr.length<1) return arr;
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    //arr[arr.length-1] = null;
    return arr;
}

console.log(removeFrontArray([1,2,3]))

/*
Insert At
Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
*/

function InsertAtArray(val, index, arr){
    if(!arr || index<0) return;
    if(index>=arr.length) {
        arr[index] = val;
        return arr;
    }
    for(let i=arr.length-1;i>=index;i--){
        arr[i+1] = arr[i];
    }
    arr[index] = val;
    return arr;
}
console.log(InsertAtArray(8, 1, [1,2,3]))

/*
Remove At (Bonus Challenge)
Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
*/

function removeAtArray(index, arr){
    if(!arr || index<0 || index>=arr.length) return;
    let removeVal = arr[index];
    for(let i=index;i<arr.length;i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    console.log(arr)
    return removeVal;
}
console.log(removeAtArray(4, [1,2,3,4,5]));
/*
Swap Pairs (Bonus Challenge)
Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
*/

function swapPairsArray(arr){
    if(!arr || arr.length<2) return arr;
    for(let i=0;i<=arr.length-2;i+=2){
        //if(i+1>arr.length) break;
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
    return arr;
}
console.log(swapPairsArray([1,2,3,4,5]));
/*
Remove Duplicates (Bonus Challenge)
Sara is looking to hire an awesome web developer and has received applications from various sources. 
Her assistant alphabetized them but noticed some duplicates. 
Given a sorted array, remove duplicate values. 
Because array elements are already in order, all duplicate values will be grouped together. 
As with all these array challenges, do this without using any built-in array methods.
Second: Solve this without using any nested loops.
*/

function removeDuplicateArray(arr){
    if(!arr || arr.length<2) return arr;
    let stack = [];
    stack[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==stack[stack.length-1]){
            stack[stack.length] = arr[i];
        }
    }
    return stack;
}
console.log(removeDuplicateArray([1,2,3,3,3,4,4,5]))