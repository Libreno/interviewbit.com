package pack1.palindrome_partitioning;

import java.util.ArrayList;

public class palindrome_partitioning {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(partition("aab"));
	}

	static boolean isPalindrome(String s){
		for (int i = 0; i < Math.floorDiv(s.length(), 2); i++){
			if (s.charAt(i) != s.charAt(s.length() - i - 1)){
				return false;
			}
		}
		return true;
	}
	
	public static ArrayList<ArrayList<String>> partition(String s) {
		ArrayList<ArrayList<String>> res = new ArrayList<ArrayList<String>>();
		for (int len = 1; len <= s.length(); len++){
			String substr = s.substring(0, len);
	 		if (isPalindrome(substr)){
	 			ArrayList<ArrayList<String>> restPerm = partition(s.substring(len));
				if (restPerm.size() > 0){
					for (ArrayList<String> perm: restPerm) {
						perm.add(0, substr);
						res.add(perm);
					}
				} else {
					ArrayList<String> el = new ArrayList<String>();
					el.add(substr);
					res.add(el);
				}
			}
		}
		return res;
	}
}
