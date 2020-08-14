module.exports = { 
 //param A : integer
 //param B : integer
 //return an integer
    uniquePaths : function pathCount(A, B){
        if (A == 1 || B == 1)
            return 1;
            
        return pathCount(A - 1, B) + pathCount(A, B - 1);
    }
};
