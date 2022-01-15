module.exports = {
    //param A : array of array of integers
    //return an integer
    findMedian : function(A){
        const binarySearch = function (A, l, r, tryMatch) {
            const m = Math.trunc((r - l)/2) + l;
            if (r - l === 1) {
                const tm = tryMatch(A[l]);
                if (tm === 0) {
                    return A[l];
                }
                if (tm === 1 && tryMatch(A[r]) === 0) {
                    return A[r];
                }
                return -1;
            }
            const t = tryMatch(A[m]);
            if (t === 0) {
                return A[m];
            }
            if (l === r) {
                return -1;
            }
            if (t < 0) {
                return binarySearch(A, l, m, tryMatch);
            }
            return binarySearch(A, m, r, tryMatch);
        };
        return binarySearch(A, 0, 4, (n) => {
            const a = 9;
            const r = n === a? 0: n < a? 1: -1;
            return r;
        });
    }
};

console.log(module.exports.findMedian(
    [1, 3, 5, 7, 9]));

// console.log(module.exports.findMedian(
//     [[1, 3, 5],
//     [2, 6, 9],
//     [3, 6, 9]]));

// 44 55 12 42 94 18 06 67
//          --          --
// 44 55 12 67 94 18 06 42
// 	    --       -- --
// 44 55 18 67 94 12 06 42
//    --    -- --
// 44 94 18 67 55 12 06 42
// -- -- --
// 94 44 18 67 55 12 06 42


// 44 18 67 55 12 06 42|94
// 	    --       -- --
//    --    -- --
// 44 55 67 18 12 06 42|94
// -- -- --
// 67 55 44 18 12 06 42|94

// 55 44 18 12 06 42|94 67
// 	    --       -- --
// 55 44 42 12 06 18|94 67
//    --    -- --
// -- -- --
// 44 42 12 06 18|94 67 55
//    --    -- --
// -- -- --
// 42 12 06 18|94 67 55 44
//    --    -- --
// 42 18 06 12|94 67 55 44
// -- -- --
// 42 18 06 12|94 67 55 44
// 18 06 12|94 67 55 44 42
// 06 12|94 67 55 44 42 18
// -- -- --
// 12 06|94 67 55 44 42 18
// 94 67 55 44 42 18 12 06



// 94|67 18 44 55 12 06 42
//    --    -- --
// 94 67|18 44 55 12 06 42



// 94 67 18 44 55 12 06 42
// -- -- --
//    --    -- --
//       --       -- --
//          --          --