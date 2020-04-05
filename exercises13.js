function targetTerdekat(arr) {
  // you can only write your code here!

  var posisi0 = arr.indexOf('o')

  if (arr.slice(0, posisi0).indexOf('x') != -1){
    //console.log(posisi0-arr.lastIndexOf('x'))  
    return posisi0-arr.lastIndexOf('x')
  } else if(arr.slice(posisi0).indexOf('x') != -1){
    //console.log(arr.indexOf('x') - posisi0)  
    return arr.indexOf('x') - posisi0
  } else {
      return 0
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2