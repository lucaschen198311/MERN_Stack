const swap = function(arr, left, right){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const partition = function(arr, left, right){
    let midIdx = Math.floor((left + right)/2);
    let pivot = arr[midIdx];
    while(left <= right){
        while(arr[left] < pivot){
            left++;
        }
        while(arr[right] > pivot){
            right--;
        }
        if(left <= right){
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

const quickSort = function(arr, left, right){
    if(arr.length>1){
        let index = partition(arr, left, right);
        if(index < right){
            quickSort(arr, index, right);
        }
        if(left < index -1){
            quickSort(arr, left, index-1);
        }
    }
    return arr;
}

const numArr = [5,3,7,6,2,9];

console.log(quickSort(numArr, 0, numArr.length-1));