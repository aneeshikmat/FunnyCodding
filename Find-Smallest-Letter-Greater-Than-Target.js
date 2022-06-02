/*
Find Smallest Letter Greater Than Target

Test cases:
["c","f","j"]
"a"
["c","f","j"]
"c"
["c","f","j"]
"f"
["c","f","j"]
"d"
["c","f","j"]
"j"
["a", "b"]
"z"
["d", "x", "y", "z"]
"z"
["d", "x", "y", "z"]
"w"
["d", "x", "y", "z"]
"b"
["y", "z"]
"b"
["y", "z"]
"y"
["y", "z"]
"z"
["e","e","e","e","e","e","n","n","n","n"]
"n"

Accept Answer
"c"
"f"
"j"
"f"
"c"
"a"
"d"
"x"
"d"
"y"
"z"
"y"
"e"

Rules:
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.

*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const startCharWeight = 97;
    const targetWeight = target.charCodeAt(0);
    let left = 0;
    let right = letters.length;
    
    while(left < right){
        let mid = left + Math.floor((right - left) / 2);
                
        if(letters[mid].charCodeAt(0) > targetWeight){
            right = mid;
        }else {
            left = mid + 1;
        }
    }
        
    return (letters[left] ?? letters[0]);
};
