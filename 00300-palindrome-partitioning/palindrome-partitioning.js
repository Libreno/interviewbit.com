function isPalindrome(s){
  for (let i = 0; i < Math.trunc(s.length / 2); i++){
    if (s[i] !== s[s.length - i - 1]){
      return false;
    }
  }
  return true;
}

function generatePermutations(s){
  const res = [];
  for (let len = 1; len <= s.length; len++){
    const substr = s.substring(0, len);
     if (isPalindrome(substr)){
       const restPerm = generatePermutations(s.substr(len));
      if (restPerm.length > 0){
        restPerm.forEach((perm) => {
          res.push([substr, ...perm]);
        });
      } else {
        res.push([substr]);
      }
    }
  }
  return res;
}