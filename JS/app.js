var btn = document.getElementById('mainBtn');



btn.onclick = function(){

	/* creating vars and calculation */
	var userInputs = document.getElementsByTagName('input');
	var weight = Number(userInputs['weight'].value);
	var size = Number(userInputs['size'].value);
	var result = (weight * 6.0221409E23)/(size * 650 * 1E9);
	var answer = document.getElementById('answer');

	/* creating booleans */
	var checkNums = !isNaN(weight) && !isNaN(size);
	var checkEmpty = weight != "" && size != "";

	/* Action */
	if(checkNums && checkEmpty){
		answer.innerHTML = "Copies for " + weight + "ng = " + result.toExponential(3);
		$(".alert").hide();
		$("#alertBannerSuccess").show();
	}else{
		$(".alert").hide();
		$('#alertBannerError').show();
	}

	
}