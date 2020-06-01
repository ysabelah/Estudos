function gerar(){
    var numeroT = document.getElementById('num')

    let numT = Number(numeroT.value)
    let tabu = document.getElementById('tabu')

    tabu.innerHTML = `<strong>Tabuada de ${numT}:</br></strong>`

    for(let c = 0; c <=10; c++){
        tabu.innerHTML += `<strong>${numT} X ${c} = ${numT*c}</br></strong>`
    }
}