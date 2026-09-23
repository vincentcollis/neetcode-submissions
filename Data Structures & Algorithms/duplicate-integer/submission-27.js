class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const bucket = {}
        let output = false
        // iterate over nums
        for(let i=0; i< nums.length; i++){
            // place each number in a bucket keyed on itself
            if(bucket[nums[i]]){
                bucket[nums[i]]++
            } else {
                bucket[nums[i]] = 1
            }
            // console.log(bucket)
        }
        // check if any of the bucket obj values are greater than 1
        Object.entries(bucket).forEach(([key,val])=>{
            console.log(key)
            // console.log(val)
            if(val > 1) output = true
        })

        return output
    }
}
