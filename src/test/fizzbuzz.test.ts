import { fizzbuzz } from "../core/fizzbuzz";
import { whoFizzBuzzElementIs } from "../core/fizzbuzz";

describe('Fizzbuzz Test', () => {
    it("check that number 3 returns fizz", () => {
        const fizzbuzzResult = fizzbuzz();
        const fizz = fizzbuzzResult.find((num, pos) => num === "fizz" && (pos + 1) % 3 === 0) 
        expect(fizz).toBe("fizz");
    })

    it("check that number 5 returns buzz", () => {
        const fizzbuzzResult = fizzbuzz();
        const buzz = fizzbuzzResult.find((num, pos) => num === "buzz" && (pos + 1) % 5 === 0)
        expect(buzz).toBe("buzz");
    })

    it("check that fizzbuzz returns 100 elements", () => {
        const fizzbuzzResult = fizzbuzz();
        expect(fizzbuzzResult.length).toBe(100);
    })

    it("check that multiples of 3 and 5 returns fizzbuzz", () => {
        const fizzbuzzResult = fizzbuzz();
        const fb = fizzbuzzResult.find((num, pos) => num === "fizzbuzz" && (pos + 1) % 15 === 0)
        expect(fb).toBe("fizzbuzz");
    })

    it("check that a number is fizz if it is divisible by 3 or if it has a 3 in it",() => {
        expect(whoFizzBuzzElementIs(13)).toBe("fizz");
    })  
    
    it("check that a number is buzz if it is divisible by 5 or if it has a 5 in it",() => {
        expect(whoFizzBuzzElementIs(52)).toBe("buzz");
    })  

    it("check that a number is fizzbuzz if it contains 3 and 5",() => {
        expect(whoFizzBuzzElementIs(53)).toBe("fizzbuzz");
    })

    it("check that a number is fizzbuzzbuzz if it contains 3 and 5 and is divisible by 5",() => {
        expect(whoFizzBuzzElementIs(35)).toBe("fizzbuzzbuzz");
    })

    it("check that a number is fizzfizz if it contains 3 and 3 and is divisible by 3",() => {
        expect(whoFizzBuzzElementIs(33)).toBe("fizzfizz");
    })
});