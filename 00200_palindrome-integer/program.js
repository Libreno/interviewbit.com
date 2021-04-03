module.exports = { 
    //param A : integer
    //return an integer
       isPalindrome : function(N) {
           const capacity = Math.trunc(Math.log10(N));
           if (N < 0) {
               return 0;
           }
           let curN = N;
           let deg = capacity;
           for (let i = 0; i < Math.trunc((capacity + 1) / 2); i++) {
               const lowD = curN % 10;
               const pow = Math.pow(10, deg);
               const highD = Math.trunc(curN / pow);
               curN = Math.trunc((curN - highD * pow) / 10);
               deg -= 2;
               if (lowD !== highD) {
                   return 0;
               }
           }
           return 1;
       }
   };
   
console.log(isPalindrome(123321));