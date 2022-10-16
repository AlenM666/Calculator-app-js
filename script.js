var num1;
var num2;

function add(){
	num1 = Number(prompt('Enter num1: '));
	num2 = Number(prompt('Enter num2: '));
	return alert(num1 + num2)
}

function sub() {
	num1 = Number(prompt('Enter num1: '));
	num2 = Number(prompt('Enter num2: '));
	return alert(num1 - num2)
}

function del(){
	num1 = Number(prompt('Enter num1: '));
	num2 = Number(prompt('Enter num2: '));
	return alert(num1 / num2)
}

function multi(){
	num1 = Number(prompt('Enter num1: '));
	num2 = Number(prompt('Enter num2: '));
	return alert(num1 * num2)
}

while(choice !== 5){

	var choice = prompt('Enter the number of option:\n \n 1. Addison\n 2. Subtract\n 3. Devision\n 4. Multiply\n 5.Quit\n \n')

	if(choice == 1){
		add();
	}
	else if (choice == 2){
		sub();
	}
	else if(choice == 3){
		del();
	}
	else if(choice == 4){
		multi();
	}
	else if(choice == 5){
		break;
		alert('Refresh page to restart!!!');
	}
}

