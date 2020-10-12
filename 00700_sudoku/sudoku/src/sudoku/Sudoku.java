package sudoku;

import java.util.*;

public class Sudoku {
	public static void main(String[] args){
		String[] d1 = {
				".2..3..4.",
				"6.......3",
				"..4...5..",
				"...8.6...",
				"8...1...6",
				"...7.5...",
				"..7...6..",
				"4.......8",
				".3..4..2.",
		};
		String[] d2 = {
				"53..7....",
				"6..195...",
				".98....6.",
				"8...6...3",
				"4..8.3..1",
				"7...2...6",
				".6....28.",
				"...419..5",
				"....8..79"
		};
		String[] d3 = {
				"..9748...",
				"7........",
				".2.1.9...",
				"..7...24.",
				".64.1.59.",
				".98...3..",
				"...8.3.2.",
				"........6",
				"...2759.."
		};

		ArrayList<ArrayList<Character>> data = getData(d1);
		solveSudoku(data);
		System.out.println(data);

		ArrayList<ArrayList<Character>> data2 = getData(d2);
		solveSudoku(data2);
		System.out.println(data2);

		ArrayList<ArrayList<Character>> data3 = getData(d3);
		solveSudoku(data3);
		System.out.println(data3);
	}

	static ArrayList<ArrayList<Character>> getData(String[] s){
		return new ArrayList<ArrayList<Character>>() {
			{
				for (int i = 0; i < 9; i++) {
					char[] d = s[i].toCharArray();
					ArrayList<Character> row = new ArrayList<>();
					for (int j = 0; j < 9; j++) {
						row.add(d[j]);
					}
					add(row);
				}
			}
		};
	}

	public static void solveSudoku(ArrayList<ArrayList<Character>> d) {
		ArrayList<ArrayList<Character>> s = solve(d);
		if (s == null){
			return;
		}
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++) {
				d.get(i).set(j, s.get(i).get(j));
			}
		}
	}

	public static ArrayList<ArrayList<Character>> solve(ArrayList<ArrayList<Character>> d) {
		ArrayList<ArrayList<Character>> c = cloneState(d);
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++) {
				if (c.get(i).get(j) == '.') {
					HashSet<Character> set = getAvailableDigits(c, i, j);
					if (set.isEmpty()) {
						return null;
					}
					for (Character ch : set) {
						c.get(i).set(j, ch);
						ArrayList<ArrayList<Character>> s = solve(c);
						if (s != null)
						{
							return s;
						}
					}
					return null;
				}
			}
		}
		return d;
	}

	public static ArrayList<ArrayList<Character>> cloneState(ArrayList<ArrayList<Character>> data) {
		ArrayList<ArrayList<Character>> clone = new ArrayList<>(data.size());
	    for (ArrayList<Character> row : data) {
	    	clone.add((ArrayList<Character>)row.clone());
	    }
	    return clone;
	}

	static HashSet<Character> getAvailableDigits(ArrayList<ArrayList<Character>> data, Integer rowN, Integer colN){
		HashSet<Character> set = new HashSet<>();
		for (int i = 0; i < 9; i++) {
			Character ch = data.get(rowN).get(i);
			if(ch != '.'){
				set.add(ch);
			}
			ch = data.get(i).get(colN);
			if(ch != '.'){
				set.add(ch);
			}
		}

		Integer bucketRow = rowN / 3 + 1;
		Integer bucketCol = colN / 3 + 1;
		for (int i = (bucketRow - 1) * 3; i < bucketRow * 3; i++) {
			for (int j = (bucketCol - 1) * 3; j < bucketCol * 3; j++) {
				set.add(data.get(i).get(j));
//				System.out.println(String.format("i: %d, j: %d, char: %s", i, j, data.get(i).get(j)));
			}
		}
		HashSet<Character> allChars = new HashSet<>();
		for (int i = 1; i <= 9; i++) {
			allChars.add((char)(i+'0'));
		}
		allChars.removeAll(set);
		return allChars;
	}
}