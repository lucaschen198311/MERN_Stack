//Calculating prime numbers
function isPrime(num) {
    for (let i = 2; i * i <= num; i++){
        if (num % i === 0){
            return false; 
        }
    }
    return num > 1;
}


let primeCount = 0;
let num = 2;
while( primeCount < 1e4 ) {
    if( isPrime(num) ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);

//Fibonacci

// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    console.log(rFib(20));
    // iterative
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    console.log(iFib(20));

//Reverse a string

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

const reverseString = function(str){
    let reverseStr = '';
    for(let i=str.length-1; i>=0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

const reversed2 = reverseString(story);
console.log(reversed2);
console.log(reversed1==reversed2);