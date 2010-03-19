function quickSort(array){
    var result = new Array();
    var lesser = new Array();
    var greater = new Array();
    var pivot;

    if (array.length <= 1){
	return array;
    }
    
    pivot = parseInt(array.pop());

    for (var i = 0; i < array.length; i++) {
	var tempArray = parseInt(array[i]);
	if (tempArray <= pivot) {
	    lesser[i] = tempArray;
	}
	else {
	    greater[i] = tempArray;
	}
    }

    lesser = removeEmptyElements(lesser);
    greater = removeEmptyElements(greater);

    result = result.concat(quickSort(lesser), pivot, quickSort(greater));

    return result;
}

function makeArray(notAnArray){
    var space = " ";
    nowAnArray = notAnArray.split(space);
    return nowAnArray;
}

function removeEmptyElements(hasEmptyElementsArray){
    var noEmptyElementsArray = new Array();
    for (var i = 0; i<hasEmptyElementsArray.length; i++){
	if (hasEmptyElementsArray[i]){
	    noEmptyElementsArray.push(hasEmptyElementsArray[i]);
	}
    }
    return noEmptyElementsArray;
}

function quickSortThis(){
    var inputArray = makeArray(document.formOne.input.value);
    document.formOne.output.value = quickSort(inputArray);
}





/*HERE BE DRAGONS*/



/* quicksort FAIL

function quickSort(array){
    var result = new Array();
    var lesser = new Array();
    var greater = new Array();
    var pivot = new Array();

    if (array.length <= 1){
	return array;
    }
    
    pivot[0] = array.pop();

    for (var i = 0; i < array.length; i++) {
	var tempArray = parseInt(array[i]);
	var tempPivot = parseInt(pivot[0]);
	if (tempArray <= tempPivot) {
	    lesser.concat(tempArray);
	}
	else {
	    greater.concat(tempArray);
	}
    }

    result = result.concat(quickSort(less), pivot[0], quickSort(greater));

    return result;
}
*/


function squareArrayElements(unsquaredArray){  //works as expected
    var squaredArray = new Array();
    for (var i = 0; i < unsquaredArray.length; i++){
	squaredArray[i] = (unsquaredArray[i] * unsquaredArray[i]);
    }

    return squaredArray;    
}

function concatTester01() {  //works as expected
    var a1 = new Array();
    var a2 = new Array();
    var a3 = new Array();
    a1 = [1,2];
    a2 = [3,4];
    a3 = [5,6];
    var result = new Array();
    result = result.concat(a1,a2,a3);
    return result;
}

function concatTester02() {  //works as expected
    var a1 = new Array();
    var a2 = new Array();
    var a3 = new Array();
    a1 = [1,2];
    a2 = [3,4];
    a3 = [5,6];
    var result = new Array();
    result = result.concat(squareArrayElements(a1),a2,a3);
    return result;
}

function concatTester03(array){  //works as expected
    var testArray = new Array();
    testArray = [90,91];
    return testArray.concat(array[0]);
}
    

