function findDuplicate(A){
    const M = new Array(A.length - 1);
    for(let i = 0; i < A.length; i++){
        const el = A[i];
        if (M[el - 1]){
            return el;
        } else{
            M[el - 1] = true;
        };
    };
    return -1;
};

console.log(findDuplicate([3,1,4,1,4]));
