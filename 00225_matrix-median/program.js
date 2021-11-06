module.exports = {
    //param A : array of array of integers
    //return an integer
    findMedian : function(A){
        const flatArray = {
            length: Number,
            init: function(A){
                this.length = A[0].length * A.length;
            },
            get: function(n) {
                if (n >= this.length) {
                    return -Number.MAX_SAFE_INTEGER;
                }
                const sectionLen = A[0].length;
                const i = Math.trunc(n / sectionLen);
                const j = n % sectionLen;
                return A[i][j]
            },
            set: function(n, val) {
                const sectionLen = A[0].length;
                const i = Math.trunc(n / sectionLen);
                const j = n % sectionLen;
                A[i][j] = val;
            },
        }
        const heapSorter = {
            sortArray : function(){
                let len = 0;
                while (len < flatArray.length) {
                    this.buildHeap(len++);
                };
                return flatArray;
            },
            buildHeap(startFrom){
                const len = flatArray.length - startFrom;
                let k = Math.trunc(len / 2) - 1;
                // console.log('startFrom =', startFrom, 'k = ', k);
                for (let i = k; i >= 0; i--) {
                    const c = i + startFrom;
                    const l = 2*i + 1 + startFrom;
                    const r = 2*i + 2 + startFrom;
                    if (l > flatArray.length) {
                        // console.log(l,'(l)>' , flatArray.length, ', continue')
                        continue;
                    }
                    const Ac = flatArray.get(c);
                    const Ar = flatArray.get(r);
                    const Al = flatArray.get(l);
                    // console.log('i =', i, '(Ac, Ar, Al) = (', Ac, Ar, Al, ')', 'c =', c);

                    if (Ac < Al && Ar <= Al) {
                        this.replace(c, l);
                        continue;
                    }
                    if (r > flatArray.length) {
                        // console.log(r,'(r)>' , flatArray.length, ', continue')
                        continue;
                    }
                    if (Ac < Ar && Al <= Ar) {
                        this.replace(c, r);
                    }
                }
            },
            replace(i, j) {
                // console.log(A, ' => replace ', i, ', ', j, '');
                const t = flatArray.get(i);
                flatArray.set(i, flatArray.get(j));
                flatArray.set(j, t);
                // console.log(A);
            }
        };
        flatArray.init(A);
        heapSorter.sortArray();
        let k = Math.trunc(flatArray.length / 2);
        return flatArray.get(k);
    },
};

console.log(module.exports.findMedian(
    [[1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]]));
        
// 44 55 12 42 94 18 06 67
//          --          --
// 44 55 12 67 94 18 06 42
// 	    --       -- --
// 44 55 18 67 94 12 06 42
//    --    -- --
// 44 94 18 67 55 12 06 42
// -- -- --
// 94 44 18 67 55 12 06 42


// 44 18 67 55 12 06 42|94
// 	    --       -- --
//    --    -- --
// 44 55 67 18 12 06 42|94
// -- -- --
// 67 55 44 18 12 06 42|94

// 55 44 18 12 06 42|94 67
// 	    --       -- --
// 55 44 42 12 06 18|94 67
//    --    -- --
// -- -- --
// 44 42 12 06 18|94 67 55
//    --    -- --
// -- -- --
// 42 12 06 18|94 67 55 44
//    --    -- --
// 42 18 06 12|94 67 55 44
// -- -- --
// 42 18 06 12|94 67 55 44
// 18 06 12|94 67 55 44 42
// 06 12|94 67 55 44 42 18
// -- -- --
// 12 06|94 67 55 44 42 18
// 94 67 55 44 42 18 12 06



// 94|67 18 44 55 12 06 42
//    --    -- --
// 94 67|18 44 55 12 06 42



// 94 67 18 44 55 12 06 42
// -- -- --
//    --    -- --
//       --       -- --
//          --          --