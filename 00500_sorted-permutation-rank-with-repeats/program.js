module.exports = { 
    //param A : string
    //return an integer
    findRank : function(A){
        const prime = Math.pow(10, 6) + 3;
        const fact = function(n){
            let res = 1;
            for(let i=2; i<=n; i++){
                res = (res * i) % prime;
            };
            return res;
        };
        const gcdext = function(a, b){
            if (b == 0)
            {
                return [a, 1, 0];
            }
            const [d,x,y] = gcdext(b,a % b);
            return [d, y, x - Math.trunc(a / b) * y];
        };
        const modInversePrime = function(a){
            const [d, x, y] = gcdext(a, prime);
            if (x < 0) {
                // console.log('gcdext', prime + x, y, modInverse(a, prime));
                return prime + x;
            }
            return x;
        };
        const strArr = A.split('');
        // console.log(strArr);
        let permutationsPassed = 0;
        const getPermCount = function(abc){
            // console.log('getPermCount abc:');
            // console.log(abc);
            const abcMap = abc.reduce((acc, val) => {
                const oldVal = acc.get(val);
                if (!!oldVal){
                    acc.set(val, oldVal + 1);
                } else {
                    acc.set(val, 1);
                };
                return acc;
            }, new Map());
            let p = fact(abc.length);
            let duplicatesCount = 1;
            abcMap.forEach(v => {
                duplicatesCount = duplicatesCount * fact(v) % prime;
            });
            // console.log(abc);
            // console.log(abcMap);
            // console.log(duplicatesCount);
            const miE = modInversePrime(duplicatesCount);
            const res = (p * miE) % prime;
            return res;
        };
        const sortChars = (a, b) => {
            return a >= b? 1 : -1;
        };
        for(let i = 0; i < strArr.length; i++){
            const alphabetFull = strArr.slice(i).sort(sortChars);
            // console.log(alphabetFull);
            const alphabetUnique = Array.from(alphabetFull.reduce((acc, v) => {
                if (!acc.has(v)){
                    acc.add(v);
                };
                return acc;
            }, new Set())).sort(sortChars);
            // console.log('i=', i,' alphabetFull (', strArr[i], ') = ', alphabetFull);
            for(let j = 0; j < alphabetUnique.findIndex((el) => { return el === strArr[i];}); j++ ){ // j от 0 до строки с буквой, предшествующей strArr[i]
                let abc = alphabetFull.slice();
                // console.log(abc);
                // найти в полном алфавите индекс элемента из уникального алфавита.
                abc.splice(abc.findIndex((el) => { return el === alphabetUnique[j]; }), 1);
                // console.log(alphabet[j], abc);
                permutationsPassed += getPermCount(abc) % prime;
            };
        };
        return (permutationsPassed + 1) % prime;
    }
}