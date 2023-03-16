export const fizzbuzz = () => {
    const array = [1, 2, 3];
    const fizzbuzzResult: (string|number)[] = array.map((num) => {
        if (num % 3 === 0) {
            return "fizz";
        }
        return num;
    });
    return fizzbuzzResult;
};