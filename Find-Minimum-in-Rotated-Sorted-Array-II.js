/*
Sample test:
[1,3,5]
[1,3,5]
[2,2,2,0,1]
[2,2,2, 3, 4, 5, 6, 6, 6, 6 ,6, 6, 7, 1]
[6, 7, 8, 8, 8, 9, 10, 10, 4, 5]
[55, 55, 65, 65, 65, 66, 67, 44, 45, 46, 47, 47, 47, 47, 48, 48, 49]
[10,10,10,1,10]
[1,3,3]
[10,1,10,10,10]
[3, 3, 1, 3, 3, 3, 3, 3, 3, 3]
[3, 3, 3, 3, 3, 3, 3, 3, 1, 3]
[3,3,1]
[3,3,3, 3, 3, 3, 3, 3, 3, 1, 2]
[0, 2, 3]
[4, 5, 6, 7, 7, 7, 7, 7, 7, 0, 1]

Expected result:
1
1
0
1
4
44
1
1
1
1
1
1
1
0
0
*/

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
