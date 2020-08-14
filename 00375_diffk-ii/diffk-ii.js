module.exports = { 
 //param A : array of integers
 //param B : integer
 //return an integer
    diffPossible : function(A, B){
        let m = new Map();
        for (let i = 0; i < A.length; i++){
            let v = m.get(A[i]);
            if (v == undefined){
                m.set(A[i], 1);
                continue;
            };
            m.set(A[i], v+1);
        };
        for (let i = 0; i < A.length; i++){
            let v = m.get(A[i]+B);
            if (v != undefined){
                if (B == 0)
                    return v > 1? 1 : 0;
                return 1;
            }
        };
        return 0;
    }
};
