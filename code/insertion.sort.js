function insertionSort(unsortedArray){
    var sortedArray = unsortedArray;
    var length = sortedArray.length;
    for(var i=1;i <= length; i++){
	var index = i;
	var j = i - 1;
    	while (j >= 0 && parseInt(sortedArray[index]) < parseInt(sortedArray[j])) {
	    var temp = parseInt(sortedArray[index]);
	    sortedArray[index] = parseInt(sortedArray[j]);
	    sortedArray[j] = temp;
	    j=--j;
	    index=--index;
	}
    }
    return sortedArray;
}

function output2(){
    var v1 = document.formOne.input.value;
    var space = " ";
    var a1 = v1.split(space);
    
    document.formOne.output.value = insertionSort(a1);
}