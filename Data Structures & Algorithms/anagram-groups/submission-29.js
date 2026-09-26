class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // iterate over the array
        // look at current element and sort it
        // save sorted element as a key in an object
            // save the index into a array

        const bucket =  {}

        for(let i = 0; i < strs.length; i++){
            let sorted = strs[i].split('').sort().join('')
            if(bucket[sorted]){
                bucket[sorted].push(i)
            } else {
                bucket[sorted] = [i]
            }
        }

        // iterate over the new object
        // push an array of strings containing the strings from strs based on the index contained\

        let output = []
        for(const [key,value] of Object.entries(bucket)){
            let temp = []
            value.forEach((index)=> temp.push(strs[index]))
            output.push(temp)
        }

        return output

        
    }
}
