function pasanganTerbesar(num) {
    // you can only write your code here!
    var numbers = String(num);
    var angkaBes = '0';

    for (let i=0;  i < numbers.length; i++){
        //console.log(numbers[i])
        if(angkaBes < numbers[i] + numbers[i+1]){
            angkaBes = numbers[i] + numbers[i+1];
        }
    }
    return Number(angkaBes)
  }

  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99