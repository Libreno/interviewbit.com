function columnTitle(A){
    let str = '';
    const ACode = 'A'.charCodeAt(0);
    let r = A;
    while(r !== 0){
        r -= 1;
        str = String.fromCharCode(ACode + r % 26) + str;
        r = Math.trunc(r / 26);
    };
    return str;
};

console.log(columnTitle(28));