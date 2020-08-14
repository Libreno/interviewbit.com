module.exports = { 
 //param A : integer
 //return a array of integers
    allFactors : function(A){
        let res = [];
        let sqrt = Math.sqrt(A);
        for (let i = 1; i <= sqrt; i++){
            if (A % i == 0)
                res.push(i);
        };
        if (A > 1){
            let ub = res.length - (res[res.length - 1] == sqrt? 2:  1);
            for (let i = ub; i > 0; i--){
                res.push(A / res[i]);
            };
            res.push(A);
        }
        return res;
    }
};
