module.exports = {
    //param A : array of array of integers
    //return an integer
    findMedian : function(A){
        const binarySearch = function (getN, l, r, condition) {
            const m = Math.trunc((r - l)/2) + l;
            if (r - l === 1) {
                const tm = condition(getN(l));
                if (tm === 0) {
                    return l;
                }
                if (tm === 1 && condition(getN(r)) === 0) {
                    return r;
                }
                return -1;
            }
            const t = condition(getN(m));
            if (t === 0) {
                return m;
            }
            if (l === r) {
                return -1;
            }
            if (t < 0) {
                return binarySearch(getN, l, m, condition);
            }
            return binarySearch(getN, m, r, condition);
        };
        // return binarySearch((n) => A[n], 0, 4, (n) => {
        //     const a = 9;
        //     const r = n === a? 0: n < a? 1: -1;
        //     return r;
        // });
        let amin = 0;
        let amax = 0;
        let count = 0;
        for (let i = 0; i < A.length; i++) {
            let el = A[i][0];
            if (el < amin) {
                amin = el;
            }
            el = A[i][A[0].length - 1];
            if (el > amax) {
                amax = el;
            }
        };
        for (let j = 0; j < A.length; j++) {
            count++;
        }
        console.log(amin, amax);
        binarySearch((n) => n, amin, amax, (n) => {
            
        })
    }
};

// console.log(module.exports.findMedian(
//     [1, 3, 5, 7, 9]));

console.log(module.exports.findMedian(
    [[1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]]));

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