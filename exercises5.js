function palindrome(kata) {
  // you can only write your code here!
  var palKata = String(kata)
  var palArr = ''

  for (i = palKata.length-1; i >= 0; i--){
    //console.log(palKata[i])
    palArr += palKata[i]
    //console.log(palArr)
  }
  console.log(palArr)
  if (palKata === palArr){
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
