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
       removeNthFromEnd : function(A, B){
           let l = this.getLength(A);
        //    console.log('length ' + l);
           if (B >= l) {
               return A.next;
           };
           let c = A;
           let i = l - B - 1;
        //    console.log('i ' + i);
           while (i > 0) {
            //    console.log('i ' + i);
               c = c.next;
               i--;
           };
           c.next = c.next.next;
        //    console.log('c.data ' + c.data);
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

let a = [1,2,3,4,5];
const list = toList(a);
console.log(print(m.exports.removeNthFromEnd(list, 5)));
