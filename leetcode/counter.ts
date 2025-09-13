// https://leetcode.com/problems/counter/description/

const createCounter = (n: number): () => number => {
    return () => n++
};