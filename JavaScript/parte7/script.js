let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    }else{
        let tot = valores.length
        let soma = 0
        valores.sort(comparar)

        for(let pos in valores){
            soma += valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos  ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${valores[tot-1]}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${soma/tot}.</p>`
    }
}

/*É necessário uma função de ordenar, pois caso não tenha, será ordenado de acordo  com a pontuação Unicode. Poderia ser uma função básica tipo a-b*/
function comparar(a, b){
    if(a < b) return -1
    
    return 1
}