// https://www.codewars.com/kata/53697be005f803751e0015aa

const vowelsToNumbersMap = new Map([
    ['a', 1],
    ['e', 2],
    ['i', 3],
    ['o', 4],
    ['u', 5],
]);

const numberToVowelsMap = new Map(
    [...vowelsToNumbersMap.entries()].map(([key, value]) => [value, key])
);

function encode(string: string): string {
    const result: (string | number)[] = [];

    for (const s of string) {
        if (vowelsToNumbersMap.has(s)) {
            result.push(vowelsToNumbersMap.get(s)!);
        } else {
            result.push(s);
        }
    }

    return result.join('');
}

function decode(string: string): string {
    const result: string[] = [];

    for (const char of string) {
        const num = Number(char);
        if (!isNaN(num) && numberToVowelsMap.has(num)) {
            result.push(numberToVowelsMap.get(num)!);
        } else {
            result.push(char);
        }
    }

    return result.join('');
}
