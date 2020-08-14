module.exports = { 
 //param A : array of integers
 //param B : integer
 //return a array of array of integers
    combinationSum : function(A, B){
        let min = A[0];
        for (let i = 0; i < A.length; i++)
        if (A[i] < min)
                min = A[i];
        
        let res = [];
        
        let cache = new Map();
        let combinations = function(count, sum){
            let cacheKey = count + '_' + sum;
            let c = cache.get(cacheKey);
            if (c != undefined)
                return c;

            let res = [];
            if (count == 1){
                for(let i = 0; i < A.length; i++)
                    if (A[i] == sum){
                        res = [[A[i]]];
                        break;
                    };
            } else
                for(let i = 0; i < A.length; i++){
                    let newSum = sum - A[i];
                    if (newSum <= 0)
                        continue;
                    let coms = combinations(count - 1, newSum);
                    if (coms == [])
                        continue;
                    for(let j = 0; j < coms.length; j++){
                        let n = coms[j].slice(0);
                        n.push(A[i]);
                        res.push(n.sort((a, b) => a - b));
                    }
                };

            cache.set(cacheKey, res)
            return res;
        };
        
        for(let i = 1; i <= B/min; i++){
            let coms = combinations(i, B)
            if (coms == [])
                continue;
            for(let j = 0; j < coms.length; j++){
                let cacheKey = coms[j].join();
                let v = cache.get(cacheKey);
                if (v != undefined)
                    continue;
                cache.set(cacheKey, 1);
                res.push(coms[j]);                
            }
        }
        return res.sort(function(a, b) {
                    for (let i = 0; i < a.length && i < b.length; i++){
                        if (a[i] == b[i]) {
                            continue;
                        };
                        return a[i] - b[i];
                    };
                    return a.length - b.length;
                });
    }
};