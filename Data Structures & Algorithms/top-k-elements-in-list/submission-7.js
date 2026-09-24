class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = {}
        let output = []
        
        // iterate over nums
        // count the number of times an interger shows up by counting 
        // it into a bucket keyed on the integer
        nums.forEach((val)=>{
            if(bucket[val]){
                bucket[val]++
            } else {
                bucket[val] = 1
            }
        })


        // Sort the bucket from greatest to least
        let bucketSorted = Object.entries(bucket).sort(([keyA,valA],[keyB,valB])=> valB - valA)
        
        // put top k  keys into an array and return
        for(let i = 0; i < k; i++){
            // console.log(bucketSorted[i])
            output.push(bucketSorted[i][0])
            // console.log(output)
        }

        return output
    }
}
