function selectionSort(unsortedArray){
    var sortedArray = unsortedArray;
    var length = sortedArray.length;
    for(var i=0; i < length; i++){
	var minIndex = i;           //remember where in the array min is
	var newMin = parseInt(sortedArray[i]);  //remember the value
	for(var j=i+1; j <= length; j++) {
	    if (parseInt(sortedArray[j]) <= newMin) {
		newMin = parseInt(sortedArray[j]);
		minIndex = j;
	    }
	}
	//now the swap
	sortedArray[minIndex] = sortedArray[i];
	sortedArray[i] = newMin; 
    }
    return sortedArray;
}


function output2(){
    var v1 = document.formOne.input.value;
    var space = " ";
    var a1 = v1.split(space);
    
    document.formOne.output.value = selectionSort(a1);
}