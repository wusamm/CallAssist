function myFunction() {

/*var business = document.getElementById("input1")
	var clientNum = document.getElementById("input2")
	var businessNum = document.getElementById("input4")
	var instruction = document.getElementById("input3")
	var command = "call the number +businessNum+ and ask +instruction"
	
	window.alert(clientNum)*/
	
 var business = $('#input1').val();
 var clientNum = $('#input2').val();
 var businessNum = $('#input4').val();
 var instruction = $('#input3').val();
 var command = "call the number"+businessNum+"and ask"+instruction
 
	window.alert(command)
}