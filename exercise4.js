function dataHandling2 (bio){
    bio.splice(1,2 , "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    bio.splice(4,5 , "Pria","SMA Internasional Metro")
    console.log(bio)

    var tanggal = (bio[3].split('/'))
    bulan = tanggal[1]
    switch (bulan){
        case 1:
            console.log('januari');
            break;
        case 2:
            console.log('februari');
            break;
        case 3:
            console.log('Maret');
            break;
        case 4:
            console.log('April');
            break;
        case 5:
            console.log('Mei');
            break;
        case 6:
            console.log('juni');
            break;
        case 7:
            console.log('juli');
            break;
        case 8:
            console.log('agustus');
            break;
        case 9:
            console.log('september');
            break;
        case 10:
            console.log('oktober');
            break;
        case 11:
            console.log('November');
            break;
        case 12:
            console.log('Desember');
            break;
    }
    var sorting = tanggal.slice(0);
    sorting.sort(function(a, b) {
        return b - a;
      });
    console.log(sorting)
    console.log(tanggal.join('-'))
    console.log(bio[1].slice(0,14))
    
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

