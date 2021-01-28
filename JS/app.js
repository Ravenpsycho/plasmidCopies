var btn = document.getElementById('mainBtn');



btn.onclick = function(){
	var userInputs = document.getElementsByTagName('input');
	var weight = Number(userInputs['weight'].value);
	var size = Number(userInputs['size'].value);
	console.log(userInputs)
	console.log(userInputs['size'])
	console.log(weight)
	console.log(typeof(weight))
	console.log(size)
	console.log(typeof(size))
	var result = (weight * 6.0221409E23)/(size * 650 * 1E9);
	var answer = document.getElementById('answer');
	var checkNums = !isNaN(weight) && !isNaN(size);
	var checkEmpty = weight != "" && size != "";

	if(checkNums && checkEmpty){
		answer.innerHTML = "Copies for " + weight + "ng = " + result.toExponential(3);
	}else{
		answer.innerHTML = "Please enter numeric inputs.";
	}

	
}