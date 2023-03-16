export const fizzbuzz = () => {
    const array = [1, 2, 3, 4, 5];
    const fizzbuzzResult: (string|number)[] = array.map((num) => {
        if (num % 3 === 0) {
            return "fizz";
        } else if (num % 5 === 0) {
            return "buzz";
        }
        return num;
    });
    return fizzbuzzResult;
};