// https://leetcode.com/problems/group-by/description/

interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function (fn) {
    const result = {}

    for (let i = 0; i < this.length; i++) {
        const fnRes = String(fn(this[i]))

        if(result.hasOwnProperty(fnRes)) {
            result[fnRes].push(this[i])
        } else {
            result[fnRes] = [this[i]]
        }

    }

    return result
}