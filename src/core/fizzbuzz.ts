export const fizzbuzz = () => {
    const array = Array.from(Array(100).keys()).map((num) => num + 1);
    const fizzbuzzResult: (string|number)[] = array.map((num) => whoFizzBuzzElementIs(num));
    return fizzbuzzResult;
};

export const whoFizzBuzzElementIs = (num: number) => {
    const numberStringify = num.toString();
    let fizzbuzz = "";
    if (num % 3 === 0 ) {
        fizzbuzz += "fizz";
    }
    if (numberStringify.includes("3")) {
        fizzbuzz += "fizz";
    }
    if (num % 5 === 0) {
        fizzbuzz += "buzz";
    }
    if (numberStringify.includes("5")) {
        fizzbuzz += "buzz";
    }
    return fizzbuzz === "" ? num : fizzbuzz;
};
