function gerar(){
    var num = document.getElementById('num')
    var res = document.getElementById('seltab')
   
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        res.innerHTML = ''
        for(c ; c <= 10; c++){
           var item = document.createElement('option')
           item.text = `${n} X ${c} = ${n*c}`
           item.value = `res${c}`
           res.appendChild(item)

        }
    }
}