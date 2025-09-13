// https://leetcode.com/problems/sleep/description/

const  sleep = async (millis: number): Promise<unknown> => {
    return new Promise(resolve => setTimeout(resolve, millis));
}