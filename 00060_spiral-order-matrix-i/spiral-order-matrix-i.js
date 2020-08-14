module.exports = { 
 //param A : array of array of integers
 //return a array of integers
    spiralOrder : function(A){
        var xb1 = 0;
        var xb2 = A[0].length-1;
        var yb1 = 0;
        var yb2 = A.length-1;
        var res = [];
        
        do{
            for(var i = xb1; i <= xb2; i++){
                res.push(A[yb1][i]);
            }
            if (yb1 == yb2) { 
                break;
            };
            yb1++;
            for(var i = yb1; i <= yb2; i++){
                res.push(A[i][xb2]);
            }
            if (xb1 == xb2) { 
                break;
            };
            xb2--;
            for(var i = xb2; i >= xb1; i--){
                res.push(A[yb2][i]);
            }
            if (yb1 == yb2) { 
                break;
            };
            yb2--;
            for(var i = yb2; i >= yb1; i--){
                res.push(A[i][xb1]);
            }
            if (xb1 == xb2) { 
                break;
            };
            xb1++;
        } while(xb1 <= xb2 && yb1 <= yb2);
        
        return res;
    }
};