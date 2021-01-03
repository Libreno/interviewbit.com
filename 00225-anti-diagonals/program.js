function traverse(A){
    let res = [];
    for (let d = 0; d < A.length * 2 - 1; d++){
        let diag = [];
        for (let i = d < A.length? 0 : d - A.length + 1; (i < A.length) && (i <= d); i++){
            diag.push(A[i] [d - i]);
        };
        res.push(diag);
    };
    return res;
};
console.log(traverse([[1,2,3],[4,5,6],[7,8,9]]));