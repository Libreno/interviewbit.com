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

function print(A){
    let c = A;
    let str = "( ";
    while (!!c){
        str += c.data + ' ';
        c = c.next;
    };
    str += ')';
    return str;
}
// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

const m = {};

m.exports = { 
    //param A : head node of linked list
    //param B : integer
    //return the head node in the linked list
    rotateRight : function(A, B){
        const l = this.getLength(A);
        const r = B % l;
        if (r === 0){
            return A;
        };
        let i = l - r - 1;
        let c = A;
        while (i-- > 0) {
            c = c.next;
        };
        const h = c;
        while (c.next != null) {
            c = c.next;
        };
        c.next = A;
        A = h.next;
        h.next = null;
        return A;
    },
    getLength(A) {
        if (A === null){
            return 0;
        };
        let c = A;
        let i = 0;
        while (c !== null){
            i++;
            c = c.next;
        };
        return i;
    }
};

//let a = [1,2,3,4,5];
//let a = [1, 2];
let a = [ 91, 34, 18, 83, 38, 82, 21, 69 ];
const list = toList(a);
console.log(print(m.exports.rotateRight(list, 89)));
