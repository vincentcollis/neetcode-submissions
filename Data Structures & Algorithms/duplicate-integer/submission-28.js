class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set()
        // iterate over the array
        for(let i = 0; i< nums.length; i++){
            // check to see if the current element is in the set
            if(set.has(nums[i])) return true
            
            set.add(nums[i])
        }
        
        return false
    }
}
