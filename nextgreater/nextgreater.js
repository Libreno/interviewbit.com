module.exports = { 
 //param A : array of integers
 //return a array of integers
    nextGreater : function(A){
        let g = [A[A.length - 1]];
        let r = [-1];
        for(let i = A.length - 2; i >= 0 ; i--){
            while(g.length > 0 && g[g.length - 1] <= A[i])
                g.pop();
            r.unshift(g.length > 0? g[g.length - 1] : -1);
            g.push(A[i]);
        };
        return r;
    }
};
