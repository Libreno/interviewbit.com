class Solution:
    # @param A : string
    # @return an integer
    def lengthOfLongestSubstring(self, A):
        if (len(A) < 2):
            return len(A)
        
        d = dict()
        s = e = 0
        maxL = 1
        
        d.setdefault(A[0], 1)
        
        while (e < len(A)-1):
            print('cycle')
            e = e + 1
            g = d.get(A[e])
            print(s, ' ', e, ' ', g)
            if (g == None):
                d.setdefault(A[e], 1)
                l = e - s + 1
                if (maxL < l):
                    maxL = l
                    print('maxL ', maxL)
            else: 
                while (g != None):
                    del d[A[s]]
                    s += 1
                    g = d.get(A[e])
                    print(s, ' ', A[s:e+1], ' ', g)
                d.setdefault(A[e], 1)
                
            print(s, ' ', e, ' ', A[s:e+1], ' ', maxL)
        return maxL
    
#abcabcbb
print(Solution().lengthOfLongestSubstring("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));