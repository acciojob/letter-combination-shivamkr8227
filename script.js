function letterCombinations(input_digit) {
  //Complete the function
	const digitMap={
		"2":["a","b","c"],
		"3":["d","e","f],
		"4":["g","h","i"],
		"5":["j","k","l"],
		"6":["m","n","o"],
		"7":["p","q","r","s"],
		"8":["t","u","v"],
		"9":["w","x","y","z"],
		"2":["a","b","c"],
	};
	if(input_digit.length==0)
	{
		return[];
	}
	if(input_digit.length==1)
	{
		return digitMap[input_digit];
	}
	const remainingComb=letterCombinations(input_digit.slice(1));
	const currentLetter=digitMap[input_digit[0]];
	const combination=[];
	for(const letter of currentLetter){
		for(const combination of ramainingComb){
			combination.pust=letter+combination;
		}}
	
}

module.exports = letterCombinations;
