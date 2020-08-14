module.exports = { 
 //param A : integer
 //return a array of integers
    primesum : function(A){
        let isPrime = function(n){
            if (n == 1) return false;
            for(let j = 2; j <= Math.sqrt(n); j++){
                if (n % j == 0){
                    return false;
                }
            };
            return true;
        };
        let res = [];
        for (let i = 1; i <= A>>1; i++){
            if (isPrime(i)){
                let j = A - i;
                if (isPrime(j)){
                    res.push(i);
                    res.push(j);
                    return res;
                }
            }
        }
        return res;
    }
};
