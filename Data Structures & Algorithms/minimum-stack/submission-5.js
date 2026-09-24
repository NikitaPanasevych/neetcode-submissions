class MinStack {
    constructor() {
        this.stack = [];
        this.prevMinValsArray = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length !== 0) {
            if (this.minVal >= val) {
                this.minVal = val;
                this.prevMinValsArray.push(this.minVal);
            }
        } else {
            this.minVal = val;
            this.prevMinValsArray.push(this.minVal);
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        if (
            this.prevMinValsArray[this.prevMinValsArray.length - 1] ===
            this.stack[this.stack.length - 1]
        ) {
            this.prevMinValsArray.pop();
        }

        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.prevMinValsArray[this.prevMinValsArray.length - 1];
    }
}
