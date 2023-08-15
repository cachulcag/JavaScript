var edad;
si();
ifTernario();
switc();

function si() {
    edad = 20;
    let altura = 1.66;

    if (edad > 18 && altura > 1.60) {
        alert("Puedes subirte");
    } else {
        alert("No puedes subirte");
    }
}


function ifTernario() {
    edad = 15;
    let altura = 1.60;
    (edad > 18 && altura > 1.50) ? alert("Puedes subirte") : alert("No puedes subirte");
}

function switc(){
    edad = 20;
    switch (edad) {
        case 20:
            alert("eres mayor de edad");
            break;
    
        default:
            break;
    }
}