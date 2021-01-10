function getRank(A){
    const prime = Math.pow(10, 6) + 3;
    const fact = function(n){
        let res = 1;
        for(let i=2; i<=n; i++){
            res = (res * i);// % prime;
        };
        return res;
    };
    const modInverse = function(a, m){
        let p = a % m; 
        for (let x = 1; x < m; x++) 
            if ((p * x) % m == 1) 
                return x;
        return 1; 
    };
    const strArr = A.split('');
    let permutationsPassed = 0;
    const getPermCount = function(abc){
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
            duplicatesCount *= fact(v);
        });
        //const mi = modInverse(duplicatesCount, prime);
        const res = (p / duplicatesCount) % prime; //* mi;
        //const res = (p * mi) % prime;
        //console.log(`getPermCount abc.length: ${abc.length}, fact(abc.length): ${p}, sum(fact(duplicatesCount)): ${duplicatesCount}, modInverse(sum(fact(duplicatesCount))): ${mi}, fact(abc.length)/fact(duplicatesCount): ${res}`);
        return res;
    };
    const sortChars = (a, b) => {
        return a >= b? 1 : -1;
    };
    for(let i = 0; i < strArr.length; i++){
        const alphabetFull = strArr.slice(i).sort(sortChars);
        const alphabet = Array.from(alphabetFull.reduce((acc, v) => {
            if (!acc.has(v)){
                acc.add(v);
            };
            return acc;
        }, new Set())).sort(sortChars);
        // console.log('i=', i,' alphabetFull (', strArr[i], ') = ', alphabetFull);
        for(let j = 0; j < alphabet.findIndex((el) => { return el === strArr[i];}); j++ ){
            let abc = alphabetFull.slice();
            abc.splice(alphabetFull.findIndex((el) => { return el === alphabet[j]; }), 1);
            // console.log(alphabet[j], abc);
            permutationsPassed += getPermCount(abc) % prime;
        };
    };
    return (permutationsPassed + 1) % prime;
};

// console.log(getRank('baca'));
// console.log(getRank('aba'));
// console.log(getRank('bbbbaaaa'));
console.log(getRank('asasdsdsadasdadsadasdsa'));

//let [d, x, y] = extendedEuclidian(7, 87);
//console.log([d, x, y]);
//console.log(modInverse(7, prime));
