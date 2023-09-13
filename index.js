let a,b;

function add(a,b){
    return a + b;

}
function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function increment(a){
    a= a + 1;
    return a++;   
}

function decrement(a){
    a=a-1
    return a--;
}

function makeInt(n){
    return parseInt(n,10)
  }
function preserveDecimal(n){
    return parseFloat(n)
  }