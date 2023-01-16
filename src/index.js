module.exports = function toReadable(number) {
    let result = "";

    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const dozens = [
        "0",
        "1",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let array = ("" + number).split("").map(Number);
    console.log(array.length);

    return (result =
        array.length === 1
            ? numbers[array[0]]
            : array.length === 2 && array[0] < 2
            ? numbers[10 + array[1]]
            : array.length === 2 && array[0] >= 2
            ? `${dozens[array[0]]} ${array[1] === 0 ? "" : numbers[array[1]]}`
            : array.length === 3 && array[1] < 2
            ? `${numbers[array[0]]} hundred ${
                  array[1] === 0
                      ? array[2] === 0
                          ? ``
                          : numbers[array[2]]
                      : numbers[10 + array[2]]
              }`
            : `${numbers[array[0]]} hundred ${dozens[array[1]]} ${
                  array[2] === 0 ? "" : numbers[array[2]]
              }`).trim();
};
