function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var deret = 0;
    for (var i = 0; i < arr.length-2; i++){
        //console.log(arr[i])
        if ((arr[i+1]-arr[i]) === (arr[i+2]-arr[i+1])){
            console.log(arr[i+1])
            //console.log(arr[i+1]-arr[i])
            deret = true;
        } else {
            deret = false;
        }
    }
    return deret;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false