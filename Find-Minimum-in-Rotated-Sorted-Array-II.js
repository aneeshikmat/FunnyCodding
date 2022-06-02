/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor(right / 2);
    let min1 = nums[0];
    let min2 = nums[0];
    
    while(mid > 0){
      let tempMin1 = biSearch(nums, mid, right);
      let tempMin2 = biSearch(nums, left, mid);
        
      min1 = tempMin1 > min1 ? min1 : tempMin1;
      min2 = tempMin2 > min2 ? min2 : tempMin2;
      mid = Math.floor(mid / 2);
    }
    return min1 > min2 ? min2 : min1;
};

function biSearch(nums, left, right) {
    let mid = 0;
    let min = nums[left];
    
    while(left + 1 < right){
        mid = left + Math.floor((right - left) / 2);

        if(nums[mid] >= min){
            left = mid;
        }else {
            right = mid;
        }

        min = nums[mid] > min ? min : nums[mid];
    }

    if(nums[left] < min){
        min = nums[left];
    }
    
    if(nums[right] < min){
        min = nums[right];
    }
    
    return min;
}
