function add(a,b){
	var sum; 
	sum = a+b; 
	return sum;
}

function subtract(a,b){
	var difference;
	if(a>b){ 
		difference = a-b;	
		return difference;	
	}
	else{ 
		difference = b-a; 
		return difference; 
	}
}

function calculate(val,a,b){
	switch(val){
		case 'addition': return add(a,b); break;
		case 'subration': return subtract(a,b); break;
		default: console.log("invalid option");
	}
}
