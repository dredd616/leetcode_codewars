// https://leetcode.com/problems/promise-time-limit/description/

const timeLimit = <T extends unknown[], R>(fn: (...args: T) => Promise<R>, t: number) => {
      return async (...args: T): Promise<R> => {
        const timerPromise = new Promise<never>((_, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'), t)
        })

        return Promise.race([timerPromise, fn(...args)])
    }
};