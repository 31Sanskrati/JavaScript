var a = 100; //global
let b = 10; //global

if (true){
    let c = 60; //local
    var d = 40; //global
}

for(var i = 1; i<=20; i++){
    // i is global because it is decalred by var
}

{
    var e = 20; //global
}
    console.log(i);