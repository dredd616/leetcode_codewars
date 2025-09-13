// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6

const assembleString = (arr: string[]): string => {
    if (!arr.length) return ''

    const res = Array(arr[0].length).fill('*');

    for (let str of arr) {
        for (let i = 0; i < str.length; i++) {
            if (res[i] === '*' && str[i] !== '*') {
                res[i] = str[i];
            }
        }
    }

    return res.map(ch => ch === '*' ? '#' : ch).join('');
};