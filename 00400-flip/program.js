function flip(A) {
    let S = Array.from(A, x => Number(x));
    let maxWeight = 0;
    let maxWeightL = maxWeightR = -1;
    let weight = 0;
    let l = r = 0;
    for (let i = 0; i < S.length; i++){
        if (S[i] === 0) {
            weight++;
            if (weight > maxWeight){
                maxWeight = weight;
                maxWeightL = l;
                maxWeightR = i;
            };
        } else {
            weight--;
            if (weight < 0){
                weight = 0;
                l = i + 1;
                r = i + 1;
            };
        };
    };
    if (maxWeightR === -1){
        return [];
    };
    return [maxWeightL + 1, maxWeightR + 1];
}

// console.log(flip([1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0]));
// console.log(flip('1101010001'));
console.log(flip('010'));
// console.log(flip('1111'));
console.log(flip('0'));