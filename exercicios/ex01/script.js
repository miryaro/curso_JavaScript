function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero=''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        gênero = 'Homem'
        if(idade >=0 && idade < 10){
            img.setAttribute('src', 'criança_homem.jpg')
        } else if(idade < 21){
            img.setAttribute('src', 'joven_homem.png.jpg')
        } else if(idade < 50){
            img.setAttribute('src', 'homem_adulto.jpg')
        } else {
            img.setAttribute('src', 'homem_idoso.jpg')
        }
    } else if(fsex[1].checked){
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'criança-mulher.jpg')
        } else if(idade < 21){
            img.setAttribute('src', 'jovem_mulher.jpg')
        } else if(idade < 50){
            img.setAttribute('src', 'mulher_adulta.jpg')
        } else{
            img.setAttribute('src', 'mulher_idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    }
}