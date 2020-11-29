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
    let str = "";
    while (!!c){
        str += c.data + ' ';
        c = c.next;
    };
    return str;
}

let m = {};

m.exports = { 
    steps: 0,
    replacements: 0,
    //param A : head node of linked list
    //return the head node in the linked list
    sortList : function(A){
        // console.log(`i\tl\tr\tlen\tAi\tAl\tAr\tlist`);
        let len = this.getListLength(A)
        while (len > 1) {
            //console.log('len=' + len)
            this.buildHeap(A, len--);
        };
        return A;
    },
    heapify : function(Al, Ar, Ai, A, i, len){
        // console.log(`>${i}\t${' '}\t${' '}\t${len}\t${!Ai? 'null': Ai.data}\t${!Al? 'null' : Al.data}\t${!Ar? 'null' : Ar.data}\t${print(A)}`);
        let largest = Ai;
        let largestN = i;
        if (!!Al && !!Ai && (Al.data > Ai.data)){
            largest = Al;
            largestN = 2 * i + 1;
        };
        if (!!Ar && !!Ai && (Ar.data > largest.data)){
            largest = Ar;
            largestN = 2 * i + 2;
        };
        if (largest.data !== Ai.data){
            let t = Ai.data;
            Ai.data = largest.data;
            largest.data = t;
            this.replacements += 1;
            // console.log(`<${i}\t${' '}\t${' '}\t${len}\t${!Ai? 'null': Ai.data}\t${!Al? 'null' : Al.data}\t${!Ar? 'null' : Ar.data}\t${print(A)}`);
            let r = 2 * largestN + 2;
            let Ar = this.getNth(A, len, r);
            Al = (!!Ar)? Ar.next : A;
            this.heapify(Al, Ar, largest, A, largestN, len);
        }
        // else {
            // console.log(`|<${i}\t${' '}\t${' '}\t${len}\t${!Ai? 'null': Ai.data}\t${!Al? 'null' : Al.data}\t${!Ar? 'null' : Ar.data}\t${print(A)}`);
        // }
    },
    getListLength(A){
        let l = 0;
        let c = A;
        while (!!c){
            c = c.next;
            l++;
        }
        return l;
    },
    getNth(A, s, n){
        if (n > s){
            return null
        };
        let c = A;
        k = s;
        while (!!c && k > n){
            c = c.next;
            k--;
            this.steps += 1;
        }
        return c;
    },
    buildHeap(A, len){
        let i = Math.trunc(len / 2) - 1;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        let Ar = this.getNth(A, len - 1, r);
        let Al = null;
        Al = (!!Ar)? Ar.next : A;
        let Ai = this.getNth(Al, l, i);
        while(i !== -1){
            this.heapify(Al, Ar, Ai, A, i--, len);
            Ai = Ai.next;
            if (!!Ar){
                Ar = this.getNth(Ar, r, r -= 2 );
            } else {
                Ar = this.getNth(A, len - 1, r -= 2 );
            }
            if (!!Al){
                Al = this.getNth(Al, l, l -= 2);
            } else {
                Al = this.getNth(A, len - 1, l -= 2);
            }
        };
    }
};

let a = [10,1,5,0,7,9,3,4,5,7,8,9,7,4,688,4,6,756,9867,2457,76,4,65,76215,744,235,76,12,63,77,09,4,67,63,63,13,23,16,28,20,41,72,8,3,84,95,4,3,10,1,5,0,7,9,3,4,5,7,8,9,7,4,688,4,6,756,9867,2457,76,4,65,76215,744,235,76,12,63,77,09,4,67,63,63,13,23,16,28,20,41,72,8,3,84,95,4,3]
const list = toList(a);
console.log('list.length ' + a.length);
// const list = toList([10,1,5,0,7,9,3,4,5,7]);
// const list = toList([10,1,5,0,7]);

console.log(print(m.exports.sortList(list)));
console.log('steps ' + m.exports.steps);
console.log('replacements ' + m.exports.replacements);
