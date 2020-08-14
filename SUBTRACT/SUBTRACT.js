// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
    subtract : function(A){
        let arr = [];
        let n = A;
        let l = 0;
        let w = 100;
        while (n != null){
            if (arr.length = w){
                arr.shift();
            };
            arr.push(n.data);
            n = n.next;
            l++;
        };
        let fillArr = function(A, l, i, w){
            let n = A;
            let k = 0;
            let res = [];
            while(k < l - 1 - i){
                if (k >= l - 1 - i - w){
                    res.push(n.data);
                };
                n = n.next;
                k++;
            };
            //console.log(res);
            return res;
        };
        n = A;
        let i = 0;
        let li = w - 1;
        while(i < l >> 1){
            n.data = arr[li] - n.data;
            //console.log("n.data = " + arr[li] + " - " + n.data);
            n = n.next;
            if (li == 0){
                arr = fillArr(A, l, i, w);
                li = w;
            }
            li--;
            i++;
        };
        return A;
    }
};