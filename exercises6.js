function angkaPalindrome(num) {
    // you can only write your code here!
    var palindrome = true
    while (palindrome){
    num += 1
    console.log(num)
    var palAngka = String(num);
    var palArr = ''

    for (i = palAngka.length-1; i >= 0; i--){
        palArr += palAngka[i]
        //console.log(palArr)
    }
    if (palArr == palAngka){
        palindrome = false
        return num

    }
  }
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001