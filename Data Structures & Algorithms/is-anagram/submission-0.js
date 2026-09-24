class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let mapS = new Map();
        let mapT = new Map();
        for(let c of s){
            mapS.set(c, ((mapS.get(c) ?? 0)+1))
        }
        for(let c of t){
            mapT.set(c, ((mapT.get(c) ?? 0)+1))
        }
        for(let i = 0; i<s.length; i++){
            if(
                mapS.get(s[i]) !== mapT.get(s[i])
            ) return false
        }
        return true
    }
}
