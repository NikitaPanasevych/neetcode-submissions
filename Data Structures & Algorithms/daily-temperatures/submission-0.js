class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let l = temperatures.length;
        let decrIndexStack = [];
        let result = new Array(l).fill(0);
        for (let i = 0; i < l; i++) {
            while (
                decrIndexStack.length > 0 &&
                temperatures[i] > temperatures[decrIndexStack[decrIndexStack.length - 1]]
            ) {
                let poppedIndex = decrIndexStack.pop();
                let daysWaited = i - poppedIndex;
                result[poppedIndex] = daysWaited;
            }
            decrIndexStack.push(i);
        }
        return result
    }
}
