/*
Recursive Sigma
Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
*/

function rSigma(num){
    if(num<=0){
        return 0;
    }
    let n = Math.floor(num);
    return n + rSigma(n-1);
}

console.log(rSigma(3.6))

/*
Recursive Factorial
Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
*/

function rFactorial(num){
    if(num<0){
        return 0;
    }
    let n = Math.floor(num);
    if(n==0 || n==1){
        return 1;
    }else{
        return n*rFactorial(n-1);
    }
}

console.log(rFactorial(6.7))


/*
Flood Fill
Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image 
with a certain color. We change the image as if we painted a canvas: a two-dimensional array of 
integers, where each integer represents a color for that pixel. 
The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array 
is a row in our image, with a length equal to our canvas’ X dimension. 
You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), 
and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! 
Replace a pixel’s color value only if it is the same color as the origin coordinate 
and is directly adjacent via X or Y to another pixel you will change. 
*/
/*
function floodFill(arr, startXY){
    const [x, y] = startXY;
    const value = arr[x][y];
    const n = arr.length; //height of 2-D array
    const m = arr[0].length //width of 2-D array
    function rflood(arr, startXY, value){
        let [x, y] = startXY;
        if(x<0 || x>m-1 || y<0 || y>n-1){
            return;
        }
        if(arr[x+1][y]!==undefined && arr[x+1][y]==value){
            arr[x+1][y] = 1;
            rflood(arr, [x+1, y], value);
        }
        if(arr[x-1][y]!==undefined && arr[x-1][y]==value){
            arr[x-1][y] = 1;
            rflood(arr, [x-1, y], value);
        }
        if(arr[x][y+1]!==undefined && arr[x][y+1]==value){
            arr[x][y+1] = 1;
            rflood(arr, [x, y+1], value);
        }
        if(arr[x][y-1]!==undefined && arr[x][y-1]==value){
            arr[x][y-1] = 1;
            rflood(arr, [x, y-1], value);
        }
        return arr;
    }
    
    rflood(arr, startXY, value);
}

const arr = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
]

console.log(floodFill(arr, [2,2]));
*/