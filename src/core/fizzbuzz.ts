export const fizzbuzz = () => {
    const array = [1, 2, 3, 4, 5];
    return array.map((num) => whoFizzBuzzElementIs(num));
};

const whoFizzBuzzElementIs = (num: number) => {
    if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    }
    return num;
};
