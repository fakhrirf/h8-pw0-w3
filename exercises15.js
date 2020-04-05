function groupAnimals(animals) {
    // you can only write your code here!
    var animal =[];
    var arr = 0;
    animals.sort();
    for (var i=0; i<animals.length; i++){
        console.log(animals[i])
        if(animal.length === 0){
            animal.push([animals[i]]);
    } else if (animal[arr][0][0] === animals[i][0]){
        animal[arr].push(animals[i]);
    } else {
        animal.push([animals[i]]);
        //console.log(animal[i])
        arr++;
    }
  }
  return animal;
}
 
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]