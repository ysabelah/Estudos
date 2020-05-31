function contar(){
    var formini = document.getElementById('ini')
    var formfim = document.getElementById('fim')
    var formincr = document.getElementById('incre')
    var res = document.getElementById('res')

    if(formini.value.length == 0 || formfim.value.length == 0 || formincr.value.length == 0){
        window.alert('[Erro] Faltam dados!')
    }else{
        var primeiro = Number(formini.value);
        var parada = Number(formfim.value)
        var incremento = Number(formincr.value)
        
        if(incremento <= 0) alert('Impossível contar')
        else{
            if (parada < primeiro){
                let aux = primeiro
                primeiro = parada
                parada = aux
            }

            res.innerHTML = 'Contando:<br>'

            for(var c = primeiro; c <= parada; c += incremento){
                res.innerHTML += `${c}✈️`
                //Pode usar assim também\u{1F449}
            }

            res.innerHTML += '🏁'
        }
    }
}