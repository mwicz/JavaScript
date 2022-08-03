function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data =new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var min = 0
    if(min<10){
        min = '0' + min
    }
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src ='img/tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#515154'
    }
}

