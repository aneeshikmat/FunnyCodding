/* 
Sample Test:
8.95371
-1
2.00000
10
2.00000
-2
2.10000
3
2.10000
5
0.00001
2147483647
1.84364
-14
8.84372
-5

Expected Result:
0.11169
1024.00000
0.25000
9.26100
40.84101
0.00000
0.00019
0.00002
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let powerLength = Math.abs(n);
    let left = 0;
    let right = powerLength;
    let mid = 0;
    let powNum = 1;
    let powNum2 = 1;
    let leftCounter = 0;
    let rightCounter = 0;
    
    if(n === 0){
        return 1;
    }else if(n === 1){
        return x;
    }else if(x === -1){
        return n < 0 ? -x : x;
    }else if(x === 1 || x === 0){
        return x;
    }
    
    while(powerLength > mid && leftCounter < powerLength){
        mid = left + Math.floor((right - left) / 2);

        powNum = powNum * x;
        left = mid + 1;
        
        leftCounter++;
    }
     
    const clonePowNum = powNum;
    let cloneLeftCounter = leftCounter;
    let reminder = (Math.abs(n / leftCounter) - 1);
    let realNumberForReminder = reminder | 0;
    let prevPow = powNum;

    while (realNumberForReminder > 0){
        powNum *= clonePowNum;
        realNumberForReminder--;
        leftCounter += cloneLeftCounter;
                
        if(prevPow === powNum){
            break;    
        }
        
        prevPow = powNum;
    }
    
    while(reminder % 1 > 0 && leftCounter !== Infinity){     
        powNum *= x;
        reminder = (Math.abs(n / ++leftCounter) - 1);
        
        if(prevPow === powNum){
            break;    
        }
        
        prevPow = powNum;
    }

    return n > 0 ? powNum : 1 / powNum;
};
