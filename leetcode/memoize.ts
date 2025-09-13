// https://leetcode.com/problems/memoize/description/

// @ts-ignore
type Fn = (...params: number[]) => number

const memoize = (fn: Fn): Fn => {
    const cache = {}
    
    return (...args) => {
        const argsHash = JSON.stringify([...args].sort())
        
        if(cache.hasOwnProperty(argsHash)) {
            return cache[argsHash]
        }

        const fnRes = fn(...args)

        cache[argsHash] = fnRes

        return fnRes
    }
}