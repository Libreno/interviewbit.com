// Definition for singly-linked list.
function Node(data, next){
    this.data = data;
    this.next = next;
}

function toList(Arr){
    let n = null;
    for (let i = Arr.length - 1; i >= 0; i--){
        n = new Node(Arr[i], n);
    }
    return n;
}

function print(A, len){
    let c = A;
    let str = "( ";
    let l = 0
    while (!!c && l < len){
        str += c.data + ' ';
        l++;
        c = c.next;
    };
    if (c && c.next !== null) {
        str += '...';
    };
    str += ')';
    return str;
}

let m = {};

m.exports = { 
    steps: 0,
    replacements: 0,
    //param A : head node of linked list
    //return the head node in the linked list
    sortList : function(A){
        let len = this.getListLength(A);
        this.A = A;
        this.len = len;
        return this.mergeSort(null, A, len);
    },
    getListLength(A){
        let l = 0;
        let c = A;
        while (!!c){
            c = c.next;
            l++;
        };
        return l;
    },
    getNth(A, s, n){
        if (n > s){
            return null;
        };
        let c = A;
        k = s;
        while (!!c && k > n){
            c = c.next;
            k--;
            this.steps++;
        };
        return c;
    },
    mergeSort : function(prev, A, len){
        // console.log('mergeSort ' + print(A, len));
        if (len <= 1){
            // console.log('mergeSort out ' + print(A, len));
            return A;
        };
        // console.log("mergeSort L & R, merge");
        let center = Math.trunc(len / 2);
        // console.log("center=" + center);
        const L = A;
        const msL = this.mergeSort(prev, L, len - center);
        // console.log("msL: " + print(msL, len));
        const prevR = this.getNth(msL, len - center, 1);
        const msR = this.mergeSort(prevR, prevR.next, center);
        const res = this.merge(prev, msL, len - center, prevR, msR, center);
        // console.log('mergeSort out ' + print(res, len));
        return res;
    },
    merge: function(prevL, L, lenL, prevR, R, lenR){
        // console.log('merge L=' + print(L, lenL) + ' lenL=' + lenL + ' prevL=' + ((!!prevL)? prevL.data: prevL) + ' R=' + print(R, lenR) + ' lenR=' + lenR + ' prevR=' + prevR.data);
        let S = null;
        const len = lenL + lenR;
        this.replacements++;
        // console.log(L.data.toString() + ' ' + R.data.toString());
        if (L.data > R.data){
            S = R;
            prevR.next = R.next;
            if (!!prevL) {
                // console.log("prevL=" + prevL.data);
                prevL.next = R;
                // console.log(print(prevL, 4));
                // console.log(print(S, len));
            };
            // console.log("prevL was " + prevL);
            prevL = R;
            // console.log("prevL=" + prevL.data);
            const Rn = R.next;
            R.next = L;
            R = Rn;
            lenR--;
        } else {
            S = L;
            if (!!prevL) {
                prevL = prevL.next;
            } else {
                prevL = L;
            };
            L = L.next;
            lenL--;
        };
        // console.log('L=' + print(L, lenL) + ' lenL=' + lenL + ' prevL=' + ((!!prevL)? prevL.data: prevL) + ' R=' + print(R, lenR) + ' lenR=' + lenR + ' prevR=' + prevR.data);
        // console.log('S=' + print(S, len));
        this.steps++;
        while (lenL > 0 && lenR > 0){
            this.replacements++;
            // console.log(L.data.toString() + ' ' + R.data.toString());
            if (L.data > R.data){
                prevR.next = R.next;
                if (!!prevL) {
                    // console.log("prevL=" + prevL.data);
                    prevL.next = R;
                    // console.log(print(prevL, 4));
                    // console.log(print(S, len));
                };
                // console.log("prevL was " + prevL);
                prevL = R;
                // console.log("prevL=" + prevL.data);
                const Rn = R.next;
                R.next = L;
                R = Rn;
                lenR--;
            } else {
                if (!!prevL) {
                    prevL = prevL.next;
                } else {
                    prevL = L;
                };
                L = L.next;
                lenL--;
            };
            // console.log('L=' + print(L, lenL) + ' lenL=' + lenL + ' prevL=' + ((!!prevL)? prevL.data: prevL) + ' R=' + print(R, lenR) + ' lenR=' + lenR + ' prevR=' + prevR.data);
            // console.log('S=' + print(S, len));
            this.steps++;
        };
        // console.log('merge out S=' + print(S, len));
        return S;
    }
};

let a = [10,1,5,0,7,9,3,4,5,7,8,9,7,4,688,4,6,756,9867,2457,76,4,65,76215,744,235,76,12,63,77,09,4,67,63,63,13,23,16,28,20,41,72,8,3,84,95,4,3,10,1,5,0,7,9,3,4,5,7,8,9,7,4,688,4,6,756,9867,2457,76,4,65,76215,744,235,76,12,63,77,09,4,67,63,63,13,23,16,28,20,41,72,8,3,84,95,4,3]
//let a = [10,1,5,0,7,9,3,4,5,7];
//let a = [10,1,5,0,7];
const list = toList(a);
// console.log('list.length ' + a.length);

console.log(print(m.exports.sortList(list), a.length));
// console.log('steps ' + m.exports.steps);
// console.log('replacements ' + m.exports.replacements);
