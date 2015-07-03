if (! String.prototype.repeat) {
    String.prototype.repeat = function (times) {
        return new Array(times+1).join(this);
    }
}

isEqual = function(a,b){
	if(a==b){ return true; }else{ return false; }
}

sayHello = function(){
	return "hello";
}
