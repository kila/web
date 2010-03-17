function mergeSort(unsortedArray){
    if (unsortedArray.length <= 1){
	return unsortedArray;
    }
    var left = new Array();
    var right = new Array();
    var result = new Array();
    var mid = Math.floor(unsortedArray.length / 2);
    var i = 0;
    var j = mid;

    while (i < mid) {   //works
	left.push(unsortedArray[i]);
	i++;
    }
    while (j < unsortedArray.length) { //works
	right.push(unsortedArray[j]);
	j++;
    }

    left=mergeSort(left);
    right=mergeSort(right);

    var leftlast = left.length - 1;

    //if the left.last is less than right.zero, then
    //the lists are ordered left to right, so concat
    
    if (parseInt(left[leftlast]) > parseInt(right[0])) {
	result = merge(left, right);
    }
    else {
	result = left.concat(right);
    }
    
    return result;
}

function merge (arr1, arr2){
    var result = new Array();
    while (arr1.length > 0 && arr2.length > 0) {
	if (parseInt(arr1[0]) <= parseInt(arr2[0])) {
	    result = result.concat(arr1.shift());
	    //arr1 is automatically set to cdr arr1
	}
	else {
	    result = result.concat(arr2.shift());
	    //arr2 is automatically set to cdr arr2
	}
    }

    //the above while loop will end with right or left
    //with length 1 or greater (depending on which list
    //empties first). so append that (ordered) list to
    //result:
    if (arr1.length > 0) {
	result = result.concat(arr1);
    }
    else {
	result = result.concat(arr2);
    }
    return result;
}

function makeArray(notAnArrayYet){
    var space = " ";  //this be the separator
    var nowAnArray = notAnArrayYet.split(space);
    return nowAnArray;
}

//I think the proper term is 'driver-function'??
function orderThis(){
    var inputArray = makeArray(document.formOne.input.value);
    document.formOne.output.value = mergeSort(inputArray);
}







/*HERE BE DRAGONS*/


var testarray = new Array();
testarray = [7,8,9];


function tester(array){
    var firstval = new Array();
    firstval[0] = array.shift();
    var ar1 = firstval.concat(array);
    return ar1;
}
//.shift() returns the first element

function return_rest_of_array(array){ //this works
    array.shift();
    return array;
}

function firstval(array) {
    return array.shift();
}

function elementposition(array) {
    var lastpos = array.length - 1;
    return array[lastpos];
}

function mergetester(array){
    /* //returns zero
    var emptyarray = new Array();
    return emptyarray.length;
    */
    array.shift();
    return array.length;
}

function concattester(array){
    var arrayb = new Array();
    arrayb = [4,5,6];
    array = array.concat(arrayb);
    return array;
}

function mergetester2(array){
    var result = new Array();
    result[0] = 2;
    //    var temp = new Array();
    //    temp[0] = array.shift();
    result = result.concat(array.shift());
    return array;
}

