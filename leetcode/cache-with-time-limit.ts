// Не готово

interface ITimeLimitedCache {
    cache: { value: number, duration: number, expiresAt: number } | {}
    set(key: number, value: number, duration: number): boolean
    get(key: number): number
    count(): number
}


class TimeLimitedCache implements ITimeLimitedCache {
    cache: { value: number; duration: number; expiresAt: number } | {}

    constructor() {
        this.cache = {}
    }

    set(key: number, value: number, duration: number): boolean {
        const now = new Date().getTime()
        const isAlreadyExist = this.cache.hasOwnProperty(key)
        const isExpired = isAlreadyExist && this.cache[key].expiresAt > now

        this.cache[key] = {
            value,
            duration,
            expiresAt: duration + now
        }

        return isAlreadyExist && !isExpired
    }

    get(key: number): number {
        const now = new Date().getTime()
        const isAlreadyExist = this.cache.hasOwnProperty(key)
        const isExpired = isAlreadyExist && this.cache[key].expiresAt > now

        console.log(isAlreadyExist, isExpired)

        return isAlreadyExist && !isExpired ? this.cache[key].value : -1
    }

    count(): number {
        return 1337
    }
}