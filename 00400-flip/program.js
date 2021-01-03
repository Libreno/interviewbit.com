function flip(A) {
    let S = Array.from(A, x => Number(x));
    let beginIndexes = [];
    let endIndexes = [];
    let was1 = true;
    for(let i = 0; i < S.length; i++){
        if (S[i] === 0 && was1){
            beginIndexes.push(i);
            was1 = false;
            continue;
        };
        if (S[i] === 1 && !was1){
            endIndexes.push(i);
            was1 = true;
        };
    };
    if (beginIndexes.length === 0){
        return [];
    };
    if (!was1){
        endIndexes.push(S.length);
    };
    let maxWeight = 0;
    let maxWeightI = 0;
    let maxWeightJ = 0;
    for (let i = 0; i < beginIndexes.length; i++){
        for (let j = i; j < endIndexes.length; j++){
            let weight = 0;
            for(let k = beginIndexes[i]; k < endIndexes[j]; k++){
                weight += S[k] === 0? 1 : -1;
            };
            // console.log(beginIndexes[i] + ':' + (endIndexes[j] - 1) + '=[' + S.slice(beginIndexes[i], endIndexes[j]) + '], weight=' + weight);
            if (weight > maxWeight){
                maxWeight = weight;
                maxWeightI = beginIndexes[i]+1;
                maxWeightJ = endIndexes[j];
            }
        };
    };
    return [maxWeightI, maxWeightJ];
}

// console.log(flip([1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0]));
// console.log(flip('1101010001'));
// console.log(flip('010'));
console.log(flip('1111'));
console.log(flip('0'));