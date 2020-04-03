function balikString (str){
    let kataBaru = '';
    for (let i = str.length-1; i >= 0; i--){
        kataBaru += str[i];
    }
    return kataBaru;
}

console.log(balikString('hello world!'));
