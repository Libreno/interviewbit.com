module.exports = { 
 //param A : array of integers
 //return a array of integers
    wave : function(A){
        var s = A.map(x => x);
        s.sort((a, b) => a - b);
        for (var i = 0; i < s.length >> 1 << 1; i = i + 2){
            var t = s[i];
            s[i] = s[i+1];
            s[i+1] = t;
        };
        return s;
    }
};
