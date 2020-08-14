module.exports = { 
 //param A : integer
 //return a strings
    findDigitsInBinary : function(A){
        let d = A;
        let str = "";
        while(d > 1){
            str = d % 2 + str;
            d = d >> 1;
        }
        str = d + str;
        return str;
    }
};