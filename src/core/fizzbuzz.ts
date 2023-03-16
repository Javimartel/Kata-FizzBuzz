export const fizzbuzz = () => {
    const array = [1, 2, 3];
    return array.map((num) => {
        if (num % 3 === 0) {
            return "fizz";
        }
        return num;
    });
};