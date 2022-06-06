/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let left = 1;
    let right = nums.length - 1;
    let find = -1;
    
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);
        
        if(findSmallOrEqualCount(nums, mid) > mid){
            find = mid;
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    
    return find;
};

const findSmallOrEqualCount = (nums, curNumber) => {
    let count = 0;
    let index = 0;
    
    while(index < nums.length){
        if(nums[index] <= curNumber){
            count++;
        }
        
        index++;
    }
    
    return count;
};

// OR via this if its allowed to use hash
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let numsSet = {};
    let left = 1;
    let right = nums.length - 1;
    
    numsSet[nums[0]] = 0;
    
    while (left <= right){
        if(!numsSet.hasOwnProperty(nums[left])){
           numsSet[nums[left]] = left;
        }else if(numsSet[nums[right]] !== left) {
            return nums[left];
        }   
        
        if(!numsSet.hasOwnProperty(nums[right])){
           numsSet[nums[right]] = right;
        }else if(numsSet[nums[right]] !== right) {
            return nums[right];
        }
        
        left++;
        right--;
    }
    
    return 0;
};
