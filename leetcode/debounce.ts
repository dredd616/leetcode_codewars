// https://leetcode.com/problems/debounce/description/

const debounce = <T extends unknown[]>(fn: (...args: T) => void, t: number) => {
    let timer: ReturnType<typeof setTimeout>

    return (...args: T): void => {
        clearTimeout(timer)

        timer = setTimeout(() => fn(...args), t)

    }
};