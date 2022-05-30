/*
Median of Two Sorted Arrays
Sample test:
[]
[1,2,3,4,5]
[]
[1,2,3,4,5]
[1,3]
[2]
[1,3]
[2, 3, 4]
[1,2,3,6,7,8]
[4,5,9,10]

Expected Output
3.00000
3.00000
2.00000
3.00000
5.50000
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    
    if(nums1.length < nums2.length){
        [nums1, nums2] = [nums2, nums1];
    }

    const length1 = nums1.length;
    const length2 = nums2.length;
        
    let left = 0;
    let right = length1;
    const midMergedNumber = Math.floor((totalLength + 1) / 2);
    
    while (left <= right){
        const leftNum1Size = left + Math.floor((right - left) / 2);
        let leftNum2Size = midMergedNumber - leftNum1Size;
        
        let leftNum1 = leftNum1Size > 0 ? nums1[leftNum1Size - 1] : -Infinity;
        let leftNum2 = leftNum2Size > 0 ? nums2[leftNum2Size - 1] :  -Infinity;
        let rightNum1 = leftNum1Size < length1 ? nums1[leftNum1Size] : Infinity;
        let rightNum2 = leftNum2Size < length2 ? (nums2[leftNum2Size] || -Infinity) : Infinity;

        if (leftNum1 <= rightNum2 && leftNum2 <= rightNum1) {
            if (totalLength % 2 === 0){
                return (Math.max(leftNum1, leftNum2) + Math.min(rightNum1, rightNum2)) / 2;
            }
            
            return Math.max(leftNum1, leftNum2);
        } else if (leftNum1 > rightNum2) {
            right = leftNum1Size - 1;
        } else {
            left = leftNum1Size + 1;
        }
    }
    
        
    return 0;
};
