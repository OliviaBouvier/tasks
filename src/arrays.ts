/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    const bookEnd = [numbers[0], numbers[numbers.length - 1]];
    return bookEnd;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toNumbers = (num: string): number => {
        if (Number.isNaN(Number(num))) {
            num = "0";
            return Number(num);
        }
        return Number(num);
    };
    const integers = numbers.map(toNumbers);
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const prices = amounts.map((price) => {
        const new_string = price.replace(/^\$/, "");
        const num = parseInt(new_string);
        return isNaN(num) ? 0 : num;
    });
    return prices;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter((message: string): boolean => {
        return message[message.length - 1] !== "?";
    });
    const exclamations = noQuestions.map((message: string): string => {
        return String(
            message[message.length - 1] === "!" ?
                message.toUpperCase()
            :   message,
        );
    });
    return exclamations;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => {
        return word.length < 4;
    });
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const filtered = colors.filter((color: string): boolean => {
        return color === "red" || color === "blue" || color === "green";
    });
    if (filtered.length === colors.length) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((currentTotal: number, num: number): number => {
        return currentTotal + num;
    }, 0);
    let expression = addends.join("+");
    if (addends.length === 0) {
        expression = "0";
    }
    let equation = `${sum}=${expression}`;
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let index = values.findIndex((num: number): boolean => {
        return num < 0;
    });
    if (index === -1) {
        let sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0,
        );
        const newArr = [...values, sum];
        return newArr;
    }
    let copy = [...values];
    let removed = copy.splice(index, values.length - index);
    let sum = copy.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    copy = [...values];
    removed = copy.splice(index + 1, 0, sum);
    removed;
    return copy;
}
