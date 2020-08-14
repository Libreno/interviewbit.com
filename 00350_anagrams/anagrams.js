module.exports = { 
 //param A : array of strings
 //return a array of array of integers
    anagrams : function(A){
        let getHash = function (str){
            let res = str.split('').sort().join();
            return res;
        };
        let m = new Map();
        for (let i = 0; i < A.length; i++){
            let code = getHash(A[i]);
            //console.log(A[i] + " " + code);
            let e = m.get(code);
            if (e != undefined){
                e.push(i + 1);
            }
            else 
                m.set(code, [i + 1]);
        }
        //console.log(m);
        return Array.from(m.values());
    }
};
