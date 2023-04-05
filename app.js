// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to euros
    let valueInEuro = valueInDollar / 1.2;
    // convert the valueInEuro to yens
    let valueInYens = valueInEuro * 127.9;
    //return the dollar value
    return valueInYens;
}


// Function to convert from yen to pounds
const fromYenToPound = function(valueInYens){
    // convert the given valueInYens to euros
    let valueInEuros = valueInYens / 127.9;

    // convert the given valueInEuros to pounds
    let valueInPounds = valueInEuros * 0.8;

    //return the pounds value
    return valueInPounds;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }

module.exports = { sum, fromDollarToYen }

module.exports = { sum, fromYenToPound }

console.log(fromYenToPound(3.5))

https://github.com/HusseinSerhan/Javascript-s-Jest-Framework.git