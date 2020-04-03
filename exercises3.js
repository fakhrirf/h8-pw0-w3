function dataHandling (biodata) {
  for (var i = 0;  i < biodata.length; i++){
    //console.log(i)
    for  (var j = 0; j <= biodata.length; j++){
      //console.log(j)
      //console.log(biodata[i][j])
      switch (j) {
        case 0 : {console.log('Nomor Id: ' + (biodata[i][j]));break;} 
        case 1 : {console.log('Nama: ' + (biodata[i][j]));break;}
        case 2 : {console.log('TTL: ' + (biodata[i][j]) + ' ' + (biodata[i][j+1])); break;}
        case 4 : {console.log('hobby: ' + (biodata[i][j]));break;}
      }
      }
    }
}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
dataHandling(input)