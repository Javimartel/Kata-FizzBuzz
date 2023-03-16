export const fizzbuzz = () => {
    const array = Array.from(Array(100).keys()).map((num) => num + 1);
    const fizzbuzzResult: (string|number)[] = array.map((num) => whoFizzBuzzElementIs(num));
    return fizzbuzzResult;
};

export const whoFizzBuzzElementIs = (num: number) => {
    const numberStringify = num.toString();
    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;

    let fizzbuzz = "";

    if (isDivisibleBy3) {
        fizzbuzz += "fizz";
    }
    if (numberStringify.includes("3")) {
        fizzbuzz += "fizz";
    }
    if (isDivisibleBy5) {
        fizzbuzz += "buzz";
    }
    if (numberStringify.includes("5")) {
        fizzbuzz += "buzz";
    }

    return fizzbuzz === "" ? num : fizzbuzz;
};
