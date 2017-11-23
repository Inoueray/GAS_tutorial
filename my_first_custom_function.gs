function DOUBLE(input){
	if (input.map){
		return input.map(DOUBLE);
	} else {
	return input * 2;
	}
}