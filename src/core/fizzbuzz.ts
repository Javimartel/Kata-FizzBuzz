export const fizzbuzz = () => {
    const array = [1, 2, 3, 4, 5];
    return array.map((num) => {
        if (num % 3 === 0) {
            return "fizz";
        }
        return num;
    });
};