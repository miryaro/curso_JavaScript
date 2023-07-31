function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours().toString().padStart(2, '0')
    var min = data.getMinutes().toString().padStart(2, '0')
    var second = data.getSeconds().toString().padStart(2, '0')
    msg.innerHTML = `Agora são ${hora} : ${min} : ${second} horas`

    var intervalID = setInterval(carregar, 60);

    if(hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f' 
    }else if(hora >= 12 && hora <= 18){
        img.src = `tarde.jpg`
        document.body.style.background = '#b9846f'
    }else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'  
    }
}
