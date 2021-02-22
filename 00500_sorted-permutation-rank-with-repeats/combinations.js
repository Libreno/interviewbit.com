function getCombinations(A) {
    const set = new Set();
    const map = new Map();
    const combinations = function(start, arr){
        console.log(start);
        if (map.has(start)){
            return map.get(start);
        };
        // console.log(2);
        if (arr.length === 1){
            // console.log(3);
            const v = start + arr[0];
            if (!set.has(v)){
                set.add(v)
                // console.log(v);
                return set;
            };
        };
        // if (arr.reduce((acc, v) => {
        //     if (acc.equal){
        //         return {prev: v, equal: acc.prev === v};
        //     };
        // }, {prev: '', equal: true}).equal){

        // };
        // console.log(4);
        for(let i = 0; i < arr.length; i++){
            // console.log(5);
            const abc = arr.slice();
            const l = abc.splice(i, 1);
            if (abc.length === 0){
                continue;
            };
            // console.log(start + l, abc);
            const cmb = combinations(start + l, abc);
            if (!map.has(start + l)){
                map.set(start + l, cmb);
            };
            // console.log(6);
            cmb.forEach(comb => {
                if (!set.has(comb)){
                    set.add(comb)
                    // console.log(start + arr[0]);
                };
            });
        };
        return set;
    };
    const strArr = A.split('');
    combinations('', strArr);
    return Array.from(set).map((v, i) => {
        console.log(i + 1 + ' ' + v);        
    });
};
getCombinations('aaaaaaaassssssssddddddd');
aaaaaaaassssssssddddddd
aaaaaaaasssssssdddddds
//getCombinations('asd');
//asasdsdsadasdadsadasdsa