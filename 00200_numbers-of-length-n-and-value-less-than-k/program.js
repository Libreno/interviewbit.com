module.exports = { 
//param A : array of integers
//param B : integer
//param C : integer
//return an integer
    solve : function(A, B, C){
        if (A.length === 0) {
            return 0;
        }
        const fact = function(n){
            let res = 1;
            for(let i=2; i<=n; i++){
                res = res * i;
            };
            return res;
        };
        const AMap = A.reduce((acc, val) => {
            const oldVal = acc.get(val);
            if (!!oldVal){
                acc.set(val, oldVal + 1);
            } else {
                acc.set(val, 1);
            };
            return acc;
        }, new Map());
        const permCount = function (n, k) {
            // число сочетаний из len(A) по B с ведущим ненулевым элементом
            let repCount = 1;
            AMap.forEach(v => {
                if (v !== 0) {
                    repCount = repCount * fact(v);
                }
            });
            const zeroPermCount = k == 1
                ? 0
                : AMap.has(0)? AMap.get(0): 0;
            let res = Math.pow(n, k) - zeroPermCount * Math.pow(n, k - 1);
            // console.log('permCount ', n, k, res);
            return res;
        };
        const CLen = Math.trunc(Math.log10(C)) + 1;
        // console.log('numLenVal B, CLen: ', B, CLen);
        if (B > CLen) {
            return 0;
        }
        if (B < CLen) {
            const cnk = permCount(A.length, B);
            return cnk;
        }
        const permCountLess = (A, B, C) => {
            if (B === 1) {
                return A.reduce((acc, val) => {
                    if (val < C){
                        acc++;
                    }
                    return acc;
                }, 0);
            };
            let dp = [0];
            let ep = [1];
            let p = Math.log10(C);
            for (let i = 1; i <= CLen; i++) {
                const power = Math.pow(10, Math.trunc(p - i + 1));
                const CHigh = Math.trunc(C / power) % 10;
                // console.log('CHigh ', CHigh);
                const acc = A.reduce((acc, val) => {
                    if (val < CHigh){
                        if (i === 1 && val === 0) {
                            return acc;
                        }
                        acc.less++;
                    }
                    if (val === CHigh) {
                        acc.equal = 1;
                    }
                    return acc;
                }, {less: 0, equal: 0});
                dp[i] = dp[i - 1] * A.length + ep[i - 1] * acc.less;
                ep[i] = ep[i - 1] * acc.equal;
                // console.log(i, dp[i], ep[i]);
            }
            return dp[B];
        };
        return permCountLess(A, B, C);
    }
};

// console.log(numLenVal([1,2,3,4,5], 3, 255, true));
// console.log(module.exports.solve([0,1,2,3,4,5], 3, 255));
// console.log(module.exports.solve([], 2, 21));
// console.log(module.exports.solve([0,1,2,5], 2, 21));
// console.log(module.exports.solve([0,1,2,5], 3, 123));
// console.log(module.exports.solve([1,5,6,9], 2, 6346)); // 16 expected
// console.log(module.exports.solve([2, 3, 5, 6, 7, 9], 5, 42950));
// console.log(module.exports.solve([0], 1, 5));
//console.log(module.exports.solve([0,1,5], 1, 2));
//console.log(module.exports.solve([8, 0, 2, 3, 4, 5, 7, 8, 9], 5, 86587));

// console.log(module.exports.solve([0, 1, 3, 4, 6, 7], 4, 59172)); // 1080 expected

//console.log(module.exports.solve([6, 0, 1, 1, 2, 2, 5], 2, 21));

// console.log(module.exports.solve([2, 3, 5, 6, 7, 9], 5, 42950)); // 2592 expected

console.log(module.exports.solve([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], 5, 10004)); // 4 expected