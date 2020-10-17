module.exports = { 
	getPermutation : function(n, k){
		let getPerm = function(A, k, n){
			if (A.length === 1){
				return A[0];
			};
			const factN1 = factorial(n - 1);
			const f0 = getFirstDig(A, k, factN1);
			A.splice(A.findIndex(e => {return e === f0;}), 1);
			const d = k % factN1;
			const k1 = d === 0? factN1 : d;
			return f0.toString() + getPerm(A, k1, n - 1);
		};
		
		let factorial = function (n){
			if (n === 1 || n === 0){
				return 1;
			};
			return n * factorial(n - 1);
		};
		
		let getFirstDig = function (A, k, factN1){
			const c = Math.trunc(k / factN1) + ((k % factN1) === 0? 0: 1);
			return A[c-1];
		}
		const A = [];
		for (let i = 1; i <= n; i++){
			A.push(i);
		};
		return getPerm(A, k, n);
	}
}
