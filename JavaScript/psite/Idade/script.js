function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Ahhh preenhe aí vai')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
       
        //esta linha equivale a utilizar no html a tag img
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            img.setAttribute('src', 'itimalia.jpg')
        }else if(fsex[1].checked){
            res.innerHTML =''
            img.setAttribute('src', 'fofineos.jpg')
        }else{
            img.setAttribute('src', 'mohdeuso.jpg')
        }

        //centralizar pelo javaScript
        res.style.textAling = 'center'
        res.innerHTML = `Você tem ${idade} anos.</br>`
        res.appendChild(img)
        
        /*Colocar aspas é (/" /"). Exemplo: "\"Eles são muito fofos ;)\""*/
    }
}