module.exports = { 
 //param A : array of integers
 //return an integer
    trap : function(A){
        let prev = 0;
        let w = 0;
        let st = [];
        for (let i = 0; i < A.length; i++){
            let str = "";
            if (A[i] < prev)
                st.push({h:prev, x: i});
            while(A[i] > prev && st.length != 0 && st[st.length - 1].h != prev){
                let r = st[st.length - 1];
                let minH = Math.min(A[i], r.h);
                let dw = (i - r.x)*(minH - prev);
                str += `(${i} - ${r.x})*(${minH} - ${prev}) = ${dw}; `;
                w += dw;
                prev = r.h;
                if (A[i] >= r.h){
                    st.pop();
                };
            }
            prev = A[i];
            //console.log(`${Array(Math.floor(A[i])).fill('?').join('')} [A${i}]=${A[i]} ${str} Total water: ${w} st: ${JSON.stringify(st)}`)
        };
        return w;
    }
};
