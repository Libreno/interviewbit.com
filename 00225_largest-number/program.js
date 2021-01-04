function getLargest(A){
    A.sort((o1, o2) => {
        const log1 = Math.trunc(Math.log10(o1));
        const log2 = Math.trunc(Math.log10(o2));
        const p1 = o1 * Math.pow(10, log2 + 1) + o2;
        const p2 = o2 * Math.pow(10, log1 + 1) + o1;
        const v = p2 - p1;
        // console.log(o1, o2, p1, p2, v);
        return v;
    });
    if (A[0] === 0){
        return '0';
    };
    return A.reduce((acc, val) => {
        return acc + val.toString();
    },'');
};

console.log(getLargest([3, 30, 34, 5, 9]));
console.log(getLargest([12, 121]));
console.log(getLargest([0, 0]));