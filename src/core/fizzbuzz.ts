export const fizzbuzz = () => {
    const array = Array.from(Array(100).keys()).map((num) => num + 1);
    const fizzbuzzResult: (string|number)[] = array.map((num) => whoFizzBuzzElementIs(num));
    return fizzbuzzResult;
};

const whoFizzBuzzElementIs = (num: number) => {
    if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    }
    return num;
};
