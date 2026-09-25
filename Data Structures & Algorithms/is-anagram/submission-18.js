class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // sort both strings
        let sSorted = s.split('').sort().join('')
        let tSorted = t.split('').sort().join('')

        // compare strings to each other
        if(sSorted == tSorted){
            return true
        }
        return false

    }
}
