// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
    reverseList : function(A){
        let rev = function(cur, prev){
            let next = cur.next;
            cur.next = prev;
            if (next == null)
                return cur;
            return rev(next, cur);
        };
        return rev(A, null);
    }
};
