function bubbleSort(unsortedArray){
    var sortedArray = unsortedArray;
    var length = sortedArray.length;
    var hasASwapHappened;

    do {
	hasASwapHappened = false;
	for (var i=0; i <= length; i++) {
	    var j = i+1;
	    if (parseInt(sortedArray[i]) > parseInt(sortedArray[j])) {
		var temp = parseInt(sortedArray[j]);
		sortedArray[j] = parseInt(sortedArray[i]);
		sortedArray[i] = temp;
		hasASwapHappened = true;
	    }
	}
    }
    while (hasASwapHappened);
    return sortedArray;
}

function output2(){
    var v1 = document.formOne.input.value;
    var space = " ";
    var a1 = v1.split(space);
    
    document.formOne.output.value = bubbleSort(a1);
}