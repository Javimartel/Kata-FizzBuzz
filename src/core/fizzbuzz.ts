export const fizzbuzz = () => {
    const array = Array.from(Array(100).keys()).map((num) => num + 1);
    const fizzbuzzResult: (string|number)[] = array.map((num) => whoFizzBuzzElementIs(num));
    return fizzbuzzResult;
};

export const whoFizzBuzzElementIs = (num: number) => {
    const numberStringify = num.toString();
    if (num % 15 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0 || numberStringify.includes("3")) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    }
    return num;
};
