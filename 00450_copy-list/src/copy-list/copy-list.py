# Definition for singly-linked list with a random pointer.
class RandomListNode:
    def __init__(self, x):
        self.label = x
        self.next = None
        self.random = None

class Solution:
    # @param head, a RandomListNode
    # @return a RandomListNode
    def copyRandomList(self, head):
        d = dict();
        cur = head
        prev = None
        newHead = None
        while (cur != None):
            r = d.get(cur, None)
            if (r == None):
                r = RandomListNode(cur.label)
                d.setdefault(cur, r)
                if (newHead == None):
                    newHead = r
            if (prev != None):
                prev.next = r
            prev = r
            if (cur.random != None):
                v = d.get(cur.random, None)
                if (v == None):
                    rr = RandomListNode(cur.random.label)
                    d.setdefault(cur.random, rr)
                    r.random = rr
                else:
                    r.random = v
            cur = cur.next
        return newHead
    
def createIn(nodes, rand):
    a = []
    prev = None
    for n in nodes:
        r = RandomListNode(n)
        a.append(r)
        if (prev != None):
            prev.next = r
        prev = r
    i = 0
    for r in rand:
        l = len(a)
        j = r % (l + 1)
        if (j != l):
            a[i].random = a[j]
        i += 1
    return a[0]

def printList(l):
    res = []
    cur = l
    while (cur != None):
        res.append(cur.label)
        if (cur.random != None):
            res.append(cur.random.label)
        else:
            res.append(0)
        cur = cur.next
    print(res)

l = createIn([83,188,253,281,254,56,70,3,276,233,280,224,16,173], [183,193,44,184,33,213,134,95,213,48,300,62,237,63])
printList(Solution().copyRandomList(l))
