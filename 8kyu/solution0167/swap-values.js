//https://www.codewars.com/kata/5388f0e00b24c5635e000fc6

function swapValues(arr) {
    //var args = Array.prototype.slice.call(arguments);
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}