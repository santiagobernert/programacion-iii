let copas = +prompt("Cuántas copas tenés? ");
console.log(copas);
localStorage.setItem('copas', copas)
let arena = 0;
switch (copas) {
    case 400:
        arena = 1
        break;
    case  800:
        arena = 2
        break;
    case  1100:
        arena = 3
        break;
    case  1400:
        arena = 4
        break;
    case  1700:
        arena = 5
        break;
    case  2000:
        arena = 6
        break;
    case  2300:
        arena = 7
        break;
    case  2600:
        arena = 8
        break;
    case  3000:
        arena = 9
        break;
    case  3300:
        arena = 10
        break;
    case  3600:
        arena = 11
        break;
    case  4000:
        arena = 12
        break;
    case  4600:
        arena = 13
        break;
    case  5000:
        arena = 14
        break;

    default:
        copas = 0
        console.log(copas);
        break;
}

function cuantascopas() {
    let h3_copas = document.createElement("h3")
    let textocopas = document.createTextNode(`Tengo ${copas} copas`)
    h3_copas.appendChild(textocopas)
    console.log(copas);
    h3_copas.style.position = "absolute"
    h3_copas.style.top = "100px"
    h3_copas.style.right = "calc(50vw < 80px)"


    let h3_arena = document.createElement("h3")
    let textoarena = document.createTextNode(`Soy arena ${arena}`)
    h3_arena.appendChild(textoarena)
    h3_arena.style.position = "absolute"
    h3_arena.style.top = "400px"
    h3_arena.style.right = "calc(50vw < 80px)"

    let div = document.getElementById("div")
    div.appendChild(h3_copas)
    div.appendChild(h3_arena)
    }

