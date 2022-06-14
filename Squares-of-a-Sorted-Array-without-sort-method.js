/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {   
    let newArray = [];
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = right; i >= 0; i--){
        const numLeft = Math.abs(nums[left]);
        const numRight = Math.abs(nums[right]);
        
        if(numLeft > numRight){
            newArray[i] = numLeft * numLeft; 
            left++;
        }else {
            newArray[i] = numRight * numRight; 
            right--;
        }
    }
    
    return newArray;
};
